"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useCart } from "@/projects/bun-dau/context/CartContext";
import { formatCurrency } from "@/projects/bun-dau/lib/format";
import { siteConfig } from "@/projects/bun-dau/config/site";
import { COMBO_PRODUCTS } from "@/projects/bun-dau/constants/products";
import {
  X,
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
  PhoneCall,
  MessageCircle,
  Truck,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Utensils,
} from "lucide-react";

const FREESHIP_THRESHOLD = 200000;

export function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    totalPrice,
    totalItems,
    saucePreference,
    setSaucePreference,
    orderNote,
    setOrderNote,
  } = useCart();

  const [confirmClear, setConfirmClear] = useState(false);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeCart();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeCart]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setConfirmClear(false);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Freeship calculations
  const missingForFreeship = Math.max(0, FREESHIP_THRESHOLD - totalPrice);
  const freeshipPercent = Math.min(
    100,
    Math.round((totalPrice / FREESHIP_THRESHOLD) * 100)
  );
  const hasFreeship = totalPrice >= FREESHIP_THRESHOLD;

  // Generate Zalo pre-filled message text
  const generateZaloMessage = () => {
    const sauceName =
      saucePreference === "mam_tom" ? "Mắm tôm đánh bọt" : "Nước mắm chua ngọt";
    const itemsText = items
      .map((i) => `• ${i.quantity}x ${i.product.name}${i.product.subtitle ? ` ${i.product.subtitle}` : ""} (${formatCurrency(i.product.price * i.quantity)})`)
      .join("\n");

    const text = `Xin chào Bún Đậu Phố! Tôi muốn đặt món:\n${itemsText}\n\n👉 Tổng tiền tạm tính: ${formatCurrency(totalPrice)}\n👉 Nước chấm: ${sauceName}${orderNote ? `\n👉 Ghi chú: ${orderNote}` : ""}\n\nVui lòng xác nhận và giao sớm giúp tôi nhé!`;
    return encodeURIComponent(text);
  };

  const handleEmptyCartAction = () => {
    // Scroll to menu and close cart
    closeCart();
    const menuEl = document.getElementById("menu") || document.getElementById("promotions");
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop with Blur */}
      <div
        onClick={closeCart}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
        aria-hidden="true"
      />

      {/* Drawer Container: Full screen on mobile, max-w-[420px] on desktop */}
      <div className="relative w-full max-w-[440px] bg-white h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-300 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#E7E5E4] bg-[#F7F5EE] shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#2E6B3E] flex items-center justify-center text-white shadow-sm">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-[17px] font-extrabold text-[#1C1917] leading-none">
                Giỏ hàng của bạn
              </h2>
              <p className="text-[11px] font-semibold text-[#57534E] mt-0.5">
                {totalItems > 0 ? `${totalItems} suất món ăn` : "Chưa có món nào"}
              </p>
            </div>
          </div>

          <button
            onClick={closeCart}
            aria-label="Đóng giỏ hàng"
            className="w-8 h-8 rounded-full bg-white hover:bg-[#E7E5E4] text-[#57534E] hover:text-[#1C1917] flex items-center justify-center transition-all active:scale-95 shadow-sm border border-[#E7E5E4]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Free Shipping Goal Progress Bar */}
        {items.length > 0 && (
          <div className="bg-[#FFF9EE] px-5 py-3 border-b border-[#E7E5E4] shrink-0">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <div className="flex items-center gap-1.5 font-bold">
                <Truck className="w-4 h-4 text-[#F57C00]" />
                {hasFreeship ? (
                  <span className="text-[#2E6B3E]">
                    Bạn được MIỄN PHÍ GIAO HÀNG nội thành! 🎉
                  </span>
                ) : (
                  <span className="text-[#1C1917]">
                    Thêm <span className="text-[#F57C00] font-extrabold">{formatCurrency(missingForFreeship)}</span> để được Freeship
                  </span>
                )}
              </div>
              <span className="text-[11px] font-extrabold text-[#78716C]">
                {freeshipPercent}%
              </span>
            </div>

            {/* Progress track */}
            <div className="w-full h-2 bg-[#E7E5E4] rounded-full overflow-hidden">
              <div
                style={{ width: `${freeshipPercent}%` }}
                className={`h-full transition-all duration-500 rounded-full ${
                  hasFreeship
                    ? "bg-[#2E6B3E]"
                    : "bg-gradient-to-r from-[#F57C00] to-[#E65100]"
                }`}
              />
            </div>
          </div>
        )}

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3.5">
          {items.length === 0 ? (
            /* Empty State */
            <div className="flex flex-col items-center justify-center h-full text-center py-10 px-4">
              <div className="w-20 h-20 rounded-full bg-[#FFF3E0] flex items-center justify-center text-[#F57C00] mb-4 shadow-sm animate-pulse">
                <ShoppingBag className="w-10 h-10 stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-extrabold text-[#1C1917]">
                Giỏ hàng đang trống
              </h3>
              <p className="text-xs sm:text-sm text-[#57534E] mt-1.5 max-w-[280px] leading-relaxed">
                Đậu mơ giòn rụm, chả cốm nóng hổi đang chờ bạn thưởng thức trưa nay!
              </p>

              {/* 1-Click Quick Add Recommended Combo */}
              <div className="mt-6 w-full max-w-xs space-y-2.5">
                <button
                  onClick={() => addToCart(COMBO_PRODUCTS[1] || COMBO_PRODUCTS[0])}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#2E6B3E]/10 hover:bg-[#2E6B3E]/15 border border-[#2E6B3E]/30 text-[#2E6B3E] font-bold text-xs flex items-center justify-center text-center leading-normal gap-2 active:scale-95 transition-all"
                >
                  <Plus className="w-4 h-4" />
                  <span>+ Thêm Combo Đầy Đủ (55K) bán chạy</span>
                </button>

                <button
                  onClick={handleEmptyCartAction}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#F57C00] hover:bg-[#E65100] text-white font-bold text-xs flex items-center justify-center text-center leading-normal shadow-sm active:scale-95 transition-all"
                >
                  Xem danh sách thực đơn
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Item Cards */}
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-3 sm:gap-3.5 p-3 rounded-2xl border border-[#E7E5E4] bg-white hover:border-[#2E6B3E]/40 transition-all shadow-sm"
                >
                  {/* Food Thumb */}
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden shrink-0 bg-[#F0ECE1] border border-[#E7E5E4]">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Info & Quantity controls */}
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-1">
                        <h4 className="font-extrabold text-[13px] sm:text-[14px] text-[#1C1917] truncate leading-tight">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          aria-label={`Xóa món ${item.product.name}`}
                          className="text-[#A8A29E] hover:text-red-500 p-1 rounded-md transition-colors shrink-0"
                          title="Xóa món"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      {item.product.subtitle && (
                        <p className="text-[11px] font-semibold text-[#78716C] mt-0.5">
                          {item.product.subtitle}
                        </p>
                      )}
                    </div>

                    {/* Pricing & Quantity Controls */}
                    <div className="flex items-center justify-between mt-2 pt-1 border-t border-[#E7E5E4]/50">
                      <div>
                        <span className="text-[14px] sm:text-[15px] font-black text-[#F57C00] leading-none">
                          {formatCurrency(item.product.price * item.quantity)}
                        </span>
                        {item.quantity > 1 && (
                          <span className="block text-[10px] text-[#78716C] font-normal leading-none mt-0.5">
                            ({formatCurrency(item.product.price)} / suất)
                          </span>
                        )}
                      </div>

                      {/* Touch-Friendly Quantity Buttons (32px-36px) */}
                      <div className="flex items-center gap-1.5 bg-[#F7F5EE] p-1 rounded-xl border border-[#E7E5E4]">
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity - 1)
                          }
                          aria-label="Giảm số lượng"
                          className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white border border-[#E7E5E4] flex items-center justify-center text-[#1C1917] hover:bg-[#EAF3EC] active:scale-90 transition-all shadow-xs"
                        >
                          <Minus className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                        </button>
                        <span className="text-xs sm:text-sm font-extrabold min-w-6 text-center text-[#1C1917]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity + 1)
                          }
                          aria-label="Tăng số lượng"
                          className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white border border-[#E7E5E4] flex items-center justify-center text-[#1C1917] hover:bg-[#EAF3EC] active:scale-90 transition-all shadow-xs"
                        >
                          <Plus className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Preferences Section: Dipping Sauce & Notes */}
              <div className="pt-2 space-y-3 border-t border-[#E7E5E4]">
                <div>
                  <label className="block text-xs font-bold text-[#1C1917] mb-1.5">
                    Chọn nước chấm ưa thích:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setSaucePreference("mam_tom")}
                      className={`p-2.5 rounded-xl border text-left transition-all flex flex-col justify-between ${
                        saucePreference === "mam_tom"
                          ? "border-[#2E6B3E] bg-[#EAF3EC] text-[#2E6B3E] font-bold ring-1 ring-[#2E6B3E]"
                          : "border-[#E7E5E4] bg-white text-[#57534E] hover:bg-[#F7F5EE]"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs">Mắm tôm truyền thống</span>
                        {saucePreference === "mam_tom" && (
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#2E6B3E]" />
                        )}
                      </div>
                      <span className="text-[10px] text-[#78716C] font-normal mt-0.5">
                        Đậm vị, đánh sủi bọt
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSaucePreference("nuoc_mam")}
                      className={`p-2.5 rounded-xl border text-left transition-all flex flex-col justify-between ${
                        saucePreference === "nuoc_mam"
                          ? "border-[#2E6B3E] bg-[#EAF3EC] text-[#2E6B3E] font-bold ring-1 ring-[#2E6B3E]"
                          : "border-[#E7E5E4] bg-white text-[#57534E] hover:bg-[#F7F5EE]"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs">Nước mắm chua ngọt</span>
                        {saucePreference === "nuoc_mam" && (
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#2E6B3E]" />
                        )}
                      </div>
                      <span className="text-[10px] text-[#78716C] font-normal mt-0.5">
                        Thanh nhẹ, cay vừa
                      </span>
                    </button>
                  </div>
                </div>

                {/* Order Note */}
                <div>
                  <label className="block text-xs font-bold text-[#1C1917] mb-1">
                    Ghi chú cho quán:
                  </label>
                  <input
                    type="text"
                    value={orderNote}
                    onChange={(e) => setOrderNote(e.target.value)}
                    placeholder="VD: Nhiều quất, ớt để riêng, bún thêm..."
                    className="w-full px-3 py-2 text-xs rounded-xl border border-[#E7E5E4] bg-white focus:outline-none focus:border-[#2E6B3E] focus:ring-1 focus:ring-[#2E6B3E] transition-all"
                  />
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer / Summary & Dual Order Actions */}
        {items.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-[#E7E5E4] bg-[#F7F5EE] space-y-3 shrink-0">
            {/* Price breakdown */}
            <div className="space-y-1">
              <div className="flex justify-between items-center text-xs text-[#57534E]">
                <span>Tổng {totalItems} suất ăn:</span>
                <span className="font-semibold">{formatCurrency(totalPrice)}</span>
              </div>
              <div className="flex justify-between items-center text-xs text-[#57534E]">
                <span>Phí giao hàng:</span>
                <span className="font-semibold text-[#2E6B3E]">
                  {hasFreeship ? "MIỄN PHÍ" : "Tính theo cự ly (hỗ trợ Freeship từ 200K)"}
                </span>
              </div>
              <div className="flex justify-between items-baseline pt-2 border-t border-[#E7E5E4]">
                <span className="text-sm font-bold text-[#1C1917]">Tạm tính:</span>
                <span className="text-2xl font-black text-[#F57C00]">
                  {formatCurrency(totalPrice)}
                </span>
              </div>
            </div>

            {/* Dual CTAs: Call Hotline + Zalo Chat */}
            <div className="space-y-2 pt-1">
              {/* Primary Call Hotline */}
              <a
                href={`tel:${siteConfig.hotline}`}
                className="w-full h-11 sm:h-12 bg-[#F57C00] hover:bg-[#E65100] text-white font-extrabold text-xs sm:text-sm rounded-full flex items-center justify-center text-center leading-normal gap-2 shadow-md active:scale-98 transition-all"
              >
                <PhoneCall className="w-4 h-4 animate-bounce" />
                <span>GỌI ĐẶT NGAY: {siteConfig.hotlineFormatted}</span>
              </a>

              {/* Secondary Zalo Order */}
              <a
                href={`https://zalo.me/${siteConfig.hotline}?text=${generateZaloMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-10 sm:h-11 bg-white hover:bg-[#EAF3EC] text-[#2E6B3E] border border-[#2E6B3E] font-bold text-xs sm:text-[13px] rounded-full flex items-center justify-center text-center leading-normal gap-2 shadow-xs active:scale-98 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>NHẮN ZALO ĐẶT MÓN NHANH</span>
              </a>
            </div>

            {/* Clear Cart or Confirm */}
            <div className="flex justify-center pt-1">
              {confirmClear ? (
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-red-600 font-semibold">Xóa toàn bộ giỏ hàng?</span>
                  <button
                    onClick={() => {
                      clearCart();
                      setConfirmClear(false);
                    }}
                    className="px-2 py-0.5 rounded bg-red-600 text-white font-bold"
                  >
                    Đồng ý
                  </button>
                  <button
                    onClick={() => setConfirmClear(false)}
                    className="px-2 py-0.5 rounded bg-stone-200 text-stone-700 font-medium"
                  >
                    Hủy
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setConfirmClear(true)}
                  className="text-[11px] font-semibold text-[#78716C] hover:text-red-600 transition-colors"
                >
                  Xóa tất cả món
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

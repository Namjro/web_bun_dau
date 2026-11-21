"use client";

import React from "react";
import { OrderCartItem } from "@/projects/tra-sua/types/product";
import { TRA_SUA_TOKENS } from "@/projects/tra-sua/tokens";

interface TraSuaOrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: OrderCartItem[];
  groupMode: boolean;
  onToggleGroupMode: () => void;
  onUpdateQty: (id: string, delta: number) => void;
  onCheckoutSuccess: () => void;
}

export function TraSuaOrderDrawer({
  isOpen,
  onClose,
  cart,
  groupMode,
  onToggleGroupMode,
  onUpdateQty,
  onCheckoutSuccess,
}: TraSuaOrderDrawerProps) {
  if (!isOpen) return null;

  const totalCount = cart.reduce((sum, i) => sum + i.quantity, 0);
  const rawTotal = cart.reduce(
    (sum, i) => sum + i.product.price * i.quantity,
    0
  );
  const freeCups = groupMode ? Math.floor(totalCount / 3) : 0;
  const discountAmount = freeCups * 45000;
  const finalTotal = Math.max(0, rawTotal - discountAmount);

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-[2px]">
      <div className="w-full max-w-[420px] bg-[#fffdf9] h-full border-l-2 border-black flex flex-col justify-between p-6 shadow-[-6px_0px_0px_0px_#141414]">
        <div>
          <div className="flex items-center justify-between pb-4 border-b-2 border-black">
            <div>
              <h3
                className="text-[28px] text-[#1b4332] leading-none m-0"
                style={{
                  fontFamily: TRA_SUA_TOKENS.typography.fontFamily.displayLogo,
                }}
              >
                {groupMode ? "ĐẶT NHÓM - MUA 2 TẶNG 1" : "GIỎ HÀNG CAFE PHỐ"}
              </h3>
              <p className="text-xs font-medium text-[#52525b] mt-1 m-0">
                Giao siêu tốc 20 phút • Đồng giá sinh viên
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="size-9 rounded-[8px] bg-[#f4efe6] border border-black shadow-[2px_2px_0px_0px_#141414] font-bold text-base cursor-pointer hover:bg-[#e0e0e0]"
              aria-label="Đóng giỏ hàng"
            >
              ✕
            </button>
          </div>

          {/* Group Order Toggle Banner */}
          <div className="mt-4 p-3 rounded-[10px] bg-[#f4efe6] border border-black shadow-[3px_3px_0px_0px_#141414] flex items-center justify-between">
            <div>
              <p className="font-bold text-sm text-black m-0">
                Chế độ Đặt Nhóm - Chia Ship
              </p>
              <p className="text-xs text-[#52525b] m-0">
                Mua 2 Tặng 1 (mỗi 3 ly được miễn phí 1 ly)
              </p>
            </div>
            <button
              type="button"
              onClick={onToggleGroupMode}
              className={`px-3 py-1.5 rounded-[6px] border border-black font-bold text-xs shadow-[2px_2px_0px_0px_#141414] cursor-pointer ${
                groupMode ? "bg-[#ff6b35] text-white" : "bg-white text-black"
              }`}
            >
              {groupMode ? "Đang bật" : "Bật ngay"}
            </button>
          </div>

          {/* Items List */}
          <div className="mt-5 space-y-3 max-h-[420px] overflow-y-auto pr-1">
            {cart.length === 0 ? (
              <div className="text-center py-12 bg-[#f4efe6] rounded-[10px] border border-dashed border-black">
                <p className="font-bold text-base text-black m-0">
                  Chưa có món nào trong đơn
                </p>
                <p className="text-xs text-[#52525b] mt-1">
                  Hãy nhấn dấu (+) ở mục Best Sellers để chọn đồ uống!
                </p>
              </div>
            ) : (
              cart.map(({ product, quantity }) => (
                <div
                  key={product.id}
                  className="flex items-center gap-3 p-3 rounded-[8px] bg-[#f4efe6] border border-black shadow-[3px_3px_0px_0px_#141414]"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="size-14 rounded-[6px] object-cover border border-black shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-sm text-black leading-snug m-0 truncate">
                      {product.name}
                    </p>
                    <p className="font-bold text-sm text-[#ff6b35] mt-1 m-0">
                      {product.priceFormatted}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => onUpdateQty(product.id, -1)}
                      className="size-7 rounded-[4px] bg-white border border-black font-bold text-sm shadow-[2px_2px_0px_0px_#141414] cursor-pointer"
                    >
                      -
                    </button>
                    <span className="font-bold text-sm w-5 text-center">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => onUpdateQty(product.id, 1)}
                      className="size-7 rounded-[4px] bg-[#ff6b35] text-white border border-black font-bold text-sm shadow-[2px_2px_0px_0px_#141414] cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Footer Checkout */}
        <div className="pt-4 border-t-2 border-black space-y-3">
          {freeCups > 0 && (
            <div className="flex justify-between text-sm font-bold text-[#1b4332]">
              <span>Ưu đãi Đặt Nhóm (Tặng {freeCups} ly):</span>
              <span>-{discountAmount.toLocaleString("vi-VN")}đ</span>
            </div>
          )}
          <div className="flex justify-between items-baseline">
            <span className="font-bold text-base text-black">
              Tổng thanh toán ({totalCount} ly):
            </span>
            <span className="font-extrabold text-2xl text-[#ff6b35]">
              {finalTotal.toLocaleString("vi-VN")}đ
            </span>
          </div>
          <button
            type="button"
            onClick={onCheckoutSuccess}
            disabled={cart.length === 0}
            className="w-full py-3.5 rounded-[12px] bg-[#ff6b35] disabled:opacity-50 border-2 border-black font-extrabold text-base text-white shadow-[3px_3px_0px_0px_#141414] hover:translate-y-[-1px] active:translate-y-[1px] transition-transform cursor-pointer"
            style={{ textShadow: "2px 2px 0px #141414" }}
          >
            XÁC NHẬN ĐẶT GIAO NGAY
          </button>
        </div>
      </div>
    </div>
  );
}

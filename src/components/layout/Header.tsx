"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { useCart } from "@/context/CartContext";
import {
  Menu,
  X,
  PhoneCall,
  Phone,
  UtensilsCrossed,
  Sparkles,
  Flame,
  Star,
  ChevronRight,
  ShieldCheck,
  ShoppingBag,
  Layers,
} from "lucide-react";

export function Header() {
  const { totalItems, toggleCart, totalPrice } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartBounced, setCartBounced] = useState(false);

  // Trigger brief bounce animation when item count increases
  useEffect(() => {
    if (totalItems > 0) {
      setCartBounced(true);
      const timer = setTimeout(() => setCartBounced(false), 400);
      return () => clearTimeout(timer);
    }
  }, [totalItems]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Handle smooth scroll for anchor links (works in both desktop inner frame and mobile window scroll)
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      const targetId = href.substring(1);
      const targetEl =
        document.getElementById(targetId) ||
        (targetId === "custom-combo" ? document.getElementById("menu") : null);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
        if (mobileMenuOpen) {
          setMobileMenuOpen(false);
        }
      }
    }
  };

  // Map icons for nav links
  const getNavIcon = (label: string) => {
    switch (label) {
      case "Thực đơn":
        return <UtensilsCrossed className="w-4 h-4 text-[#2E6B3E]" />;
      case "Combo":
        return <Layers className="w-4 h-4 text-[#F57C00]" />;
      case "Tự chọn mẹt":
        return <Sparkles className="w-4 h-4 text-[#F57C00]" />;
      case "Khuyến mãi":
        return <Flame className="w-4 h-4 text-red-500" />;
      case "Đánh giá":
        return <Star className="w-4 h-4 text-amber-500" />;
      default:
        return <UtensilsCrossed className="w-4 h-4 text-[#2E6B3E]" />;
    }
  };

  return (
    <>
      <header className="sticky top-0 xl:static z-30 w-full bg-[#F7F5EE] xl:rounded-t-[16px] border-b-2 border-[#E7E5E4] h-[58px] sm:h-[64px] lg:h-[70px] shrink-0 flex items-center justify-between px-3 sm:px-5 lg:px-8 transition-colors">
        <div className="w-full max-w-[1200px] mx-auto flex items-center justify-between gap-2">
          {/* Brand Logo & Mobile/Tablet Hamburger Trigger */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Mobile & Tablet menu button (< xl) */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="xl:hidden w-9 h-9 rounded-lg bg-white/80 border border-[#E7E5E4] flex items-center justify-center text-[#1C1917] hover:bg-[#F0ECE1] active:scale-95 transition-all focus:outline-none"
              aria-label="Mở menu điều hướng"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Logo */}
            <Link href="/" className="inline-block transition-transform active:scale-95">
              <span className="text-[20px] sm:text-[24px] md:text-[26px] lg:text-[30px] font-extrabold text-[#2E6B3E] tracking-tight leading-none block">
                {siteConfig.name}
              </span>
            </Link>
          </div>

          {/* Desktop Navigation (>= xl) */}
          <nav className="hidden xl:flex items-center justify-center gap-1.5 xl:gap-4 flex-1 px-2 xl:px-4">
            {siteConfig.navMenu.map((item) => {
              const isPromo = item.label === "Khuyến mãi";
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="relative group px-3 py-1.5 rounded-full text-[13px] md:text-[14px] lg:text-[15px] font-semibold text-[#1C1917] hover:text-[#2E6B3E] hover:bg-[#2E6B3E]/8 transition-all leading-[1.4] whitespace-nowrap flex items-center gap-1.5"
                >
                  <span>{item.label}</span>
                  {isPromo && (
                    <span className="px-1.5 py-0.5 rounded-full bg-[#F57C00] text-white text-[10px] font-extrabold leading-none animate-pulse">
                      -15%
                    </span>
                  )}
                  {/* Subtle active underline indicator */}
                  <span className="absolute bottom-0.5 left-3 right-3 h-0.5 bg-[#2E6B3E] scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
                </Link>
              );
            })}
          </nav>

          {/* Hotline & Cart Controls */}
          <div className="flex items-center justify-end gap-2 sm:gap-3 lg:gap-4 shrink-0">
            {/* Desktop Hotline Pill */}
            <a
              href={`tel:${siteConfig.hotline}`}
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 hover:bg-white border border-[#E7E5E4] hover:border-[#F57C00]/40 transition-all shadow-sm group cursor-pointer"
              title="Gọi Hotline giao hàng"
            >
              <div className="w-7 h-7 rounded-full bg-[#FFF3E0] flex items-center justify-center text-[#F57C00] group-hover:scale-110 transition-transform">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <div className="flex flex-col text-left leading-tight">
                <span className="text-[10px] font-medium text-[#78716C] leading-none">
                  Hotline
                </span>
                <span className="text-[13px] sm:text-[14px] lg:text-[15px] font-bold text-[#F57C00] group-hover:text-[#E65100] transition-colors leading-none mt-0.5 whitespace-nowrap">
                  {siteConfig.hotlineFormatted}
                </span>
              </div>
            </a>

            {/* Shopping Cart Button */}
            <button
              onClick={toggleCart}
              aria-label={`Xem giỏ hàng, hiện có ${totalItems} món`}
              className={`relative flex items-center gap-2 px-2.5 sm:px-3 py-1.5 rounded-full bg-white hover:bg-[#F0ECE1] border border-[#E7E5E4] hover:border-[#2E6B3E]/40 shadow-sm transition-all active:scale-95 cursor-pointer ${
                cartBounced ? "scale-105 ring-2 ring-[#2E6B3E]/30" : ""
              }`}
            >
              <div className="relative w-[26px] h-[26px] sm:w-[28px] sm:h-[28px] flex items-center justify-center">
                <Image
                  src="/icons/shopping_cart.svg"
                  alt="Giỏ hàng"
                  width={28}
                  height={28}
                  className="w-full h-full object-contain"
                />
                {totalItems > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 flex h-4 min-w-4 sm:h-4.5 sm:min-w-4.5 items-center justify-center rounded-full bg-[#E65100] px-1 text-[9px] sm:text-[10px] font-extrabold text-white shadow-md ring-2 ring-white">
                    {totalItems}
                  </span>
                )}
              </div>

              {/* Cart text helper on desktop */}
              <span className="hidden xl:inline-block text-[13px] font-bold text-[#1C1917]">
                {totalItems > 0 ? (
                  <span className="text-[#2E6B3E]">{totalItems} món</span>
                ) : (
                  "Giỏ hàng"
                )}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* Mobile & Tablet Navigation Drawer with Backdrop Blur (< xl) */}
      {/* ========================================================================= */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 xl:hidden flex">
          {/* Backdrop Overlay */}
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
            aria-hidden="true"
          />

          {/* Drawer Container */}
          <div className="relative w-[85%] max-w-[320px] bg-[#F7F5EE] h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-left duration-300 border-r border-[#E7E5E4]">
            {/* Drawer Top Header */}
            <div className="flex items-center justify-between p-4 border-b border-[#E7E5E4] bg-white">
              <div>
                <span className="text-[20px] font-extrabold text-[#2E6B3E] tracking-tight leading-none block">
                  {siteConfig.name}
                </span>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[11px] font-semibold text-[#57534E]">
                    Đang mở cửa • Giao 25-30p
                  </span>
                </div>
              </div>

              <button
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Đóng menu"
                className="w-8 h-8 rounded-full bg-[#F0ECE1] hover:bg-[#E7E5E4] flex items-center justify-center text-[#57534E] active:scale-95 transition-all"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 overflow-y-auto p-4 space-y-1.5">
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#78716C] px-3 mb-2">
                Danh mục điều hướng
              </p>

              {siteConfig.navMenu.map((item) => {
                const isPromo = item.label === "Khuyến mãi";
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="flex items-center justify-between px-3.5 py-3 rounded-xl bg-white hover:bg-[#EAF3EC] border border-[#E7E5E4]/60 active:scale-[0.98] transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#F7F5EE] flex items-center justify-center group-hover:bg-white transition-colors">
                        {getNavIcon(item.label)}
                      </div>
                      <span className="text-[14px] font-bold text-[#1C1917] group-hover:text-[#2E6B3E] transition-colors">
                        {item.label}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {isPromo && (
                        <span className="px-2 py-0.5 rounded-full bg-[#F57C00] text-white text-[10px] font-extrabold leading-none">
                          Giảm 15%
                        </span>
                      )}
                      <ChevronRight className="w-4 h-4 text-[#78716C] group-hover:text-[#2E6B3E] group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </Link>
                );
              })}

              {/* Safe Food & Fast Delivery Commitments */}
              <div className="mt-6 p-3.5 rounded-xl bg-white border border-[#E7E5E4]/80 space-y-2">
                <div className="flex items-center gap-2 text-[#2E6B3E] text-xs font-bold">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>Cam kết chất lượng Bún Đậu Phố</span>
                </div>
                <ul className="text-[11px] text-[#57534E] space-y-1.5 pl-1 leading-relaxed">
                  <li>• Đậu Mơ chiên vàng giòn rụm mỗi đơn</li>
                  <li>• Dầu mới 100%, rau sạch sục ozone</li>
                  <li>• Đóng hộp giấy giữ nhiệt chống tràn</li>
                </ul>
              </div>
            </div>

            {/* Bottom Contact Call CTA */}
            <div className="p-4 border-t border-[#E7E5E4] bg-white space-y-2.5">
              <a
                href={`tel:${siteConfig.hotline}`}
                className="w-full h-11 rounded-full bg-[#F57C00] hover:bg-[#E65100] text-white font-bold text-[13px] flex items-center justify-center text-center leading-normal gap-2 shadow-md active:scale-95 transition-all"
              >
                <PhoneCall className="w-4 h-4 animate-bounce" />
                <span>GỌI ĐẶT NGAY: {siteConfig.hotlineFormatted}</span>
              </a>
              <p className="text-[11px] text-center text-[#78716C]">
                Phục vụ nhanh các quận nội thành • 09:30 - 21:30
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

"use client";

import React from "react";
import { useCart } from "@/projects/bun-dau/context/CartContext";
import { formatCurrency } from "@/projects/bun-dau/lib/format";
import { ShoppingBag, ChevronRight } from "lucide-react";

export function FloatingCartBar() {
  const { totalItems, totalPrice, isOpen, openCart } = useCart();

  // Only render on mobile if cart has items and drawer is not currently open
  if (totalItems === 0 || isOpen) return null;

  return (
    <aside
      aria-label="Thanh xem nhanh giỏ hàng"
      className="xl:hidden fixed bottom-3 left-3 right-3 sm:left-6 sm:right-6 md:left-auto md:right-auto md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-md z-40 animate-in slide-in-from-bottom-4 duration-300 pointer-events-auto"
    >
      <button
        onClick={openCart}
        className="w-full bg-[#1C1917] text-white p-2.5 sm:p-3 rounded-2xl shadow-[0_12px_30px_rgba(0,0,0,0.35)] border border-stone-800/80 flex items-center justify-between active:scale-[0.98] transition-all group"
      >
        {/* Left Side: Cart Icon & Items Count & Subtotal */}
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-xl bg-[#2E6B3E] flex items-center justify-center text-white shrink-0 shadow-inner">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#F57C00] text-[10px] font-black flex items-center justify-center text-white ring-2 ring-[#1C1917] shadow">
              {totalItems}
            </span>
          </div>

          <div className="text-left leading-tight">
            <p className="text-[11px] font-medium text-stone-300 leading-none">
              Tạm tính ({totalItems} món)
            </p>
            <p className="text-[15px] font-extrabold text-[#F57C00] leading-tight mt-1">
              {formatCurrency(totalPrice)}
            </p>
          </div>
        </div>

        {/* Right Side: CTA Button */}
        <div className="flex items-center justify-center text-center gap-1.5 bg-[#F57C00] group-hover:bg-[#E65100] text-white px-3.5 py-2 rounded-full font-bold text-xs tracking-wide shadow-md transition-colors leading-normal">
          <span>Xem giỏ hàng</span>
          <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </div>
      </button>
    </aside>
  );
}

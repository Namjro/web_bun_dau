"use client";

import React from "react";
import Image from "next/image";
import { TrustBadges } from "./TrustBadges";
import { useCart } from "@/projects/bun-dau/context/CartContext";
import { COMBO_PRODUCTS } from "@/projects/bun-dau/constants/products";

export function HeroSection() {
  const { addToCart } = useCart();

  const handleOrderNow = () => {
    const popularCombo = COMBO_PRODUCTS[1] || COMBO_PRODUCTS[0];
    addToCart(popularCombo);
  };

  const handleGroupOrder = () => {
    const groupCombo = COMBO_PRODUCTS[2] || COMBO_PRODUCTS[0];
    addToCart(groupCombo);
  };

  return (
    <section className="relative w-full flex flex-col lg:flex-row items-center lg:items-start justify-between gap-4 lg:gap-6 xl:gap-8 pt-2 sm:pt-3 lg:pt-3 pb-3 md:pb-4">
      {/* Left Column: Headlines & Action Buttons (order-2 on mobile/iPad, order-1 on desktop) */}
      <div className="order-2 lg:order-1 flex-1 min-w-0 w-full lg:w-auto flex flex-col z-10 space-y-2.5 sm:space-y-3.5 md:space-y-4 pt-2 sm:pt-3 lg:pt-4 text-center lg:text-left items-center lg:items-start">
        {/* Headline */}
        <div className="space-y-1 sm:space-y-2 max-w-xl">
          <div className="font-extrabold text-[22px] sm:text-[28px] md:text-[34px] lg:text-[34px] xl:text-[42px] text-[#1C1917] leading-[1.22] tracking-normal">
            <p className="mb-0">TRƯA NAY ĂN GÌ?</p>
            <p className="mb-0 sm:whitespace-nowrap">BÚN ĐẬU NÓNG GIÒN &ndash;</p>
            <p className="mb-0 sm:whitespace-nowrap">
              GIAO TẬN BÀN CHỈ TỪ
              <span className="text-[#F57C00]"> 35K</span>
            </p>
          </div>

          <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-normal text-[#57534E] leading-[1.6] max-w-[580px] mx-auto lg:mx-0">
            Đậu mơ giòn rụm, mắm tôm sủi bọt, giao nhanh trong 25 - 30 phút
          </p>
        </div>

        {/* Dual CTAs - Căn giữa đối xứng tâm trên Mobile & iPad, căn trái trên Desktop */}
        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2.5 sm:gap-3.5 pt-1 w-full max-w-xl">
          <button
            onClick={handleOrderNow}
            className="w-full sm:w-auto min-w-[170px] sm:min-w-[185px] px-6 sm:px-7 h-[44px] sm:h-[48px] lg:h-[50px] rounded-full bg-[#F57C00] hover:bg-[#E65100] text-white font-extrabold text-[13px] sm:text-[14px] md:text-[15px] flex items-center justify-center text-center leading-normal whitespace-nowrap tracking-wide transition-all shadow-md active:scale-95"
          >
            ĐẶT GIAO NGAY
          </button>
          <button
            onClick={handleGroupOrder}
            className="w-full sm:w-auto px-5 sm:px-6 h-[44px] sm:h-[48px] lg:h-[50px] rounded-full bg-[#2E6B3E] hover:bg-[#235330] text-white font-extrabold text-[12px] sm:text-[13px] md:text-[14px] flex items-center justify-center text-center leading-normal whitespace-nowrap tracking-wide transition-all shadow-md active:scale-95"
          >
            ĐẶT NHÓM VĂN PHÒNG (GIẢM 15%)
          </button>
        </div>

        {/* Trust Badges - Căn giữa trên Mobile & iPad */}
        <div className="pt-1 sm:pt-2 w-full flex justify-center lg:justify-start">
          <TrustBadges />
        </div>
      </div>

      {/* Right Column: Hero Visual Food Plate (order-1 on mobile/iPad, order-2 on desktop) */}
      <div className="order-1 lg:order-2 w-[210px] sm:w-[280px] md:w-[320px] lg:w-[360px] xl:w-[406px] h-[190px] sm:h-[260px] md:h-[300px] lg:h-[360px] xl:h-[410px] relative flex justify-center items-center shrink-0 my-2 sm:my-3 lg:my-0 select-none">
        {/* Green rectangle backdrop "màu": Giữ độ cao ban đầu trên Desktop và căn thẳng trục Y (left-1/2 -translate-x-1/2) với đĩa bún */}
        <div className="absolute w-[150px] sm:w-[190px] md:w-[220px] lg:w-[260px] xl:w-[281px] h-[85px] sm:h-[110px] md:h-[130px] lg:h-[160px] xl:h-[171px] bg-[#2E6B3E] rounded-xl sm:rounded-2xl z-0 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 lg:top-2 lg:translate-y-0 transition-all duration-300" />

        {/* Plate Image "bun_dau 1" */}
        <div className="relative w-[190px] sm:w-[250px] md:w-[290px] lg:w-[340px] xl:w-[387px] h-[180px] sm:h-[240px] md:h-[280px] lg:h-[330px] xl:h-[371px] z-10 transition-transform duration-500 hover:scale-105">
          <Image
            src="/images/hero/bun_dau_plate.png"
            alt="Mẹt bún đậu Bún Đậu Phố"
            fill
            priority
            className="object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)]"
          />
        </div>
      </div>
    </section>
  );
}

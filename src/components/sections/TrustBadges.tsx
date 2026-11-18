import React from "react";
import Image from "next/image";
import { TRUST_BADGES } from "@/constants/trust-badges";

export function TrustBadges() {
  return (
    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-6 md:gap-8 lg:gap-10 py-1.5 sm:py-3">
      {TRUST_BADGES.map((badge) => (
        <div key={badge.id} className="flex items-center gap-1.5 sm:gap-2.5 group">
          <div className="relative w-7 h-7 sm:w-9 sm:h-9 md:w-11 md:h-11 flex-shrink-0 transition-transform group-hover:scale-110">
            <Image
              src={badge.icon}
              alt={badge.alt}
              width={44}
              height={44}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="text-[#1C1917] leading-tight select-none">
            <p className="text-[12px] sm:text-[13px] lg:text-[14px] font-semibold text-[#1C1917] leading-snug">
              {badge.title}
            </p>
            <p className="text-[11px] sm:text-[12px] font-normal text-[#78716C] leading-snug mt-0.5">
              {badge.subtitle}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

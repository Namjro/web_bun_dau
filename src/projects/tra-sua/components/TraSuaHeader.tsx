"use client";

import React from "react";
import { traSuaSiteConfig } from "@/projects/tra-sua/config/site";
import { TRA_SUA_TOKENS } from "@/projects/tra-sua/tokens";

interface TraSuaHeaderProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onOrderClick: () => void;
  onNavClick: (section: "menu" | "group" | "promo") => void;
  cartCount: number;
}

export function TraSuaHeader({
  searchQuery,
  onSearchChange,
  onOrderClick,
  onNavClick,
  cartCount,
}: TraSuaHeaderProps) {
  return (
    <header
      className="w-full h-full flex items-center justify-between px-2 sm:px-4"
      data-node-id="6:62"
    >
      {/* Brand Logo: CAFE PHỐ */}
      <a
        href="/tra-sua"
        className="flex flex-col justify-center leading-none not-italic shrink-0 text-[46px] md:text-[54px] lg:text-[56px] text-white tracking-[-1.12px] select-none hover:opacity-95 transition-opacity"
        style={{ fontFamily: TRA_SUA_TOKENS.typography.fontFamily.displayLogo }}
        data-node-id="6:63"
      >
        <span className="leading-[1.1]">{traSuaSiteConfig.name}</span>
      </a>

      {/* Navigation Links */}
      <nav
        className="hidden md:flex font-bold items-center leading-none not-italic text-[16px] lg:text-[18px] text-center text-white gap-2 lg:gap-6"
        data-node-id="6:64"
      >
        {traSuaSiteConfig.navMenu.map((item, idx) => (
          <button
            key={item.id}
            type="button"
            onClick={() => onNavClick(item.id)}
            className="px-3 py-2 hover:text-[#ff6b35] transition-colors cursor-pointer"
            data-node-id={`6:${65 + idx}`}
          >
            <span className="leading-[1.3]">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Search Box & Primary CTA */}
      <div className="flex items-center gap-3">
        {/* Search Box */}
        <label
          htmlFor="tra-sua-search"
          className="bg-white flex gap-[10px] items-center px-3 py-2 rounded-[10px] w-[200px] sm:w-[260px] lg:w-[320px] cursor-text focus-within:ring-2 focus-within:ring-[#ff6b35]"
          data-node-id="6:73"
        >
          <div
            className="relative shrink-0 size-[20px] lg:size-[24px]"
            data-node-id="6:77"
            data-name="akar-icons:search"
          >
            <img
              alt="Tìm kiếm"
              width={24}
              height={24}
              className="block max-w-none w-full h-full"
              src="/tra-sua/search.svg"
            />
          </div>
          <input
            id="tra-sua-search"
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Tìm kiếm..."
            aria-label="Tìm kiếm đồ uống"
            className="w-full bg-transparent font-medium text-[14px] lg:text-[15px] leading-[1.5] text-[#141414] placeholder:text-[#ccc] focus:outline-none"
            data-node-id="6:69"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange("")}
              className="text-xs font-bold text-[#52525b] hover:text-black px-1"
              aria-label="Xóa tìm kiếm"
            >
              ✕
            </button>
          )}
        </label>

        {/* Primary Order CTA Pill */}
        <button
          type="button"
          onClick={onOrderClick}
          className="bg-[#ff6b35] border-2 border-black border-solid drop-shadow-[3px_3px_0px_#141414] hover:translate-y-[-1px] active:translate-y-[1px] transition-transform flex items-center justify-center gap-1.5 px-[18px] lg:px-[24px] py-[10px] lg:py-[14px] relative rounded-[999px] shrink-0 cursor-pointer"
          data-node-id="7:2"
          data-name="Button/Primary"
        >
          <span
            className="font-bold leading-none not-italic relative shrink-0 text-[13px] lg:text-[14px] text-white whitespace-nowrap"
            data-node-id="I7:2;3:42"
          >
            ĐẶT NGAY
          </span>
          {cartCount > 0 && (
            <span className="ml-1 inline-flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded-full bg-[#1b4332] border border-black text-white text-[11px] font-extrabold leading-none">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}

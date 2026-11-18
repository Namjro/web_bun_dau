"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { ProductCombo } from "@/types/product";
import { formatCurrency } from "@/lib/format";
import { useCart } from "@/context/CartContext";
import { ChevronDown, ChevronUp, Sparkles } from "lucide-react";

export interface CategoryTab {
  id: string;
  label: string;
}

interface ProductSectionProps {
  id: string;
  title: string;
  badgeText?: string;
  products: ProductCombo[];
  categories?: CategoryTab[];
  initialLimit?: number;
}

export function ProductSection({
  id,
  title,
  badgeText,
  products,
  categories,
  initialLimit = 6,
}: ProductSectionProps) {
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  // Filter products by selected tab category
  const filteredProducts = useMemo(() => {
    if (!categories || categories.length === 0 || activeCategory === "all") {
      return products;
    }
    return products.filter((p) => p.category === activeCategory);
  }, [products, categories, activeCategory]);

  // Handle switching category tab: reset expansion
  const handleCategoryChange = (catId: string) => {
    setActiveCategory(catId);
    setIsExpanded(false);
  };

  // Determine which products to display (limited or all)
  const visibleProducts = isExpanded
    ? filteredProducts
    : filteredProducts.slice(0, initialLimit);

  const hasMore = filteredProducts.length > initialLimit;
  const remainingCount = Math.max(0, filteredProducts.length - initialLimit);

  return (
    <section id={id} className="w-full pt-3 pb-6 scroll-mt-20">
      {/* Section Header */}
      <div className="mb-3 sm:mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
        <div className="flex items-center gap-2 flex-wrap">
          <h2 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-bold text-[#1C1917] leading-[1.3] flex items-center gap-2">
            <span>{title}</span>
          </h2>
          {badgeText && (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#F57C00]/15 text-[#F57C00] text-[11px] sm:text-[12px] font-extrabold tracking-wide">
              <Sparkles className="w-3 h-3 text-[#F57C00]" />
              {badgeText}
            </span>
          )}
        </div>

        {/* Category Tabs (if provided) */}
        {categories && categories.length > 0 && (
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5 -mx-1 px-1 sm:mx-0 sm:px-0">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              // Count items in category
              const count =
                cat.id === "all"
                  ? products.length
                  : products.filter((p) => p.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`px-3 py-1.5 rounded-full text-[12px] sm:text-[13px] font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-1.5 active:scale-95 ${
                    isActive
                      ? "bg-[#2E6B3E] text-white shadow-sm ring-1 ring-[#2E6B3E]"
                      : "bg-white/80 hover:bg-white text-[#57534E] hover:text-[#1C1917] border border-[#E7E5E4]"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-[#F0ECE1] text-[#78716C]"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Product Cards Grid: 1 col on mobile, 2 cols on tablet, 3 cols on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3 lg:gap-3.5">
        {visibleProducts.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-[16px] shadow-[0px_4px_16px_0px_rgba(28,25,23,0.06)] hover:shadow-[0px_8px_20px_0px_rgba(28,25,23,0.12)] transition-all duration-300 w-full h-[190px] sm:h-[205px] md:h-[220px] flex flex-row overflow-hidden relative border border-[#E7E5E4]/60 group"
          >
            {/* Left side: Food thumbnail */}
            <div className="relative w-[95px] sm:w-[110px] md:w-[125px] lg:w-[130px] h-full shrink-0 bg-[#F0ECE1] overflow-hidden">
              <Image
                src={item.image}
                alt={`${item.name} ${item.subtitle || ""}`}
                fill
                sizes="(max-width: 768px) 100px, 130px"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Right side: Information & Action */}
            <div className="flex-1 min-w-0 p-2 sm:p-2.5 lg:p-3 flex flex-col justify-between overflow-hidden">
              <div>
                {/* Title & Subtitle */}
                <div className="leading-tight">
                  <p className="font-bold text-[13px] sm:text-[14px] lg:text-[15px] text-[#1C1917] mb-0 truncate" title={item.name}>
                    {item.name}
                  </p>
                  {item.subtitle ? (
                    <p className="font-normal text-[11px] sm:text-[12px] lg:text-[13px] text-[#57534E] mb-0 mt-0.5 truncate">
                      {item.subtitle}
                    </p>
                  ) : (
                    <div className="h-4 sm:h-4.5" />
                  )}
                </div>

                {/* Price & Original Price */}
                <div className="mt-1 flex items-baseline gap-1.5 flex-wrap">
                  <span className="font-bold text-[16px] sm:text-[18px] lg:text-[19px] text-[#F57C00] leading-none">
                    {formatCurrency(item.price)}
                  </span>
                  {item.originalPrice && item.originalPrice > item.price && (
                    <span className="text-[11px] sm:text-[12px] text-[#A8A29E] line-through leading-none font-medium">
                      {formatCurrency(item.originalPrice)}
                    </span>
                  )}
                </div>

                {/* Tag label */}
                {item.badge && (
                  <p className="text-[10px] sm:text-[11px] lg:text-[12px] font-semibold text-[#2E6B3E] leading-tight mt-0.5 mb-0 truncate">
                    {item.badge}
                  </p>
                )}

                {/* Ingredients description */}
                <p className="text-[10px] sm:text-[11px] lg:text-[11.5px] font-normal text-[#78716C] leading-snug line-clamp-2 mt-0.5 mb-0">
                  {item.description}
                </p>
              </div>

              {/* Button - Thêm vào giỏ */}
              <button
                onClick={() => addToCart(item)}
                className="w-full h-[32px] sm:h-[34px] rounded-full bg-[#E65100] hover:bg-[#D84315] text-white font-bold text-[11px] sm:text-[12px] flex items-center justify-center text-center leading-normal transition-all shadow-sm active:scale-95 whitespace-nowrap px-2 mt-1 tracking-wide cursor-pointer"
              >
                + THÊM VÀO GIỎ
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Expand / Collapse Button if items exceed initial limit */}
      {hasMore && (
        <div className="mt-3.5 sm:mt-4 flex justify-center">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-white hover:bg-[#F0ECE1] border border-[#E7E5E4] hover:border-[#2E6B3E]/40 text-[#1C1917] hover:text-[#2E6B3E] text-[12px] sm:text-[13px] font-bold shadow-sm transition-all duration-200 active:scale-95 cursor-pointer"
          >
            {isExpanded ? (
              <>
                <span>Thu gọn danh sách</span>
                <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                <span>Xem thêm {remainingCount} món khác</span>
                <ChevronDown className="w-4 h-4 text-[#F57C00]" />
              </>
            )}
          </button>
        </div>
      )}
    </section>
  );
}

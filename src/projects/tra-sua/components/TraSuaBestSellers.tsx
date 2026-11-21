"use client";

import React, { useState } from "react";
import { TraSuaProduct } from "@/projects/tra-sua/types/product";
import { MENU_SECTIONS } from "@/projects/tra-sua/constants/products";

interface TraSuaBestSellersProps {
  searchQuery: string;
  onAddProduct: (product: TraSuaProduct) => void;
}

interface TraSuaMenuSectionRowProps {
  sectionId: string;
  title: string;
  products: TraSuaProduct[];
  searchQuery: string;
  onAddProduct: (product: TraSuaProduct) => void;
}

function TraSuaMenuSectionRow({
  sectionId,
  title,
  products,
  searchQuery,
  onAddProduct,
}: TraSuaMenuSectionRowProps) {
  const [pageIndex, setPageIndex] = useState(0);

  const filtered = searchQuery.trim()
    ? products.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.trim().toLowerCase())
      )
    : products;

  if (filtered.length === 0) {
    return null;
  }

  const totalPages = Math.max(1, Math.ceil(filtered.length / 3));
  const activePage = Math.min(pageIndex, totalPages - 1);
  const visibleItems = filtered.slice(activePage * 3, activePage * 3 + 3);

  const handlePrev = () => {
    setPageIndex((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNext = () => {
    setPageIndex((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  return (
    <div
      id={`tra-sua-section-${sectionId}`}
      className="flex flex-col h-[233px] items-start justify-center w-full overflow-clip px-[138px] py-[5px] shrink-0"
      data-node-id="7:16"
    >
      {/* Section Header: Title + Navigation Arrows */}
      <div
        className="flex gap-[10px] items-center justify-center relative shrink-0 w-full"
        data-node-id="8:71"
      >
        <h2
          className="flex-1 font-bold h-[61px] leading-[1.2] min-w-px not-italic relative text-[32px] text-black m-0 flex items-center"
          data-node-id="8:69"
        >
          {title}
        </h2>
        <div
          className="flex gap-[12px] h-[49px] items-center overflow-clip relative shrink-0 w-[87px]"
          data-node-id="8:75"
        >
          <button
            type="button"
            onClick={handlePrev}
            aria-label={`Trang trước - ${title}`}
            className="bg-[#e0e0e0] hover:bg-[#d4d4d4] active:translate-y-[1px] transition-all border border-[#d9d9d9] border-solid drop-shadow-[3px_3px_0px_#141414] flex flex-col items-center justify-center relative rounded-[8px] shrink-0 size-[36px] cursor-pointer"
            data-node-id="8:83"
          >
            <div
              className="flex items-center justify-center relative shrink-0 size-[24.126px]"
              data-node-id="8:80"
            >
              <div className="flex-none rotate-[-179.7deg]">
                <div
                  className="relative size-[24px]"
                  data-name="flat-color-icons:next"
                >
                  <img
                    alt=""
                    width={24}
                    height={24}
                    className="block max-w-none"
                    src="/tra-sua/icon-next-prev.svg"
                  />
                </div>
              </div>
            </div>
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label={`Trang tiếp theo - ${title}`}
            className="bg-white hover:bg-[#f4efe6] active:translate-y-[1px] transition-all border border-[#52525b] border-solid flex flex-col items-center justify-center relative rounded-[8px] shadow-[3px_3px_0px_0px_#141414] shrink-0 size-[36px] cursor-pointer"
            data-node-id="8:84"
          >
            <div
              className="relative shrink-0 size-[24px]"
              data-node-id="8:85"
              data-name="flat-color-icons:next"
            >
              <img
                alt=""
                width={24}
                height={24}
                className="block max-w-none"
                src="/tra-sua/icon-next.svg"
              />
            </div>
          </button>
        </div>
      </div>

      {/* 3 Product Cards Row */}
      <div
        className="flex gap-[28px] items-center relative shrink-0 w-full"
        data-node-id="8:68"
      >
        {visibleItems.map((item) => (
          <div
            key={item.id}
            className="bg-[#f4efe6] border border-black border-solid drop-shadow-[3px_3px_0px_#141414] hover:translate-y-[-2px] transition-transform flex h-[126px] items-start relative rounded-[8px] shrink-0 w-[353px]"
            data-node-id={item.nodeId}
          >
            <div className="bg-[#f4efe6] flex h-[123px] items-center overflow-clip relative rounded-[8px] shrink-0 w-[127px]">
              <div className="flex items-center p-[10px] relative shrink-0 w-[110px]">
                <div
                  className="relative rounded-[8px] shrink-0 size-[100px]"
                  data-name="tra_sua 1"
                >
                  <img
                    alt={item.name}
                    className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full"
                    src={item.image}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col h-[125px] items-start relative shrink-0 w-[209px]">
              <div className="flex flex-col gap-[4px] h-[125px] items-start relative shrink-0 w-full">
                <div className="flex flex-col font-bold h-[71px] justify-center leading-none min-w-full not-italic relative shrink-0 text-[18px] text-black w-[min-content]">
                  <p className="leading-[1.3] m-0">{item.name}</p>
                </div>
                <div className="flex items-center justify-between relative shrink-0 w-[207px]">
                  <p className="font-bold leading-[1.3] not-italic relative shrink-0 text-[18px] text-[#ff6b35] w-[106px] m-0">
                    {item.priceFormatted}
                  </p>
                  <button
                    type="button"
                    onClick={() => onAddProduct(item)}
                    aria-label={`Thêm ${item.name} vào đơn`}
                    className="bg-[#ff6b35] hover:bg-[#e85a25] active:translate-y-[1px] transition-all drop-shadow-[3px_3px_0px_#141414] h-[36px] relative rounded-[4px] shrink-0 w-[40.5px] cursor-pointer"
                    data-node-id="8:230"
                  >
                    <div
                      className="relative shrink-0 size-[24px] mx-auto"
                      data-name="akar-icons:plus"
                    >
                      <img
                        alt=""
                        width={24}
                        height={24}
                        className="block max-w-none"
                        src="/tra-sua/icon-plus.svg"
                      />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function TraSuaBestSellers({
  searchQuery,
  onAddProduct,
}: TraSuaBestSellersProps) {
  return (
    <section
      id="tra-sua-best-sellers"
      className="absolute left-[2px] top-[631px] w-[1392px] flex flex-col gap-[16px] pb-[40px]"
      data-node-id="8:70"
    >
      {MENU_SECTIONS.map((section) => (
        <TraSuaMenuSectionRow
          key={section.id}
          sectionId={section.id}
          title={section.title}
          products={section.items}
          searchQuery={searchQuery}
          onAddProduct={onAddProduct}
        />
      ))}
    </section>
  );
}

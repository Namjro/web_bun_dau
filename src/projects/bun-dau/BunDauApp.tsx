"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { CartProvider } from "@/projects/bun-dau/context/CartContext";
import { CartDrawer } from "@/projects/bun-dau/components/cart/CartDrawer";
import { FloatingCartBar } from "@/projects/bun-dau/components/cart/FloatingCartBar";
import { Header } from "@/projects/bun-dau/components/layout/Header";
import { HeroSection } from "@/projects/bun-dau/components/sections/HeroSection";
import { ProductSection } from "@/projects/bun-dau/components/sections/ProductSection";
import { DecorElements } from "@/projects/bun-dau/components/layout/DecorElements";
import {
  PROMOTION_PRODUCTS,
  COMBO_PRODUCTS,
  MENU_PRODUCTS,
} from "@/projects/bun-dau/constants/products";

export function BunDauApp() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [thumbHeight, setThumbHeight] = useState(60);
  const isDraggingRef = useRef(false);

  const updateScrollState = useCallback(() => {
    if (!scrollRef.current || !trackRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
    const trackH = trackRef.current.clientHeight;

    const maxScroll = scrollHeight - clientHeight;
    if (maxScroll <= 0) {
      setThumbHeight(trackH);
      setScrollProgress(0);
      return;
    }

    const calculatedThumbHeight = Math.max(
      40,
      Math.min(trackH, (clientHeight / scrollHeight) * trackH)
    );
    setThumbHeight(calculatedThumbHeight);

    const progress = Math.max(0, Math.min(1, scrollTop / maxScroll));
    const availableTrack = Math.max(0, trackH - calculatedThumbHeight);
    setScrollProgress(progress * availableTrack);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(() => {
        updateScrollState();
      });
      resizeObserver.observe(el);
      if (el.firstElementChild) {
        resizeObserver.observe(el.firstElementChild);
      }
    }

    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
      if (resizeObserver) resizeObserver.disconnect();
    };
  }, [updateScrollState]);

  useEffect(() => {
    const handleGlobalWheel = (e: WheelEvent) => {
      if (window.innerWidth >= 1280 && scrollRef.current) {
        if (
          (e.target as HTMLElement)?.closest?.('[role="dialog"]') ||
          document.body.style.overflow === "hidden"
        ) {
          return;
        }
        if (!scrollRef.current.contains(e.target as Node)) {
          scrollRef.current.scrollTop += e.deltaY;
        }
      }
    };
    window.addEventListener("wheel", handleGlobalWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleGlobalWheel);
  }, []);

  const handleThumbMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    isDraggingRef.current = false;
    const startY = e.clientY;
    const startScrollTop = scrollRef.current ? scrollRef.current.scrollTop : 0;
    document.body.style.userSelect = "none";

    const handleMouseMove = (moveEvent: MouseEvent) => {
      if (!scrollRef.current || !trackRef.current) return;
      isDraggingRef.current = true;
      const deltaY = moveEvent.clientY - startY;
      const { scrollHeight, clientHeight } = scrollRef.current;
      const trackH = trackRef.current.clientHeight;
      const availableTrack = trackH - thumbHeight;
      if (availableTrack <= 0) return;

      const scrollRatio = deltaY / availableTrack;
      const maxScroll = scrollHeight - clientHeight;
      scrollRef.current.scrollTop = startScrollTop + scrollRatio * maxScroll;
    };

    const handleMouseUp = () => {
      document.body.style.userSelect = "";
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      setTimeout(() => {
        isDraggingRef.current = false;
      }, 80);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  const handleTrackClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDraggingRef.current) return;
    if (!trackRef.current || !scrollRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const clickY = e.clientY - rect.top;
    const { scrollHeight, clientHeight } = scrollRef.current;
    const trackH = rect.height;
    const availableTrack = trackH - thumbHeight;
    if (availableTrack <= 0) return;

    const clickRatio = Math.max(
      0,
      Math.min(1, (clickY - thumbHeight / 2) / availableTrack)
    );
    const maxScroll = scrollHeight - clientHeight;
    scrollRef.current.scrollTo({
      top: clickRatio * maxScroll,
      behavior: "smooth",
    });
  };

  return (
    <CartProvider>
      <div className="w-full min-h-screen bg-[#F7F5EE] flex flex-col xl:h-screen xl:max-h-screen xl:w-screen xl:overflow-hidden xl:items-center xl:justify-center xl:p-4 relative select-none">
        <DecorElements />

        <div className="w-full flex-1 flex flex-col relative xl:max-w-[min(1290px,calc(100vw-64px))] xl:h-[min(960px,calc(100vh-32px))] xl:max-h-[calc(100vh-32px)]">
          <div className="w-full h-full flex-1 flex flex-col relative xl:rounded-[32px] xl:bg-[#18181B] xl:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35),0_0_0_1px_rgba(255,255,255,0.08)_inset] xl:p-[16px] xl:overflow-hidden xl:z-20">
            <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#09090B] border border-stone-800/80 z-30 hidden xl:block" />

            <div className="w-full flex-1 bg-[#F7F5EE] flex flex-col relative xl:rounded-[16px] xl:overflow-hidden xl:isolate">
              <Header />

              <div
                ref={scrollRef}
                onScroll={updateScrollState}
                className="w-full flex-1 px-4 sm:px-6 md:px-8 py-4 sm:py-6 lg:px-8 xl:pt-5 xl:pb-8 xl:overflow-x-hidden xl:overflow-y-auto no-scrollbar"
              >
                <div className="max-w-[1200px] mx-auto w-full xl:pb-6">
                  <HeroSection />

                  <ProductSection
                    id="promotions"
                    title="Thực đơn khuyến mãi"
                    badgeText="Hot Trưa Nay - Giảm tới 22%"
                    products={PROMOTION_PRODUCTS}
                    initialLimit={3}
                  />

                  <ProductSection
                    id="combos"
                    title="Khối Combo Đặc Biệt"
                    badgeText="Mẹt Đầy Đặn - Đậm Vị Phố Cổ"
                    products={COMBO_PRODUCTS}
                    categories={[
                      { id: "all", label: "Tất cả combo" },
                      { id: "single", label: "1 Người ăn" },
                      { id: "group", label: "Cặp đôi & Nhóm" },
                    ]}
                    initialLimit={6}
                  />

                  <ProductSection
                    id="menu"
                    title="Thực đơn món lẻ & Đồ uống"
                    badgeText="Gọi Thêm Nóng Giòn"
                    products={MENU_PRODUCTS}
                    categories={[
                      { id: "all", label: "Toàn bộ món" },
                      { id: "topping", label: "Topping thêm" },
                      { id: "drink", label: "Nước giải khát" },
                    ]}
                    initialLimit={6}
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            ref={trackRef}
            onClick={handleTrackClick}
            className="hidden xl:flex fixed right-1.5 xl:right-2 top-4 bottom-4 w-2 hover:w-2.5 rounded-full bg-[#1C1917]/10 hover:bg-[#1C1917]/15 z-40 flex-col items-center py-1 transition-[background-color,width] cursor-pointer group"
            title="Thanh cuộn"
          >
            <div
              onMouseDown={handleThumbMouseDown}
              style={{
                height: `${thumbHeight}px`,
                transform: `translateY(${scrollProgress}px)`,
              }}
              className="w-1.5 group-hover:w-2 rounded-full bg-[#2E6B3E] hover:bg-[#235330] active:bg-[#F57C00] shadow-sm transition-[width,background-color] cursor-grab active:cursor-grabbing"
            />
          </div>
        </div>
      </div>
      <CartDrawer />
      <FloatingCartBar />
    </CartProvider>
  );
}

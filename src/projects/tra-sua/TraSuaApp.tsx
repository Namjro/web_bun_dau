"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { TraSuaHeader } from "@/projects/tra-sua/components/TraSuaHeader";
import {
  TraSuaHeroInner,
  TraSuaHeroDrinkArtwork,
} from "@/projects/tra-sua/components/TraSuaHero";
import { TraSuaBestSellers } from "@/projects/tra-sua/components/TraSuaBestSellers";
import { TraSuaOrderDrawer } from "@/projects/tra-sua/components/TraSuaOrderDrawer";
import {
  INITIAL_BEST_SELLERS,
  MENU_SECTIONS,
} from "@/projects/tra-sua/constants/products";
import {
  TraSuaProduct,
  OrderCartItem,
} from "@/projects/tra-sua/types/product";
import { TRA_SUA_TOKENS } from "@/projects/tra-sua/tokens";

export function TraSuaApp() {
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState<OrderCartItem[]>([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [groupMode, setGroupMode] = useState(false);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [thumbHeight, setThumbHeight] = useState(60);
  const isDraggingRef = useRef(false);

  const activeSectionCount = searchQuery.trim()
    ? MENU_SECTIONS.filter((sec) =>
        sec.items.some((item) =>
          item.name.toLowerCase().includes(searchQuery.trim().toLowerCase())
        )
      ).length
    : MENU_SECTIONS.length;

  const totalCanvasHeight = Math.max(
    TRA_SUA_TOKENS.layout.creamCardHeight,
    631 +
      activeSectionCount * 233 +
      Math.max(0, activeSectionCount - 1) * 16 +
      40
  );

  const updateScrollState = useCallback(() => {
    if (!containerRef.current || !trackRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
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
    const handleResize = () => {
      if (!containerRef.current) return;
      const { clientWidth, clientHeight } = containerRef.current;
      const scaleX = clientWidth / TRA_SUA_TOKENS.layout.creamCardWidth;
      const scaleY = clientHeight / TRA_SUA_TOKENS.layout.creamCardHeight;
      setScale(Math.min(scaleX, scaleY));
      updateScrollState();
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [totalCanvasHeight, updateScrollState]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });

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
      if (resizeObserver) resizeObserver.disconnect();
    };
  }, [updateScrollState]);

  // Global wheel listener so scrolling anywhere on screen scrolls the inner container
  useEffect(() => {
    const handleGlobalWheel = (e: WheelEvent) => {
      if (containerRef.current) {
        if ((e.target as HTMLElement)?.closest?.('[role="dialog"]')) {
          return;
        }
        if (!containerRef.current.contains(e.target as Node)) {
          containerRef.current.scrollTop += e.deltaY;
        }
      }
    };
    window.addEventListener("wheel", handleGlobalWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleGlobalWheel);
  }, []);

  // Dragging the external scrollbar thumb
  const handleThumbMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    isDraggingRef.current = false;
    const startY = e.clientY;
    const startScrollTop = containerRef.current ? containerRef.current.scrollTop : 0;
    document.body.style.userSelect = "none";

    const handleMouseMove = (moveEvent: MouseEvent) => {
      if (!containerRef.current || !trackRef.current) return;
      isDraggingRef.current = true;
      const deltaY = moveEvent.clientY - startY;
      const { scrollHeight, clientHeight } = containerRef.current;
      const trackH = trackRef.current.clientHeight;
      const availableTrack = trackH - thumbHeight;
      if (availableTrack <= 0) return;

      const scrollRatio = deltaY / availableTrack;
      const maxScroll = scrollHeight - clientHeight;
      containerRef.current.scrollTop = startScrollTop + scrollRatio * maxScroll;
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

  // Clicking on track to jump smoothly
  const handleTrackClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDraggingRef.current) return;
    if (!trackRef.current || !containerRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const clickY = e.clientY - rect.top;
    const { scrollHeight, clientHeight } = containerRef.current;
    const trackH = rect.height;
    const availableTrack = trackH - thumbHeight;
    if (availableTrack <= 0) return;

    const clickRatio = Math.max(
      0,
      Math.min(1, (clickY - thumbHeight / 2) / availableTrack)
    );
    const maxScroll = scrollHeight - clientHeight;
    containerRef.current.scrollTo({
      top: clickRatio * maxScroll,
      behavior: "smooth",
    });
  };

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => {
      setToastMsg((prev) => (prev === msg ? null : prev));
    }, 2400);
  };

  const handleAddProduct = (product: TraSuaProduct) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.product.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    showToast(`Đã thêm "${product.name}" vào giỏ!`);
  };

  const handleUpdateQty = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.product.id === id
            ? { ...item, quantity: item.quantity + delta }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleOpenDeliveryOrder = () => {
    setGroupMode(false);
    if (cart.length === 0) {
      setCart([{ product: INITIAL_BEST_SELLERS[0], quantity: 1 }]);
    }
    setDrawerOpen(true);
  };

  const handleOpenGroupOrder = () => {
    setGroupMode(true);
    if (cart.length === 0) {
      setCart([{ product: INITIAL_BEST_SELLERS[0], quantity: 3 }]);
    }
    setDrawerOpen(true);
  };

  const handleNavClick = (section: "menu" | "group" | "promo") => {
    if (section === "menu") {
      if (containerRef.current) {
        containerRef.current.scrollTo({
          top: Math.max(0, (631 - 20) * scale),
          behavior: "smooth",
        });
      }
    } else if (section === "group" || section === "promo") {
      handleOpenGroupOrder();
    }
  };

  const totalCount = cart.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <main className="w-screen h-screen overflow-hidden bg-[#1b4332] flex flex-col px-[14px] sm:px-[18px] lg:px-[23px] pb-[12px] sm:pb-[16px] lg:pb-[20px] select-none relative">
      {/* Top Green Header (node-id=6:62) */}
      <div className="w-full h-[70px] sm:h-[80px] lg:h-[99px] shrink-0 flex items-center">
        <TraSuaHeader
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onOrderClick={() => setDrawerOpen(true)}
          onNavClick={handleNavClick}
          cartCount={totalCount}
        />
      </div>

      {/* Inner Cream Main Container Frame (node-id=6:61) - Cuộn nội dung bên trong, thanh cuộn ẩn */}
      <div
        ref={containerRef}
        onScroll={updateScrollState}
        className="relative flex-1 w-full bg-[#fffdf9] rounded-bl-[28px] sm:rounded-bl-[36px] rounded-br-[28px] sm:rounded-br-[36px] overflow-y-auto overflow-x-hidden no-scrollbar shadow-lg scroll-smooth"
        data-node-id="6:61"
      >
        <div
          className="w-full flex justify-center"
          style={{
            height: `${Math.ceil(totalCanvasHeight * scale)}px`,
          }}
        >
          <div
            className="relative shrink-0 overflow-hidden"
            style={{
              width: TRA_SUA_TOKENS.layout.creamCardWidth,
              height: totalCanvasHeight,
              transform: `scale(${scale})`,
              transformOrigin: "top center",
            }}
          >
            <TraSuaBestSellers
              searchQuery={searchQuery}
              onAddProduct={handleAddProduct}
            />

            <TraSuaHeroInner
              onDeliveryOrderClick={handleOpenDeliveryOrder}
              onGroupOrderClick={handleOpenGroupOrder}
            />

            <div className="absolute left-[-23px] top-[-99px]">
              <TraSuaHeroDrinkArtwork />
            </div>
          </div>
        </div>
      </div>

      {/* THANH SCROLLBAR NẰM SÁT MÉP NGOÀI CÙNG (HOÀN TOÀN NGOÀI KHUNG XANH) */}
      <div
        ref={trackRef}
        onClick={handleTrackClick}
        className="fixed right-1 sm:right-1.5 lg:right-2 top-[76px] sm:top-[86px] lg:top-[106px] bottom-[16px] sm:bottom-[20px] lg:bottom-[24px] w-2 hover:w-2.5 rounded-full bg-black/20 hover:bg-black/30 z-50 flex flex-col items-center py-1 transition-[background-color,width] cursor-pointer"
        title="Thanh cuộn thực đơn"
      >
        <div
          onMouseDown={handleThumbMouseDown}
          style={{
            height: `${thumbHeight}px`,
            transform: `translateY(${scrollProgress}px)`,
          }}
          className="w-1.5 hover:w-2 rounded-full bg-[#ff6b35] hover:bg-[#e85a25] active:bg-[#d84814] shadow-sm transition-[width,background-color] cursor-grab active:cursor-grabbing"
        />
      </div>

      {/* Quick Toast Notification */}
      {toastMsg && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#fffdf9] border-2 border-black rounded-[12px] px-4 py-3 shadow-[3px_3px_0px_0px_#141414] flex items-center gap-3">
          <span className="inline-block w-3 h-3 rounded-full bg-[#ff6b35] border border-black" />
          <span className="font-bold text-[15px] text-black">{toastMsg}</span>
          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            className="ml-2 px-3 py-1 rounded-[6px] bg-[#ff6b35] border border-black text-white font-bold text-xs shadow-[2px_2px_0px_0px_#141414]"
          >
            Xem đơn ({totalCount})
          </button>
        </div>
      )}

      {/* Neo-Brutalist Order Drawer Modal */}
      <TraSuaOrderDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        cart={cart}
        groupMode={groupMode}
        onToggleGroupMode={() => setGroupMode((prev) => !prev)}
        onUpdateQty={handleUpdateQty}
        onCheckoutSuccess={() => {
          setDrawerOpen(false);
          setCart([]);
          showToast("Đặt đơn thành công! Shipper sẽ giao trong 20 phút.");
        }}
      />
    </main>
  );
}

"use client";

import React from "react";
import { HERO_VECTORS } from "@/projects/tra-sua/constants/hero-vectors";
import { TRA_SUA_TOKENS } from "@/projects/tra-sua/tokens";

interface TraSuaHeroProps {
  onDeliveryOrderClick: () => void;
  onGroupOrderClick: () => void;
}

export function TraSuaSignpost({
  className = "",
  scale = 1,
}: {
  className?: string;
  scale?: number;
}) {
  return (
    <div
      className={`relative w-[181px] h-[275px] pointer-events-none select-none origin-top-left ${className}`}
      style={scale !== 1 ? { transform: `scale(${scale})` } : undefined}
    >
      {/* Cột chỉ đường */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="flex-none rotate-[6.17deg]">
          <div className="h-[260.157px] relative w-[153.804px]" data-name="cot_duong 1">
            <img
              alt="Cột chỉ đường"
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src="/tra-sua/cot-duong.png"
            />
          </div>
        </div>
      </div>

      {/* Biển chỉ dẫn Cafe */}
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[49.209px] items-center justify-center left-[93.71px] top-[77.87px] w-[99.23px] pointer-events-none">
        <div className="flex-none rotate-[10.33deg]">
          <div className="flex flex-col font-bold h-[32.724px] justify-center leading-none not-italic relative text-[11px] sm:text-[10px] text-black text-center w-[94.9px]">
            <p className="leading-[1.4] m-0">Cafe</p>
          </div>
        </div>
      </div>

      {/* Biển chỉ dẫn Trà Sữa */}
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[41.212px] items-center justify-center left-[108.09px] top-[33.03px] w-[97.481px] pointer-events-none">
        <div className="flex-none rotate-[5.21deg]">
          <div className="flex flex-col font-bold h-[32.724px] justify-center leading-none not-italic relative text-[11px] sm:text-[10px] text-black text-center w-[94.9px]">
            <p className="leading-[1.4] m-0">Trà Sữa</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TraSuaGroupCard({
  onClick,
  scale = 1,
  className = "",
  id,
}: {
  onClick: () => void;
  scale?: number;
  className?: string;
  id?: string;
}) {
  return (
    <div
      id={id}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      style={scale !== 1 ? { transform: `scale(${scale})`, transformOrigin: "top left" } : undefined}
      className={`relative bg-white border-[2.362px] border-black border-solid h-[240.971px] w-[365px] overflow-clip rounded-[11.812px] shadow-[3.544px_3.544px_0px_0px_#141414] hover:translate-y-[-2px] active:translate-y-[1px] transition-transform cursor-pointer select-none ${className}`}
      data-node-id="16:347"
    >
      <div
        className="absolute contents left-[-38.98px] top-[-2.36px]"
        data-node-id="16:348"
      >
        <div
          className="absolute h-[245.696px] left-[-36.62px] top-0 w-[437.323px]"
          data-node-id="16:349"
          data-name="nen_3 1"
        >
          <img
            alt=""
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            src="/tra-sua/nen-3.png"
          />
        </div>
        <div
          className="absolute h-[178.619px] left-[57.88px] top-[62.61px] w-[250.066px]"
          data-node-id="16:350"
          data-name="anh_3 1"
        >
          <img
            alt="Đặt nhóm chia ship"
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            src="/tra-sua/anh-3.png"
          />
        </div>
      </div>
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-bold h-[89.773px] justify-center leading-none left-[180.14px] not-italic text-white text-center top-[42.52px] w-[365px]"
        data-node-id="16:351"
      >
        <p
          className="font-bold leading-[1.3] mb-0 text-[23.625px]"
          style={{
            fontFamily: TRA_SUA_TOKENS.typography.fontFamily.displayBanner,
            ...TRA_SUA_TOKENS.effects.textStrokeGroupTitle,
          }}
        >
          ĐẶT NHÓM - CHIA SHIP
        </p>
        <p
          className="font-bold text-[18.9px]"
          style={TRA_SUA_TOKENS.effects.textStrokeGroupSubtitle}
        >
          <span className="leading-[1.5]">Mua </span>
          <span className="leading-[1.5] text-[#ff6b35]">2</span>
          <span className="leading-[1.5]"> Tặng </span>
          <span className="leading-[1.5] text-[#ff6b35]">1</span>
        </p>
      </div>
    </div>
  );
}

export function TraSuaHeroMobile({
  onDeliveryOrderClick,
  onGroupOrderClick,
}: TraSuaHeroProps) {
  return (
    <div className="w-full flex flex-col items-center pt-3 pb-6 px-3">
      {/* 1. Headline */}
      <div className="flex items-center justify-center gap-2 mb-1">
        <img
          src="/tra-sua/icon-tra-sua.png"
          alt=""
          className="size-7 sm:size-9 object-contain pointer-events-none"
        />
        <h1
          className="text-[26px] xs:text-[30px] sm:text-[34px] text-[#1b4332] font-black leading-none tracking-wide m-0"
          style={{ fontFamily: TRA_SUA_TOKENS.typography.fontFamily.displayHero }}
        >
          TRÀ SỮA &amp; CAFE
        </h1>
        <img
          src="/tra-sua/icon-tra-sua.png"
          alt=""
          className="size-7 sm:size-9 object-contain -scale-x-100 pointer-events-none"
        />
      </div>

      <p className="text-xs sm:text-sm font-bold text-[#52525b] text-center mb-3 m-0">
        Giá sinh viên, giao siêu tốc 20 phút!
      </p>

      {/* 2. Artwork Center: Cốc Trà Sữa viền đen + Biển báo + Cốc cafe + Khung hình Mua 2 Tặng 1 */}
      <div className="relative w-full max-w-[360px] h-[265px] xs:h-[275px] flex items-center justify-center my-1 pointer-events-none select-none overflow-hidden">
        {/* Drink Artwork with 52 Black Line Vectors + Splashes */}
        <div
          className="absolute -left-[45px] xs:-left-[34px] top-[6px] xs:top-[8px] w-[628px] h-[607px] origin-top-left pointer-events-none"
          style={{ transform: "scale(0.44)" }}
        >
          <TraSuaHeroDrinkArtwork className="w-[628px] h-[607px] flex flex-col items-center justify-center relative pointer-events-none" />
        </div>

        {/* Right Street Cluster: Cột biển báo chỉ đường + Xe Vespa (Phía trên) */}
        <div className="absolute right-0 top-0 w-[116px] h-[110px] pointer-events-none">
          {/* Cột chỉ đường (Signpost) với chữ chuẩn xác trên thanh gỗ */}
          <div className="absolute right-[-4px] top-[-2px] pointer-events-none">
            <TraSuaSignpost scale={0.40} />
          </div>

          {/* Xe Vespa nằm cạnh cột biển báo */}
          <div className="absolute left-[2px] top-[24px] size-[56px] rotate-[-8.13deg] pointer-events-none">
            <img src="/tra-sua/xe-vespa.png" alt="Xe Vespa" className="size-full object-contain pointer-events-none" />
          </div>

          {/* Mũi tên xoắn */}
          <div className="absolute left-[18px] top-[68px] size-[24px] rotate-[-160deg] opacity-90 pointer-events-none">
            <img src="/tra-sua/mui-ten-xoan.png" alt="" className="size-full object-contain pointer-events-none" />
          </div>
        </div>

        {/* Khung hình Mua 2 Tặng 1: Nâng cao vị trí cân bằng ngang hàng với ảnh cốc trà sữa / cốc cafe */}
        <div className="absolute right-[4px] top-[114px] xs:top-[118px] w-[172px] h-[114px] z-20 pointer-events-auto">
          <TraSuaGroupCard
            onClick={onGroupOrderClick}
            scale={0.47}
            className="border-2 shadow-[2.5px_2.5px_0px_#141414]"
          />
        </div>
      </div>

      {/* 3. Action Button */}
      <div className="w-full max-w-[360px] flex flex-col gap-2 mt-2">
        {/* ĐẶT GIAO NGAY Button */}
        <button
          type="button"
          onClick={onDeliveryOrderClick}
          className="w-full h-[52px] bg-[#ff6b35] hover:bg-[#e85a25] active:translate-y-[1px] border-2 border-black rounded-[14px] shadow-[3px_3px_0px_#141414] flex items-center justify-between px-4 transition-transform cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <img src="/tra-sua/shipper.png" alt="Shipper" className="size-9 object-contain pointer-events-none" />
            <span
              className="text-[16px] font-black text-white uppercase tracking-wider"
              style={TRA_SUA_TOKENS.effects.textStrokeHeroCta}
            >
              ĐẶT GIAO NGAY
            </span>
          </div>
          <span className="text-white font-extrabold text-xl">→</span>
        </button>
      </div>
    </div>
  );
}

export function TraSuaHeroInner({
  onDeliveryOrderClick,
  onGroupOrderClick,
}: TraSuaHeroProps) {
  return (
    <div
      className="absolute h-[624px] left-0 overflow-clip top-[2px] w-[1394px]"
      data-node-id="7:4"
    >
      {/* Center Primary Delivery CTA Button: ĐẶT GIAO NGAY */}
      <div
        className="absolute flex flex-col h-[120px] items-start left-[575px] top-[352px] w-[244px] z-10"
        data-node-id="8:324"
      >
        <button
          type="button"
          onClick={onDeliveryOrderClick}
          className="bg-[#ff6b35] border-2 border-black border-solid drop-shadow-[3px_3px_0px_#141414] hover:translate-y-[-2px] active:translate-y-[1px] transition-transform h-[120px] relative rounded-[16px] shrink-0 w-[244px] cursor-pointer text-left"
          data-node-id="8:332"
          data-name="Button/Primary"
        >
          <p
            className="absolute font-extrabold inset-[calc(67.5%+0.7px)_calc(16.39%-1.34px)_calc(10.83%-1.57px)_calc(15.98%-1.36px)] leading-[1.3] not-italic text-[20px] text-white text-center whitespace-nowrap"
            style={TRA_SUA_TOKENS.effects.textStrokeHeroCta}
            data-node-id="8:333"
          >
            ĐẶT GIAO NGAY
          </p>
          <div
            className="absolute bottom-1/2 left-[calc(10.66%-1.57px)] right-[calc(10.66%-1.57px)] top-1/2 pointer-events-none"
            data-node-id="16:339"
          >
            <div className="absolute inset-[-14.73px_-1.04%_-14.73px_0]">
              <img
                alt=""
                className="block max-w-none"
                src="/tra-sua/arrow-cta.svg"
              />
            </div>
          </div>
          <div
            className="absolute aspect-[400/257] left-[calc(19.67%-1.21px)] right-[calc(33.61%-0.66px)] top-[-16px] pointer-events-none"
            data-node-id="41:372"
            data-name="ship3 1"
          >
            <img
              alt="Shipper giao siêu tốc"
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src="/tra-sua/shipper.png"
            />
          </div>
        </button>
      </div>

      {/* Group Order Card: ĐẶT NHÓM - CHIA SHIP / Mua 2 Tặng 1 */}
      <TraSuaGroupCard
        id="tra-sua-group-card"
        onClick={onGroupOrderClick}
        className="absolute left-[885px] top-[354px] z-10"
      />

      {/* Right Street Signpost & Vespa Sketch Cluster */}
      <div
        className="absolute contents left-[995px] top-[79px]"
        data-node-id="16:357"
      >
        <div
          className="absolute flex items-center justify-center left-[1048px] size-[186.719px] top-[154px] pointer-events-none"
          data-node-id="16:355"
        >
          <div className="flex-none rotate-[-8.13deg]">
            <div className="relative size-[165.036px]" data-name="xe_vespa 1">
              <img
                alt="Xe Vespa"
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                src="/tra-sua/xe-vespa.png"
              />
            </div>
          </div>
        </div>
        <div
          className="absolute left-[1156px] top-[79px] pointer-events-none"
          data-node-id="16:358"
        >
          <TraSuaSignpost />
        </div>
        <div
          className="absolute flex items-center justify-center left-[995px] size-[105.996px] top-[259px] pointer-events-none"
          data-node-id="16:361"
        >
          <div className="flex-none rotate-[-160.07deg]">
            <div
              className="relative size-[82.744px]"
              data-name="mui_ten_xoan 1"
            >
              <img
                alt=""
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                src="/tra-sua/mui-ten-xoan.png"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Hero Headline & Subtitle */}
      <div
        className="absolute h-[151.609px] leading-none left-[221px] overflow-clip top-[40px] w-[952px]"
        data-node-id="16:362"
      >
        <div
          className="-translate-x-1/2 absolute flex items-center left-1/2 top-[9px]"
          data-node-id="27:366"
        >
          <div
            className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0"
            data-node-id="45:373"
          >
            <div
              className="col-start-1 row-start-1 flex items-center justify-center ml-0 mt-0 relative size-[94.739px]"
              data-node-id="27:365"
            >
              <div className="flex-none rotate-[-11.67deg]">
                <div
                  className="relative size-[80.174px]"
                  data-name="icon_tra_sua 1"
                >
                  <img
                    alt=""
                    className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                    src="/tra-sua/icon-tra-sua.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0"
            data-node-id="45:374"
          >
            <div
              className="col-start-1 row-start-1 flex flex-col h-[75px] justify-center ml-0 mt-0 not-italic relative text-[60px] text-[#1b4332] text-center tracking-[1.2px] w-[609.997px]"
              style={{
                fontFamily: TRA_SUA_TOKENS.typography.fontFamily.displayHero,
              }}
              data-node-id="16:363"
            >
              <h1 className="leading-[1.15] m-0 font-normal">TRÀ SỮA &amp; CAFE</h1>
            </div>
          </div>
          <div
            className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0"
            data-node-id="45:375"
          >
            <div
              className="col-start-1 row-start-1 flex items-center justify-center ml-0 mt-0 relative size-[94.742px]"
              data-node-id="27:367"
            >
              <div className="-scale-y-100 flex-none rotate-[-168.32deg]">
                <div
                  className="relative size-[80.174px]"
                  data-name="icon_tra_sua 2"
                >
                  <img
                    alt=""
                    className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                    src="/tra-sua/icon-tra-sua.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="-translate-y-1/2 absolute flex flex-col font-bold h-[40px] justify-center left-0 not-italic right-0 text-[32px] text-[#52525b] text-center top-[108px] tracking-[-0.64px]"
          data-node-id="16:364"
        >
          <p className="leading-[1.15]">Giá sinh viên, giao siêu tốc 20 phút!</p>
        </div>
      </div>
    </div>
  );
}

export function TraSuaHeroDrinkArtwork({
  className = "absolute flex flex-col h-[607px] items-center justify-center left-[23px] overflow-clip top-[152px] w-[628px] pointer-events-none z-10",
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
} = {}) {
  return (
    <div
      className={className}
      style={style}
      data-node-id="8:233"
    >
      <div
        className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-none place-items-start relative shrink-0"
        data-node-id="8:315"
      >
        {/* Base Dark Green Puddle Ellipse */}
        <div
          className="col-start-1 row-start-1 flex h-[253.409px] items-center justify-center ml-0 mt-[331.17px] relative w-[482.92px]"
          data-node-id="8:234"
        >
          <div className="flex-none rotate-[9.67deg]">
            <div className="h-[178.789px] relative w-[459.418px]">
              <img
                alt=""
                className="absolute block inset-0 max-w-none"
                src="/tra-sua/ellipse-base.svg"
              />
            </div>
          </div>
        </div>

        {/* Cups + Splash Vector Lines */}
        <div
          className="col-start-1 row-start-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[123.78px] mt-0 place-items-start relative"
          data-node-id="8:235"
        >
          {/* Large Boba Milk Tea Cup */}
          <div
            className="col-start-1 row-start-1 flex items-center justify-center ml-[34.81px] mt-0 relative size-[520.094px]"
            data-node-id="8:236"
          >
            <div className="flex-none rotate-[10.21deg]">
              <div
                className="relative size-[447.833px]"
                data-name="ly_tra_sưa 1"
              >
                <img
                  alt="Ly trà sữa trân châu đường đen"
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                  src="/tra-sua/ly-tra-sua-hero.png"
                />
              </div>
            </div>
          </div>

          {/* Iced Whipped Coffee Cup */}
          <div
            className="col-start-1 row-start-1 flex items-center justify-center ml-0 mt-[215.57px] relative size-[338.405px]"
            data-node-id="8:237"
          >
            <div className="flex-none rotate-[-15.97deg]">
              <div className="relative size-[273.663px]" data-name="cafe 1">
                <img
                  alt="Ly cafe kem đá"
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                  src="/tra-sua/ly-cafe-hero.png"
                />
              </div>
            </div>
          </div>

          {/* Hand-drawn Splash & Outline Vectors (vector-1 .. vector-52) */}
          {HERO_VECTORS.map((v) => (
            <div key={v.nodeId} className={v.boxClass} data-node-id={v.nodeId}>
              <div className={v.insetClass}>
                <img alt="" className="block max-w-none" src={v.src} />
              </div>
            </div>
          ))}
        </div>

        {/* Side Motion Lines Group 2 & Group 3 */}
        <div
          className="col-start-1 row-start-1 h-[43.396px] ml-[168.31px] mt-[320.62px] relative w-[34.938px]"
          data-node-id="8:303"
        >
          <div className="absolute inset-[-0.5%_0_-2.32%_0]">
            <img
              alt=""
              className="block max-w-none"
              src="/tra-sua/group-2.svg"
            />
          </div>
        </div>
        <div
          className="col-start-1 row-start-1 flex h-[39.793px] items-center justify-center ml-[486.31px] mt-[256.62px] relative w-[36.553px]"
          data-node-id="8:304"
        >
          <div className="flex-none rotate-[-142.95deg]">
            <div className="h-[35.534px] relative w-[18.975px]">
              <div className="absolute inset-[-0.27%_0_-2.26%_0]">
                <img
                  alt=""
                  className="block max-w-none"
                  src="/tra-sua/group-3.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Image from "next/image";

export function DecorElements() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 w-full h-full select-none z-10 overflow-hidden hidden xl:block"
    >
      {/* 1. lachuoi1 1 (Góc trên bên trái) */}
      <div className="absolute -top-16 -left-20 xl:-top-24 xl:-left-28 lg:w-[440px] lg:h-[440px] xl:w-[500px] xl:h-[500px] rotate-[38deg]">
        <Image
          src="/images/decors/la_chuoi.png"
          alt=""
          fill
          priority
          className="object-contain drop-shadow-md"
        />
      </div>

      {/* 2. hung_que 1 (Góc trên bên phải) */}
      <div className="absolute -top-12 right-14 xl:-top-16 xl:right-24 lg:w-[260px] lg:h-[260px] xl:w-[300px] xl:h-[300px] rotate-[6.57deg]">
        <Image
          src="/images/decors/hung_que.png"
          alt=""
          fill
          className="object-contain drop-shadow-sm"
        />
      </div>

      {/* 3. ot_xanh 1 (Mép lề phải) */}
      <div className="absolute top-28 right-3 xl:top-40 xl:right-6 lg:w-[145px] lg:h-[145px] xl:w-[160px] xl:h-[160px] -rotate-[20.28deg]">
        <Image
          src="/images/decors/ot_xanh.png"
          alt=""
          fill
          className="object-contain drop-shadow-sm"
        />
      </div>

      {/* 4. ot_do 1 (Mép lề phải) */}
      <div className="absolute top-56 right-4 xl:top-72 xl:right-8 lg:w-[100px] lg:h-[120px] xl:w-[115px] xl:h-[135px] -rotate-[11.82deg]">
        <Image
          src="/images/decors/ot_do.png"
          alt=""
          fill
          className="object-contain drop-shadow-sm"
        />
      </div>

      {/* 5. ot 2 (Góc dưới bên trái) */}
      <div className="absolute bottom-6 left-10 xl:bottom-8 xl:left-14 lg:w-[165px] lg:h-[165px] xl:w-[180px] xl:h-[180px] -rotate-[22.11deg]">
        <Image
          src="/images/decors/ot_2.png"
          alt=""
          fill
          className="object-contain drop-shadow-sm"
        />
      </div>

      {/* 6. ot1 1 (Góc dưới bên trái) */}
      <div className="absolute -bottom-10 left-36 xl:-bottom-12 xl:left-48 lg:w-[165px] lg:h-[165px] xl:w-[180px] xl:h-[180px] -rotate-[133.82deg]">
        <Image
          src="/images/decors/ot_1.png"
          alt=""
          fill
          className="object-contain drop-shadow-sm"
        />
      </div>

      {/* 7. lachuoi1 2 (Góc dưới bên phải) */}
      <div className="absolute -bottom-24 -right-24 xl:-bottom-36 xl:-right-36 lg:w-[480px] lg:h-[480px] xl:w-[560px] xl:h-[560px] rotate-[23deg]">
        <Image
          src="/images/decors/la_chuoi.png"
          alt=""
          fill
          className="object-contain drop-shadow-md"
        />
      </div>
    </div>
  );
}

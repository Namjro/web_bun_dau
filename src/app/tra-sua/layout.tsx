import type { Metadata } from "next";
import React from "react";
import { traSuaSiteConfig } from "@/projects/tra-sua/config/site";

export const metadata: Metadata = {
  title: `${traSuaSiteConfig.name} - Trà Sữa & Cafe Giá Sinh Viên, Giao Siêu Tốc 20 Phút!`,
  description: traSuaSiteConfig.description,
};

export default function TraSuaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Barlow:wght@700;800&family=Be+Vietnam+Pro:wght@400;500;600;700;800&family=Bebas+Neue&family=Bevan&display=swap"
      />
      <div
        className="w-screen h-screen overflow-hidden bg-[#1b4332] text-black antialiased selection:bg-[#ff6b35]/20 selection:text-[#ff6b35]"
        style={{
          fontFamily: "'Be Vietnam Pro', system-ui, -apple-system, sans-serif",
        }}
      >
        {children}
      </div>
    </>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { CartProvider } from "@/context/CartContext";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { FloatingCartBar } from "@/components/cart/FloatingCartBar";

export const metadata: Metadata = {
  title: `${siteConfig.name} - Bún Đậu Nóng Giòn Giao Tận Bàn`,
  description: siteConfig.description,
  keywords: [
    "Bún Đậu Phố",
    "bún đậu mắm tôm",
    "bún đậu ngon",
    "đặt bún đậu văn phòng",
    "giao bún đậu tận nơi",
  ],
  openGraph: {
    title: `${siteConfig.name} - Bún Đậu Nóng Giòn`,
    description: siteConfig.description,
    type: "website",
    locale: "vi_VN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased font-sans selection:bg-[#F57C00]/20 selection:text-[#F57C00]">
        <CartProvider>
          {children}
          <CartDrawer />
          <FloatingCartBar />
        </CartProvider>
      </body>
    </html>
  );
}

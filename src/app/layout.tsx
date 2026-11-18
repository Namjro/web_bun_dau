import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { CartProvider } from "@/context/CartContext";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { FloatingCartBar } from "@/components/cart/FloatingCartBar";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-be-vietnam-pro",
  display: "swap",
});

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
    <html lang="vi" className={beVietnamPro.variable}>
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

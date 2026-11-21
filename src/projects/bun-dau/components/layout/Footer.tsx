import React from "react";
import { siteConfig } from "@/projects/bun-dau/config/site";
import { Container } from "@/projects/bun-dau/components/common/Container";
import { Phone, MapPin, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-[#1C1917] text-white pt-12 pb-8 mt-12 border-t-4 border-[#2E6B3E]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-white/10">
          {/* Col 1: Brand Info */}
          <div className="space-y-3">
            <h3 className="text-2xl font-extrabold text-[#2E6B3E] tracking-tight bg-white px-3 py-1 rounded inline-block">
              {siteConfig.name}
            </h3>
            <p className="text-sm text-stone-300 leading-relaxed">
              Thương hiệu bún đậu mắm tôm chuẩn vị truyền thống. Cam kết nguyên liệu tươi sạch mỗi ngày, dầu mới 100%, rau sục ozone an toàn tuyệt đối.
            </p>
          </div>

          {/* Col 2: Quick Links & Delivery */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-[#F57C00] uppercase tracking-wider">
              Chính sách & Giao hàng
            </h4>
            <ul className="text-sm text-stone-300 space-y-2">
              <li>• Giao nhanh trong 25 - 30 phút</li>
              <li>• Miễn phí giao hàng cho đơn từ 200.000đ</li>
              <li>• Giảm 15% cho đơn nhóm văn phòng (từ 5 suất)</li>
              <li>• Hộp giấy giữ nhiệt chuyên dụng chống tràn</li>
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-[#F57C00] uppercase tracking-wider">
              Liên Hệ Đặt Món
            </h4>
            <div className="space-y-2 text-sm text-stone-300">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#F57C00] flex-shrink-0" />
                <a
                  href={`tel:${siteConfig.hotline}`}
                  className="font-bold text-white hover:text-[#F57C00] transition-colors"
                >
                  {siteConfig.hotlineFormatted}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#2E6B3E] flex-shrink-0" />
                <span>Mở cửa: 09:30 - 21:30 hàng ngày</span>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#2E6B3E] flex-shrink-0" />
                <span>Giao hàng tận bàn các quận nội thành</span>
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 text-center text-xs text-stone-400">
          <p>© {new Date().getFullYear()} {siteConfig.name}. Tất cả các quyền được bảo lưu.</p>
        </div>
      </Container>
    </footer>
  );
}

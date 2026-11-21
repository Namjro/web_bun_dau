---
name: Bun Dau Pho Design System
version: 1.0.0
colors:
  brand:
    green: "#2E6B3E"
    green-dark: "#235330"
    green-light: "#EAF3EC"
  cta:
    orange: "#F57C00"
    orange-hover: "#E65100"
    orange-light: "#FFF3E0"
  background:
    primary: "#F7F5EE"
    subtle: "#F0ECE1"
  surface:
    card: "#FFFFFF"
    elevated: "#FFFFFF"
  text:
    primary: "#1C1917"
    secondary: "#57534E"
    muted: "#78716C"
    inverse: "#FFFFFF"
  border:
    divider: "#E7E5E4"
    card: "rgba(28, 25, 23, 0.08)"
typography:
  fontFamily:
    sans: "'Be Vietnam Pro', system-ui, -apple-system, sans-serif"
  h1:
    fontFamily: "{typography.fontFamily.sans}"
    fontSize: 2.625rem
    fontWeight: 800
    lineHeight: 1.22
    letterSpacing: "0em"
  h2:
    fontFamily: "{typography.fontFamily.sans}"
    fontSize: 1.375rem
    fontWeight: 700
    lineHeight: 1.35
  price:
    fontFamily: "{typography.fontFamily.sans}"
    fontSize: 1.1875rem
    fontWeight: 700
    lineHeight: 1.2
    textColor: "{colors.cta.orange}"
  body-md:
    fontFamily: "{typography.fontFamily.sans}"
    fontSize: 0.9375rem
    fontWeight: 400
    lineHeight: 1.6
    textColor: "{colors.text.secondary}"
rounded:
  sm: 6px
  md: 10px
  lg: 16px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
elevation:
  card: "0px 4px 16px 0px rgba(28, 25, 23, 0.06)"
  card-hover: "0px 10px 24px 0px rgba(28, 25, 23, 0.12)"
  header: "0px 2px 8px 0px rgba(28, 25, 23, 0.04)"
components:
  button-primary:
    backgroundColor: "{colors.cta.orange}"
    textColor: "{colors.text.inverse}"
    hoverBackgroundColor: "{colors.cta.orange-hover}"
    rounded: "{rounded.full}"
    fontWeight: 700
  button-secondary:
    backgroundColor: "{colors.brand.green}"
    textColor: "{colors.text.inverse}"
    hoverBackgroundColor: "{colors.brand.green-dark}"
    rounded: "{rounded.full}"
    fontWeight: 700
  card-combo:
    backgroundColor: "{colors.surface.card}"
    rounded: "{rounded.lg}"
    shadow: "{elevation.card}"
    border: "1px solid {colors.border.card}"
---

## Overview
Hệ thống thiết kế cho thương hiệu ẩm thực truyền thống **Bún Đậu Phố**. Thiết kế phản ánh sự tươi ngon, dân dã, sạch sẽ và ấm cúng của món ăn truyền thống Hà Nội, kết hợp phong cách trình bày hiện đại, tối ưu cho tỷ lệ chuyển đổi đặt món trực tuyến và đặt theo nhóm văn phòng.

## Colors
- **Brand Green (`#2E6B3E`)**: Màu xanh thảo mộc, lấy cảm hứng từ lá tía tô, kinh giới và lá chuối tươi lót mẹt. Sử dụng cho Logo thương hiệu, các nút hành động đặt theo nhóm văn phòng và các chứng nhận chất lượng.
- **CTA Orange (`#F57C00`) & Hover (`#E65100`)**: Màu cam ấm tượng trưng cho sự giòn rụm của đậu rán và ớt tươi. Đây là màu dẫn dắt hành động chính: Hotline, giá khuyến mãi `35K`, nút "ĐẶT GIAO NGAY" và "+ THÊM VÀO GIỎ".
- **Background Primary (`#F7F5EE`)**: Màu nền ngà ấm gợi cảm giác mẹt tre, bún lá và không gian ẩm thực thân thuộc, mang lại trải nghiệm thị giác dễ chịu hơn màu trắng chói.
- **Text Primary (`#1C1917`)**: Màu than ấm (warm charcoal), độ tương phản cao đạt chuẩn WCAG AAA trên nền kem `#F7F5EE`.
- **Text Secondary (`#57534E`)**: Màu đá xám ấm cho phụ đề, thông tin thành phần và chú thích.

## Typography
Sử dụng bộ font hình học **Be Vietnam Pro** (Google Fonts) được thiết kế đặc thù cho tiếng Việt, giúp các ký tự có dấu thanh cân đối, sắc nét ở mọi kích thước:
- **Hero Headline (H1)**: 42px (2.625rem), ExtraBold (800), line-height 1.22, tracking-normal.
- **Section Titles (H2)**: 22px (1.375rem), Bold (700), line-height 1.35.
- **Price Tag**: 19px (1.1875rem), Bold (700), màu cam thương hiệu `#F57C00`.
- **Body Text**: 15px - 16px (0.9375rem - 1rem), Regular (400), line-height 1.6, màu `#57534E`.
- **Navigation Links**: 15px, Medium (500), màu `#1C1917` hover `#2E6B3E`.

## Layout & Spacing
- **Container chuẩn**: Tối đa 1200px, căn giữa với lề an toàn tối thiểu 16px (mobile) và 24px - 32px (desktop).
- **Hệ thống Spacing 4px/8px**: Áp dụng nhất quán `4px`, `8px`, `16px`, `24px`, `32px`, `48px`.
- **Responsive Breakpoints**:
  - Mobile: `< 768px` (bố cục xếp dọc 1 cột, menu compact).
  - Tablet: `768px - 1024px` (bố cục 2 cột linh hoạt).
  - Desktop: `>= 1024px` (hiển thị đầy đủ 2 cột Hero và 3 thẻ combo dàn hàng ngang).

## Elevation & Depth
- **Thẻ món ăn**: `box-shadow: 0px 4px 16px 0px rgba(28, 25, 23, 0.06)`, bo góc `16px` mềm mại. Khi hover nâng nhẹ với `0px 10px 24px 0px rgba(28, 25, 23, 0.12)`.
- **Header**: Bám dính (sticky) nhẹ nhàng trên đỉnh với viền phân cách `border-b border-[#E7E5E4]`.

## Shapes
- **Bo góc tròn hoàn toàn (`rounded-full`)**: Cho các nút kêu gọi hành động (CTA buttons) và tag badge tạo cảm giác thân thiện, dễ bấm.
- **Bo góc thẻ (`rounded-2xl` - 16px)**: Dành cho thẻ combo món ăn và khung hình ảnh.

## Components
- **Header**: Thanh điều hướng tinh tế, gồm logo `Bún Đậu Phố`, danh mục link, số hotline cam nhấn mạnh và giỏ hàng có số đếm.
- **Hero Section**: Tiêu đề giật gân đánh trúng tâm lý bữa trưa ("TRƯA NAY ĂN GÌ?"), cụm nút đặt món kép và đĩa bún đậu tròn bắt mắt.
- **Trust Badges**: 3 cam kết vệ sinh an toàn thực phẩm với icon trực quan (Dầu mới, Rau sục ozone, Hộp chống tràn).
- **Combo Cards**: Thẻ combo hiển thị đồng thời ảnh chụp thực tế mẹt bún đậu, tên combo, tag "Bán chạy nhất", giá tiền và nút thêm vào giỏ tức thì.
- **Decor Elements**: Các họa tiết tự nhiên (lá chuối, ớt xanh, ớt đỏ, húng quế) được phân bổ ở các góc tạo sự sống động chân thực.

## Do's and Don'ts
- **DO**: Luôn dùng màu cam `#F57C00` cho giá tiền và nút mua ngay.
- **DO**: Dùng hình ảnh chụp thực tế có độ phân giải cao và nền trong suốt hoặc đồng bộ màu mẹt bún đậu.
- **DON'T**: Không dùng nền trắng tuyết `#FFFFFF` cho toàn trang vì sẽ làm mất đi cảm giác ấm cúng của nền kem `#F7F5EE`.
- **DON'T**: Không thay thế font `Be Vietnam Pro` bằng các font không hỗ trợ tối ưu dấu tiếng Việt.

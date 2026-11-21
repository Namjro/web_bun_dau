---
name: Cafe Pho - Tra Sua & Cafe Design System
version: 1.0.0
colors:
  brand:
    tea-green: "#1B4332"
  cta:
    peach-orange: "#FF6B35"
    peach-orange-hover: "#E85A25"
  background:
    main-cream: "#FFFDF9"
    frame-green: "#1B4332"
  surface:
    card-beige: "#F4EFE6"
    white: "#FFFFFF"
    nav-prev: "#E0E0E0"
  text:
    primary: "#000000"
    brand-green: "#1B4332"
    muted: "#52525B"
    inverse: "#FFFFFF"
    placeholder: "#CCCCCC"
  border:
    street-black: "#141414"
    solid-black: "#000000"
    muted-gray: "#D9D9D9"
typography:
  fontFamily:
    sans: "'Be Vietnam Pro', system-ui, -apple-system, sans-serif"
    display-logo: "'Bebas Neue', sans-serif"
    display-hero: "'Bevan', serif"
    display-banner: "'Barlow', sans-serif"
  logo:
    fontFamily: "{typography.fontFamily.display-logo}"
    fontSize: 3.5rem
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-0.02em"
    textColor: "{colors.text.inverse}"
  h1-hero:
    fontFamily: "{typography.fontFamily.display-hero}"
    fontSize: 3.75rem
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "0.02em"
    textColor: "{colors.text.brand-green}"
  subtitle-hero:
    fontFamily: "{typography.fontFamily.sans}"
    fontSize: 2rem
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
    textColor: "{colors.text.muted}"
  h2-section:
    fontFamily: "{typography.fontFamily.sans}"
    fontSize: 2rem
    fontWeight: 700
    lineHeight: 1.2
    textColor: "{colors.text.primary}"
  h3-card:
    fontFamily: "{typography.fontFamily.sans}"
    fontSize: 1.125rem
    fontWeight: 700
    lineHeight: 1.3
    textColor: "{colors.text.primary}"
  price:
    fontFamily: "{typography.fontFamily.sans}"
    fontSize: 1.125rem
    fontWeight: 700
    lineHeight: 1.3
    textColor: "{colors.cta.peach-orange}"
  body-regular:
    fontFamily: "{typography.fontFamily.sans}"
    fontSize: 0.9375rem
    fontWeight: 500
    lineHeight: 1.5
  label-button:
    fontFamily: "{typography.fontFamily.sans}"
    fontSize: 0.875rem
    fontWeight: 700
    lineHeight: 1.0
    textColor: "{colors.text.inverse}"
rounded:
  xs: 4px
  sm: 8px
  md: 10px
  banner: 11.812px
  lg: 16px
  frame-bottom: 36px
  full: 999px
spacing:
  xs: 4px
  sm: 10px
  md: 14px
  frame-bottom: 20px
  frame-side: 23px
  card-gap: 28px
elevation:
  street-hard: "3px 3px 0px 0px #141414"
  street-hard-banner: "3.544px 3.544px 0px 0px #141414"
components:
  button-primary-pill:
    backgroundColor: "{colors.cta.peach-orange}"
    textColor: "{colors.text.inverse}"
    rounded: "{rounded.full}"
    shadow: "{elevation.street-hard}"
    border: "2px solid {colors.border.solid-black}"
  button-hero-delivery:
    backgroundColor: "{colors.cta.peach-orange}"
    textColor: "{colors.text.inverse}"
    rounded: "{rounded.lg}"
    shadow: "{elevation.street-hard}"
    border: "2px solid {colors.border.solid-black}"
    width: 244px
    height: 120px
  card-best-seller:
    backgroundColor: "{colors.surface.card-beige}"
    rounded: "{rounded.sm}"
    shadow: "{elevation.street-hard}"
    border: "1px solid {colors.border.solid-black}"
    width: 353px
    height: 126px
---

## Overview
Hệ thống thiết kế **Cafe Phố - Trà Sữa & Cafe** (dựa trên file Figma `Trà sữa`, `node-id=1:2`) mang phong cách **Neo-Brutalist Street Drink**: trẻ trung, năng động, hướng tới đối tượng học sinh - sinh viên và giới trẻ văn phòng ("Giá sinh viên, giao siêu tốc 20 phút!"). Đặc trưng bởi khung viền xanh trà đậm bao quanh 1 màn hình duy nhất, nền kem ấm, màu cam đào nổi bật, viền đen sắc nét và đổ bóng khối cứng (`Shadow/Street_Hard: 3px 3px 0px #141414`).

## Colors
- **Xanh Trà (`--xanh-trà: #1B4332`)**: Màu chủ đạo của khung viền toàn màn hình, thanh Header trên cùng, tiêu đề `TRÀ SỮA & CAFE` và mảng bóng đổ dưới đáy 2 ly nước Hero.
- **Nền Kem Chính (`--main-bg: #FFFDF9`)**: Màu nền của khung nội dung chính, tạo độ tương phản dịu mắt với viền xanh trà `#1B4332` và làm nổi bật hình minh họa ly trà sữa/cafe.
- **Nền Thẻ Sản Phẩm (`--bg-card: #F4EFE6`)**: Màu be kem ấm dùng cho các thẻ sản phẩm trong mục `Best Sellers`.
- **Cam Đào CTA (`--cam-đào: #FF6B35`)**: Màu nhấn hành động cho nút `ĐẶT NGAY`, thẻ `ĐẶT GIAO NGAY`, số lượng khuyến mãi `Mua 2 Tặng 1`, giá tiền `45.000đ` và nút `+` thêm món.
- **Chữ Phụ (`--text-mute: #52525B`)**: Màu xám than dùng cho dòng phụ đề Hero `"Giá sinh viên, giao siêu tốc 20 phút!"`.
- **Viền & Bóng Cứng (`--border: #141414` / `#000000`)**: Dùng cho viền thẻ, viền nút bấm, viền chữ (outside stroke) và bóng cứng Neo-Brutalist.

## Typography
Kết hợp 4 bộ font Google Fonts tạo cá tính đường phố (Street Pop / Neo-Brutalist):
- **Logo Thương Hiệu (`Bebas Neue` Regular)**: `56px`, `line-height: 1.1`, `letter-spacing: -1.12px`, màu trắng cho chữ `CAFE PHỐ`.
- **Tiêu Đề Hero (`Bevan` Regular)**: `60px`, `line-height: 1.15`, `letter-spacing: 1.2px`, màu xanh trà `#1B4332` cho chữ `TRÀ SỮA & CAFE`.
- **Tiêu Đề Banner Đặt Nhóm (`Barlow` Bold)**: `23.625px`, `line-height: 1.3`, chữ trắng có viền đen ngoài (`-webkit-text-stroke: 2.8px #141414; paint-order: stroke fill`) và bóng cứng `3px 3px 0px #141414`.
- **Hệ thống Nội dung & UI (`Be Vietnam Pro`)**:
  - `Heading/H2_Section`: `32px` Bold (`700`), `line-height: 1.2` (`Best Sellers`, phụ đề Hero).
  - `Heading/H3_Card`: `18px` Bold (`700`), `line-height: 1.3` (Tên món `Trà sữa chân châu đương đen` và giá `45.000đ`).
  - `CTA Hero Label`: `20px` ExtraBold (`800`), chữ trắng có viền đen ngoài (`-webkit-text-stroke: 2.5px #141414; paint-order: stroke fill`) và bóng cứng `3px 3px 0px #141414` (`ĐẶT GIAO NGAY`).
  - `Body/Regular`: `15px` Medium (`500`), `line-height: 1.5` (Ô tìm kiếm `"Tìm kiếm..."`).
  - `Label/Button_Price`: `14px` Bold (`700`), `line-height: 1.0` (`ĐẶT NGAY`).

## Layout & Spacing
- **Khung 1 Màn Hình (`100vw × 100vh`, `overflow-hidden`)**: Toàn bộ giao diện gói gọn trong 1 màn hình duy nhất với nền `#1B4332`.
- **Tỷ lệ Viền Xanh Mỏng Chuẩn Thiết Kế (`1440 × 1024`)**:
  - Thanh Header trên cùng cao `99px` (co giãn theo màn hình).
  - Viền trái: `23px`
  - Viền phải: `23px`
  - Viền dưới: `20px`
- **Khung Nội Dung Kem (`1394 × 905`)**: Bo tròn 2 góc dưới `36px` (`rounded-bl-[36px] rounded-br-[36px]`), tự động co giãn tỷ lệ (`scale`) để hiển thị đầy đủ cụm Hero và 3 thẻ `Best Sellers` trong 1 màn hình.

## Elevation & Depth
- **Shadow/Street_Hard**: Toàn bộ nút bấm, thẻ sản phẩm và nút điều hướng sử dụng bóng đổ cứng không làm mờ (`3px 3px 0px #141414`).
- **Outside Text Stroke + Hard Text Shadow**: Các tiêu đề kêu gọi hành động trên nền cam/ảnh (`ĐẶT GIAO NGAY`, `ĐẶT NHÓM - CHIA SHIP`, `Mua 2 Tặng 1`) bắt buộc kết hợp viền chữ đen bên ngoài (`paint-order: stroke fill; -webkit-text-stroke: 2.4px–2.8px #141414`) cùng bóng chữ cứng `3px 3px 0px #141414`.

## Shapes
- **Khung chính**: Bo góc dưới `36px`, góc trên vuông tiếp giáp Header xanh trà.
- **Nút `ĐẶT NGAY`**: Hình viên thuốc (`rounded-[999px]`), viền đen `2px`.
- **Nút `ĐẶT GIAO NGAY`**: Hình chữ nhật bo góc `16px` (`244 × 120px`), viền đen `2px`.
- **Thẻ `Best Sellers`**: Hình chữ nhật ngang bo góc `8px` (`353 × 126px`), viền đen `1px`, ảnh món bo góc `8px` (`100 × 100px`), nút `+` bo góc `4px` (`40.5 × 36px`).

## Components
- **TraSuaHeader**: Logo `CAFE PHỐ`, 3 mục điều hướng (`THỰC ĐƠN`, `ĐẶT NHÓM`, `KHUYẾN MÃI`), thanh tìm kiếm nền trắng `321px` và nút `ĐẶT NGAY`.
- **TraSuaHero**: Cụm tiêu đề `TRÀ SỮA & CAFE`, cụm artwork 2 ly nước kèm 52 vector splash vẽ tay và đế ellipse xanh nối liền viền trái, nút `ĐẶT GIAO NGAY` có hình shipper, cụm Vespa + cột chỉ đường và banner `ĐẶT NHÓM - CHIA SHIP`.
- **TraSuaBestSellers**: Tiêu đề `Best Sellers`, cặp nút điều hướng `<` / `>` (`36 × 36px`) và 3 thẻ sản phẩm ngang.
- **TraSuaOrderDrawer**: Ngăn kéo giỏ hàng Neo-Brutalist tích hợp chế độ Đặt Nhóm Mua 2 Tặng 1.

## Do's and Don'ts
- **DO**: Giữ toàn bộ giao diện vừa khít trong 1 màn hình (`h-screen w-screen overflow-hidden`) với viền xanh trái/phải (`23px`) và dưới (`20px`) mỏng đều.
- **DO**: Luôn dùng `paint-order: stroke fill` kèm `-webkit-text-stroke` và `text-shadow: 3px 3px 0px #141414` cho chữ trên nút `ĐẶT GIAO NGAY` và thẻ `ĐẶT NHÓM - CHIA SHIP`.
- **DON'T**: Không dùng bóng mờ (blurred box-shadow) của giao diện Bún Đậu cho các thẻ của giao diện Trà Sữa.
- **DON'T**: Không import chéo component hoặc context giữa `src/projects/tra-sua` và `src/projects/bun-dau`.

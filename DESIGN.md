# Hệ Thống Thiết Kế (Design Systems) — Đa Dự Án Độc Lập

Kho mã nguồn này hiện được tách biệt hoàn toàn thành **2 dự án giao diện độc lập** trong thư mục `src/projects/`, mỗi dự án sở hữu trọn bộ file quy định thiết kế (`DESIGN.md`), `tokens/`, `config/`, `constants/`, `types/` và `components/` riêng để thuận tiện tách thành từng repository/dự án độc lập bất cứ lúc nào:

---

## 1. Dự án Bún Đậu Phố (`/` — `src/projects/bun-dau/`)
- **Tài liệu Quy định Thiết kế (`DESIGN.md`)**: [src/projects/bun-dau/DESIGN.md](./src/projects/bun-dau/DESIGN.md)
- **Design Tokens TypeScript**: [src/projects/bun-dau/tokens/index.ts](./src/projects/bun-dau/tokens/index.ts)
- **Mã nguồn dự án**: `src/projects/bun-dau/`
- **Tài nguyên tĩnh (`public/`)**: `public/images/`, `public/icons/`
- **Route hiển thị**: `/` (`src/app/page.tsx`)

---

## 2. Dự án Cafe Phố - Trà Sữa & Cafe (`/tra-sua` — `src/projects/tra-sua/`)
- **Tài liệu Quy định Thiết kế (`DESIGN.md`)**: [src/projects/tra-sua/DESIGN.md](./src/projects/tra-sua/DESIGN.md)
- **Design Tokens TypeScript**: [src/projects/tra-sua/tokens/index.ts](./src/projects/tra-sua/tokens/index.ts)
- **Mã nguồn dự án**: `src/projects/tra-sua/`
- **Tài nguyên tĩnh (`public/`)**: `public/tra-sua/`
- **Route hiển thị**: `/tra-sua` (`src/app/tra-sua/page.tsx`)

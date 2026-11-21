export const traSuaSiteConfig = {
  name: "CAFE PHỐ",
  headline: "TRÀ SỮA & CAFE",
  subtitle: "Giá sinh viên, giao siêu tốc 20 phút!",
  description:
    "Trà sữa trân châu đường đen & Cafe Phố chuẩn vị, giá sinh viên, đặt nhóm chia ship mua 2 tặng 1, giao siêu tốc trong 20 phút.",
  navMenu: [
    { id: "menu" as const, label: "THỰC ĐƠN" },
    { id: "group" as const, label: "ĐẶT NHÓM" },
    { id: "promo" as const, label: "KHUYẾN MÃI" },
  ],
  groupPromo: {
    title: "ĐẶT NHÓM - CHIA SHIP",
    buyQuantity: 2,
    freeQuantity: 1,
    defaultCupPrice: 45000,
  },
} as const;

"use client";

import React from "react";
import { ProductSection } from "./ProductSection";
import { PROMOTION_PRODUCTS } from "@/constants/products";

export function QuickOrderList() {
  return (
    <ProductSection
      id="promotions"
      title="Thực đơn & Khuyến mãi"
      badgeText="Hot Trưa Nay"
      products={PROMOTION_PRODUCTS}
      initialLimit={3}
    />
  );
}

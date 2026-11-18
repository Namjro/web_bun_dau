export interface ProductCombo {
  id: string;
  name: string;
  subtitle?: string;
  price: number;
  originalPrice?: number;
  badge?: string;
  description: string;
  image: string;
  popular?: boolean;
  category?: string;
}

export type ProductItem = ProductCombo;

export interface TrustBadgeItem {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  alt: string;
}

import { ProductCombo } from "./product";

export interface CartItem {
  product: ProductCombo;
  quantity: number;
}

export type SaucePreference = "mam_tom" | "nuoc_mam";

export interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  saucePreference: SaucePreference;
  orderNote: string;
  setSaucePreference: (pref: SaucePreference) => void;
  setOrderNote: (note: string) => void;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addToCart: (product: ProductCombo) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

export interface TraSuaProduct {
  id: string;
  nodeId: string;
  name: string;
  price: number;
  priceFormatted: string;
  image: string;
}

export interface OrderCartItem {
  product: TraSuaProduct;
  quantity: number;
}

export interface HeroVectorItem {
  nodeId: string;
  boxClass: string;
  insetClass: string;
  src: string;
}

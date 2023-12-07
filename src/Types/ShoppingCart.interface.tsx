import { ReactNode } from "react";

export interface Item {
  id: number;
  name: string;
  quantity: number;
}

export interface ShoppingCartContextType {
  cart: Item[];
  addItemToCart: (item: Item) => void;
  removeItemFromCart: (itemId: number) => void;
  updateCartItemQuantity: (itemId: number, newQuantity: number) => void;
}

export interface ShoppingCartProviderProps {
  children: ReactNode;
}

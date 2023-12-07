import { createContext, useContext, useState, useEffect } from "react";
import { Item } from "../Types/ShoppingCart.interface";
import { ShoppingCartContextType } from "../Types/ShoppingCart.interface";
import { ShoppingCartProviderProps } from "../Types/ShoppingCart.interface";

const ShoppingCartContext = createContext<ShoppingCartContextType | undefined>(
  undefined
);

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cart, setCart] = useState<Item[]>([]);

  // Load cart items from localStorage when the context is initialized
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const updateCartAndLocalStorage = (newCart: Item[]) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const addItemToCart = (item: Item) => {
    const updatedCart = [...cart, item];
    updateCartAndLocalStorage(updatedCart);
  };

  const removeItemFromCart = (itemId: number) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    updateCartAndLocalStorage(updatedCart);
  };

  const updateCartItemQuantity = (itemId: number, newQuantity: number) => {
    const updatedCart = cart.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    updateCartAndLocalStorage(updatedCart);
  };

  const contextValue: ShoppingCartContextType = {
    cart,
    addItemToCart,
    removeItemFromCart,
    updateCartItemQuantity,
  };

  return (
    <ShoppingCartContext.Provider value={contextValue}>
      {children}
    </ShoppingCartContext.Provider>
  );
}

export function useShoppingCart() {
  const context = useContext(ShoppingCartContext);
  if (!context) {
    throw new Error(
      "useShoppingCart must be used within a ShoppingCartProvider"
    );
  }
  return context;
}

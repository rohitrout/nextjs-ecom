"use client";

import { createContext, useState } from "react";

export const ContextStore = createContext({ cart: [], setCart: () => {} });

export function ContextProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState([]);

  const addToCart = (newItem: any) => {
    setCart((prev) => {
      const index = prev.findIndex((item) => item.id === newItem.id);
      if (index >= 0) {
        // If the item is already in the cart, create a new array with the updated quantity
        const updatedCart = [...prev];
        updatedCart[index] = {
          ...updatedCart[index],
          cartQuantity: updatedCart[index].cartQuantity + 1,
        };
        return updatedCart;
      } else {
        // If the item is not in the cart, add it with a quantity of 1
        const tempProduct = { ...newItem, cartQuantity: 1 };
        return [...prev, tempProduct];
      }
    });
  };

  const removeFromCart = (itemId: number) => {
    setCart((prev) => prev.filter((item) => item.id !== itemId));
  };

  const decreaseFromCart = (itemId: any) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === itemId.id
          ? { ...item, cartQuantity: Math.max(item.cartQuantity - 1, 1) }
          : item
      )
    );
  };
  // setCart((prev) => [...prev, item]);
  const value = { cart, setCart, addToCart, removeFromCart, decreaseFromCart };

  return (
    <ContextStore.Provider value={value}>{children}</ContextStore.Provider>
  );
}

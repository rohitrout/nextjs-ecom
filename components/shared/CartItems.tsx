"use client";
import { useContext } from "react";
import { ContextStore } from "@/context/ContextProvider";
import { ContextValue } from "@/types/types";
const CartItems = () => {
  const { cart } = useContext(ContextStore) as ContextValue;
  return <div>{cart.length}</div>;
};

export default CartItems;

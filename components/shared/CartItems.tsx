"use client";
import { useContext } from "react";
import { ContextStore } from "@/context/ContextProvider";

const CartItems = () => {
  const { cart } = useContext(ContextStore);
  return <div>{cart.length}</div>;
};

export default CartItems;

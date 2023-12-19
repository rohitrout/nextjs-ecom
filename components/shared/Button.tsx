"use client";
import { useContext } from "react";
import { ContextStore } from "@/context/ContextProvider";

const Button = ({ prodData }: any) => {
  const { cart, setCart, addToCart } = useContext(ContextStore);

  // console.log(cart);
  return (
    <button
      onClick={() => addToCart(prodData)}
      className="border-2 border-purple-300 p-2 px-6 rounded-lg font-semibold"
    >
      Buy Now
    </button>
  );
};

export default Button;

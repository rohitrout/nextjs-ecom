"use client";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { ContextStore } from "@/context/ContextProvider";
import CartCard from "@/components/shared/CartCard";

const Cart = () => {
  const router = useRouter();
  const { cart, addToCart, removeFromCart, decreaseFromCart } =
    useContext(ContextStore);

  const handleCheckout = () => {
    router.push("/checkout");
  };

  const totalValue = () => {
    return cart.reduce((total, item) => {
      const itemTotal = item.price * item.cartQuantity;
      return total + itemTotal;
    }, 0);
  };

  function finalValue() {
    const total = totalValue();
    const increasedValue = (total * 1.18).toFixed(2);
    return increasedValue;
  }

  return cart.length === 0 ? (
    <h1 className="text-4xl p-10 pt-24 ">No Items in Cart...</h1>
  ) : (
    <div className="flex pt-24 justify-around ">
      <div className="flex flex-col ">
        {cart.map((item: any, index) => {
          return (
            <CartCard
              key={index}
              cardData={item}
              cartQuantity={item.cartQuantity}
              removeFromCart={removeFromCart}
              decreaseFromCart={decreaseFromCart}
              addToCart={addToCart}
            />
          );
        })}
      </div>
      <div className="flex flex-col gap-4  pt-36 sticky top-24">
        <span className="font-mono text-2xl">
          Total: ${totalValue().toFixed(2)}
        </span>
        <span className="font-mono text-xl">GST: 18%</span>
        <span className="font-mono text-2xl pb-6">
          Grand Total: ${finalValue()}
        </span>

        <button
          onClick={handleCheckout}
          className="text-2xl rounded-lg border-2 border-red-300 p-2"
        >
          Proceed to Checkout ➡️
        </button>
      </div>
    </div>
  );
};

export default Cart;

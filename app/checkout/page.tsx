"use client";
import { useRef, useState } from "react";
import { useContext } from "react";
import { ContextStore } from "@/context/ContextProvider";

const Checkout = () => {
  const [summary, setSummary] = useState(false);
  const { setCart } = useContext(ContextStore);
  const name = useRef(null);
  const email = useRef(null);
  const address = useRef(null);
  const pincode = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name.current.value);
    console.log("Email:", email.current.value);
    console.log("Address:", address.current.value);
    console.log("Pincode:", pincode.current.value);
    setCart([]);
    setSummary(true);
  };

  return (
    <div className="pt-36 flex flex-col items-center ">
      {summary ? (
        <p className="pt-16 pb-8 text-3xl">
          Hi! {name.current.value}, Thank you for placing the order with us.
        </p>
      ) : (
        <div>
          <span className="pt-16 pb-8 text-3xl">Checkout Form</span>
          <form className="w-[500px]">
            <input
              ref={email}
              type="text"
              placeholder="Enter your Email"
              className="py-3 my-4 w-full px-4 rounded-lg bg-gray-100"
            />
            <input
              ref={name}
              type="text"
              placeholder="Enter your Name"
              className="py-3 my-4 w-full px-4 rounded-lg bg-gray-100"
            />
            <input
              ref={address}
              type="text"
              placeholder="Enter Address"
              className="py-3 my-4 w-full px-4 rounded-lg bg-gray-100"
            />
            <input
              ref={pincode}
              type="text"
              placeholder="Enter Pincode"
              className="py-3 my-4 w-full px-4 rounded-lg bg-gray-100"
            />
            <button
              onClick={handleSubmit}
              className="font-semibold text-lg w-full border-2 border-red-300 p-2 rounded-lg mt-6"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Checkout;

import CartItems from "./CartItems";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="w-full z-40 fixed shadow-lg bg-red-400 text-white h-16 flex justify-between items-center px-24">
      <div className="text-xl font-bold">
        <Link href="/">Your Store</Link>
      </div>
      <div className="flex gap-12 text-lg">
        <Link href="/cart">
          <span className="flex gap-2 font-semibold">
            Cart <CartItems />
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="bg-red-400 text-white h-16 flex justify-between items-center px-24">
      <div className="text-xl font-bold">
        <Link href="/">Logo</Link>
      </div>
      <div className="flex gap-12 text-lg">
        <span>Cart</span>
        <span>SignIn</span>
      </div>
    </nav>
  );
};

export default Navbar;

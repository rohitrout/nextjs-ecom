import Image from "next/image";
const CartCard = ({
  cardData,
  cartQuantity,
  removeFromCart,
  decreaseFromCart,
  addToCart,
}: any) => {
  const { id, title, price, description, image, rating, category } = cardData;

  return (
    <section className="rounded-lg p-3 pt-6 grid grid-cols-4 items-center border-b-2 border-gray-200">
      <div className=" h-[200px] flex justify-center items-center">
        <Image
          src={image}
          alt="productImage"
          height={90}
          width={200}
          className="px-8 object-cover"
          //   style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>
      <div className="flex flex-col gap-2 col-span-2">
        {" "}
        <div className="pt-6 font-bold">
          <span className="font-bold text-gray-500">$</span> {price}
        </div>
        <div className="font-semibold">{`${title?.slice(0, 25)}...`}</div>
        <div>
          <span className="font-bold text-gray-500">category </span>
          {category}
        </div>
        <div className="flex items-center gap-1">
          <span className="font-bold text-gray-500">Ratings </span>
          {rating?.rate}
          <span>⭐</span>
        </div>
      </div>
      <div className="flex flex-col gap-12 items-center">
        <div className="flex items-center gap-4">
          <button
            onClick={() => decreaseFromCart(cardData)}
            className="text-3xl"
          >
            -
          </button>
          <span className="font-bold text-3xl">{cartQuantity}</span>
          <button onClick={() => addToCart(cardData)} className="text-3xl">
            +
          </button>
        </div>

        <button
          onClick={() => removeFromCart(id)}
          className="p-2 border-2 border-red-300 rounded-lg"
        >
          Remove ❌
        </button>
      </div>
    </section>
  );
};

export default CartCard;

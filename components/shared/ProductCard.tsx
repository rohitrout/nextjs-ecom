import Image from "next/image";
const ProductCard = ({ productData }: any) => {
  const { id, title, price, description, image, rating, category } =
    productData;
  return (
    <section className="p-3 pt-6 flex flex-col gap-2 border-2 border-gray-400 w-[300px]">
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
      <div className="pt-6 font-bold">
        <span className="font-bold text-gray-500">$</span> {price}
      </div>
      <div className="font-semibold">{`${title?.slice(0, 25)}...`}</div>
      <div>{`${description?.slice(0, 120)}...`}</div>
      <div>
        <span className="font-bold text-gray-500">category </span>
        {category}
      </div>
      <div>
        <span className="font-bold text-gray-500">Ratings </span>
        {rating?.rate}
      </div>
    </section>
  );
};

export default ProductCard;

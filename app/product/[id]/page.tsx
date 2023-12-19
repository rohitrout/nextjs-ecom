import { fetchProduct } from "@/actions/actions";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/shared/Button";

const Product = async ({ params }: { params: { id: string } }) => {
  const paramsId = params.id;
  const response = await fetchProduct(paramsId);
  const { id, title, price, description, image, rating, category } = response;

  return (
    <div className="pt-24">
      <Link href="/">
        <span className="ml-6 border-2 border-blue-300 p-2 px-6 rounded-lg">
          Back
        </span>
      </Link>
      <section className="p-8 pt-6 mt-6 flex justify-around border-2 border-gray-200">
        <div className="flex justify-center items-center">
          <Image
            src={image}
            alt="productImage"
            height={190}
            width={300}
            className="px-8 object-cover"
          />
        </div>
        <div className="flex flex-col gap-3">
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
          <div className="pt-5 flex gap-6 items-center">
            <Button prodData={response} />
            <Link href="/cart">
              <button className="border-2 border-purple-300 px-6 py-2 rounded-lg font-semibold">
                Move to Cart
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;

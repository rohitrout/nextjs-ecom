import ProductCard from "@/components/shared/ProductCard";
import { fetchProductsData } from "../actions/actions";
import Link from "next/link";

export default async function Home() {
  const response = await fetchProductsData();
  // console.log(response);
  return (
    <main className="flex min-h-screen flex-wrap gap-4 justify-between p-12">
      {response.map((item: any) => {
        return (
          <Link href={`/product/${item.id}`} key={item.id}>
            <ProductCard productData={item} />
          </Link>
        );
      })}
    </main>
  );
}

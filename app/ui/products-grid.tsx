"use client";
import { CardComponent } from "@/app/ui/product-card";
import { fetchProducts } from "@/app/lib/data";
import { Product } from "@/app/lib/definitions";

export async function ProductsGrid({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const products = await fetchProducts(currentPage, query);

  return (
    <>
      <div
        className="mx-auto grid justify-center gap-8 p-4 md:grid-cols-2
      md:px-8 lg:mx-auto lg:max-w-screen-lg  lg:grid-cols-3"
      >
        {products?.map((product: Product) => (
          <CardComponent
            numStars={5}
            imageSrc={product.image_url}
            productName={product.name}
            price={product.price}
            key={product.id}
          />
        ))}
      </div>
    </>
  );
}

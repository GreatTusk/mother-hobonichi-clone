import { ProductCarousel } from "@/app/ui/products/product-carousel";
import { Product } from "@/app/lib/definitions";
import React from "react";
import { PurchaseButton } from "@/app/ui/products/purchase-button";

export default function ImageHeading({ product }: { product: Product }) {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 md:flex md:flex-col md:items-center lg:grid lg:grid-cols-2 lg:gap-8 lg:py-16 xl:gap-0">
        <div className="lg:order-last lg:mx-16 lg:mt-0 lg:flex">
          <ProductCarousel image_url={product.image_url} />
        </div>
        <div className="mr-auto place-self-center lg:mx-16">
          <h1 className="mb-4 mt-6 max-w-2xl text-center text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-left md:text-5xl xl:text-6xl">
            {product.name}
          </h1>
          <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
            {product.name}
          </p>
          <div className="mb-6 flex max-w-2xl justify-center font-light text-gray-500 dark:text-gray-400 md:justify-start md:text-lg lg:mb-8 lg:text-xl">
            <PurchaseButton />
          </div>
        </div>
      </div>
    </section>
  );
}

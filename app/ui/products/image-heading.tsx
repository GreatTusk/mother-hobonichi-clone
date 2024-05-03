import { ProductCarousel } from "@/app/ui/products/product-carousel";
import { Product } from "@/app/lib/definitions";

export default function ImageHeading({ product }: { product: Product }) {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 md:flex md:flex-col md:items-center lg:grid lg:grid-cols-2 lg:gap-8 lg:py-16 xl:gap-0">
        <div className="mr-auto place-self-center lg:mx-16">
          <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
            {product.name}
          </h1>
          <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
            {product.name}
          </p>
          <a
            href="#"
            className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900 mr-3 inline-flex items-center justify-center rounded-lg px-5 py-3 text-center text-base font-medium text-white focus:ring-4"
          >
            Buy now
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
        <div className="lg:mx-16 lg:mt-0 lg:flex">
          <ProductCarousel image_url={product.image_url} />
        </div>
      </div>
    </section>
  );
}

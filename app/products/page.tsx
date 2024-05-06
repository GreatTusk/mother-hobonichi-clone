import { Breadcrumbs } from "@/app/ui/products/breadcrumb";
import ImageHeading from "@/app/ui/products/image-heading";
import { fetchAllProducts, fetchProductsPages } from "@/app/lib/data";
import Pagination from "@/app/ui/pagination";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const [totalPages, all_products] = await Promise.all([
    fetchProductsPages(query),
    fetchAllProducts(currentPage),
  ]);

  return (
    <main>
      <div className="mx-auto max-w-screen-xl px-4 pb-12 pt-24 lg:px-6">
        <Breadcrumbs product_name="" />
      </div>
      <div className="mx-auto mb-8 max-w-screen-sm text-center">
        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white lg:text-4xl">
          Featured products
        </h2>
        <p className="font-light text-gray-500 dark:text-gray-400 sm:text-xl">
          We use an agile approach to test assumptions and connect with the
          needs of your audience early and often.
        </p>
      </div>
      {all_products.map((product, index) => (
        <ImageHeading product={product} key={product.id} />
      ))}
      <div className="mb-16 mt-auto flex items-center justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </main>
  );
}

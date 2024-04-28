import { ProductsGrid } from "@/app/ui/products-grid";
import { SearchBar } from "@/app/ui/search-bar";

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

  return (
    <main>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 pb-12 pt-24 lg:px-6">
          <div className="mx-auto mb-8 max-w-screen-sm text-center">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white lg:text-4xl">
              Featured products
            </h2>
            <p className="font-light text-gray-500 dark:text-gray-400 sm:text-xl">
              We use an agile approach to test assumptions and connect with the
              needs of your audience early and often.
            </p>
          </div>
          <div className="mx-auto mb-8 max-w-screen-sm text-center">
            <SearchBar />
          </div>
          <ProductsGrid />
        </div>
      </section>
    </main>
  );
}

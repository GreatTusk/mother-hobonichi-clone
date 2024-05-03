import { notFound } from "next/navigation";
import { Metadata } from "next";
import { fetchProductById } from "@/app/lib/data";
import { ProductCarousel } from "@/app/ui/products/product-carousel";

export const metadata: Metadata = {
  title: "Edit invoice",
};

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const product = await fetchProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <main>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 pb-12 pt-24 lg:px-6">
          <div className="mx-auto mb-8 max-w-screen-sm text-center">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white lg:text-4xl">
              {product.name}
            </h2>
            <p className="font-light text-gray-500 dark:text-gray-400 sm:text-xl">
              We use an agile approach to test assumptions and connect with the
              needs of your audience early and often.
            </p>
          </div>
          <div className="mx-auto size-96 text-center">
            <ProductCarousel image_url={product.image_url} />
          </div>
        </div>
      </section>

      {/*<Breadcrumbs*/}
      {/*  breadcrumbs={[*/}
      {/*    { label: 'Invoices', href: '/dashboard/invoices' },*/}
      {/*    {*/}
      {/*      label: 'Edit Invoice',*/}
      {/*      href: `/dashboard/invoices/${id}/edit`,*/}
      {/*      active: true,*/}
      {/*    },*/}
      {/*  ]}*/}
      {/*/>*/}
      {/*<Form invoice={invoice} customers={customers} />*/}
    </main>
  );
}

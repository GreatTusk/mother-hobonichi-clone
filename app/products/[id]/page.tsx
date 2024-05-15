import { notFound } from "next/navigation";
import { Metadata } from "next";
import { fetchProductById } from "@/app/lib/data";
import ImageHeading from "@/app/ui/products/image-heading";
import { Breadcrumbs } from "@/app/ui/products/breadcrumb";

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
      <div className="mx-auto max-w-screen-xl px-4 pb-12 pt-24 lg:px-6">
        <Breadcrumbs product_name={product.name} />
        <ImageHeading product={product} />
      </div>
    </main>
  );
}

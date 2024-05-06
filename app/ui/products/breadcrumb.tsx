import { Breadcrumb, BreadcrumbItem } from "flowbite-react";
import { HiHome } from "react-icons/hi";

export function Breadcrumbs({ product_name }: { product_name?: string }) {
  return (
    <Breadcrumb aria-label="Default breadcrumb example">
      <BreadcrumbItem href="/" icon={HiHome}>
        Home
      </BreadcrumbItem>
      {product_name ? (
        <>
          <BreadcrumbItem href="/products">Products</BreadcrumbItem>
          <BreadcrumbItem>{product_name}</BreadcrumbItem>
        </>
      ) : (
        <BreadcrumbItem>Products</BreadcrumbItem>
      )}
    </Breadcrumb>
  );
}

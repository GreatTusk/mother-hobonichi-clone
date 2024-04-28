"use client";
import { CardComponent } from "@/app/ui/product-card";
import { useState } from "react";
import { CustomFlowbiteTheme, Pagination } from "flowbite-react";
import { products } from "@/script/seed";

export function ProductsGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const productsOnPage = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  function PaginationComponent({ totalPages }: { totalPages: number }) {
    const onPageChange = (page: number) => setCurrentPage(page);
    const customStyles: CustomFlowbiteTheme["pagination"] = {
      base: "",
      layout: {
        table: {
          base: "text-sm text-secondaryColor dark:text-gray-400",
          span: "font-semibold text-gray-900 dark:text-white",
        },
      },
      pages: {
        base: "xs:mt-0 mt-2 inline-flex items-center -space-x-px",
        showIcon: "inline-flex",
        previous: {
          base:
            "ml-0 rounded-l-lg border border-gray-300 bg-white px-3 py-2 " +
            "leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 " +
            "dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 " +
            "enabled:dark:hover:text-white",
          icon: "h-5 w-5",
        },
        next: {
          base: "rounded-r-lg border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
          icon: "h-5 w-5",
        },
        selector: {
          base: "w-12 border border-gray-300 bg-white py-2 leading-tight text-gray-500 enabled:hover:bg-red-50 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
          active:
            "bg-red-50 text-red-600 hover:bg-red-100 hover:text-red-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white",
          disabled: "cursor-not-allowed opacity-50",
        },
      },
    };
    return (
      <div className="flex overflow-x-auto pt-4 sm:justify-center">
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(products.length / itemsPerPage)}
          onPageChange={onPageChange}
          showIcons
          theme={customStyles}
        />
      </div>
    );
  }

  return (
    <>
      <div
        className="mx-auto grid justify-center gap-8 p-4 md:grid-cols-2
      md:px-8 lg:mx-auto lg:max-w-screen-lg  lg:grid-cols-3"
      >
        {productsOnPage.map(
          (product: {
            imageSrc: string;
            productName: string;
            price: number;
          }) => (
            <CardComponent
              numStars={5}
              imageSrc={product.imageSrc}
              productName={product.productName}
              price={product.price}
            />
          ),
        )}
      </div>
      <PaginationComponent
        totalPages={Math.ceil(products.length / itemsPerPage)}
      />
    </>
  );
}

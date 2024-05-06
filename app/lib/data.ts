import { Product } from "@/app/lib/definitions";
import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";

const ITEMS_PER_PAGE = 6;

export async function fetchProducts(currentPage: number, query: string) {
  noStore();
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {
    const productQueryResult = await sql<Product>`
            SELECT ID,
                   name,
                   price,
                   image_url
            FROM PRODUCTS
            WHERE name ILIKE ${`%${query}%`}
               OR price::text ILIKE ${`%${query}%`}
            ORDER BY name DESC
            LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
        `;
    return productQueryResult.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch products.");
  }
}

export async function fetchAllProducts(currentPage: number) {
  noStore();
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {
    const productQueryResult = await sql<Product>`
            SELECT ID,
                   name,
                   price,
                   image_url
            FROM PRODUCTS
            ORDER BY name DESC
            LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
        `;
    return productQueryResult.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch products.");
  }
}

export async function fetchProductById(id: string) {
  noStore();
  try {
    const productQueryResult = await sql<Product>`
            SELECT name,
                   price,
                   image_url
            FROM PRODUCTS
            WHERE ID = ${id}
        `;
    return productQueryResult.rows[0];
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch product by id.");
  }
}

export async function fetchProductsPages(query: string) {
  noStore();
  try {
    const count = await sql`
            SELECT COUNT(*)
            FROM PRODUCTS
            WHERE name ILIKE ${`%${query}%`}
               OR price::text ILIKE ${`%${query}%`}
        `;

    return Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch total number of products.");
  }
}

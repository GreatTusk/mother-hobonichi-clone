import { Product } from "@/app/lib/definitions";
import { sql } from "@vercel/postgres";

const ITEMS_PER_PAGE = 3;

export async function fetchProducts(currentPage: number, query: string) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {
    const productQueryResult = await sql<Product>`
            SELECT id,
                   name,
                   price,
                   image_url
            FROM PRODUCTS
            WHERE name ILIKE ${`%${query}%`}
            ORDER BY name DESC
            LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
        `;
    return productQueryResult.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch products.");
  }
}

export async function fetchProductsPages(query: string) {
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

const { db } = require("@vercel/postgres");
export const products = [
  {
    imageSrc: "./img/friends_mother3/pic_10.jpg",
    productName: "MOTHER3 Plush Set",
    price: 11000,
  },
  {
    imageSrc: "./img/monosashi/pic_10.jpg",
    productName: "MOTHER Ruler",
    price: 2640,
  },
  {
    imageSrc: "./img/gshock2/pic_7.jpg",
    productName: "MOTHER × G-SHOCK second collaboration",
    price: 23980,
  },
  {
    imageSrc: "./img/doseisan_dame/pic_3.jpg",
    productName: "Mr. Saturn Plush “Melt your heartstrings.”",
    price: 3465,
  },
  {
    imageSrc: "./img/friends_yoyo/pic_6.jpg",
    productName: "Friend's Yo-Yo",
    price: 2200,
  },
  {
    imageSrc: "./img/friends_pokey_doseisan/pic_7.jpg",
    productName: "Pokey & Mr. Saturn Plush Set",
    price: 6600,
  },
  {
    imageSrc: "./img/friends/pic_9.jpg",
    productName: "Chosen Four Plush Set",
    price: 11000,
  },
  {
    imageSrc: "./img/tshirts_minch/pic_4.jpg",
    productName: "Minch Family T-Shirt",
    price: 5500,
  },
  {
    imageSrc: "./img/totebag_minch/pic_4.jpg",
    productName: "Tote Bag (The Minch Family)",
    price: 2200,
  },
  {
    imageSrc: "./img/sticker_minch/pic_3.jpg",
    productName: "The Minch Family Sticker",
    price: 440,
  },
  {
    imageSrc: "./img/pokey_wad_memo/pic_3.jpg",
    productName: "Pokey Wad of Bills Memo Pad",
    price: 880,
  },
  {
    imageSrc: "./img/souvenir_plate/pic_2.jpg",
    productName: "Souvenir Plate (New Pork City)",
    price: 1430,
  },
  {
    imageSrc: "./img/souvenirs_2/pic_3.jpg",
    productName: "Souvenir from New Pork City",
    price: 1870,
  },
  {
    imageSrc: "./img/acrylickeychain_tri/pic_3.jpg",
    productName: "Acrylic Keychain (Ness, Pokey, and King)",
    price: 1650,
  },
  {
    imageSrc: "./img/acrylickeychain_3/pic_2.jpg",
    productName: "Acrylic Keychain (Pokey)",
    price: 1320,
  },
  {
    imageSrc: "./img/clearfiles_3/pic_2.jpg",
    productName: "Clear File (Pokey)",
    price: 550,
  },
  {
    imageSrc: "./img/magnet_mascot3/pic_9.jpg",
    productName: "Character Magnet (Pokey)",
    price: 1320,
  },
  {
    imageSrc: "./img/magnet_mascot3/pic_3.jpg",
    productName: "Character Magnet (Paula)",
    price: 1320,
  },
  {
    imageSrc: "./img/magnet_mascot3/pic_5.jpg",
    productName: "Character Magnet (Jeff)",
    price: 1320,
  },
  {
    imageSrc: "./img/magnet_mascot3/pic_7.jpg",
    productName: "Character Magnet (Poo)",
    price: 1320,
  },
  {
    imageSrc: "./img/magnet_mascot3/pic_11.jpg",
    productName: "Character Magnet (Lucas)",
    price: 1320,
  },
  {
    imageSrc: "./img/magnet_mascot3/pic_13.jpg",
    productName: "Character Magnet (Claus)",
    price: 1320,
  },
  {
    imageSrc: "./img/magnet_mascot3/pic_15.jpg",
    productName: "Character Magnet (Salsa)",
    price: 1320,
  },
  {
    imageSrc: "./img/franklinbadge/pic_4.jpg",
    productName: "Franklin Badge",
    price: 3850,
  },
  {
    imageSrc: "./img/longtshirts_warehouse/pic_9.jpg",
    productName: "WAREHOUSE Long-Sleeved T-Shirt (MOTHER Logo/Off-White)",
    price: 8580,
  },
  {
    imageSrc: "./img/longtshirts_warehouse/pic_15.jpg",
    productName: "WAREHOUSE Long-Sleeved T-Shirt (MOTHER Logo/Black & White)",
    price: 8580,
  },
  {
    imageSrc: "./img/calendar2024/pic_1.jpg",
    productName: "Whiteboard Calendar 2024 (MOTHER) - Full Size",
    price: 1870,
  },
  {
    imageSrc: "./img/calendar2024/pic_15.jpg",
    productName: "Whiteboard Calendar 2024 (MOTHER) - Desktop Size with Pocket",
    price: 1100,
  },
  {
    imageSrc: "./img/yoyo/pic_6.jpg",
    productName: "Ness's Yo-Yo",
    price: 2200,
  },
  {
    imageSrc: "./img/tshirts_mother2/pic_8.jpg",
    productName: "MOTHER 2 Logo T-Shirt (White)",
    price: 4950,
  },
];
async function seedUsers(dbClient) {
  try {
    await dbClient.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await dbClient.sql`
      CREATE TABLE IF NOT EXISTS PRODUCTS (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        price INT NOT NULL,
        image_url TEXT NOT NULL
      );
    `;

    console.log(`Created "users" table`);

    // Insert data into the "users" table
    const insertedProducts = await Promise.all(
      products.map(async (product) => {
        return dbClient.sql`
        INSERT INTO PRODUCTS (name, price, image_url)
        VALUES (${product.productName}, ${product.price}, ${product.imageSrc})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedProducts.length} users`);

    return {
      createTable,
      products: insertedProducts,
    };
  } catch (error) {
    console.error("Error seeding users:", error);
    throw error;
  }
}

// async function main() {
//   const client = await db.connect();
//
//   await seedUsers(client);
//   await client.end();
// }
//
// main().catch((err) => {
//   console.error(
//     "An error occurred while attempting to seed the database:",
//     err,
//   );
// });

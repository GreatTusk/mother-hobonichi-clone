import { Carousel } from "flowbite-react";
import Image from "next/image";
import { carousel_theme } from "@/app/lib/themes";
import path from "path";
import { promises as fs } from "fs";

export async function ProductCarousel({ image_url }: { image_url: string }) {
  let { folder_path, alt_text, fileCount } = await getImageCount(image_url);

  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 ">
      <Carousel pauseOnHover className="h-full" theme={carousel_theme}>
        {Array.from({ length: fileCount }).map((_, index) => (
          <Image
            key={index}
            src={`${folder_path}pic_${index + 1}.jpg`}
            alt={alt_text + index + 1}
            width={880}
            height={880}
            placeholder="blur"
            blurDataURL="/carousel-1.svg"
          />
        ))}
      </Carousel>
    </div>
  );
}

async function getImageCount(image_url: string) {
  let folder_path = image_url.substring(0, image_url.lastIndexOf("/") + 1);
  const folder_abs_path = path.join(process.cwd(), "/public" + folder_path);
  const alt_text = folder_abs_path.substring(5, folder_abs_path.length - 1);
  let fileCount = 0;
  await fs
    .readdir(folder_abs_path)
    .then((files) => {
      fileCount = files.length;
    })
    .catch((error) => {
      console.error("Error reading directory:", error);
    });
  return { folder_path, alt_text, fileCount };
}

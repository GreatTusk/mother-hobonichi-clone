import { Carousel, CustomFlowbiteTheme } from "flowbite-react";
import Image from "next/image";
import { promises as fs } from "fs";
import path from "path";

export async function ProductCarousel({ image_url }: { image_url: string }) {
  // Assuming image_url is a path like '/images/pic_1.jpg'
  let folder_path = image_url.substring(0, image_url.lastIndexOf("/") + 1);
  const folder_abs_path = path.join(process.cwd(), "/public" + folder_path);
  const alt_text = folder_abs_path.substring(5, folder_abs_path.length - 1);
  let fileCount = 0;

  const custom_theme: CustomFlowbiteTheme["carousel"] = {
    root: {
      base: "relative size-96",
      leftControl:
        "absolute left-0 top-0 flex h-full items-center justify-center px-4 focus:outline-none",
      rightControl:
        "absolute right-0 top-0 flex h-full items-center justify-center px-4 focus:outline-none",
    },
    indicators: {
      active: {
        off: "bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800",
        on: "bg-white dark:bg-gray-800",
      },
      base: "h-3 w-3 rounded-full",
      wrapper: "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3",
    },
    item: {
      base: "absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
      wrapper: {
        off: "w-full flex-shrink-0 transform cursor-default snap-center",
        on: "w-full flex-shrink-0 transform cursor-grab snap-center",
      },
    },
    control: {
      base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
      icon: "h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6",
    },
    scrollContainer: {
      base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg",
      snap: "snap-x",
    },
  };

  await fs
    .readdir(folder_abs_path)
    .then((files) => {
      fileCount = files.length;
    })
    .catch((error) => {
      console.error("Error reading directory:", error);
    });

  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 ">
      <Carousel pauseOnHover className="h-full" theme={custom_theme}>
        {Array.from({ length: fileCount }).map((_, index) => (
          <Image
            key={index}
            src={`${folder_path}pic_${index + 1}.jpg`}
            alt={alt_text + index + 1}
            width={880}
            height={880}
            placeholder="blur"
            blurDataURL="https://flowbite.com/docs/images/carousel/carousel-1.svg"
          />
        ))}
      </Carousel>
    </div>
  );
}

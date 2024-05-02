"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export function SearchBar() {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const { replace } = useRouter();
  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    console.log(`${pathname}?${params.toString()}`);
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <form className="mx-auto max-w-md">
      <label
        htmlFor="default-search"
        className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
          <svg
            className="size-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full rounded-lg border border-gray-300
          bg-gray-50 p-4 ps-10 text-sm text-gray-900 focus:border-primaryColor
          focus:ring-primaryColor dark:border-gray-600 dark:bg-gray-700 dark:text-white
          dark:placeholder:text-gray-400 dark:focus:border-primaryColor dark:focus:ring-primaryColor"
          placeholder="MOTHER 3 Global Release..."
          required
          onChange={(e) => handleSearch(e.target.value)}
          defaultValue={searchParams.get("query")?.toString()}
        />
        <button
          type="submit"
          className="absolute bottom-2.5 end-2.5 rounded-lg bg-red-700 px-4 py-2 text-sm
           font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300
           dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        >
          Search
        </button>
      </div>
    </form>
  );
}

const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function CardSkeleton() {
  return (
    <div className={`${shimmer} max-w-sm rounded-lg bg-gray-200 p-4 shadow-md`}>
      <div className="animate-pulse">
        <div className="h-72 rounded bg-gray-300"></div>
        <div className="mt-4 h-6 w-3/4 rounded bg-gray-300"></div>
        <div className="mt-2 h-4 w-1/2 rounded bg-gray-300"></div>
        <div className="mt-3 flex space-x-4">
          <div className="size-5 rounded-full bg-gray-300"></div>
          <div className="size-5 rounded-full bg-gray-300"></div>
          <div className="size-5 rounded-full bg-gray-300"></div>
          <div className="size-5 rounded-full bg-gray-300"></div>
          <div className="size-5 rounded-full bg-gray-300"></div>
        </div>
        <div className="mt-3 h-6 w-1/4 rounded bg-gray-300"></div>
        <div className="mt-3 flex justify-between">
          <div className="h-6 w-1/4 rounded bg-gray-300"></div>
          <div className="h-6 w-1/4 rounded bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
}

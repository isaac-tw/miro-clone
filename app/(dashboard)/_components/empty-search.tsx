"use client";

import Image from "next/image";

const EmptySearch = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <Image src="/search_off.svg" alt="search_off" width={140} height={140} />
      <h2 className="mt-6 text-2xl font-semibold">No result found</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Try searching for something else
      </p>
    </div>
  );
};

export default EmptySearch;

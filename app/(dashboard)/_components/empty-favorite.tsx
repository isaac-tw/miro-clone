"use client";

import Image from "next/image";

const EmptyFavorite = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <Image src="/favorite.svg" alt="favorite" width={140} height={140} />
      <h2 className="mt-6 text-2xl font-semibold">No favorite boards found</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Try favoriting a board
      </p>
    </div>
  );
};

export default EmptyFavorite;

"use client";

import { formatDistanceToNow } from "date-fns";
import { useAuth } from "@clerk/clerk-react";
import Image from "next/image";
import Link from "next/link";
import Overlay from "./overlay";
import Footer from "./footer";

interface BoardCardProps {
  id: string;
  title: string;
  imgUrl: string;
  authorId: string;
  authorName: string;
  createAt: number;
  orgId: string;
  isFavorite: boolean;
}

const BoardCard = ({
  id,
  title,
  imgUrl,
  authorId,
  authorName,
  createAt,
  orgId,
  isFavorite,
}: BoardCardProps) => {
  const { userId } = useAuth();
  const authorLabel = userId === authorId ? "You" : authorName;
  const createAtLabel = formatDistanceToNow(createAt, { addSuffix: true });

  return (
    <Link href={`/board/${id}`}>
      <div className="group flex aspect-[100/127] flex-col justify-between overflow-hidden rounded-lg border">
        <div className="relative flex-1 bg-amber-50">
          <Image src={imgUrl} alt={title} fill className="object-fit" />
          <Overlay />
        </div>
        <Footer
          isFavorite={isFavorite}
          title={title}
          authorLabel={authorLabel}
          createAtLabel={createAtLabel}
          onclick={() => {}}
          disabled={false}
        />
      </div>
    </Link>
  );
};

export default BoardCard;

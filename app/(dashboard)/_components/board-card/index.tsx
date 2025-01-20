"use client";

import { formatDistanceToNow } from "date-fns";
import { MoreHorizontalIcon } from "lucide-react";
import { useAuth } from "@clerk/clerk-react";
import Image from "next/image";
import Link from "next/link";

import { Skeleton } from "@/components/ui/skeleton";
import Actions from "@/components/actions";
import Footer from "./footer";
import Overlay from "./overlay";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

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

  const { mutate: onFavorite, pending: pendingFavorite } = useApiMutation(
    api.board.favorite,
  );
  const { mutate: onUnFavorite, pending: pendingUnFavorite } = useApiMutation(
    api.board.unfavorite,
  );
  const toggleFavorite = () => {
    if (isFavorite)
      onUnFavorite({ id }).catch(() => toast.error("Failed to unfavorite"));
    else
      onFavorite({ id, orgId }).catch(() => toast.error("Failed to favorite"));
  };

  return (
    <Link href={`/board/${id}`}>
      <div className="group flex aspect-[100/127] flex-col justify-between overflow-hidden rounded-lg border">
        <div className="relative flex-1 bg-amber-50">
          <Image src={imgUrl} alt={title} fill className="object-fit" />
          <Overlay />
          <Actions id={id} title={title} side="right">
            <button className="absolute right-1 top-1 px-3 py-2 opacity-0 outline-none transition-opacity group-hover:opacity-100">
              <MoreHorizontalIcon className="text-white opacity-75 transition-opacity hover:opacity-100" />
            </button>
          </Actions>
        </div>
        <Footer
          isFavorite={isFavorite}
          title={title}
          authorLabel={authorLabel}
          createAtLabel={createAtLabel}
          onclick={toggleFavorite}
          disabled={pendingFavorite || pendingUnFavorite}
        />
      </div>
    </Link>
  );
};

BoardCard.Skeleton = function BoardCardSkeleton() {
  return (
    <div className="aspect-[100/127] overflow-hidden rounded-lg">
      <Skeleton className="h-full w-full" />
    </div>
  );
};

export default BoardCard;

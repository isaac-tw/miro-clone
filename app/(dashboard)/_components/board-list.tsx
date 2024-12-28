"use client";

import { useQuery } from "convex/react";
import EmptyBoards from "./empty-boards";
import EmptyFavorite from "./empty-favorite";
import EmptySearch from "./empty-search";
import { api } from "@/convex/_generated/api";
import BoardCard from "./board-card";
import NewBoardButton from "./new-board-button";

interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favorite?: string;
  };
}

const BoardList = ({ orgId, query }: BoardListProps) => {
  const data = useQuery(api.boards.get, { orgId, ...query });
  if (data === undefined)
    return (
      <div>
        <h2 className="text-3xl">
          {query.favorite ? "Favorite Boards" : "Team Boards"}
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-5 pb-10 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          <NewBoardButton orgId="orgId" disabled />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
        </div>
      </div>
    );

  if (!data?.length && query.search) {
    return <EmptySearch />;
  }
  if (!data?.length && query.favorite) {
    return <EmptyFavorite />;
  }
  if (!data?.length) {
    return <EmptyBoards />;
  }

  return (
    <div>
      <h2 className="text-3xl">
        {query.favorite ? "Favorite Boards" : "Team Boards"}
      </h2>
      <div className="mt-8 grid grid-cols-1 gap-5 pb-10 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        <NewBoardButton orgId={orgId} />
        {data?.map((board) => (
          <BoardCard
            key={board._id}
            id={board._id}
            title={board.title}
            imgUrl={board.imgUrl}
            authorId={board.authorId}
            authorName={board.authorName}
            createAt={board._creationTime}
            orgId={board.orgId}
            isFavorite={board.isFavorite}
          />
        ))}
      </div>
    </div>
  );
};

export default BoardList;

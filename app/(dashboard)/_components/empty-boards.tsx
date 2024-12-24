"use client";

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useOrganization } from "@clerk/clerk-react";
import { useMutation } from "convex/react";
import Image from "next/image";

const EmptyBoards = () => {
  const create = useMutation(api.board.create);
  const { organization } = useOrganization();

  const handleCreateBoard = () => {
    if (!organization) return;
    create({ orgId: organization.id, title: "Untitled" });
  };

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <Image src="/note_alt.svg" alt="note_alt" width={140} height={140} />
      <h2 className="mt-6 text-2xl font-semibold">Create your first board</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Start by creating a board for your organization
      </p>
      <div className="mt-6">
        <Button onClick={handleCreateBoard} size="lg">
          Create a board
        </Button>
      </div>
    </div>
  );
};

export default EmptyBoards;

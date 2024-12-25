"use client";

import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { cn } from "@/lib/utils";
import { PlusIcon } from "lucide-react";
import { toast } from "sonner";

interface NewBoardButtonProps {
  orgId: string;
  disabled?: boolean;
}

const NewBoardButton = ({ orgId, disabled }: NewBoardButtonProps) => {
  const { mutate, pending } = useApiMutation(api.board.create);
  const handleCreateBoard = () => {
    mutate({ orgId, title: "Untitled" })
      .then((id) => {
        toast.success("Board created successfully");
      })
      .catch(() => {
        toast.error("Failed to create board");
      });
  };
  return (
    <button
      disabled={pending || disabled}
      onClick={handleCreateBoard}
      className={cn(
        "col-span-1 flex aspect-[100/127] flex-col items-center justify-center rounded-lg bg-blue-600 py-6 hover:bg-blue-800",
        (pending || disabled) &&
          "cursor-not-allowed opacity-75 hover:bg-blue-600",
      )}
    >
      <div></div>
      <PlusIcon className="h-12 w-12 stroke-1 text-white" />
      <p className="text-sm font-light text-white">New board</p>
    </button>
  );
};

export default NewBoardButton;

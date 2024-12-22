"use client";

import { CreateOrganization } from "@clerk/clerk-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlusIcon } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Hint from "@/components/hint";

const NewButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="aspect-square">
          <Hint
            label="Create organization"
            side="right"
            align="start"
            sideOffset={18}
          >
            <button className="flex h-full w-full items-center justify-center rounded-md bg-white/25 opacity-60 transition hover:opacity-100">
              <PlusIcon className="text-white" />
            </button>
          </Hint>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-[480px] border-none bg-transparent p-0">
        <VisuallyHidden asChild>
          <DialogTitle />
        </VisuallyHidden>

        <CreateOrganization />
      </DialogContent>
    </Dialog>
  );
};

export default NewButton;

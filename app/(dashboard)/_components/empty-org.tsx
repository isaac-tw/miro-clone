"use client";

import Image from "next/image";
import { CreateOrganization } from "@clerk/clerk-react";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const EmptyOrg = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <Image src="/apartment.svg" alt="Apartment" width={200} height={200} />
      <h2 className="mt-6 text-2xl font-semibold">Welcome to Board</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Create an organization to get started
      </p>
      <div className="mt-6">
        <Dialog>
          <DialogTrigger asChild>
            <Button size="lg">Create organization</Button>
          </DialogTrigger>
          <DialogContent className="max-w-[480px] border-none bg-transparent p-0">
            <VisuallyHidden asChild>
              <DialogTitle />
            </VisuallyHidden>
            <CreateOrganization />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default EmptyOrg;

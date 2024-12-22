import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { OrganizationProfile } from "@clerk/clerk-react";
import { PlusIcon } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const InviteButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <PlusIcon className="mr-2 h-4 w-4" />
          Invite members
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[880px] border-none bg-transparent p-0">
        <VisuallyHidden asChild>
          <DialogTitle />
        </VisuallyHidden>
        <OrganizationProfile />
      </DialogContent>
    </Dialog>
  );
};

export default InviteButton;

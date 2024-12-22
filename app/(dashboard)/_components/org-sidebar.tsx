"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LayoutDashboardIcon, StarIcon } from "lucide-react";
import { OrganizationSwitcher } from "@clerk/clerk-react";
import { Poppins } from "next/font/google";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const OrgSidebar = () => {
  const searchParams = useSearchParams();
  const favorite = searchParams.get("favorite");

  return (
    <div className="hidden w-[206px] flex-col space-y-6 pl-5 pt-5 lg:flex">
      <Link href="/">
        <div className="flex items-center gap-x-3">
          <Image src="/logo.svg" alt="Logo" width={30} height={30} />
          <span className={cn("text-2xl font-semibold", font.className)}>
            Board
          </span>
        </div>
      </Link>
      <OrganizationSwitcher
        hidePersonal
        appearance={{
          elements: {
            rootBox: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            },
            organizationSwitcherTrigger: {
              padding: "6px",
              width: "100%",
              borderRadius: "8px",
              border: "1px solid #E5E7EB",
              justifyContent: "space-between",
              backgroundColor: "white",
            },
          },
        }}
      />
      <div className="w-full space-y-1">
        <Button
          asChild
          className="w-full justify-start px-2 font-normal"
          size="lg"
          variant={favorite ? "ghost" : "secondary"}
        >
          <Link href="/">
            <LayoutDashboardIcon className="mr-2 h-4 w-4" />
            Team boards
          </Link>
        </Button>
        <Button
          asChild
          className="w-full justify-start px-2 font-normal"
          size="lg"
          variant={!favorite ? "ghost" : "secondary"}
        >
          <Link
            href={{
              pathname: "/",
              query: { favorite: true },
            }}
          >
            <StarIcon className="mr-2 h-4 w-4" />
            Favorite boards
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default OrgSidebar;

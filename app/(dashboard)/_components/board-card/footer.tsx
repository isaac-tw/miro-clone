import { cn } from "@/lib/utils";
import { StarIcon } from "lucide-react";
import React from "react";

interface FooterProps {
  isFavorite: boolean;
  title: string;
  authorLabel: string;
  createAtLabel: string;
  onclick: () => void;
  disabled: boolean;
}

const Footer = ({
  isFavorite,
  title,
  authorLabel,
  createAtLabel,
  onclick,
  disabled,
}: FooterProps) => {
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.stopPropagation();
    event.preventDefault();
    onclick();
  };
  return (
    <div className="relative bg-white p-3">
      <p className="max-w-[calc(100%-20px)] truncate text-[13px]">{title}</p>
      <p className="truncate text-[11px] text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
        {authorLabel}, {createAtLabel}
      </p>
      <button
        disabled={disabled}
        onClick={handleClick}
        className={cn(
          "absolute right-3 top-3 text-muted-foreground opacity-0 transition hover:text-blue-600 group-hover:opacity-100",
          disabled && "cursor-not-allowed opacity-75",
        )}
      >
        <StarIcon
          className={cn("h-4 w-4", isFavorite && "fill-blue-600 text-blue-600")}
        />
      </button>
    </div>
  );
};

export default Footer;

"use client";

import { UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  return (
    <div className="flex items-center gap-x-4 bg-green-500 p-5">
      <div className="hidden bg-yellow-400 lg:flex lg:flex-1">Search</div>
      <UserButton />
    </div>
  );
};

export default Navbar;

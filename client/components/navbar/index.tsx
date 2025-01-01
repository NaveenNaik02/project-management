import React from "react";
import { Search } from "lucide-react";
import { NavbarRightActionMenu, ToggleSidebarMenu } from "./utils";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-white px-3 py-4 dark:bg-black">
      <div className="flex items-center gap-8">
        <ToggleSidebarMenu />
        <div className="relative flex h-min w-[200px]">
          <Search className="absolute left-[4px] top-1/2 mr-2 h-5 w-5 -translate-y-1/2 transform cursor-pointer dark:text-white" />
          <input
            type="search"
            placeholder="search..."
            className="w-full rounded border-none bg-gray-100 p-2 pl-8 placeholder-gray-500 focus:outline-none dark:bg-gray-700 dark:text-white dark:placeholder-white"
          />
        </div>
      </div>

      <div className="flex items-center">
        <NavbarRightActionMenu />
      </div>
    </div>
  );
};

export default Navbar;

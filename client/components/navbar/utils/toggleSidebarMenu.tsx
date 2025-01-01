"use client";
import React from "react";
import { useAppSelector } from "@/store/redux";
import { Menu } from "lucide-react";

const ToggleSidebarMenu = () => {
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed,
  );
  return (
    <>
      {!isSidebarCollapsed ? null : (
        <button onClick={() => console.log("toggle sidebar")}>
          <Menu className="h-8 w-8 dark:text-white" />
        </button>
      )}
    </>
  );
};

export { ToggleSidebarMenu };

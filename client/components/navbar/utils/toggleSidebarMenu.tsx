"use client";
import React from "react";
import { useAppDispatch, useAppSelector } from "@/store/redux";
import { Menu } from "lucide-react";
import { setIsSidebarCollapsed } from "@/state";

const ToggleSidebarMenu = () => {
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed,
  );
  const dispatch = useAppDispatch();
  return (
    <>
      {!isSidebarCollapsed ? null : (
        <button
          onClick={() => dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))}
        >
          <Menu className="h-8 w-8 dark:text-white" />
        </button>
      )}
    </>
  );
};

export { ToggleSidebarMenu };

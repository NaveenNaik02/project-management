"use client";
import React from "react";
import Link from "next/link";
import { useAppSelector } from "@/store/redux";
import { ToggleThemeButton } from "../utils/index";

const NavbarRightActionMenu = () => {
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  return (
    <>
      <ToggleThemeButton />
      <Link
        href="/settings"
        className={
          isDarkMode
            ? `h-min w-min rounded p-2 dark:hover:bg-gray-700`
            : `h-min w-min rounded p-2 hover:bg-gray-100`
        }
      >
        Settings
      </Link>
    </>
  );
};

export { NavbarRightActionMenu };

import React from "react";
import { useAppDispatch, useAppSelector } from "@/store/redux";
import { Moon, Sun } from "lucide-react";
import { setIsDarkMode } from "@/state";

const ToggleThemeButton = () => {
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);
  const dispatch = useAppDispatch();

  return (
    <button
      className={
        isDarkMode
          ? "rounded p-2 dark:hover:bg-gray-700"
          : "rounded p-2 hover:bg-gray-100"
      }
      onClick={() => dispatch(setIsDarkMode(!isDarkMode))}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 cursor-pointer dark:text-white" />
      ) : (
        <Moon className="h-6 w-6 cursor-pointer dark:text-white" />
      )}
    </button>
  );
};

export { ToggleThemeButton };

import { useAppSelector } from "@/store/redux";
import { Moon, Sun } from "lucide-react";
import React from "react";

const ToggleThemeButton = () => {
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  return (
    <button
      className={
        isDarkMode
          ? "rounded p-2 dark:hover:bg-gray-700"
          : "rounded p-2 hover:bg-gray-100"
      }
      onClick={() => console.log("yet to handle theme change")}
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

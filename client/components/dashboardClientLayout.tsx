"use client";

import React, { useCallback, useEffect } from "react";
import { useAppSelector } from "@/store/redux";

const DashboardClientLayout = ({ children }: { children: React.ReactNode }) => {
  const isSidebarCollapsed = useAppSelector(
    useCallback((state) => state.global.isSidebarCollapsed, []),
  );
  const isDarkMode = useAppSelector(
    useCallback((state) => state.global.isDarkMode, []),
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);
  return (
    <main
      className={`dark:bg-dark-bg flex w-full flex-col bg-gray-50 ${
        isSidebarCollapsed ? "" : "md:pl-64"
      }`}
    >
      {children}
    </main>
  );
};

export default DashboardClientLayout;

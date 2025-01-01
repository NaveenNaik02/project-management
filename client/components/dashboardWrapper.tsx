import React from "react";
import StoreProvider from "@/store/redux";
import DashboardLayout from "./dashboardLayout";

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <DashboardLayout>{children}</DashboardLayout>
    </StoreProvider>
  );
};

export default DashboardWrapper;

import React from "react";
import DashboardClientLayout from "./dashboardClientLayout";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen w-full bg-gray-50 text-gray-900">
      <Sidebar />
      <DashboardClientLayout>
        <Navbar />
        {children}
      </DashboardClientLayout>
    </div>
  );
};

export default DashboardLayout;

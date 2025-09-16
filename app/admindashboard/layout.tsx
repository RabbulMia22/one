import Sidebar from "@/components/admin/Sidebar";
import Topbar from "@/components/admin/Topbar";
import React, { ReactNode } from "react";

interface AdminLayoutProps {
  children: ReactNode;
}

function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="flex ">
      {/* Sidebar (left) */}
      <Sidebar />

      {/* Main content (right) */}
      <div className="flex-1 flex flex-col bg-gray-50">
        {/* Topbar at the top */}
        <Topbar />

        {/* Page content */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}

export default AdminLayout;

"use client";
import Sidebar from "@/components/admin/Sidebar";
import Topbar from "@/components/admin/Topbar";
import React, { ReactNode, useState } from "react";
import  { Dispatch, SetStateAction } from "react";

interface AdminLayoutProps {
  children: ReactNode;
}
interface SidebarProps {
  openMobileMenu: boolean;
  setopenMobileMenu: Dispatch<SetStateAction<boolean>>;
}

function AdminLayout({ children }: AdminLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex ">
      {/* Sidebar (left) */}
      <Sidebar openMobileMenu={sidebarOpen} setopenMobileMenu={setSidebarOpen} />

      {/* Main content (right) */}
      <div className="flex-1 flex flex-col bg-gray-50">
        {/* Topbar at the top */}
        <Topbar openMobileMenu={sidebarOpen} setopenMobileMenu={setSidebarOpen} />

        {/* Page content */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}

export default AdminLayout;

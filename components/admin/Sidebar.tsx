"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  FiSettings,
  FiLogOut,
  FiX,
  FiMenu,
  FiHome,
  FiUser,
  FiBox,
  FiBarChart2,

} from "react-icons/fi";
import { usePathname } from "next/navigation";

function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home", icon: <FiHome /> },
    { href: "/admindashboard", label: "Dashboard", icon: <FiHome /> },
    { href: "/admindashboard/addproducts", label: "Add Products", icon: <FiBox /> },
    { href: "/admin/users", label: "Users", icon: <FiUser /> },
    { href: "/admin/reports", label: "Reports", icon: <FiBarChart2 /> },
  ];

  return (
    <>
      <div className="flex h-screen bg-gray-100">
        {/* Overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-20 md:hidden transition-opacity duration-300 ease-in-out"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}

        {/* Sidebar */}
        <div
          className={`fixed inset-y-0 left-0 transform ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:relative md:translate-x-0 transition-transform duration-300 ease-in-out z-30 md:z-0 
          w-72 bg-gradient-to-b from-gray-900/95 to-gray-800/90 text-white 
          p-6 flex flex-col shadow-2xl rounded-r-2xl md:rounded-none`}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <span className="bg-blue-600 p-2 rounded-lg shadow-md">
                <FiSettings className="text-white" />
              </span>
              Admin
            </h1>
            <button
              onClick={() => setSidebarOpen(false)}
              className="md:hidden p-2 rounded-full hover:bg-gray-700 transition-colors duration-200"
            >
              <FiX className="text-2xl" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300 ${
                      pathname === item.href
                        ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg scale-105"
                        : "hover:bg-gray-700/70"
                    }`}
                  >
                    {item.icon}
                    <span className="font-medium">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Logout */}
          <div className="mt-auto">
            <button className="w-full flex items-center justify-center gap-2 p-3 rounded-xl 
              bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 
              transition-all duration-300 shadow-md">
              <FiLogOut />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* Floating Menu Button (mobile) */}
        {!sidebarOpen && (
          <button
            onClick={() => setSidebarOpen(true)}
            className="md:hidden fixed top-4 left-4 z-40 p-3 rounded-full bg-white shadow-lg 
            hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <FiMenu className="text-2xl text-gray-800" />
          </button>
        )}
      </div>
    </>
  );
}

export default Sidebar;

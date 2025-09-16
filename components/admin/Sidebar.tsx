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
import { motion, AnimatePresence } from "framer-motion";

interface SidebarProps {
  openMobileMenu: boolean;
  setopenMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
}


function Sidebar({ openMobileMenu, setopenMobileMenu }: SidebarProps) {

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
        {/* AnimatePresence for mobile sidebar */}
        <AnimatePresence>
          {openMobileMenu && (
            <>
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black backdrop-blur-sm z-20 md:hidden"
                onClick={() => setopenMobileMenu(false)}
              />

              {/* Sidebar */}
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "tween", duration: 0.3 }}
                className="fixed inset-y-0 left-0 w-72 bg-gradient-to-b from-gray-900/95 to-gray-800/90 text-white z-30 p-6 flex flex-col shadow-2xl rounded-r-2xl md:hidden"
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
                    onClick={() => setopenMobileMenu(false)}
                    className="p-2 rounded-full hover:bg-gray-700 transition-colors duration-200"
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
                          onClick={() => setopenMobileMenu(false)}
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
                  <button className="w-full flex items-center justify-center gap-2 p-3 rounded-xl bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 transition-all duration-300 shadow-md">
                    <FiLogOut />
                    <span>Logout</span>
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Desktop Sidebar */}
        <div className="hidden md:flex flex-col w-72 h-screen bg-gradient-to-b from-gray-900/95 to-gray-800/90 text-white p-6 shadow-2xl ">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <span className="bg-blue-600 p-2 rounded-lg shadow-md">
                <FiSettings className="text-white" />
              </span>
              Admin
            </h1>
          </div>
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
          <div className="mt-auto">
            <button className="w-full flex items-center justify-center gap-2 p-3 rounded-xl bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 transition-all duration-300 shadow-md">
              <FiLogOut />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* Floating Menu Button (mobile) */}
        
      </div>
    </>
  );
}

export default Sidebar;

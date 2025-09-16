"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full bg-gray-800 text-white fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto p-4 flex justify-between items-center">
        <div className="text-lg font-bold">MyApp</div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
          <Link href="/admindashboard" className="hover:underline">Admin Dashboard</Link>
          <Link href="/register" className="hover:underline">Register</Link>
          <Link href="/login" className="hover:underline">Login</Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleDrawer}>
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* AnimatePresence wraps the drawer for smooth exit animation */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 left-0 w-72 h-full bg-gray-900 shadow-lg z-40 p-6 flex flex-col space-y-4"
            >
              <Link href="/" className="hover:underline">Home</Link>
              <Link href="/about" className="hover:underline" onClick={toggleDrawer}>About</Link>
              <Link href="/contact" className="hover:underline" onClick={toggleDrawer}>Contact</Link>
              <Link href="/admindashboard" className="hover:underline" onClick={toggleDrawer}>Admin Dashboard</Link>
              <Link href="/register" className="hover:underline" onClick={toggleDrawer}>Register</Link>
              <Link href="/login" className="hover:underline" onClick={toggleDrawer}>Login</Link>
            </motion.div>

            {/* Overlay */}
            <motion.div
              onClick={toggleDrawer}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-30"
            />
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;

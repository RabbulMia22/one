"use client";
import Link from 'next/link';
import React from 'react'

function Navbar() {
  return (
    <div className="w-full p-4 bg-gray-800 text-white flex justify-between items-center">
        <div className="text-lg font-bold">MyApp</div>
        <div className="space-x-4">
            <a href="#" className="hover:underline">Home</a>
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
            <Link href="/admindashboard" className="hover:underline">Admin Dashboard</Link>
            <Link href="/register" className="hover:underline">Register</Link>
            <Link href="/login" className="hover:underline">Login</Link>
        </div>
    </div>
  )
}

export default Navbar;
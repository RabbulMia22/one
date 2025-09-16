import React from 'react'
import { FiMenu } from "react-icons/fi";

interface TopbarProps {
  openMobileMenu: boolean;
  setopenMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

function Topbar({ openMobileMenu, setopenMobileMenu }: TopbarProps) {
  return (
    <div className="bg-white shadow-md p-4 flex items-center justify-between relative">
      {/* Mobile Menu Icon */}
      <div className="md:hidden absolute left-4 top-1/2 -translate-y-1/2">
        {!openMobileMenu && (
          <button
            onClick={() => setopenMobileMenu(true)}
            className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <FiMenu className="text-2xl text-gray-800" />
          </button>
        )}
      </div>

      {/* Title */}
      <h1 className="md:text-xl text-lg text-black font-bold text-center md:text-left w-full md:w-auto">
        Admin Dashboard
      </h1>

      {/* Right actions */}
      <div className="flex items-center space-x-4">
        <button className="text-gray-600 hover:text-gray-800">Settings</button>
        <button className="text-gray-600 hover:text-gray-800">Logout</button>
      </div>
    </div>
  )
}

export default Topbar;

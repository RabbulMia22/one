import React from 'react'

function Topbar() {
  return (
    <div className="bg-white shadow-md p-4 flex items-center justify-between">
      <h1 className="text-xl font-bold">Admin Dashboard</h1>
      <div className="flex items-center space-x-4">
        <button className="text-gray-600 hover:text-gray-800">Settings</button>
        <button className="text-gray-600 hover:text-gray-800">Logout</button>
      </div>
    </div>
  )
}

export default Topbar
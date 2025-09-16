import React from "react";
import {
  FiUsers,
  FiBox,
  FiBarChart2,
  FiDollarSign,
} from "react-icons/fi";

function AdminPage() {
  const stats = [
    { label: "Total Users", value: "1,250", icon: <FiUsers />, color: "bg-blue-500" },
    { label: "Products", value: "340", icon: <FiBox />, color: "bg-green-500" },
    { label: "Revenue", value: "$12.5K", icon: <FiDollarSign />, color: "bg-purple-500" },
    { label: "Reports", value: "27", icon: <FiBarChart2 />, color: "bg-orange-500" },
  ];

  return (
    <div className="p-6 md:p-10 bg-gray-100 min-h-screen">
      {/* Page Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
        <p className="text-gray-600 mt-2">
          Welcome back! Here’s an overview of your system.
        </p>
      </header>

      {/* Stats Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((item, idx) => (
          <div
            key={idx}
            className="bg-white shadow rounded-xl p-6 flex items-center gap-4 hover:shadow-lg transition-shadow duration-300"
          >
            <div
              className={`${item.color} text-white p-4 rounded-full text-xl`}
            >
              {item.icon}
            </div>
            <div>
              <h3 className="text-gray-600 text-sm">{item.label}</h3>
              <p className="text-2xl font-semibold">{item.value}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Example Content Area */}
      <section className="bg-white shadow rounded-xl p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Recent Activity
        </h2>
        <ul className="space-y-3 text-gray-600">
          <li>✅ User <span className="font-medium">John Doe</span> created an account.</li>
          <li>📦 Product <span className="font-medium">Nike Shoes</span> was added.</li>
          <li>💰 Payment of <span className="font-medium">$120</span> was received.</li>
          <li>📊 Sales report was generated.</li>
        </ul>
      </section>
    </div>
  );
}

export default AdminPage;

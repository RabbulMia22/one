"use client";
import { useState } from "react";
import axios from "axios";

export default function RegisterPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/register", form);
      alert(res.data.error || "User registered successfully");
    } catch (err: any) {
      alert(err.response?.data?.error || "Something went wrong");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-sm mx-auto mt-10">
      <input
        type="text"
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="border p-2"
      />
      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="border p-2"
      />
      <input
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        className="border p-2"
      />
      <button type="submit" className="bg-green-600 text-white p-2 rounded">
        Register
      </button>
    </form>
  );
}

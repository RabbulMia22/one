"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
  const { data: session } = useSession(); // get session
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: "/admindashboard",
    });
  };

  const handleLogout = async () => {
    await signOut({ redirect: true, callbackUrl: "/" });
  };

  // If user is logged in, show Logout button
  if (session) {
    return (
      <div className="flex flex-col gap-4 max-w-sm mx-auto mt-10">
        <p>Welcome, {session.user?.email}</p>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white p-2 rounded"
        >
          Logout
        </button>
      </div>
    );
  }

  // If user is not logged in, show login form
  return (
    <form
      onSubmit={handleLogin}
      className="flex flex-col gap-4 max-w-sm mx-auto mt-10"
    >
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2"
      />
      <button type="submit" className="bg-blue-600 text-white p-2 rounded">
        Login
      </button>
    </form>
  );
}

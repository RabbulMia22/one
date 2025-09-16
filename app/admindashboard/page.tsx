import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";


export default async function AdminPage() {
  const session = await getServerSession(authOptions);

  if (!session || session.user?.role !== "admin") {
    return redirect("/")
  }
  

  return <h1 className="text-black">✅ Welcome Admin {session.user?.name}</h1>;
};
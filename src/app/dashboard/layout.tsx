import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import Sidebar from "@/components/global/Sidebar";
import Topbar from "@/components/global/Topbar";

export const metadata: Metadata = {
  title: "Dashboard - Creobots",
};

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect("/");
  }

  return (
    <main className="min-h-[100svh] bg-gradient-to-b from-[#12203d] to-black flex items-start">
      <Sidebar />

      <div className="flex-1 h-[100svh] pt-12 flex flex-col">
        <Topbar />

        <div className="flex-1 pt-6 pb-12 px-8 overflow-y-auto">{children}</div>
      </div>
    </main>
  );
}

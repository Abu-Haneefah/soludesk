"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { Navbar } from "@/components/shared/Navbar";
import { Sidebar } from "@/components/shared/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { isAuthenticated } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace("/");
    }
  }, [isAuthenticated, router]);

  const isServer = typeof window === "undefined";

  if (isServer || !isAuthenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white">
        <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  // 3. Render the actual layout only when authenticated on the client.
  return (
    <div className="flex min-h-screen bg-[#F9FAFB]">
      <aside className="w-52.5 h-screen border-r bg-white hidden md:block fixed left-0 top-0 z-50">
        <Sidebar />
      </aside>

      <div className="flex flex-col flex-1 md:ml-52.5 transition-all">
        <header className="h-18.25 w-full border-b bg-white flex items-center px-4 md:px-8 sticky top-0 z-40">
          <Navbar />
        </header>

        <main className="flex-1 p-2 md:p-6 max-w-400 mx-auto w-full">
          {children}
        </main>
      </div>
    </div>
  );
}

import { Navbar } from "@/components/shared/Navbar";
import { Sidebar } from "@/components/shared/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-[#F9FAFB]">
      {/*  Navbar */}
      <header className="h-18.25 border-b bg-white flex items-center px-4 md:px-8 sticky top-0 z-50">
        <Navbar />
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-52.5 h-240 border-r bg-white hidden md:block">
          <Sidebar />
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-2 md:p-6 max-w-400  w-full">{children}</main>
      </div>
    </div>
  );
}

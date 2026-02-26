"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  GraduationCap,
  Users,
  FileCheck,
  Award,
  Settings,
} from "lucide-react";

const navItems = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  {
    name: "Courses/Materials",
    icon: GraduationCap,
    href: "/dashboard/courses",
  },
  { name: "Classes", icon: Users, href: "/dashboard/classes" },
  { name: "Assessments", icon: FileCheck, href: "/dashboard/assessments" },
  { name: "My Certification", icon: Award, href: "/dashboard/certification" },
  { name: "Settings", icon: Settings, href: "/dashboard/settings" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col h-full py-4 md:py-8 space-y-1 px-3">
      {navItems.map((item) => {
        const isActive =
          pathname === item.href ||
          (item.href !== "/dashboard" && pathname.startsWith(item.href));

        return (
          <Link
            key={item.name}
            href={item.href}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
              isActive
                ? "bg-[#E0F2FE] text-[#0284C7]"
                : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
            }`}
          >
            <item.icon
              className={`w-5 h-5 ${isActive ? "text-[#0284C7]" : "text-gray-400"}`}
            />
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
}

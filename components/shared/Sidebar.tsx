"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  GraduationCap,
  Users,
  FileCheck,
  Award,
  Settings,
} from "lucide-react";
import logo from "@/public/logo.svg";

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
    <div className="flex flex-col h-full bg-white">
      {/* Logo Section: Height matched to Navbar (h-20) with bottom border */}
      <div className="flex h-20 px-7 items-center justify-start shrink-0 border-b border-gray-100">
        <Link href="/dashboard">
          <Image
            src={logo}
            alt="Soludesks"
            width={200}
            height={60}
            className="w-44" // Made the logo a bit bigger
            priority
          />
        </Link>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 py-6 space-y-1 px-3 overflow-y-auto">
        {navItems.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== "/dashboard" && pathname.startsWith(item.href));

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
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
    </div>
  );
}

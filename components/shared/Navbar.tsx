"use client";

import { Search, Bell, ChevronDown, Menu, LogOut, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "@/lib/features/usersSlice";
import { RootState } from "@/lib/store";
import { Sidebar } from "./Sidebar";

export function Navbar() {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  const handleLogout = () => {
    dispatch(clearUser());
    document.cookie =
      "auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    router.replace("/");
  };

  return (
    <div className="flex w-full items-center justify-between gap-4">
      <div className="flex items-center gap-4 flex-1 max-w-2xl">
        {/* Mobile Sidebar */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-600">
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-72">
              <Sidebar />
            </SheetContent>
          </Sheet>
        </div>

        {/* Search Bar */}
        <div className="relative w-full hidden md:block">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search soludesk"
            className="pl-11 bg-[#F9FAFB] border-none rounded-full h-11 w-full focus-visible:ring-1 focus-visible:ring-blue-100"
          />
        </div>
      </div>

      {/* RIGHT SECTION: Icons & Profile */}
      <div className="flex items-center gap-2 md:gap-4 shrink-0">
        <div className="hidden md:flex items-center gap-2 mr-2">
          <button className="p-2 transition-colors">
            <Image
              src="/message-text.svg"
              alt="messages"
              height={24}
              width={24}
            />
          </button>
          <button className="text-gray-400 hover:text-gray-600 relative p-2 transition-colors">
            <Bell className="w-6 h-6" />
            <span className="absolute top-1 right-1 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center border-2 border-white font-bold">
              4
            </span>
          </button>
        </div>

        <div className="flex items-center border-l border-gray-100 pl-2 md:pl-6">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 outline-none group">
              <Avatar className="h-10 w-10 border border-gray-100 transition-transform group-hover:scale-105">
                <AvatarImage src="/nav-avatar.svg" alt={user.name} />
                <AvatarFallback className="bg-blue-50 text-blue-600 font-bold">
                  {user.name?.charAt(0) || "U"}
                </AvatarFallback>
              </Avatar>
              <div className="hidden lg:block text-left">
                <p className="text-sm font-semibold text-gray-900 leading-none">
                  {user.name}
                </p>
                <p className="text-[11px] text-gray-500 mt-1 font-medium truncate w-24">
                  {user.email}
                </p>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-400 transition-transform group-data-[state=open]:rotate-180" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-64 mt-3 shadow-lg border-gray-100 rounded-xl p-2"
            >
              <DropdownMenuLabel className="md:hidden pb-3">
                <p className="text-sm font-bold text-gray-900">{user.name}</p>
                <p className="text-xs text-gray-500 font-normal">
                  {user.email}
                </p>
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="md:hidden" />
              <DropdownMenuItem className="gap-3 py-2 rounded-lg cursor-pointer">
                <User className="w-4 h-4 text-gray-500" />
                <span className="text-sm">Profile Settings</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={handleLogout}
                className="gap-3 py-2 rounded-lg cursor-pointer text-red-600 focus:text-red-600 focus:bg-red-50"
              >
                <LogOut className="w-4 h-4" />
                <span className="text-sm font-medium">Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}

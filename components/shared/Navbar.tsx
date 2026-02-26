"use client";
import {
  Search,
  Bell,
  MessageSquare,
  ChevronDown,
  Menu,
  LogOut,
  User,
} from "lucide-react";
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
import Link from "next/link";
import { Sidebar } from "./Sidebar";
import logo from "@/public/logo.svg";

export function Navbar() {
  return (
    <div className="flex w-full items-center justify-between gap-4">
      {/* LEFT SECTION: Logo & Search */}
      <div className="flex items-center gap-4 md:gap-12 flex-1 max-w-2xl">
        {/* Mobile Sidebar Trigger */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className="p-2 hover:bg-gray-100 rounded-lg flex items-center gap-2 text-gray-600">
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-72">
              <div className="px-6 py-8 border-b">
                <Image
                  src={logo}
                  alt="Soludesks"
                  width={120}
                  height={30}
                  priority
                />
              </div>
              <Sidebar />
            </SheetContent>
          </Sheet>
        </div>

        {/* Logo */}
        <Link href="/dashboard" className="shrink-0">
          <Image
            src={logo}
            alt="Soludesks"
            width={140}
            height={40}
            className="w-28 md:w-36"
            priority
          />
        </Link>

        {/* Search Bar - Hidden on small mobile to match design intent */}
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
        {/* Desktop Icons */}
        <div className="hidden md:flex items-center gap-2 mr-2">
          <button className="text-[#0A60E1] hover:text-gray-600 relative p-2 transition-colors">
            <Image
              src="/message-text.svg"
              alt="message-icon"
              height={24}
              width={24}
              className="text-[#0A60E1]"
            />
          </button>
          <button className="text-gray-400 hover:text-gray-600 relative p-2 transition-colors">
            <Bell className="w-6 h-6" />
            <span className="absolute top-1 right-1 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center border-2 border-white font-bold">
              4
            </span>
          </button>
        </div>

        {/* User Profile Dropdown */}
        <div className="flex items-center border-l border-gray-100 pl-2 md:pl-6">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 outline-none group">
              <Avatar className="h-10 w-10 border border-gray-100 transition-transform group-hover:scale-105">
                <AvatarImage src="/nav-avatar.svg" alt="Madison Greg" />
                <AvatarFallback className="bg-blue-50 text-blue-600 font-bold">
                  MG
                </AvatarFallback>
              </Avatar>

              <div className="hidden lg:block text-left">
                <p className="text-sm font-semibold text-gray-900 leading-none">
                  Madison Greg
                </p>
                <p className="text-[11px] text-gray-500 mt-1 font-medium truncate w-24">
                  Madison.reertr...
                </p>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-400 transition-transform group-data-[state=open]:rotate-180" />
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="end"
              className="w-64 mt-3 shadow-lg border-gray-100 rounded-xl p-2"
            >
              <DropdownMenuLabel className="md:hidden pb-3">
                <p className="text-sm font-bold text-gray-900">Madison Greg</p>
                <p className="text-xs text-gray-500 font-normal">
                  Madison.reertr...
                </p>
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="md:hidden" />

              {/* Mobile-only view items */}
              <div className="md:hidden py-1">
                <DropdownMenuItem className="gap-3 py-2 rounded-lg cursor-pointer">
                  <MessageSquare className="w-4 h-4 text-gray-500" />
                  <span className="text-sm">Chat Messages</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="gap-3 py-2 rounded-lg cursor-pointer">
                  <Bell className="w-4 h-4 text-gray-500" />
                  <span className="text-sm">Notifications</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="my-1" />
              </div>

              <DropdownMenuItem className="gap-3 py-2 rounded-lg cursor-pointer">
                <User className="w-4 h-4 text-gray-500" />
                <span className="text-sm">Profile Settings</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-3 py-2 rounded-lg cursor-pointer text-red-600 focus:text-red-600 focus:bg-red-50">
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

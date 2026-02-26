"use client";

import { Search, Calendar, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface CourseFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  category: string;
  setCategory: (category: string) => void;
}

export function CourseFilters({
  searchQuery,
  setSearchQuery,
  category,
  setCategory,
}: CourseFiltersProps) {
  return (
    <div className="p-4 flex flex-col md:flex-row items-center justify-between gap-4">
      {/* Search Input Section */}
      <div className="relative w-full md:max-w-xl">
        <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        <Input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search Course"
          className="pl-12 h-12 bg-[#F0F0F0] rounded-full focus:none placeholder:text-gray-400"
        />
      </div>

      {/* Filter Actions Section */}
      <div className="flex items-center gap-3 w-full md:w-auto">
        <button className="flex items-center justify-between gap-3 px-4 h-11 min-w-25 border border-gray-100 bg-white rounded-full text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors">
          <span>Date</span>
          <Calendar className="w-4 h-4 text-gray-400" />
        </button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center justify-between gap-3 px-4 h-11 min-w-30 border border-gray-100 bg-white rounded-full text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors outline-none">
              <span>{category}</span>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem onClick={() => setCategory("Soft Skill")}>
              Soft Skill
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setCategory("Compliance & Policy")}
            >
              Compliance & Policy
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setCategory("Digital Skills")}>
              Digital Skills
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setCategory("Category")}>
              Clear Filter
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

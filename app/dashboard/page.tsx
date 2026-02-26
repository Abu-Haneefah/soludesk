"use client";

import { useState } from "react";
import { CourseFilters } from "@/components/features/CourseFilters";
import { CourseGrid } from "@/components/features/CourseGrid";
import { coursesData } from "@/data/courses";
import { StatsCards } from "@/components/features/StatCards";

export default function CourseManagementPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Category");

  // Filtering Logic
  const filteredCourses = coursesData.filter((course) => {
    const matchesSearch = course.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "Category" || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-2xl md:text-3xl  text-gray-900">
            Course Management
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Create, organize, and assign courses to teams and individuals
          </p>
        </div>

        {/* Stats Section */}
        <StatsCards />

        {/* Main Content */}
        <div className="bg-white border rounded-xl shadow-sm overflow-hidden">
          <CourseFilters
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            category={selectedCategory}
            setCategory={setSelectedCategory}
          />
          <CourseGrid courses={filteredCourses} />
        </div>
      </div>
    </div>
  );
}

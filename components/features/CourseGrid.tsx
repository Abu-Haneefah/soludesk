"use client";

import { ChevronDown } from "lucide-react";
import { Course } from "@/data/courses";
import { CourseCard } from "./CourseCards";

interface CourseGridProps {
  courses: Course[];
}

export function CourseGrid({ courses }: CourseGridProps) {
  return (
    <div className="space-y-8 p-2 md:p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.length > 0 ? (
          courses.map((course, index) => (
            <div
              key={course.id}
              className="animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <CourseCard
                id={course.id}
                title={course.title}
                image={course.image}
                category={course.category}
                priority={index < 3}
              />
            </div>
          ))
        ) : (
          <div className="col-span-full py-20 text-center text-gray-400 animate-in fade-in duration-700">
            No courses found matching your criteria.
          </div>
        )}
      </div>

      {/* Pagination Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between pt-6 border-t gap-4">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          Show 10/page <ChevronDown className="w-4 h-4" />
        </div>

        <div className="flex items-center gap-1">
          <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
            Prev
          </button>
          {[1, 2, 3, 4, 5, "...", 24].map((page, i) => (
            <button
              key={i}
              className={`w-8 h-8 rounded-full text-xs font-medium transition-all ${
                page === 1
                  ? "bg-blue-600 text-white shadow-md shadow-blue-100"
                  : "text-blue-600 hover:bg-blue-50"
              }`}
            >
              {page === 1
                ? "01"
                : typeof page === "number"
                  ? `0${page}`.slice(-2)
                  : page}
            </button>
          ))}
          <button className="p-2 text-blue-600 font-medium hover:underline">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

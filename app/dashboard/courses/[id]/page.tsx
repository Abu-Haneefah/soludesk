"use client";

import { use } from "react";
import { ArrowLeft, Users, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { coursesData } from "@/data/courses";
import { notFound } from "next/navigation";
import { ApplicantTable } from "@/components/features/ApplicantTable";

export default function CourseDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const course = coursesData.find((c) => c.id === resolvedParams.id);

  if (!course) notFound();

  return (
    <div className="max-w-[350 mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2 md:gap-4">
          <Link
            href="/dashboard"
            className="p-2 hover:bg-gray-50 rounded-full transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </Link>
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
              {course.title}
            </h1>
            <Badge
              variant="secondary"
              className="bg-blue-50 text-blue-600 border-none font-medium text-xs px-3 py-1"
            >
              {course.category}
            </Badge>
          </div>
        </div>

        <Link
          href={`/dashboard/courses/${course.id}/learn`}
          className="w-full sm:w-auto"
        >
          <Button className="w-full bg-[#0066FF] cursor-pointer hover:bg-blue-700 text-white px-8 rounded-lg h-11 font-semibold shadow-sm transition-all active:scale-95">
            Start Learning
          </Button>
        </Link>
      </div>

      {/* Banner Image  */}
      <div className="relative w-full h-70 sm:h-72 md:h-80 rounded-3xl overflow-hidden border border-gray-100 bg-gray-50 shadow-sm">
        <Image
          src={course.image}
          alt={course.title}
          fill
          priority
          quality={100}
          unoptimized={course.image.endsWith(".svg")}
          className="object-cover"
        />
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
        <div className="bg-[#F9FAFB]/50 p-6 rounded-2xl border-2 border-white flex items-center gap-4 shadow-sm">
          <div className="p-3 bg-green-100 text-green-600 rounded-xl">
            <Users size={24} />
          </div>
          <div>
            <p className="text-xs text-gray-500 font-medium  tracking-wider mb-0.5">
              Total Applicants
            </p>
            <p className="text-2xl font-medium text-gray-900">1,223</p>
          </div>
        </div>

        <div className="bg-[#F9FAFB]/50 p-6 rounded-2xl border-2 border-white flex items-center gap-4 shadow-sm">
          <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
            <GraduationCap size={24} />
          </div>
          <div>
            <p className="text-xs text-gray-500 font-medium  tracking-wider mb-0.5">
              Active Learners
            </p>
            <p className="text-2xl font-medium text-gray-900">13</p>
          </div>
        </div>
      </div>

      {/* Table Component */}
      <ApplicantTable />
    </div>
  );
}

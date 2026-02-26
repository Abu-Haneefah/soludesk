"use client";

import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react"; // Shadcn-style loader icon

interface CourseCardProps {
  id: string;
  title: string;
  image: string;
  category: string;
  priority?: boolean;
}

export function CourseCard({
  id,
  title,
  image,
  category,
  priority = false,
}: CourseCardProps) {
  const router = useRouter();
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleCardClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isRedirecting) return;

    setIsRedirecting(true);

    setTimeout(() => {
      router.push(`/dashboard/courses/${id}`);
    }, 1200);
  };

  return (
    <div
      onClick={handleCardClick}
      className={`group relative border border-gray-100 rounded-2xl overflow-hidden bg-white hover:shadow-lg transition-all duration-300 cursor-pointer h-full ${
        isRedirecting ? "opacity-80 pointer-events-none" : ""
      }`}
    >
      {isRedirecting && (
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-white/60 backdrop-blur-[1px] rounded-2xl">
          <Loader2 className="h-8 w-8 text-blue-600 animate-spin" />
          <p className="text-[12px] font-medium text-blue-600 mt-2">
            Loading course...
          </p>
        </div>
      )}

      {/* Course Image */}
      <div className="relative h-48 w-full bg-gray-50 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`object-cover transition-transform duration-500 ${
            !isRedirecting && "group-hover:scale-105"
          }`}
        />
      </div>

      {/* Content Section */}
      <div className="p-5 space-y-3">
        <h3 className="font-bold text-[15px] text-gray-900 leading-tight line-clamp-2 min-h-10">
          {title}
        </h3>
        <p className="text-[12px] text-gray-500 leading-relaxed line-clamp-2">
          Upon completion of this module, participants will implement practical
          communication techniques and strategies...
        </p>

        <div className="pt-1">
          <Badge
            variant="secondary"
            className="bg-[#F3F4F6] text-gray-500 font-medium px-3 py-1 rounded-md hover:bg-gray-200 border-none text-[11px]"
          >
            {category}
          </Badge>
        </div>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface CourseCardProps {
  id: string;
  title: string;
  image: string;
  category: string;
  priority?: boolean; // Added optional priority prop for optimization
}

export function CourseCard({
  id,
  title,
  image,
  category,
  priority = false,
}: CourseCardProps) {
  return (
    <Link href={`/dashboard/courses/${id}`}>
      <div className="group border border-gray-100 rounded-2xl overflow-hidden bg-white hover:shadow-lg transition-all duration-300 cursor-pointer h-full">
        <div className="relative h-48 w-full bg-gray-50 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            priority={priority}
            // Optimization: sizes tells the browser to load appropriate image resolution
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-5 space-y-3">
          <h3 className="font-bold text-[15px] text-gray-900 leading-tight line-clamp-2 min-h-10">
            {title}
          </h3>
          <p className="text-[12px] text-gray-500 leading-relaxed line-clamp-2">
            Upon completion of this module, participants will implement
            practical communication techniques and strategies...
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
    </Link>
  );
}

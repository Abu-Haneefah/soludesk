import { BookOpen, Users, BarChart3, LucideIcon } from "lucide-react";

export interface StatItem {
  label: string;
  value: string;
  icon: LucideIcon;
  color: string;
  trend?: string;
}

export const statsData: StatItem[] = [
  {
    label: "Total courses",
    value: "123",
    icon: BookOpen,
    color: "bg-purple-100 text-purple-600",
  },
  {
    label: "Total Enrollments",
    value: "11",
    icon: Users,
    color: "bg-cyan-100 text-cyan-600",
  },
  {
    label: "Avg Completion",
    value: "99%",
    icon: BarChart3,
    color: "bg-orange-100 text-orange-600",
    trend: "+ 12% up from last month",
  },
];

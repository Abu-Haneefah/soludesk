export interface StatItem {
  label: string;
  value: string;
  icon: string;
  color: string;
  trend?: string;
}

export const statsData: StatItem[] = [
  {
    label: "Total courses",
    value: "123",
    icon: "/icon1.svg",
    color: "bg-purple-100 text-purple-600",
  },
  {
    label: "Total Enrollments",
    value: "11",
    icon: "/icon2.svg",
    color: "bg-cyan-100 text-cyan-600",
  },
  {
    label: "Avg Completion",
    value: "99%",
    icon: "/icon3.svg",
    color: "bg-orange-100 text-orange-600",
    trend: "+ 12% up from last month",
  },
];

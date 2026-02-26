import { TrendingUp } from "lucide-react";
import { statsData } from "@/data/stats";

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {statsData.map((stat) => (
        <div
          key={stat.label}
          className="bg-[#F9FAFB]/50 p-4 rounded-md border-3 border-white flex items-start justify-between relative min-h-24"
        >
          <div className="flex items-center gap-4">
            {/* Icon Container - Standardized padding */}
            <div
              className={`p-3 rounded-xl ${stat.color} flex items-center justify-center shrink-0`}
            >
              <stat.icon size={24} />
            </div>

            {/* Text Content */}
            <div className="flex flex-col">
              <p className="text-sm text-gray-500 font-medium tracking-tight">
                {stat.label}
              </p>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            </div>
          </div>

          {/* Trend Indicator - Bottom Right Alignment */}
          {stat.trend && (
            <div className="absolute bottom-4 right-4">
              <span className="text-[10px] text-green-600 font-semibold flex items-center gap-1 bg-green-50/80 px-2 py-1 rounded-md whitespace-nowrap">
                <TrendingUp size={10} />
                {stat.trend}
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

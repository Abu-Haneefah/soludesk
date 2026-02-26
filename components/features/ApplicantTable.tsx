"use client";

import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { applicantsData } from "@/data/applicants";

export function ApplicantTable() {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
      <div className="p-5 border-b border-gray-50 flex justify-between items-center">
        <h2 className="font-bold text-gray-900 text-base">Recent Applicants</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left min-w-175">
          <thead className="bg-[#F9FAFB] border-b border-gray-100">
            <tr>
              <th className="px-6 py-4 text-[13px] font-semibold text-gray-500">
                Name
              </th>
              <th className="px-6 py-4 text-[13px] font-semibold text-gray-500">
                City
              </th>
              <th className="px-6 py-4 text-[13px] font-semibold text-gray-500">
                Email Address
              </th>
              <th className="px-6 py-4 text-[13px] font-semibold text-gray-500 text-right">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {applicantsData.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-gray-50/50 transition-colors group"
              >
                <td className="px-6 py-4 flex items-center gap-3">
                  <Avatar className="h-9 w-9 border border-gray-100">
                    <AvatarImage src={item.avatar} alt={item.name} />
                    <AvatarFallback className="text-[12px] bg-gray-100 text-gray-600 font-bold">
                      {item.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium text-gray-700">
                    {item.name}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">{item.city}</td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {item.email}
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="p-2 hover:bg-blue-50 rounded-full transition-all">
                    <Image
                      src="/message-text.svg"
                      alt="message"
                      width={20}
                      height={20}
                      className="opacity-70 group-hover:opacity-100"
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer - Matching your image */}
      <div className="p-4 border-t border-gray-50 flex items-center justify-between flex-wrap gap-4">
        <select className="bg-gray-50 border border-gray-200 text-gray-600 text-xs rounded-lg px-2 py-1 outline-none">
          <option>Show 10/page</option>
        </select>

        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500 mr-2">Prev</span>
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              className={`w-7 h-7 flex items-center justify-center rounded-full text-xs font-medium transition-all ${
                page === 1
                  ? "bg-blue-600 text-white"
                  : "text-blue-600 border border-blue-100 hover:bg-blue-50"
              }`}
            >
              {page < 10 ? `0${page}` : page}
            </button>
          ))}
          <span className="text-blue-600 text-xs px-1">...</span>
          <button className="w-7 h-7 flex items-center justify-center rounded-full text-xs font-medium text-blue-600 border border-blue-100 hover:bg-blue-50">
            24
          </button>
          <span className="text-xs text-blue-600 font-bold ml-2">Next</span>
        </div>
      </div>
    </div>
  );
}

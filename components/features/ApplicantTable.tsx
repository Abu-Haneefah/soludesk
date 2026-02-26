"use client";

import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { applicantsData } from "@/data/applicants";

export function ApplicantTable() {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
      <div className="p-5 border-b border-gray-50">
        <h2 className="font-bold text-gray-900 text-base">Recent Applicants</h2>
      </div>

      {/* Mobile Stacked  */}
      <div className="block md:hidden divide-y divide-gray-50">
        {applicantsData.map((item) => (
          <div key={item.id} className="p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10 border border-gray-100">
                  <AvatarImage src={item.avatar} alt={item.name} />
                  <AvatarFallback className="text-xs bg-gray-100 text-gray-600 font-bold">
                    {item.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-bold text-gray-900">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.city}</p>
                </div>
              </div>
              <button className="p-2 bg-blue-50 text-blue-600 rounded-full">
                <Image
                  src="/message-text.svg"
                  alt="msg"
                  width={18}
                  height={18}
                />
              </button>
            </div>
            <div className="flex flex-col text-xs text-gray-500">
              <span className="font-medium text-gray-400 uppercase tracking-tighter">
                Email
              </span>
              <span>{item.email}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-left">
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

      {/* Pagination Footer */}
      <div className="p-4 border-t border-gray-50 flex flex-col sm:flex-row items-center justify-between gap-4">
        <select className="bg-gray-50 border border-gray-200 text-gray-600 text-xs rounded-lg px-2 py-1 outline-none w-full sm:w-auto">
          <option>Show 10/page</option>
        </select>

        <div className="flex items-center gap-1 sm:gap-2">
          <span className="text-xs text-gray-500 mr-1 sm:mr-2">Prev</span>
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              className={`w-7 h-7 flex items-center justify-center rounded-full text-[10px] sm:text-xs font-medium transition-all ${
                page === 1
                  ? "bg-blue-600 text-white"
                  : "text-blue-600 border border-blue-100 hover:bg-blue-50"
              }`}
            >
              0{page}
            </button>
          ))}
          <span className="text-blue-600 text-xs px-1">...</span>
          <button className="w-7 h-7 flex items-center justify-center rounded-full text-xs font-medium text-blue-600 border border-blue-100 hover:bg-blue-50">
            24
          </button>
          <span className="text-xs text-blue-600 font-bold ml-1 sm:ml-2">
            Next
          </span>
        </div>
      </div>
    </div>
  );
}

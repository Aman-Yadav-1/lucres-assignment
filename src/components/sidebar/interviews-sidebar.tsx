"use client";

import { Lock, ArrowUpRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function InterviewsSidebar() {
  const interviews = [
    {
      id: 1,
      name: "Pritesh Srivastava",
      date: "24 May 2024",
      time: "3:30 PM",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
    },
    {
      id: 2,
      name: "Nikita Mansingha",
      date: "24 May 2024",
      time: "3:30 PM",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face",
    },
  ];

  return (
    <div className="w-80 bg-white border-l border-gray-200 p-6 min-h-screen">
      {/* Reveals Left */}
      <div className="mb-6 p-3 border border-green-500 rounded-md">
        <div className="flex items-center space-x-2 mb-2">
          <Lock className="w-4 h-4 text-green-500" />
          <span className="text-sm font-medium text-gray-900">
            5/5 Reveals Left
          </span>
        </div>
        <p className="text-xs text-gray-500">Unlock 50 Resumes at ₹399</p>
      </div>

      {/* Scheduled Interviews */}
      <div className="mb-6 p-3 border border-gray-200 rounded-sm">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-gray-900">Scheduled Interviews</h3>
          <ArrowUpRight className="w-4 h-4 text-gray-400" />
        </div>

        {/* Line below scheduled text */}
        <div className="border-b border-gray-200 mb-4"></div>

        <div className="space-y-3">
          {interviews.map((interview) => (
            <div
              key={interview.id}
              className="flex items-center space-x-3 py-1"
            >
              <Avatar className="w-6 h-6">
                <AvatarImage src={interview.avatar} />
                <AvatarFallback>
                  {interview.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">
                  {interview.name}
                </p>
                <p className="text-xs text-gray-500">
                  {interview.date} • {interview.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

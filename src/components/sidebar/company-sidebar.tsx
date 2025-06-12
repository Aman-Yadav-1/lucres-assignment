"use client";

import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function CompanySidebar() {
  return (
    <div className="w-64 bg-white border-r border-gray-200 p-6">
      {/* Company Header */}
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
          BRAND
        </div>
        <div>
          <div className="flex items-center space-x-1">
            <h2 className="font-semibold text-gray-900">Acme Corp Ltd</h2>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
          <p className="text-sm text-gray-500">@acmecorp • Bengaluru, India</p>
        </div>
      </div>

      {/* Keep It Real Badge */}
      <div className="mb-6">
        <Badge
          variant="secondary"
          className="text-xs bg-gray-100 text-gray-700"
        >
          Keep It Real
        </Badge>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900">200</div>
          <div className="text-xs text-gray-500">Posts</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900">380</div>
          <div className="text-xs text-gray-500">Followers</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900">1003</div>
          <div className="text-xs text-gray-500">Following</div>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="bg-black rounded-lg p-4 text-white text-center mb-6">
        <p className="text-sm italic">
          "Simplicity is the ultimate sophistication."
        </p>
        <p className="text-xs mt-1 opacity-75">- Steve Jobs</p>
      </div>

      {/* Navigation */}
      <nav className="space-y-1">
        {[
          { name: "Dashboard", active: false },
          { name: "Jobs", active: true },
          { name: "Messages", active: false },
          { name: "Activity", active: false },
          { name: "Schedule", active: false },
          { name: "Manage", active: false },
          { name: "API", active: false, badge: "Coming Soon" },
        ].map((item) => (
          <div key={item.name} className="flex items-center">
            <Button
              variant="ghost"
              className={`w-full justify-start text-left ${
                item.active
                  ? "bg-blue-50 text-blue-600 border-r-2 border-blue-500"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {item.name}
            </Button>
            {item.badge && (
              <Badge
                variant="secondary"
                className="ml-2 bg-orange-100 text-orange-600 text-xs"
              >
                {item.badge}
              </Badge>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}

"use client";

import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function CompanySidebar() {
  return (
    <div className="w-64 bg-white border-r border-gray-200 p-6 min-h-screen">
      {/* Company Header */}
      <div className="mb-6">
        {/* Logo */}
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg mb-3">
          BRAND
        </div>

        {/* Company Info */}
        <div>
          <div className="flex items-center space-x-1">
            <h2 className="font-semibold text-gray-900">Acme Corp Ltd</h2>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
          <p className="text-sm text-gray-500">@acmecorp • Bengaluru, India</p>
        </div>
      </div>

      {/* Keep It Real */}
      <div className="mb-6">
        <p className="text-sm text-gray-600">Keep It Real</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center">
          <div className="text-xl font-bold text-gray-900">200</div>
          <div className="text-sm text-gray-500">Posts</div>
        </div>
        <div className="text-center">
          <div className="text-xl font-bold text-gray-900">380</div>
          <div className="text-sm text-gray-500">Followers</div>
        </div>
        <div className="text-center">
          <div className="text-xl font-bold text-gray-900">1003</div>
          <div className="text-sm text-gray-500">Following</div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { Search, Home, Calendar, User, Bell } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 bg-black rounded-sm flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-full"></div>
          </div>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Input
              placeholder="Search for people or company"
              className="pr-10 bg-gray-50 border-gray-200 h-10 rounded-full"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          </div>
        </div>

        {/* Navigation Icons & Button */}
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="w-10 h-10">
            <Home className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="w-10 h-10">
            <Calendar className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="w-10 h-10">
            <User className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="w-10 h-10">
            <Bell className="w-5 h-5" />
          </Button>

          {/* Create a Job Button */}
          <Button className="bg-[#a3e635] hover:bg-[#84cc16] text-black font-medium px-4 py-2 h-10 rounded-full ml-2">
            + Create a Job
          </Button>
        </div>
      </div>
    </header>
  );
}

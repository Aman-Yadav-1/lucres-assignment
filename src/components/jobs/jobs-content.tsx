"use client";

import { useState } from "react";
import { Search, ExternalLink, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

const jobs = [
  {
    id: 1,
    title: "Senior Product Designer",
    location: "Bengaluru, India",
    postedDays: 3,
    applications: 9,
    status: "Active",
    deadline: "Jan 31, 2024",
  },
  {
    id: 2,
    title: "UI/UX Design Intern",
    location: "Delhi, India",
    postedDays: 8,
    applications: 72,
    status: "Active",
  },
  {
    id: 3,
    title: "Senior Full Stack Developer",
    location: "Delhi, India",
    postedDays: 10,
    applications: 75,
    status: "Active",
  },
];

const navigationTabs = [
  { name: "Dashboard", active: false },
  { name: "Jobs", active: true },
  { name: "Messages", active: false },
  { name: "Activity", active: false },
  { name: "Schedule", active: false },
  { name: "Manage", active: false },
  { name: "API", active: false },
];

export function JobsContent() {
  const [activeMainTab, setActiveMainTab] = useState("Jobs");
  const [activeJobTab, setActiveJobTab] = useState("open");

  return (
    <div className="p-6">
      {/* Hero Quote Section */}
      <div className="bg-black rounded-lg p-6 text-white text-center mb-6">
        <p className="text-lg italic">
          "Simplicity is the ultimate sophistication."
        </p>
        <p className="text-sm mt-2 opacity-75">- Steve Jobs</p>
      </div>

      {/* Main Navigation Tabs */}
      <div className="mb-6">
        <nav className="flex space-x-8 border-b border-gray-200">
          {navigationTabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveMainTab(tab.name)}
              className={`pb-4 px-1 border-b-2 transition-colors ${
                tab.active || activeMainTab === tab.name
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              <span className="text-sm font-medium">{tab.name}</span>
              {tab.name === "API" && (
                <Badge
                  variant="secondary"
                  className="ml-2 bg-orange-100 text-orange-600 text-xs"
                >
                  Coming Soon
                </Badge>
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* Job Status Tabs */}
      <Tabs
        value={activeJobTab}
        onValueChange={setActiveJobTab}
        className="w-full"
      >
        <div className="flex items-center justify-between mb-6">
          <TabsList className="grid w-auto grid-cols-3 bg-gray-100">
            <TabsTrigger
              value="open"
              className="data-[state=active]:bg-white data-[state=active]:text-black"
            >
              Open
            </TabsTrigger>
            <TabsTrigger
              value="closed"
              className="data-[state=active]:bg-white data-[state=active]:text-black"
            >
              Closed
            </TabsTrigger>
            <TabsTrigger
              value="draft"
              className="data-[state=active]:bg-white data-[state=active]:text-black"
            >
              Draft
            </TabsTrigger>
          </TabsList>

          {/* Search Jobs */}
          <div className="relative w-80">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search Jobs"
              className="pl-10 bg-white border-gray-200 h-10"
            />
          </div>
        </div>

        <TabsContent value="open" className="space-y-4">
          {jobs.map((job) => (
            <Card
              key={job.id}
              className="bg-white border border-gray-200 hover:shadow-sm transition-shadow"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-start space-x-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <Link
                            href={`/candidate/1`}
                            className="text-lg font-semibold text-gray-900 hover:text-blue-600 flex items-center space-x-1 transition-colors"
                          >
                            <span>{job.title}</span>
                            <ExternalLink className="w-4 h-4" />
                          </Link>
                        </div>
                        <p className="text-sm text-gray-500 mb-4">
                          Posted {job.postedDays} Days Ago • {job.location}
                        </p>
                      </div>

                      {/* Actions and Status */}
                      <div className="flex items-center space-x-4">
                        {job.deadline && (
                          <span className="text-sm text-gray-500">
                            Active until {job.deadline}
                          </span>
                        )}
                        <Badge
                          variant="secondary"
                          className="bg-green-100 text-green-700 font-medium"
                        >
                          {job.applications} New Applications
                        </Badge>
                        <Badge
                          variant="outline"
                          className="border-green-200 text-green-700 bg-green-50"
                        >
                          {job.status}
                        </Badge>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="w-8 h-8"
                            >
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              View Applications
                            </DropdownMenuItem>
                            <DropdownMenuItem>Edit Job</DropdownMenuItem>
                            <DropdownMenuItem>Duplicate</DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="closed">
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <svg
                className="w-16 h-16 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No closed jobs
            </h3>
            <p className="text-gray-500">
              Jobs that have been closed will appear here.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="draft">
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <svg
                className="w-16 h-16 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No draft jobs
            </h3>
            <p className="text-gray-500">
              Job drafts that haven't been published will appear here.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

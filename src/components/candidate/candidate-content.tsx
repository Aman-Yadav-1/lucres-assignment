"use client";

import { useState } from "react";
import {
  ArrowLeft,
  Download,
  ExternalLink,
  Calendar,
  Star,
  LockOpen,
  Eye,
  EyeOff,
  Bookmark,
  Plus,
  ChevronDown,
  UserPlus,
  Edit,
  Lock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

interface CandidateContentProps {
  candidateId: string;
}

export function CandidateContent({ candidateId }: CandidateContentProps) {
  const [activeTab, setActiveTab] = useState("resume");
  const [searchCandidate, setSearchCandidate] = useState("");
  const [sortBy, setSortBy] = useState("Newest");

  // Mock data
  const candidate = {
    name: "Pritesh Srivastava",
    verified: true,
    location: "Bengaluru, India",
    experience: "8 Years of Exp.",
    skills: [
      "Visual Design",
      "Prototyping",
      "Problem Solving",
      "Information Architecture",
      "Business Strategy",
      "Figma",
    ],
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
    experiences: [
      {
        title: "Lead Designer",
        company: "Lollypop Designs",
        duration: "Jan 2022 - Present",
        location: "Bengaluru, India",
        description:
          "Developed a successful, scalable perfect-dark evolving experience in collaboration with product managers, coaches, and athletes. Also, recognized by ExOps India, a regional organization that has been empowering people with disabilities. Developed a successful, scalable perfect-dark evolving experience in collaboration with product managers, coaches, and athletes.",
        duration_months: "2 years 8 months",
      },
      {
        title: "Senior Designer",
        company: "Santander Bank",
        duration: "Jan 2021 - Mar 2021",
        location: "London, UK",
        description:
          "Developed a successful, scalable perfect-dark evolving experience in collaboration with product managers, coaches, and athletes. Also, recognized by ExOps India, a regional organization that has been empowering people with disabilities.",
        duration_months: "3 months",
      },
    ],
    education: [
      {
        degree: "MA, Graphic Design",
        institution: "Kingston University",
        duration: "Jan 2021 - Sep 2023",
        location: "London, UK",
        description:
          "Developed a successful, scalable perfect-dark evolving experience in collaboration with product managers, coaches, and athletes. Also, recognized by ExOps India, a regional organization that has been empowering people with disabilities.",
      },
    ],
    achievements: [
      {
        title: "Course Leader",
        institution: "Kingston University",
        duration: "Jan 2022 - Sep 2023",
        location: "London, UK",
        description:
          "Developed a successful, scalable perfect-dark evolving experience in collaboration with product managers, coaches, and athletes.",
      },
    ],
    languages: ["Hindi", "Telugu", "English", "German"],
  };

  const applications = [
    {
      id: 1,
      candidate: "Pritesh Srivastava",
      location: "Bengaluru, India",
      experience: "8 Years of Exp.",
      appliedDate: "2 Days Ago",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
      locked: false,
      bookmarked: true,
      selected: true,
    },
    {
      id: 2,
      candidate: "Another Candidate",
      location: "Bengaluru, India",
      experience: "8 Years of Exp.",
      appliedDate: "2 Days Ago",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face",
      locked: true,
      bookmarked: false,
      selected: false,
    },
  ];

  const filterTabs = [
    { name: "All", count: null, active: true },
    { name: "Untracked", count: null, active: false },
    { name: "Interviewing", count: null, active: false },
    { name: "Accepted", count: null, active: false },
    { name: "Rejected", count: null, active: false },
    { name: "Saved", count: null, active: false },
  ];

  return (
    <div className="flex">
      {/* Left Sidebar - Applications List */}
      <div className="w-[28rem] bg-white border-r border-gray-200 min-h-screen overflow-y-auto">
        <div className="p-4 border-b border-gray-200">
          {/* Back Navigation */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Link href="/">
                <Button variant="ghost" size="icon" className="w-8 h-8">
                  <ArrowLeft className="w-4 h-4" />
                </Button>
              </Link>
              <span className="text-sm text-gray-500">Back to Dashboard</span>
            </div>

            {/* 4/5 Reveals Left */}
            <div className="border border-gray-300 rounded-md p-2">
              <div className="flex items-center space-x-1">
                <div className="border border-gray-300 rounded p-1">
                  <LockOpen className="w-3 h-3 text-green-500" />
                </div>
                <span className="text-xs font-medium text-gray-900">
                  4/5 Reveals Left
                </span>
              </div>
            </div>
          </div>

          {/* Active Until */}
          <div className="mb-4">
            <p className="text-xs text-gray-500">Active until: Jan 31, 2026</p>
          </div>

          {/* Job Header */}
          <div className="border border-gray-300 rounded-md p-3 mb-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-1">
                <h2 className="font-semibold text-sm">
                  Senior Product Designer
                </h2>
                <Plus className="w-3 h-3 text-gray-400" />
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs bg-gray-100 border-gray-300 h-6 px-2"
                >
                  <UserPlus className="w-3 h-3 mr-1" />
                  Add Team Member
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs bg-gray-100 border-gray-300 h-6 px-2"
                >
                  <Edit className="w-3 h-3 mr-1" />
                  Edit Job
                </Button>
              </div>
            </div>
            <p className="text-xs text-gray-500">
              Posted 3 Days Ago • Bengaluru, India
            </p>
          </div>

          {/* Status Filters */}
          <div className="flex flex-wrap gap-2 mb-4">
            {filterTabs.map((tab) => (
              <Badge
                key={tab.name}
                variant={tab.active ? "default" : "outline"}
                className={`text-xs ${
                  tab.active
                    ? "bg-blue-100 text-blue-600 border-blue-200"
                    : "text-gray-600 border-gray-200 hover:bg-gray-50"
                }`}
              >
                {tab.name}
              </Badge>
            ))}
          </div>

          {/* Search and Sort */}
          <div className="flex items-center gap-2 mb-4">
            <div className="relative">
              <Input
                placeholder="Search Candidate"
                value={searchCandidate}
                onChange={(e) => setSearchCandidate(e.target.value)}
                className="text-sm h-8 w-40"
              />
            </div>
            <div className="flex items-center text-xs text-gray-500">
              <span className="mr-2">Sort by:</span>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="text-xs p-0 h-auto font-medium"
                  >
                    {sortBy} <ChevronDown className="w-3 h-3 ml-1" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => setSortBy("Newest")}>
                    Newest
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSortBy("Oldest")}>
                    Oldest
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSortBy("Name")}>
                    Name
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Border below search */}
          <div className="border-b border-gray-200"></div>
        </div>

        {/* Applications List */}
        <div className="p-4 space-y-3">
          <div className="text-sm font-medium text-gray-700 mb-2">Today</div>
          {applications.map((app) => (
            <Card
              key={app.id}
              className={`cursor-pointer transition-all border ${
                app.selected
                  ? "bg-blue-50 border-blue-200 shadow-sm"
                  : "hover:bg-gray-50 border-gray-200"
              }`}
            >
              <CardContent className="p-3">
                <div className="flex items-start space-x-3">
                  <div className="relative">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={app.avatar} />
                      <AvatarFallback>
                        {app.candidate
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    {app.locked && (
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-gray-400 rounded-full flex items-center justify-center">
                        <Lock className="w-2 h-2 text-white" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <Lock className="w-3 h-3 text-gray-400" />
                      <span className="text-xs text-gray-500">
                        Profile Locked
                      </span>
                    </div>
                    <h3 className="font-medium text-sm text-gray-900 truncate">
                      {app.candidate}
                    </h3>
                    <p className="text-xs text-gray-500">{app.location}</p>
                    <p className="text-xs text-gray-500">{app.experience}</p>

                    {/* Recent Experience */}
                    <div className="mt-2">
                      <p className="text-xs font-medium text-gray-700">
                        Recent Experience
                      </p>
                      <p className="text-xs text-gray-900">
                        Lead Designer • Lollypop Designs
                      </p>
                      <p className="text-xs text-gray-500">
                        Jan 2022 - Present • 2 years 8 months
                      </p>

                      {/* Education */}
                      <p className="text-xs font-medium text-gray-700 mt-2">
                        Education
                      </p>
                      <p className="text-xs text-gray-900">
                        MA, Graphic Design • Kingston University London • 2022
                      </p>

                      {/* Skills */}
                      <div className="flex items-center space-x-1 mt-2">
                        <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                        <span className="text-xs text-gray-700">
                          Visual Design
                        </span>
                        <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                        <span className="text-xs text-gray-700">
                          Prototyping
                        </span>
                        <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                        <span className="text-xs text-gray-700">
                          Problem Solving
                        </span>
                        <span className="text-xs text-gray-500">+3</span>
                      </div>
                    </div>

                    <p className="text-xs text-gray-400 mt-2">
                      Applied {app.appliedDate}
                    </p>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <Button variant="ghost" size="icon" className="w-6 h-6">
                      <Eye className="w-3 h-3" />
                    </Button>
                    <Button variant="ghost" size="icon" className="w-6 h-6">
                      {app.bookmarked ? (
                        <Bookmark className="w-3 h-3 text-yellow-500 fill-current" />
                      ) : (
                        <Bookmark className="w-3 h-3" />
                      )}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          <Button
            variant="ghost"
            className="w-full border-2 border-dashed border-gray-300 text-gray-500 h-10"
          >
            Reveal Profile
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-white">
        {/* Header Tabs - Dashboard Style */}
        <div className="mb-6">
          <nav className="flex space-x-8 border-b border-gray-200">
            {[
              { name: "Resume", value: "resume" },
              { name: "Screening Questions", value: "screening" },
              { name: "Message", value: "message" },
              { name: "Notes", value: "notes" },
              { name: "Schedule", value: "schedule" },
            ].map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`pb-4 px-1 border-b-2 transition-colors ${
                  activeTab === tab.value
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                <span className="text-sm font-medium">{tab.name}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Candidate Header */}
        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-xl font-semibold">Candidate's Resume</h1>
                <p className="text-sm text-gray-500">Last Updated May 2024</p>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="icon" className="h-9 w-9">
                  <Download className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" className="h-9 w-9">
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                  </svg>
                </Button>
                <Button
                  variant="outline"
                  className="h-9 border-red-200 text-red-600 bg-red-50 hover:bg-red-100"
                >
                  Not a Good Fit
                </Button>
                <Button className="h-9 bg-black text-white hover:bg-gray-800">
                  Good Fit
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-9 w-9 bg-green-500 border-green-500 hover:bg-green-600"
                >
                  <Bookmark className="w-4 h-4 text-white" />
                </Button>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Resume Content - Continuous Flow */}
        <div className="bg-white rounded-lg p-8 space-y-8 border border-gray-200">
          {/* Candidate Profile */}
          <div className="border-b border-gray-200 pb-6">
            <div className="flex items-start space-x-4">
              <Avatar className="w-16 h-16">
                <AvatarImage src={candidate.avatar} />
                <AvatarFallback>
                  {candidate.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <h2 className="text-xl font-semibold">{candidate.name}</h2>
                  {candidate.verified && (
                    <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                      <Star className="w-3 h-3 text-white fill-current" />
                    </div>
                  )}
                </div>
                <p className="text-gray-600 mb-4">
                  {candidate.location} • {candidate.experience}
                </p>

                {/* Skills */}
                <div>
                  <h3 className="font-medium mb-2">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {candidate.skills.map((skill, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-gray-100 text-gray-700"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Experience */}
          <div className="border-b border-gray-200 pb-6">
            <h3 className="font-semibold text-lg mb-4">Recent Experience</h3>
            <div className="space-y-6">
              {candidate.experiences.map((exp, index) => (
                <div key={index}>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-base">{exp.title}</h4>
                      <p className="text-gray-600 mb-1">{exp.company}</p>
                      <p className="text-sm text-gray-500 mb-1">
                        {exp.duration} • {exp.duration_months}
                      </p>
                      <p className="text-sm text-gray-500 mb-3">
                        {exp.location}
                      </p>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                  {index === 0 && (
                    <div className="mt-4 ml-6">
                      <Button
                        variant="link"
                        className="p-0 text-blue-600 text-sm h-auto"
                      >
                        + 3 More
                      </Button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="border-b border-gray-200 pb-6">
            <h3 className="font-semibold text-lg mb-4">Education</h3>
            <div className="space-y-4">
              {candidate.education.map((edu, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-base">{edu.degree}</h4>
                    <p className="text-gray-600 mb-1">{edu.institution}</p>
                    <p className="text-sm text-gray-500 mb-1">{edu.duration}</p>
                    <p className="text-sm text-gray-500 mb-3">{edu.location}</p>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="border-b border-gray-200 pb-6">
            <h3 className="font-semibold text-lg mb-4">Achievements</h3>
            <div className="space-y-4">
              {candidate.achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-base">
                      {achievement.title}
                    </h4>
                    <p className="text-gray-600 mb-1">
                      {achievement.institution}
                    </p>
                    <p className="text-sm text-gray-500 mb-1">
                      {achievement.duration}
                    </p>
                    <p className="text-sm text-gray-500 mb-3">
                      {achievement.location}
                    </p>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Languages Known</h3>
            <div className="flex flex-wrap gap-2">
              {candidate.languages.map((language, index) => (
                <Badge key={index} variant="outline" className="bg-gray-50">
                  {language}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

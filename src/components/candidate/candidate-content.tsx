"use client";

import { useState } from "react";
import {
  ArrowLeft,
  Download,
  ExternalLink,
  Calendar,
  Star,
  Lock,
  Eye,
  EyeOff,
  Bookmark,
  Plus,
  ChevronDown,
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
      <div className="w-80 bg-white border-r border-gray-200 h-screen overflow-y-auto">
        <div className="p-4 border-b border-gray-200">
          {/* Back Navigation */}
          <div className="flex items-center space-x-2 mb-4">
            <Link href="/">
              <Button variant="ghost" size="icon" className="w-8 h-8">
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </Link>
            <span className="text-sm text-gray-500">Back to Dashboard</span>
          </div>

          {/* Job Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <h2 className="font-semibold">Senior Product Designer</h2>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="w-8 h-8">
                  <Plus className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Add Team Member</DropdownMenuItem>
                <DropdownMenuItem>Edit Job</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <p className="text-sm text-gray-500 mb-4">
            Posted 3 Days Ago • Bengaluru, India
          </p>

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
          <div className="relative mb-4">
            <Input
              placeholder="Search Candidate"
              value={searchCandidate}
              onChange={(e) => setSearchCandidate(e.target.value)}
              className="text-sm h-9"
            />
          </div>

          <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
            <span>Sort by:</span>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-sm p-0 h-auto font-medium"
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

        {/* Applications List */}
        <div className="p-4 space-y-4">
          <div className="text-sm font-medium text-gray-700 mb-2">Today</div>
          {applications.map((app) => (
            <Card
              key={app.id}
              className={`cursor-pointer transition-all ${
                app.selected
                  ? "bg-blue-50 border-blue-200 shadow-sm"
                  : "hover:bg-gray-50 border-gray-200"
              }`}
            >
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <div className="relative">
                    <Avatar className="w-10 h-10">
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
                    <div className="flex items-center space-x-2">
                      <h3 className="font-medium text-sm text-gray-900 truncate">
                        {app.candidate}
                      </h3>
                      {app.bookmarked && (
                        <Bookmark className="w-3 h-3 text-yellow-500 fill-current" />
                      )}
                    </div>
                    <p className="text-xs text-gray-500">{app.location}</p>
                    <p className="text-xs text-gray-500">{app.experience}</p>
                    <p className="text-xs text-gray-400 mt-1">
                      Applied {app.appliedDate}
                    </p>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <Button variant="ghost" size="icon" className="w-6 h-6">
                      <Eye className="w-3 h-3" />
                    </Button>
                    <Button variant="ghost" size="icon" className="w-6 h-6">
                      <EyeOff className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          <Button
            variant="ghost"
            className="w-full border-2 border-dashed border-gray-300 text-gray-500 h-12"
          >
            View Application
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-50">
        {/* Header Tabs */}
        <div className="flex items-center justify-between mb-6">
          <Badge className="bg-orange-100 text-orange-600 border-orange-200">
            4/5 Reveals Left
          </Badge>

          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-auto"
          >
            <TabsList className="bg-gray-100">
              <TabsTrigger value="resume">Resume</TabsTrigger>
              <TabsTrigger value="screening">Screening Questions</TabsTrigger>
              <TabsTrigger value="message">Message</TabsTrigger>
              <TabsTrigger value="notes">Notes</TabsTrigger>
              <TabsTrigger value="schedule">Schedule</TabsTrigger>
            </TabsList>
          </Tabs>
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
                <Button variant="outline" size="icon">
                  <Download className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <ExternalLink className="w-4 h-4" />
                </Button>
                <Badge
                  variant="outline"
                  className="border-red-200 text-red-600 bg-red-50"
                >
                  Not a Good Fit
                </Badge>
                <Button className="bg-black text-white hover:bg-gray-800">
                  Good Fit
                </Button>
                <Button variant="outline" size="icon">
                  <Bookmark className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Candidate Profile */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4 mb-6">
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
                <div className="mb-4">
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
          </CardContent>
        </Card>

        {/* Recent Experience */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Recent Experience</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {candidate.experiences.map((exp, index) => (
              <div key={index}>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{exp.title}</h3>
                    <p className="text-gray-600 mb-1">{exp.company}</p>
                    <p className="text-sm text-gray-500 mb-1">
                      {exp.duration} • {exp.duration_months}
                    </p>
                    <p className="text-sm text-gray-500 mb-3">{exp.location}</p>
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
          </CardContent>
        </Card>

        {/* Education */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Education</CardTitle>
          </CardHeader>
          <CardContent>
            {candidate.education.map((edu, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{edu.degree}</h3>
                  <p className="text-gray-600 mb-1">{edu.institution}</p>
                  <p className="text-sm text-gray-500 mb-1">{edu.duration}</p>
                  <p className="text-sm text-gray-500 mb-3">{edu.location}</p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Achievements */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Achievements</CardTitle>
          </CardHeader>
          <CardContent>
            {candidate.achievements.map((achievement, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{achievement.title}</h3>
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
          </CardContent>
        </Card>

        {/* Languages */}
        <Card>
          <CardHeader>
            <CardTitle>Languages Known</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {candidate.languages.map((language, index) => (
                <Badge key={index} variant="outline" className="bg-gray-50">
                  {language}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Right Panel - Send Calendar Invite */}
      <div className="w-80 bg-white border-l border-gray-200 p-6">
        <Button className="w-full mb-4" variant="outline">
          <Calendar className="w-4 h-4 mr-2" />
          Send Calendar Invite
        </Button>
      </div>
    </div>
  );
}

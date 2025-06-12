"use client";

import { Header } from "@/components/navigation/header";
import { CompanySidebar } from "@/components/sidebar/company-sidebar";
import { InterviewsSidebar } from "@/components/sidebar/interviews-sidebar";
import { JobsContent } from "@/components/jobs/jobs-content";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="flex">
        <CompanySidebar />
        <main className="flex-1">
          <JobsContent />
        </main>
        <InterviewsSidebar />
      </div>
    </div>
  );
}

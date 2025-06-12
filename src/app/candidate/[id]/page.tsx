"use client";

import { Header } from "@/components/navigation/header";
import { CompanySidebar } from "@/components/sidebar/company-sidebar";
import { CandidateContent } from "@/components/candidate/candidate-content";

export default function CandidatePage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex">
        <CompanySidebar />
        <main className="flex-1">
          <CandidateContent candidateId={params.id} />
        </main>
      </div>
    </div>
  );
}

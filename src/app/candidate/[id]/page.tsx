"use client";

import { Header } from "@/components/navigation/header";
import { CandidateContent } from "@/components/candidate/candidate-content";

export default function CandidatePage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="w-full">
        <CandidateContent candidateId={params.id} />
      </main>
    </div>
  );
}

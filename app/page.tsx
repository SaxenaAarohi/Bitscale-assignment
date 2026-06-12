"use client";

import { useState } from "react";
import { DashboardShell } from "@/components/layout/DashboardShell";
import { WelcomeHeader } from "@/components/dashboard/WelcomeHeader";
import { LatestCard } from "@/components/dashboard/LatestCard";
import { ProductDemoCard } from "@/components/dashboard/ProductDemoCard";
import { GridsSection } from "@/components/dashboard/GridsSection";
import { FindPeopleModal } from "@/components/findpeople/FindPeopleModal";
import { demoChecklist } from "@/data/grids";

export default function DashboardPage() {
  const [findPeopleOpen, setFindPeopleOpen] = useState(false);

  return (
    <DashboardShell>
      <div className="space-y-6">
        <WelcomeHeader onFindPeople={() => setFindPeopleOpen(true)} />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <LatestCard />
          <ProductDemoCard items={demoChecklist} />
        </div>

        <GridsSection />
      </div>

      <FindPeopleModal
        open={findPeopleOpen}
        onClose={() => setFindPeopleOpen(false)}
      />
    </DashboardShell>
  );
}

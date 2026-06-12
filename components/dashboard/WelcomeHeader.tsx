"use client";

import { Building2, UserSearch, Plus } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function WelcomeHeader({
  onFindPeople,
  onFindCompanies,
  onNewGrid,
}: {
  onFindPeople: () => void;
  onFindCompanies?: () => void;
  onNewGrid?: () => void;
}) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <h1 className="text-xl font-semibold text-ink-900 sm:text-2xl">
          Welcome back, Tim!
        </h1>
        <p className="mt-1 text-sm text-ink-500">
          Here&apos;s your daily scoop on Bitscale!
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <Button
          variant="secondary"
          onClick={onFindCompanies}
          leftIcon={<Building2 className="h-4 w-4" />}
        >
          Find Companies
        </Button>
        <Button
          variant="secondary"
          onClick={onFindPeople}
          leftIcon={<UserSearch className="h-4 w-4" />}
        >
          Find People
        </Button>
        <Button
          variant="dark"
          onClick={onNewGrid}
          leftIcon={<Plus className="h-4 w-4" />}
        >
          New Grid
        </Button>
      </div>
    </div>
  );
}

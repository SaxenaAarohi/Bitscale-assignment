"use client";

import { Menu, Coins } from "lucide-react";
import { Avatar } from "@/components/ui/Avatar";

export function Topbar({ onOpenSidebar }: { onOpenSidebar: () => void }) {
  return (
    <header className="sticky top-0 z-20 flex h-14 items-center justify-between gap-3 border-b border-line bg-white px-4 sm:px-6">
      <button
        onClick={onOpenSidebar}
        aria-label="Open navigation"
        className="rounded-md p-2 text-ink-700 hover:bg-canvas md:hidden focus-ring"
      >
        <Menu className="h-5 w-5" />
      </button>

      <div className="hidden md:block" />

      <div className="ml-auto flex items-center gap-3">

        <div className="hidden items-center rounded-2xl bg-bit-greenLight py-[6px] pl-3 pr-[8px] sm:flex">
          <span className="flex items-center gap-[6px] pr-2 text-xs font-medium text-bit-green">
            <Coins className="h-3.5 w-3.5" aria-hidden="true" />
            450000/5500000
          </span>
          <span className="inline-flex h-[22px] items-center rounded-[8.5px] bg-bit-green px-2.5 text-xs font-semibold text-white">
            Booster Plan
          </span>
        </div>

        <span className="inline-flex h-[22px] items-center rounded-[8.5px] bg-bit-green px-2.5 text-xs font-semibold text-white sm:hidden">
          Booster Plan
        </span>

        <Avatar initials="TM" color="bg-orange-500" size="md" label="Tim Maxwell" />
      </div>
    </header>
  );
}

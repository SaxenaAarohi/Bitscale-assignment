"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-canvas">

      <aside className="fixed inset-y-0 left-0 z-30 hidden w-56 border-r border-line md:block">
        <Sidebar />
      </aside>

      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden",
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
        aria-hidden={!mobileOpen}
      >
        <div
          className={cn(
            "absolute inset-0 bg-black/40 transition-opacity",
            mobileOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={cn(
            "absolute inset-y-0 left-0 w-72 max-w-[85%] border-r border-line bg-white shadow-modal transition-transform duration-200",
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <Sidebar onNavigate={() => setMobileOpen(false)} />
        </div>
      </div>

      <div className="md:pl-56">
        <Topbar onOpenSidebar={() => setMobileOpen(true)} />

        <main className="mx-auto w-full max-w-[1440px] p-4 sm:p-[21px]">
          {children}
        </main>
      </div>
    </div>
  );
}

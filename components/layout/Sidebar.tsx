"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, LifeBuoy, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { Icon } from "@/lib/icons";
import { navGroups } from "@/data/navigation";
import { Logo } from "./Logo";
import { WorkspaceSwitcher } from "./WorkspaceSwitcher";

export function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col bg-white">

      <div className="flex h-[55px] shrink-0 items-center justify-between gap-2.5 px-4">
        <Logo />
        {onNavigate && (
          <button
            onClick={onNavigate}
            aria-label="Close navigation"
            className="rounded-md p-1.5 text-ink-500 hover:bg-canvas md:hidden focus-ring"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      <div className="flex h-[55px] shrink-0 items-center px-2">
        <WorkspaceSwitcher />
      </div>

      <nav className="flex-1 overflow-y-auto">
        {navGroups.map((group) => (
          <div key={group.id} className="p-2">
            {group.heading && (
              <p className="px-2 pb-2 pt-1.5 text-xs font-medium uppercase tracking-wide text-ink-400">
                {group.heading}
              </p>
            )}
            <ul className="space-y-0">
              {group.items.map((item) => {

                const isDashboard = item.href === "/";
                const active = isDashboard && pathname === item.href;

                const content = (
                  <>
                    <Icon
                      name={item.icon}
                      className={cn(
                        "h-4 w-4 shrink-0",
                        active ? "text-accent-ink" : "text-ink-400"
                      )}
                    />
                    <span className="flex-1 truncate">{item.label}</span>
                    {item.hasChevron && (
                      <ChevronRight
                        className={cn(
                          "h-4 w-4 shrink-0",
                          active ? "text-accent-ink" : "text-ink-300"
                        )}
                        aria-hidden="true"
                      />
                    )}
                  </>
                );

                const baseClass = cn(
                  "group flex h-10 w-full items-center gap-2 rounded-[8.5px] px-2 text-left text-sm font-medium transition-colors focus-ring",
                  active
                    ? "bg-accent text-accent-ink"
                    : "text-ink-700 hover:bg-canvas"
                );

                return (
                  <li key={item.id}>
                    {isDashboard ? (
                      <Link
                        href={item.href}
                        onClick={onNavigate}
                        aria-current={active ? "page" : undefined}
                        className={baseClass}
                      >
                        {content}
                      </Link>
                    ) : (
                      <button type="button" className={baseClass}>
                        {content}
                      </button>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      <div className="border-t border-line p-3">
        <button className="flex w-full items-center gap-2.5 rounded-lg px-2 py-2 text-left transition-colors hover:bg-canvas focus-ring">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-canvas text-ink-700">
            <LifeBuoy className="h-4 w-4" aria-hidden="true" />
          </span>
          <span className="flex-1">
            <span className="block text-sm font-semibold text-ink-900">Bitscale</span>
            <span className="block text-xs text-ink-400">Get Support at Bitscale</span>
          </span>
          <ChevronRight className="h-4 w-4 text-ink-300" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

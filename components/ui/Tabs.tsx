"use client";

import { cn } from "@/lib/cn";

export interface TabItem {
  id: string;
  label: string;

  count?: number;
}

export function Tabs({
  tabs,
  active,
  onChange,
  className,
}: {
  tabs: TabItem[];
  active: string;
  onChange: (id: string) => void;
  className?: string;
}) {
  return (
    <div
      role="tablist"
      aria-label="Grid views"
      className={cn("flex items-center gap-6 border-b border-line", className)}
    >
      {tabs.map((tab) => {
        const isActive = tab.id === active;
        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={isActive}
            tabIndex={isActive ? 0 : -1}
            onClick={() => onChange(tab.id)}
            className={cn(
              "relative -mb-px py-2.5 text-sm font-medium transition-colors focus-ring rounded-sm",
              isActive ? "text-ink-900" : "text-ink-400 hover:text-ink-700"
            )}
          >
            <span className="inline-flex items-center gap-1.5">
              {tab.label}
              {typeof tab.count === "number" && (
                <span
                  className={cn(
                    "inline-flex h-5 min-w-[20px] items-center justify-center rounded-full px-1.5 text-[11px] font-semibold transition-colors",
                    isActive
                      ? "bg-ink-900 text-white"
                      : "bg-line text-ink-500"
                  )}
                >
                  {tab.count}
                </span>
              )}
            </span>
            <span
              className={cn(
                "absolute inset-x-0 -bottom-px h-0.5 rounded-full transition-colors",
                isActive ? "bg-ink-900" : "bg-transparent"
              )}
            />
          </button>
        );
      })}
    </div>
  );
}

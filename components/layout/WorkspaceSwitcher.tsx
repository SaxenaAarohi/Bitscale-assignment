"use client";

import { ChevronDown, Check } from "lucide-react";
import { useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { useClickOutside } from "@/lib/useClickOutside";

const spaces = ["GTM Spaces", "Marketing Space", "Recruiting Space"];

export function WorkspaceSwitcher() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(spaces[0]);
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, () => setOpen(false), open);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex w-full items-center gap-2 rounded-lg border border-line bg-white px-2.5 py-2 text-sm font-medium text-ink-900 transition-colors hover:border-ink-300 focus-ring"
      >
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-violet-500 to-indigo-500 text-[10px] font-bold text-white">
          G
        </span>
        <span className="flex-1 truncate text-left">{active}</span>
        <ChevronDown
          className={cn(
            "h-4 w-4 shrink-0 text-ink-400 transition-transform",
            open && "rotate-180"
          )}
          aria-hidden="true"
        />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute left-0 right-0 z-30 mt-1.5 overflow-hidden rounded-lg border border-line bg-white p-1 shadow-popover"
        >
          {spaces.map((space) => (
            <li key={space}>
              <button
                role="option"
                aria-selected={space === active}
                onClick={() => {
                  setActive(space);
                  setOpen(false);
                }}
                className="flex w-full items-center justify-between rounded-md px-2.5 py-2 text-left text-sm text-ink-700 transition-colors hover:bg-canvas"
              >
                {space}
                {space === active && (
                  <Check className="h-4 w-4 text-ink-900" aria-hidden="true" />
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

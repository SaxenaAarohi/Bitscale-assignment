"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { useClickOutside } from "@/lib/useClickOutside";

export interface DropdownItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  danger?: boolean;
  onSelect?: () => void;
}

export function Dropdown({
  trigger,
  items,
  align = "right",
  menuLabel = "Actions",
}: {
  trigger: (props: { open: boolean; toggle: () => void }) => React.ReactNode;
  items: DropdownItem[];
  align?: "left" | "right";
  menuLabel?: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, () => setOpen(false), open);

  return (
    <div className="relative" ref={ref}>
      {trigger({ open, toggle: () => setOpen((v) => !v) })}
      {open && (
        <div
          role="menu"
          aria-label={menuLabel}
          className={cn(
            "absolute z-30 mt-1.5 min-w-[180px] overflow-hidden rounded-lg border border-line bg-white p-1 shadow-popover",
            align === "right" ? "right-0" : "left-0"
          )}
        >
          {items.map((item) => (
            <button
              key={item.id}
              role="menuitem"
              onClick={() => {
                item.onSelect?.();
                setOpen(false);
              }}
              className={cn(
                "flex w-full items-center gap-2 rounded-md px-2.5 py-2 text-left text-sm transition-colors",
                item.danger
                  ? "text-rose-600 hover:bg-rose-50"
                  : "text-ink-700 hover:bg-canvas"
              )}
            >
              {item.icon && <span className="shrink-0">{item.icon}</span>}
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

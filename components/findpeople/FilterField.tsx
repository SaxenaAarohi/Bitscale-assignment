"use client";

import { useRef, useState } from "react";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/cn";
import { Icon } from "@/lib/icons";
import { useClickOutside } from "@/lib/useClickOutside";
import type { FilterField as FilterFieldType } from "@/types";

export function FilterField({
  field,
  value,
  onChange,
}: {
  field: FilterFieldType;
  value: string;
  onChange: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, () => setOpen(false), open);

  return (
    <div className="flex flex-1 flex-col justify-center border-b border-line py-2">
      <label
        htmlFor={`filter-${field.id}`}
        className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-ink-800"
      >
        <Icon name={field.icon} className="h-3.5 w-3.5 text-ink-400" />
        {field.label}
      </label>

      {field.variant === "input" ? (
        <input
          id={`filter-${field.id}`}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={field.placeholder}
          className="h-9 w-full rounded-lg border border-line bg-white px-3 text-sm text-ink-900 placeholder:text-ink-400 transition-colors hover:border-ink-300 focus:border-ink-300 focus-ring"
        />
      ) : (
        <div className="relative" ref={ref}>
          <button
            id={`filter-${field.id}`}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-haspopup="listbox"
            aria-expanded={open}
            className="flex h-9 w-full items-center justify-between gap-2 rounded-lg border border-line bg-white px-3 text-left text-sm transition-colors hover:border-ink-300 focus-ring"
          >
            <span className={cn("truncate", value ? "text-ink-900" : "text-ink-400")}>
              {value || field.placeholder}
            </span>
            <ChevronDown
              className={cn(
                "h-4 w-4 shrink-0 text-ink-400 transition-transform",
                open && "rotate-180"
              )}
              aria-hidden="true"
            />
          </button>

          {open && field.options && (
            <ul
              role="listbox"
              aria-label={field.label}
              className="absolute left-0 right-0 z-30 mt-1.5 max-h-52 overflow-y-auto rounded-lg border border-line bg-white p-1 shadow-popover"
            >
              {value && (
                <li>
                  <button
                    type="button"
                    onClick={() => {
                      onChange("");
                      setOpen(false);
                    }}
                    className="w-full rounded-md px-2.5 py-2 text-left text-sm text-ink-400 hover:bg-canvas"
                  >
                    Clear selection
                  </button>
                </li>
              )}
              {field.options.map((option) => (
                <li key={option}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={option === value}
                    onClick={() => {
                      onChange(option);
                      setOpen(false);
                    }}
                    className="flex w-full items-center justify-between rounded-md px-2.5 py-2 text-left text-sm text-ink-700 hover:bg-canvas"
                  >
                    {option}
                    {option === value && (
                      <Check className="h-4 w-4 text-ink-900" aria-hidden="true" />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

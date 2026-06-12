"use client";

import { useState } from "react";
import {
  Star,
  Lock,
  Share2,
  AlertCircle,
  MoreHorizontal,
  ArrowUpDown,
  Eye,
  Pencil,
  Copy,
  Trash2,
  ChevronDown,
  UserPlus,
  GitBranch,
  Building2,
} from "lucide-react";
import { cn } from "@/lib/cn";
import { Avatar } from "@/components/ui/Avatar";
import { Dropdown } from "@/components/ui/Dropdown";
import { SourceIcon } from "./SourceIcon";
import type { GridRow } from "@/types";

const flagIcon = {
  locked: Lock,
  shared: Share2,
  alert: AlertCircle,
} as const;

const subIcons = [
  { Icon: UserPlus, className: "text-violet-600" },
  { Icon: GitBranch, className: "text-orange-500" },
  { Icon: Building2, className: "text-emerald-600" },
];

function RowActions({ name }: { name: string }) {
  return (
    <Dropdown
      menuLabel={`Actions for ${name}`}
      items={[
        { id: "open", label: "Open", icon: <Eye className="h-4 w-4" /> },
        { id: "rename", label: "Rename", icon: <Pencil className="h-4 w-4" /> },
        { id: "duplicate", label: "Duplicate", icon: <Copy className="h-4 w-4" /> },
        {
          id: "delete",
          label: "Delete",
          icon: <Trash2 className="h-4 w-4" />,
          danger: true,
        },
      ]}
      trigger={({ open, toggle }) => (
        <button
          onClick={toggle}
          aria-haspopup="menu"
          aria-expanded={open}
          aria-label={`Actions for ${name}`}
          className={cn(
            "rounded-md p-1.5 text-ink-400 transition-colors hover:bg-canvas hover:text-ink-700 focus-ring",
            open && "bg-canvas text-ink-700"
          )}
        >
          <MoreHorizontal className="h-4 w-4" />
        </button>
      )}
    />
  );
}

export function GridsTable({
  rows,
  onToggleStar,
}: {
  rows: GridRow[];
  onToggleStar: (id: string) => void;
}) {
  const [expanded, setExpanded] = useState<Set<string>>(
    () => new Set(rows.filter((r) => r.expandable).map((r) => r.id))
  );

  const toggleExpand = (id: string) =>
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  if (rows.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-1 rounded-xl border border-dashed border-line bg-[rgba(243, 244, 246, 1)] py-16 text-center">
        <p className="text-sm font-medium text-ink-700">No grids found</p>
        <p className="text-xs text-ink-400">
          Try a different search term or clear the filter.
        </p>
      </div>
    );
  }

  return (
    <div className="-mx-5 overflow-x-auto">
      <table className="w-full min-w-[640px] border-collapse text-sm">
        <thead>
          <tr className="border-b border-line text-left text-xs font-medium text-ink-400">
            <th scope="col" className="px-5 py-1.5 font-medium">
              <span className="inline-flex items-center gap-1">
                Name
                <ArrowUpDown className="h-3 w-3" aria-hidden="true" />
              </span>
            </th>
            <th scope="col" className="px-5 py-1.5 font-medium">
              Edited by
            </th>
            <th scope="col" className="px-5 py-1.5 font-medium">
              Last edited
            </th>
            <th scope="col" className="px-5 py-1.5 text-right font-medium">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => {
            const isExpanded = expanded.has(row.id);
            return (
              <tr
                key={row.id}
                className={cn(
                  "group h-10 border-b border-line transition-colors hover:bg-canvas/60",
                  index < 3 ? "bg-[#F9FAFB]" : "bg-white"
                )}
              >
                <td className="px-5 py-1.5">
                  <div className="flex items-center gap-2.5">
                    {row.expandable ? (
                      <button
                        onClick={() => toggleExpand(row.id)}
                        aria-expanded={isExpanded}
                        aria-label={isExpanded ? "Collapse row" : "Expand row"}
                        className="rounded p-0.5 text-ink-500 hover:text-ink-800 focus-ring"
                      >
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform",
                            !isExpanded && "-rotate-90"
                          )}
                        />
                      </button>
                    ) : (
                      <span className="w-5 shrink-0" aria-hidden="true" />
                    )}

                    <button
                      onClick={() => onToggleStar(row.id)}
                      aria-label={row.starred ? "Unstar grid" : "Star grid"}
                      aria-pressed={row.starred}
                      className="rounded p-0.5 focus-ring"
                    >
                      <Star
                        className={cn(
                          "h-[14px] w-[14px] transition-colors",
                          row.starred
                            ? "fill-amber-400 text-amber-400"
                            : "text-ink-300 hover:text-amber-400"
                        )}
                      />
                    </button>

                    {row.expandable && isExpanded ? (
                      <span className="flex items-center -space-x-1.5">
                        {subIcons.map(({ Icon, className }, i) => (
                          <span
                            key={i}
                            className="flex h-[21px] w-[21px] items-center justify-center rounded-lg border border-[#F1F1EF] bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.04)]"
                          >
                            <Icon className={cn("h-3.5 w-3.5", className)} aria-hidden="true" />
                          </span>
                        ))}
                      </span>
                    ) : (
                      <SourceIcon source={row.source} />
                    )}

                    <span className="truncate font-[12px] text-ink-800">
                      {row.name}
                    </span>
                    {row.flags?.map((flag) => {
                      const FlagIcon = flagIcon[flag];
                      return (
                        <FlagIcon
                          key={flag}
                          className="h-3.5 w-3.5 shrink-0 text-ink-300"
                          aria-label={flag}
                        />
                      );
                    })}
                  </div>
                </td>
                <td className="px-5 py-1.5">
                  <div className="flex items-center gap-2">
                    <Avatar
                      initials={row.editedBy.initials}
                      color={row.editedBy.color}
                      label={row.editedBy.name}
                    />
                    <span className="text-ink-600">{row.editedBy.name}</span>
                  </div>
                </td>
                <td className="px-5 py-1.5 text-ink-500">{row.lastEdited}</td>
                <td className="px-5 py-1.5">
                  <div className="flex justify-end">
                    <RowActions name={row.name} />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

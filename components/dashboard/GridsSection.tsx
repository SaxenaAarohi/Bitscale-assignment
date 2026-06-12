"use client";

import { useMemo, useState } from "react";
import { LayoutGrid, List } from "lucide-react";
import { cn } from "@/lib/cn";
import { Tabs } from "@/components/ui/Tabs";
import { SearchInput } from "@/components/ui/SearchInput";
import { GridsTable } from "./GridsTable";
import { gridRows as initialRows } from "@/data/grids";
import type { GridRow } from "@/types";

export function GridsSection() {
  const [rows, setRows] = useState<GridRow[]>(initialRows);
  const [tab, setTab] = useState("my-grids");
  const [query, setQuery] = useState("");
  const [view, setView] = useState<"list" | "grid">("list");

  const toggleStar = (id: string) =>
    setRows((prev) =>
      prev.map((r) => (r.id === id ? { ...r, starred: !r.starred } : r))
    );

  const visibleRows = useMemo(() => {
    const q = query.trim().toLowerCase();
    return rows.filter((r) => {
      const matchesTab = tab === "starred" ? r.starred : true;
      const matchesQuery =
        q === "" ||
        r.name.toLowerCase().includes(q) ||
        r.editedBy.name.toLowerCase().includes(q);
      return matchesTab && matchesQuery;
    });
  }, [rows, tab, query]);

  const tabs = useMemo(
    () => [
      { id: "my-grids", label: "My Grids", count: rows.length },
      { id: "starred", label: "Starred", count: rows.filter((r) => r.starred).length },
    ],
    [rows]
  );

  return (

    <section
      aria-label="Grids"
      className="flex flex-col gap-6 rounded-lg border border-line bg-white px-5 pb-6 pt-px"
    >

      <div className="flex min-h-9 flex-col gap-3 pt-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <Tabs tabs={tabs} active={tab} onChange={setTab} className="order-2 sm:order-1" />

        <div className="order-1 flex items-center gap-2 sm:order-2">
          <SearchInput
            value={query}
            onChange={setQuery}
            placeholder="Search grids and workbooks..."
            aria-label="Search grids and workbooks"
            className="w-full sm:w-72"
          />
          <div className="flex shrink-0 items-center rounded-lg border border-line bg-white p-0.5">
            <ViewToggleButton
              active={view === "list"}
              onClick={() => setView("list")}
              label="List view"
            >
              <List className="h-4 w-4" />
            </ViewToggleButton>
            <ViewToggleButton
              active={view === "grid"}
              onClick={() => setView("grid")}
              label="Grid view"
            >
              <LayoutGrid className="h-4 w-4" />
            </ViewToggleButton>
          </div>
        </div>
      </div>

      {view === "list" ? (
        <GridsTable rows={visibleRows} onToggleStar={toggleStar} />
      ) : (
        <GridsCardGrid rows={visibleRows} onToggleStar={toggleStar} />
      )}
    </section>
  );
}

function ViewToggleButton({
  active,
  onClick,
  label,
  children,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      aria-pressed={active}
      className={cn(
        "flex h-7 w-7 items-center justify-center rounded-md transition-colors focus-ring",
        active ? "bg-ink-900 text-white" : "text-ink-400 hover:text-ink-700"
      )}
    >
      {children}
    </button>
  );
}

function GridsCardGrid({
  rows,
  onToggleStar,
}: {
  rows: GridRow[];
  onToggleStar: (id: string) => void;
}) {
  if (rows.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-line bg-white py-16 text-center text-sm text-ink-400">
        No grids found
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {rows.map((row) => (
        <article
          key={row.id}
          className="rounded-xl border border-line bg-white p-4 shadow-card transition-shadow hover:shadow-popover"
        >
          <div className="flex items-start justify-between">
            <span className="text-xs text-ink-400">{row.lastEdited}</span>
            <button
              onClick={() => onToggleStar(row.id)}
              aria-label={row.starred ? "Unstar grid" : "Star grid"}
              aria-pressed={row.starred}
              className="text-ink-300 hover:text-amber-400 focus-ring rounded"
            >
              <span className={cn(row.starred && "text-amber-400")}>★</span>
            </button>
          </div>
          <h3 className="mt-2 line-clamp-2 text-sm font-medium text-ink-800">
            {row.name}
          </h3>
          <p className="mt-3 text-xs text-ink-400">By {row.editedBy.name}</p>
        </article>
      ))}
    </div>
  );
}

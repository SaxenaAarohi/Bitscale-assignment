"use client";

import { useState } from "react";
import { X, Bookmark, Search, Lock, Eye, ChevronDown } from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { FilterField } from "./FilterField";
import { EmptyResults } from "./EmptyResults";
import { findPeopleFilters, resultColumns } from "@/data/findPeople";

export function FindPeopleModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [values, setValues] = useState<Record<string, string>>({});

  const setValue = (id: string, value: string) =>
    setValues((prev) => ({ ...prev, [id]: value }));

  return (
    <Modal
      open={open}
      onClose={onClose}
      labelledBy="find-people-title"
      className="max-w-[1025px] md:h-[718px]"
    >
      <div className="flex h-full  flex-col">
        <button
            onClick={onClose}
            aria-label="Close Find People"
            className="ml-auto rounded-md p-1.5 text-ink-400 transition-colors hover:bg-canvas hover:text-ink-700 focus-ring"
          >
            <X className="h-5 w-5" />
          </button> 
        <header className="flex shrink-0 justify-between gap-4  px-8 pb-2">
          <div className="flex justify-between gap-20">
          <h2 id="find-people-title" className="text-base font-semibold text-ink-900">
            Find People
          </h2>
          <button className="inline-flex items-center gap-1.5 rounded-md border border-line px-2 py-1 text-xs font-medium text-ink-600 transition-colors hover:bg-canvas focus-ring">
            <ChevronDown className="h-3.5 w-3.5" />
            Saved Search
          </button>
         </div>
         
          <div>
            <span className="inline-flex shrink-0 items-center gap-1 rounded-md bg-amber-50 px-2 py-0.5 text-xs font-medium text-amber-600">
                  <Search className="h-3 w-3" aria-hidden="true" />
                  8000/50000
                </span>
                </div>
        </header>

        <div className="grid min-h-0 flex-1 grid-cols-1 gap-1 md:grid-cols-[319px_minmax(0,1fr)]">
          <section className="flex min-h-0 flex-col  border-b border-line md:border-b-0 md:border-r">
            <div className="flex min-h-0 flex-1 flex-col overflow-y-auto pl-8">
              {findPeopleFilters.map((field) => (
                <FilterField
                  key={field.id}
                  field={field}
                  value={values[field.id] ?? ""}
                  onChange={(v) => setValue(field.id, v)}
                />
              ))}
            </div>
            <div className="flex shrink-0 items-center gap-2 px-8 py-4">
              <Button
                variant="secondary"
                className="flex-1"
                leftIcon={<Bookmark className="h-4 w-4" />}
              >
                Save Search
              </Button>
                 <Button variant="dark" leftIcon={<Eye className="h-4 w-4" />}  className={"h-[34px] w-[160px] px-[6px]"}>
                Preview Result
              </Button>
            </div>
          </section>

          <section className="flex min-h-0 min-w-0 flex-col">
            <div className="flex shrink-0 flex-col gap-1 px-4 pb-4">
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs text-ink-500">
                  Found <span className="font-semibold text-ink-900">0</span> companies.
                  Click preview to view results.
                </p>
                 <span className="inline-flex items-center gap-1 text-[11px] text-amber-600">
                  <Lock className="h-3 w-3" aria-hidden="true" />
                  Unlock <span className="font-semibold">100,000</span> leads with
                  Enterprise Plan*
                </span>
              </div>
         
            </div>

            <div className="flex shrink-0 gap-3 overflow-hidden bg-[#F9FAFB] px-4 py-2.5 shadow-[0_2px_6px_rgba(249, 250, 251, 1)]">
              {resultColumns.map((col) => (
                <span
                  key={col.id}
                  className="min-w-0 flex-1 bg-gray/50 truncate text-[11px] font-semibold uppercase tracking-wide text-ink-400"
                >
                  {col.label}
                </span>
              ))}
            </div>

            <div className="flex min-h-0 flex-1 items-center justify-center overflow-y-auto">
              <EmptyResults />
            </div>
          </section>
        </div>
      </div>
    </Modal>
  );
}

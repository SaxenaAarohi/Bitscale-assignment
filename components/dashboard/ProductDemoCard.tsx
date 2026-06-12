import { CheckCircle2, Circle, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/Card";
import type { ChecklistItem } from "@/types";

export function ProductDemoCard({ items }: { items: ChecklistItem[] }) {
  const done = items.filter((i) => i.done).length;
  const percent = Math.round((done / items.length) * 100);

  return (
    <Card className="px-5 py-4 lg:h-[166px]">
      <div className="mb-3 flex items-start justify-between gap-3">
        <div className="flex items-start gap-2.5">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
          </span>
          <div>
            <p className="text-sm font-semibold text-ink-900">
              Complete product demo
            </p>
            <p className="text-xs text-ink-500">
              92% of users nailed BitScale after this walkthrough
            </p>
          </div>
        </div>
        <span className="text-sm font-semibold text-ink-900">{percent}%</span>
      </div>

      <div
        className="mb-4 h-1.5 w-full overflow-hidden rounded-full bg-line"
        role="progressbar"
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Product demo progress"
      >
        <div
          className="h-full rounded-full bg-emerald-500 transition-all"
          style={{ width: `${percent}%` }}
        />
      </div>

      <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item.id} className="flex items-center gap-2 text-sm">
            {item.done ? (
              <CheckCircle2
                className="h-4 w-4 shrink-0 text-emerald-500"
                aria-hidden="true"
              />
            ) : (
              <Circle className="h-4 w-4 shrink-0 text-ink-300" aria-hidden="true" />
            )}
            <span className={item.done ? "text-ink-700" : "text-ink-400"}>
              {item.label}
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

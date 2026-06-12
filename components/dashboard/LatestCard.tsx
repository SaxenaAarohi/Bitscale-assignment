import { Play } from "lucide-react";
import { Card } from "@/components/ui/Card";

export function LatestCard() {
  return (
    <Card className="px-5 py-4 lg:h-[166px] bg-[#E7F3F880]">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-sm font-semibold text-ink-900">Latest from Bitscale</p>
        <div className="flex items-center gap-1" aria-hidden="true">
          <span className="h-1.5 w-4 rounded-full bg-ink-900" />
          <span className="h-1.5 w-1.5 rounded-full bg-line" />
          <span className="h-1.5 w-1.5 rounded-full bg-line" />
          <span className="h-1.5 w-1.5 rounded-full bg-line" />
        </div>
      </div>

      <div className="flex gap-4">

        <div className="relative aspect-video w-32 shrink-0 overflow-hidden rounded-lg bg-gradient-to-br from-slate-700 to-slate-900 sm:w-40">
          <button
            aria-label="Play walkthrough video"
            className="group absolute inset-0 flex items-center justify-center"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink-900 transition-transform group-hover:scale-110">
              <Play className="h-4 w-4 translate-x-0.5 fill-current" />
            </span>
          </button>
        </div>

        <div className="min-w-0">
          <h3 className="text-sm font-semibold text-ink-900">
            How to Integrate 2 Way HubSpot
          </h3>
          <p className="mt-1 line-clamp-3 text-xs leading-relaxed text-ink-500">
            Prerequisites for this integration is that you should have a HubSpot
            account and copy the API key. We simple add our API key through the
            integrations pa...
          </p>
          <p className="mt-2 text-[11px] text-ink-400">Posted today</p>
        </div>
      </div>
    </Card>
  );
}

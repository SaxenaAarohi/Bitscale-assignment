import {
  Table2,
  Linkedin,
  Compass,
  Building2,
  FileSpreadsheet,
  Users,
  Map,
  Globe,
  PieChart,
  List,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/cn";
import type { GridSource } from "@/types";

const config: Record<GridSource, { Icon: LucideIcon; color: string }> = {
  workbook: { Icon: Table2, color: "text-emerald-600" },
  linkedin: { Icon: Linkedin, color: "text-[#0A66C2]" },
  "sales-nav": { Icon: Compass, color: "text-blue-600" },
  company: { Icon: Building2, color: "text-emerald-600" },
  csv: { Icon: FileSpreadsheet, color: "text-green-600" },
  people: { Icon: Users, color: "text-violet-600" },
  maps: { Icon: Map, color: "text-rose-600" },
  search: { Icon: Globe, color: "text-indigo-600" },
  factors: { Icon: PieChart, color: "text-orange-500" },
  hubspot: { Icon: List, color: "text-orange-600" },
};

export function SourceIcon({ source }: { source: GridSource }) {
  const { Icon, color } = config[source];
  return (
    <span className="flex h-[21px] w-[21px] shrink-0 items-center justify-center rounded-lg border border-[#F1F1EF] bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.04)]">
      <Icon className={cn("h-3.5 w-3.5", color)} aria-hidden="true" />
    </span>
  );
}

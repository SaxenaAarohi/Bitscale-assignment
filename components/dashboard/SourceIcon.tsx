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
import type { GridSource } from "@/types";

const config: Record<GridSource, { Icon: LucideIcon; className: string }> = {
  workbook: { Icon: Table2, className: "bg-emerald-50 text-emerald-600" },
  linkedin: { Icon: Linkedin, className: "bg-sky-50 text-sky-600" },
  "sales-nav": { Icon: Compass, className: "bg-blue-50 text-blue-600" },
  company: { Icon: Building2, className: "bg-violet-50 text-violet-600" },
  csv: { Icon: FileSpreadsheet, className: "bg-green-50 text-green-600" },
  people: { Icon: Users, className: "bg-amber-50 text-amber-600" },
  maps: { Icon: Map, className: "bg-rose-50 text-rose-600" },
  search: { Icon: Globe, className: "bg-indigo-50 text-indigo-600" },
  factors: { Icon: PieChart, className: "bg-fuchsia-50 text-fuchsia-600" },
  hubspot: { Icon: List, className: "bg-orange-50 text-orange-600" },
};

export function SourceIcon({ source }: { source: GridSource }) {
  const { Icon, className } = config[source];
  return (
    <span
      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md ${className}`}
    >
      <Icon className="h-4 w-4" aria-hidden="true" />
    </span>
  );
}

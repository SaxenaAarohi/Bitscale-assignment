import {
  LayoutGrid,
  BookOpen,
  Plug,
  FileText,
  Settings,
  Search,
  Briefcase,
  Globe,
  MapPin,
  Users,
  BarChart3,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {

  dashboard: LayoutGrid,
  playbook: BookOpen,
  integration: Plug,
  documentation: FileText,
  settings: Settings,

  keyword: Search,
  title: Briefcase,
  website: Globe,
  location: MapPin,
  headcount: Users,
  level: BarChart3,
};

export function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Cmp = iconMap[name] ?? LayoutGrid;
  return <Cmp className={className} aria-hidden="true" />;
}

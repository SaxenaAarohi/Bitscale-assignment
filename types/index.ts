export type IconName =
  | "dashboard"
  | "playbook"
  | "integration"
  | "documentation"
  | "settings";

export interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: IconName;

  hasChevron?: boolean;
}

export interface NavGroup {
  id: string;

  heading: string;
  items: NavItem[];
}

export interface Person {
  id: string;
  name: string;

  initials: string;

  color: string;
}

export type GridSource =
  | "workbook"
  | "linkedin"
  | "sales-nav"
  | "company"
  | "csv"
  | "people"
  | "maps"
  | "search"
  | "factors"
  | "hubspot";

export interface GridRow {
  id: string;
  name: string;
  source: GridSource;
  editedBy: Person;
  lastEdited: string;
  starred: boolean;

  flags?: ("locked" | "shared" | "alert")[];
}

export interface ChecklistItem {
  id: string;
  label: string;
  done: boolean;
}

export interface FilterField {
  id: string;
  label: string;
  placeholder: string;
  icon: IconName | "keyword" | "title" | "website" | "location" | "headcount" | "level";

  variant: "input" | "select";
  options?: string[];
}

export interface ResultColumn {
  id: string;
  label: string;
}

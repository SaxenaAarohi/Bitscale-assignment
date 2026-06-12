import type { ChecklistItem, GridRow, Person } from "@/types";

const people: Record<string, Person> = {
  sam: { id: "sam", name: "Sam Taylor", initials: "ST", color: "bg-rose-500" },
  chris: { id: "chris", name: "Chris Parker", initials: "CP", color: "bg-sky-500" },
  jone: { id: "jone", name: "Jone Doe", initials: "JD", color: "bg-amber-500" },
  alex: { id: "alex", name: "Alex Morgan", initials: "AM", color: "bg-violet-500" },
  drew: { id: "drew", name: "Drew Wilson", initials: "DW", color: "bg-emerald-500" },
};

export const gridRows: GridRow[] = [
  {
    id: "g1",
    name: "Workbook - Testing design ideas for grid and workbook",
    source: "workbook",
    editedBy: people.sam,
    lastEdited: "06 Aug, 2025",
    starred: false,
    flags: ["shared", "locked"],
  },
  {
    id: "g2",
    name: "LinkedIn",
    source: "linkedin",
    editedBy: people.chris,
    lastEdited: "06 Aug, 2025",
    starred: false,
  },
  {
    id: "g3",
    name: "Sales nav",
    source: "sales-nav",
    editedBy: people.jone,
    lastEdited: "06 Aug, 2025",
    starred: false,
  },
  {
    id: "g4",
    name: "find company",
    source: "company",
    editedBy: people.alex,
    lastEdited: "06 Aug, 2025",
    starred: false,
  },
  {
    id: "g5",
    name: "import csv",
    source: "csv",
    editedBy: people.drew,
    lastEdited: "06 Aug, 2025",
    starred: false,
  },
  {
    id: "g6",
    name: "Find people",
    source: "people",
    editedBy: people.jone,
    lastEdited: "06 Aug, 2025",
    starred: false,
  },
  {
    id: "g7",
    name: "Google maps",
    source: "maps",
    editedBy: people.jone,
    lastEdited: "06 Aug, 2025",
    starred: false,
  },
  {
    id: "g8",
    name: "google search results",
    source: "search",
    editedBy: people.jone,
    lastEdited: "06 Aug, 2025",
    starred: false,
  },
  {
    id: "g9",
    name: "factors",
    source: "factors",
    editedBy: people.jone,
    lastEdited: "06 Aug, 2025",
    starred: true,
  },
  {
    id: "g10",
    name: "Hubspot List - 10 (05 Aug 25)",
    source: "hubspot",
    editedBy: people.jone,
    lastEdited: "06 Aug, 2025",
    starred: true,
  },
];

export const demoChecklist: ChecklistItem[] = [
  { id: "c1", label: "Create your data list", done: true },
  { id: "c2", label: "Connect an integration", done: true },
  { id: "c3", label: "Learn about BitAgent", done: true },
  { id: "c4", label: "Customise waterfall providers", done: false },
];

import type { NavGroup } from "@/types";

export const navGroups: NavGroup[] = [
  {
    id: "home",
    heading: "Home",
    items: [
      {
        id: "dashboard",
        label: "My Dashboard",
        href: "/",
        icon: "dashboard",
        hasChevron: true,
      },
      { id: "playbooks", label: "Playbooks", href: "/playbooks", icon: "playbook" },
      {
        id: "integrations",
        label: "Integrations",
        href: "/integrations",
        icon: "integration",
      },
    ],
  },
  {
    id: "other",
    heading: "Other",
    items: [
      {
        id: "documentation",
        label: "Documentation",
        href: "/documentation",
        icon: "documentation",
      },
      { id: "settings", label: "Settings", href: "/settings", icon: "settings" },
    ],
  },
];

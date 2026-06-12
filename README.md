# Bitscale Dashboard — FE Assignment

A responsive recreation of the Bitscale GTM dashboard from the provided Figma,
built with **Next.js (App Router) + TypeScript + Tailwind CSS**. All content is
static/mock data — no backend, APIs, database, or auth.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build (type-check + lint)
npm run start      # serve the production build
```

Requires Node 18.18+ (developed on Node 22).

## Screens implemented (only what's in the Figma)

| Screen | Route | Notes |
| --- | --- | --- |
| **Dashboard** | `/` | Sidebar, top bar, welcome header, info cards, grids table |
| **Find People** | modal on `/` | Opens from the "Find People" button in the header |

Only **My Dashboard** navigates. The other sidebar items (Playbooks,
Integrations, Documentation, Settings) are intentionally non-navigable —
hover-only buttons — so no screens outside the Figma are invented.

## Interactions

- Sidebar navigation (with active state) + mobile slide-in drawer
- Workspace switcher dropdown
- Grids: **My Grids / Starred** tabs, live **search** filtering, **list/grid**
  view toggle, per-row **star** toggle, row **"…" actions** menu
- **Find People modal**: opens/closes (button, overlay click, Escape), 7 filter
  fields (text + dropdown selects), clear-all, empty results state
- Hover/focus/active states throughout; keyboard accessible

## Project structure

```
app/                     # routes
  layout.tsx             # root layout + font
  page.tsx               # Dashboard (+ Find People modal)
components/
  layout/                # Sidebar, Topbar, DashboardShell, WorkspaceSwitcher…
  ui/                    # Button, Badge, Card, Avatar, Tabs, SearchInput, Modal, Dropdown
  dashboard/             # WelcomeHeader, LatestCard, ProductDemoCard, GridsSection, GridsTable…
  findpeople/            # FindPeopleModal, FilterField, EmptyResults
data/                    # typed mock data (navigation, grids, findPeople)
types/                   # shared TypeScript interfaces
lib/                     # cn(), icon map, useClickOutside hook
```

## Tech notes

- Tailwind theme tokens (colors, shadows) sampled from the design in
  `tailwind.config.ts`.
- Icons via `lucide-react`. Avatars use initials (no real images in the mock).
- Reusable, typed components; no duplicated logic; no heavy state libraries.

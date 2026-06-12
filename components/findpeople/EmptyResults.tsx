export function EmptyResults() {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-12 text-center">
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
        role="img"
        aria-label="No companies found yet"
        className="mb-5"
      >
        <rect x="28" y="20" width="64" height="80" rx="6" fill="#EEF0FF" />
        <rect x="28" y="20" width="64" height="18" rx="6" fill="#C7CCF7" />
        <rect x="38" y="48" width="8" height="8" rx="2" fill="#8C95E8" />
        <rect x="52" y="49" width="30" height="6" rx="3" fill="#C7CCF7" />
        <rect x="38" y="64" width="8" height="8" rx="2" fill="#8C95E8" />
        <rect x="52" y="65" width="30" height="6" rx="3" fill="#C7CCF7" />
        <rect x="38" y="80" width="8" height="8" rx="2" fill="#8C95E8" />
        <rect x="52" y="81" width="22" height="6" rx="3" fill="#C7CCF7" />
        <circle cx="86" cy="86" r="18" fill="#fff" stroke="#8C95E8" strokeWidth="3" />
        <line
          x1="98"
          y1="98"
          x2="108"
          y2="108"
          stroke="#8C95E8"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>

      <p className="max-w-xs text-sm text-ink-600">
        Start your company search, preview, and import companies for enrichment by
        applying any filter in the left panel.
      </p>
      <p className="my-2 text-xs font-medium uppercase tracking-wide text-ink-300">
        or
      </p>
      <p className="text-sm text-ink-500">Import companies from saved search.</p>
    </div>
  );
}

import { cn } from "@/lib/cn";

export function Avatar({
  initials,
  color = "bg-ink-500",
  size = "sm",
  label,
  className,
}: {
  initials: string;
  color?: string;
  size?: "xs" | "sm" | "md";

  label?: string;
  className?: string;
}) {
  const sizes = {
    xs: "h-5 w-5 text-[9px]",
    sm: "h-6 w-6 text-[10px]",
    md: "h-7 w-7 text-[11px]",
  } as const;

  return (
    <span
      role="img"
      aria-label={label ?? initials}
      className={cn(
        "inline-flex items-center justify-center rounded-full font-semibold text-white ring-2 ring-white",
        color,
        sizes[size],
        className
      )}
    >
      {initials}
    </span>
  );
}

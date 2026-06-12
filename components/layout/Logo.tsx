import { cn } from "@/lib/cn";

export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "select-none text-lg font-bold tracking-tight text-ink-900",
        className
      )}
    >
      Bitscale
    </span>
  );
}

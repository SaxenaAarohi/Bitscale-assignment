import { cn } from "@/lib/cn";

type Tone = "neutral" | "success" | "warning";

const tones: Record<Tone, string> = {
  neutral: "bg-canvas text-ink-700 border-line",
  success: "bg-emerald-50 text-emerald-700 border-emerald-200",
  warning: "bg-amber-50 text-amber-700 border-amber-200",
};

export function Badge({
  children,
  tone = "neutral",
  className,
  icon,
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
  icon?: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-xs font-medium",
        tones[tone],
        className
      )}
    >
      {icon}
      {children}
    </span>
  );
}

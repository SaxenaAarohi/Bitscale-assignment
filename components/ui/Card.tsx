import { cn } from "@/lib/cn";

export function Card({
  children,
  className,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}) {
  return (
    <Tag
      className={cn(
        "rounded-lg border border-line bg-surface shadow-card",
        className
      )}
    >
      {children}
    </Tag>
  );
}

import { cn } from "@/lib/cn";
import { forwardRef } from "react";

type Variant = "primary" | "secondary" | "ghost" | "dark";
type Size = "sm" | "md";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;

  leftIcon?: React.ReactNode;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-ink-900 text-white border border-ink-900 hover:bg-black active:bg-black",
  secondary:
    "bg-white text-ink-700 border border-line hover:bg-canvas hover:border-ink-300 active:bg-line/60",
  ghost:
    "bg-transparent text-ink-700 border border-transparent hover:bg-canvas active:bg-line/60",
  dark: "bg-ink-900 text-white border border-ink-900 hover:bg-black active:bg-black",
};

const sizes: Record<Size, string> = {
  sm: "h-8 px-3 text-xs gap-1.5",
  md: "h-[34px] px-3.5 text-sm gap-2",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "secondary", size = "md", leftIcon, className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-[6.78px] font-medium transition-colors focus-ring disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {leftIcon && <span className="shrink-0">{leftIcon}</span>}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

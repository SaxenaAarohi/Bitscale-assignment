"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";

export function Modal({
  open,
  onClose,
  children,
  labelledBy,
  className,
}: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;

  labelledBy?: string;
  className?: string;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    const first = dialogRef.current?.querySelector<HTMLElement>(
      'input, button, [tabindex]:not([tabindex="-1"])'
    );
    first?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-center overflow-y-auto bg-black/40 p-4 animate-fade-in sm:p-6"
      onMouseDown={(e) => {

        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        className={cn(

          "relative my-auto w-full rounded-lg bg-white shadow-modal animate-pop-in",
          className ?? "max-w-4xl"
        )}
      >
        {children}
      </div>
    </div>
  );
}

"use client";

import { useEffect, type RefObject } from "react";

export function useClickOutside<T extends HTMLElement>(
  ref: RefObject<T>,
  handler: () => void,
  enabled = true
) {
  useEffect(() => {
    if (!enabled) return;

    function onPointer(event: MouseEvent | TouchEvent) {
      const el = ref.current;
      if (el && !el.contains(event.target as Node)) handler();
    }
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") handler();
    }

    document.addEventListener("mousedown", onPointer);
    document.addEventListener("touchstart", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("touchstart", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [ref, handler, enabled]);
}

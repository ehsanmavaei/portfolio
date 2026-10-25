"use client";

import { useEffect } from "react";

type ScrollToHashProps = {
  id: string;
};

export function ScrollToHash({ id }: ScrollToHashProps) {
  useEffect(() => {
    const target = document.getElementById(id);
    if (!target) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    target.scrollIntoView({
      behavior: reducedMotion ? "auto" : "smooth",
      block: "start",
    });
  }, [id]);

  return null;
}

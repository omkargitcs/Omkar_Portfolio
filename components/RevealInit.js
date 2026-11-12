"use client";
import { useEffect } from "react";

// Marks .reveal blocks as visible the first time they scroll into view.
export default function RevealInit() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" },
    );
    els.forEach((el) => io.observe(el));
    document.documentElement.classList.add("reveal-on");
    return () => io.disconnect();
  }, []);
  return null;
}

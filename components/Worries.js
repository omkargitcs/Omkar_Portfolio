"use client";
import { useEffect, useState } from "react";

// "Things I lose sleep over: [double bookings]" — cycles through project-related failure modes.
export default function Worries({ items }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((n) => (n + 1) % items.length), 2400);
    return () => clearInterval(t);
  }, [items.length]);

  return (
    <p className="font-display text-xl leading-snug sm:text-2xl">
      <span className="text-muted">Things I lose sleep over: </span>
      <span className="swap inline-grid align-bottom italic text-amber">
        {items.map((w, n) => (
          <span key={w} data-on={n === i} aria-hidden={n !== i}>
            {w}
          </span>
        ))}
      </span>
    </p>
  );
}

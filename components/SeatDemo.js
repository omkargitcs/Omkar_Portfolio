"use client";
import { useEffect, useRef, useState } from "react";

const ROWS = 4;
const COLS = 8;
const TARGET = 10; // the contested seat
const TAKEN = new Set([2, 3, 12, 13, 14, 21, 27]);

// A small illustration of what SeatDrop's backend guarantees.
// It is a front-end simulation, not a call to the real API.
export default function SeatDemo() {
  const [held, setHeld] = useState(() => new Set());
  const [dots, setDots] = useState(() => Array(50).fill(null));
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState(false);
  const timers = useRef([]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const toggle = (i) => {
    if (TAKEN.has(i) || i === TARGET) return;
    setHeld((s) => {
      const n = new Set(s);
      if (n.has(i)) n.delete(i);
      else n.add(i);
      return n;
    });
  };

  const fire = () => {
    if (running) return;
    timers.current.forEach(clearTimeout);
    setRunning(true);
    setDone(false);
    setDots(Array(50).fill(null));
    // requests arrive in a random order; the first one to reach the lock wins
    const winner = Math.floor(Math.random() * 50);
    for (let i = 0; i < 50; i++) {
      timers.current.push(
        setTimeout(() => {
          setDots((d) => {
            const n = [...d];
            n[i] = i === winner ? "win" : "lose";
            return n;
          });
          if (i === 49) {
            setRunning(false);
            setDone(true);
          }
        }, 120 + i * 28),
      );
    }
  };

  const wins = dots.filter((d) => d === "win").length;
  const losses = dots.filter((d) => d === "lose").length;

  return (
    <div className="rounded-xl border border-line bg-ink/60 p-4 sm:p-5">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted">
          Try it · illustration
        </p>
        <p className="text-xs text-muted">
          Tap seats to hold them. The red seat is contested.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-[1fr_1fr]">
        <div>
          <div
            className="grid gap-1.5"
            style={{ gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))` }}
          >
            {Array.from({ length: ROWS * COLS }, (_, i) => {
              const state =
                i === TARGET
                  ? "target"
                  : TAKEN.has(i)
                    ? "taken"
                    : held.has(i)
                      ? "held"
                      : "free";
              return (
                <button
                  key={i}
                  type="button"
                  className="seat"
                  data-state={state}
                  disabled={state === "taken" || state === "target"}
                  onClick={() => toggle(i)}
                  aria-label={`Seat ${i + 1}, ${state}`}
                  aria-pressed={state === "held"}
                />
              );
            })}
          </div>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[0.7rem] text-muted">
            <span><i className="mr-1.5 inline-block size-2 rounded-sm bg-[#211e1c] ring-1 ring-line" />free</span>
            <span><i className="mr-1.5 inline-block size-2 rounded-sm bg-amber" />your hold</span>
            <span><i className="mr-1.5 inline-block size-2 rounded-sm bg-[#3a3532]" />taken</span>
            <span><i className="mr-1.5 inline-block size-2 rounded-sm bg-accent" />contested</span>
          </div>
        </div>

        <div>
          <div
            className="grid gap-1"
            style={{ gridTemplateColumns: "repeat(10, minmax(0, 1fr))" }}
            aria-hidden="true"
          >
            {dots.map((d, i) => (
              <span key={i} className="dot" data-r={d ?? undefined} />
            ))}
          </div>
          <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
            <p className="font-mono text-sm" aria-live="polite">
              <span className="text-[#5fd08a]">{wins} hold</span>
              <span className="text-muted"> · </span>
              <span className="text-accent">{losses} conflicts</span>
            </p>
            <button
              type="button"
              onClick={fire}
              disabled={running}
              className="btn btn-ghost !min-h-10 text-sm disabled:opacity-50"
            >
              {running ? "Sending…" : done ? "Run again" : "Send 50 requests"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

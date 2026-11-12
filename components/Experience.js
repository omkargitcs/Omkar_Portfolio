import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { experience } from "../lib/data";

export default function Experience() {
  return (
    <ol className="relative space-y-10 border-l border-line pl-6 sm:pl-10">
      {experience.map((e, i) => (
        <li key={e.title} className="reveal relative">
          <span
            aria-hidden="true"
            className={`absolute -left-[1.95rem] top-2 size-3 rounded-full border-2 border-ink sm:-left-[2.95rem] ${
              i === 0 ? "bg-accent" : "bg-muted/50"
            }`}
          />
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 className="font-display text-xl sm:text-2xl">{e.title}</h3>
            {e.status && (
              <span className="rounded-full border border-line px-2 py-0.5 font-mono text-[0.65rem] uppercase tracking-widest text-muted">
                {e.status}
              </span>
            )}
          </div>
          <p className="mt-1 text-sm text-muted">
            {e.link ? (
              <a href={e.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-fg">
                {e.org} <FaArrowUpRightFromSquare size={10} />
              </a>
            ) : (
              e.org
            )}
            {e.when && <span> · {e.when}</span>}
          </p>
          {e.bullets.length > 0 && (
            <ul className="mt-4 max-w-2xl space-y-2.5 text-[0.95rem] leading-relaxed text-[#cfc8c0]">
              {e.bullets.map((b) => (
                <li key={b} className="flex gap-3">
                  <span aria-hidden="true" className="mt-[0.7em] h-px w-3 shrink-0 bg-accent" />
                  <span className="min-w-0">{b}</span>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ol>
  );
}

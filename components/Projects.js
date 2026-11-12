import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";
import SpotlightCard from "./SpotlightCard";
import SeatDemo from "./SeatDemo";
import { projects, otherWork } from "../lib/data";

function Links({ p }) {
  return (
    <div className="flex flex-wrap gap-2">
      {p.live && (
        <a href={p.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary !min-h-10 text-sm">
          Live <FaArrowUpRightFromSquare size={12} />
        </a>
      )}
      {p.github && (
        <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost !min-h-10 text-sm">
          <FaGithub size={15} /> Code
        </a>
      )}
    </div>
  );
}

function Stack({ items }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((s) => (
        <li key={s} className="chip">{s}</li>
      ))}
    </ul>
  );
}

function Bullets({ items }) {
  return (
    <ul className="space-y-3 text-[0.95rem] leading-relaxed text-[#cfc8c0]">
      {items.map((b) => (
        <li key={b} className="flex gap-3">
          <span aria-hidden="true" className="mt-[0.7em] h-px w-3 shrink-0 bg-accent" />
          <span className="min-w-0">{b}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Projects() {
  const [lead, ...rest] = projects;
  return (
    <div className="space-y-6">
      {/* lead project */}
      <SpotlightCard as="article" className="reveal p-5 sm:p-8">
        <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber">
              Featured · {lead.kind}
            </p>
            <h3 className="mt-2 font-display text-3xl sm:text-4xl">{lead.title}</h3>
            <p className="mt-3 max-w-2xl text-base italic text-muted sm:text-lg">
              {lead.problem}
            </p>
          </div>
          <Links p={lead} />
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-10">
          <div className="min-w-0 space-y-6">
            <Bullets items={lead.bullets} />
            <Stack items={lead.stack} />
          </div>
          <div className="min-w-0">
            <SeatDemo />
          </div>
        </div>
      </SpotlightCard>

      {/* the other two */}
      <div className="grid gap-6 md:grid-cols-2">
        {rest.map((p) => (
          <SpotlightCard as="article" key={p.id} className="reveal flex flex-col p-5 sm:p-7">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">{p.kind}</p>
            <h3 className="mt-2 font-display text-2xl sm:text-3xl">{p.title}</h3>
            <p className="mt-3 text-sm italic text-muted sm:text-base">{p.problem}</p>
            <div className="mt-5 flex-1"><Bullets items={p.bullets} /></div>
            <div className="mt-6 space-y-5">
              <Stack items={p.stack} />
              <Links p={p} />
            </div>
          </SpotlightCard>
        ))}
      </div>

      {/* small side project */}
      <div className="reveal flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
        {otherWork.map((o) => (
          <div key={o.title} className="flex min-w-0 flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Also built</p>
            <p className="min-w-0 text-sm text-[#cfc8c0]">
              <a href={o.github} target="_blank" rel="noopener noreferrer" className="hl font-semibold text-fg">
                {o.title}
              </a>
              {" "}– {o.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

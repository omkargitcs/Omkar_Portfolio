import { skillGroups } from "../lib/data";

export default function Skills() {
  return (
    <dl className="grid gap-x-12 gap-y-8 md:grid-cols-2">
      {skillGroups.map((g, i) => (
        <div
          key={g.label}
          className={`reveal border-t border-line pt-5 ${i === 0 ? "md:col-span-2" : ""}`}
        >
          <dt className="mb-4 flex flex-wrap items-baseline gap-x-3">
            <span className="font-display text-xl">{g.label}</span>
            {g.note && <span className="text-xs text-muted">{g.note}</span>}
          </dt>
          <dd>
            <ul className="flex flex-wrap gap-2">
              {g.items.map((s) => (
                <li key={s} className="chip">{s}</li>
              ))}
            </ul>
          </dd>
        </div>
      ))}
    </dl>
  );
}

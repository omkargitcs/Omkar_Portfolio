import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { certs } from "../lib/data";

export default function Certs() {
  return (
    <ul className="divide-y divide-line border-y border-line">
      {certs.map((c) => (
        <li key={c.title} className="reveal">
          <a
            href={c.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-4 py-5 transition-colors hover:text-white"
          >
            <span className="min-w-0">
              <span className="block font-display text-lg sm:text-xl">{c.title}</span>
              <span className="mt-0.5 block text-sm text-muted">{c.org}</span>
            </span>
            <span className="flex shrink-0 items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted transition-all group-hover:translate-x-1 group-hover:text-accent">
              <span className="hidden sm:inline">Verify</span>
              <FaArrowUpRightFromSquare size={12} />
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}

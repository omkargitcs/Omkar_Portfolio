"use client";
import { useState } from "react";
import { FaGithub, FaLinkedinIn, FaCopy, FaCheck } from "react-icons/fa6";
import { profile } from "../lib/data";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <div className="reveal">
      <a
        href={`mailto:${profile.email}`}
        className="group block break-words font-display text-[clamp(1.6rem,6.2vw,4.2rem)] leading-tight underline decoration-line decoration-1 underline-offset-[0.2em] transition-colors hover:decoration-accent"
      >
        {profile.email}
      </a>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <button type="button" onClick={copy} className="btn btn-primary">
          {copied ? <FaCheck size={14} /> : <FaCopy size={14} />}
          <span aria-live="polite">{copied ? "Copied" : "Copy email"}</span>
        </button>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
          <FaLinkedinIn size={15} /> LinkedIn
        </a>
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
          <FaGithub size={15} /> GitHub
        </a>
      </div>
    </div>
  );
}

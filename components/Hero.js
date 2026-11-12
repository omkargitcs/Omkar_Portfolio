"use client";
import Image from "next/image";
import { useRef } from "react";
import { FaGithub, FaLinkedinIn, FaEnvelope, FaArrowDown } from "react-icons/fa6";
import { profile } from "../lib/data";
import HeroName from "./HeroName";
import Worries from "./Worries";

const socials = [
  { href: profile.github, label: "GitHub", Icon: FaGithub },
  { href: profile.linkedin, label: "LinkedIn", Icon: FaLinkedinIn },
  { href: `mailto:${profile.email}`, label: "Email", Icon: FaEnvelope },
];

export default function Hero() {
  const frame = useRef(null);

  // gentle tilt on the portrait, only for mouse users
  const onMove = (e) => {
    if (e.pointerType !== "mouse" || !frame.current) return;
    const r = frame.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    frame.current.style.transform = `perspective(900px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
  };
  const reset = () => {
    if (frame.current) frame.current.style.transform = "";
  };

  return (
    <section
      id="top"
      className="relative z-10 overflow-hidden pb-16 pt-28 sm:pt-36 lg:pb-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 h-[34rem] w-[34rem] rounded-full bg-accent/15 blur-[120px]"
      />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div className="min-w-0">
          <p
            className="hero-in mb-5 inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted sm:text-xs"
          >
            <span className="size-1.5 rounded-full bg-[#5fd08a]" />
            B.Sc. CS · CGPA {profile.cgpa} · {profile.graduation}
          </p>

          <HeroName first="Omkar" last="Bhalsing" />

          <p
            className="hero-in mt-5 text-lg font-medium text-fg sm:text-xl"
            style={{ animationDelay: "160ms" }}
          >
            {profile.role}
          </p>
          <p
            className="hero-in mt-2 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
            style={{ animationDelay: "200ms" }}
          >
            {profile.tagline}
          </p>
          <div className="hero-in mt-6" style={{ animationDelay: "250ms" }}>
            <Worries items={profile.worries} />
          </div>

          <div
            className="hero-in mt-8 flex flex-col gap-3 sm:flex-row"
            style={{ animationDelay: "300ms" }}
          >
            <a href="#projects" className="btn btn-primary">
              See projects <FaArrowDown size={13} />
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              Resume
            </a>
            <ul className="flex items-center gap-2 sm:ml-2">
              {socials.map(({ href, label, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="btn btn-ghost !size-11 !px-0"
                  >
                    <Icon size={17} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <dl
            className="hero-in mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-line pt-6"
            style={{ animationDelay: "380ms" }}
          >
            {[
              ["50 → 1", "simultaneous requests, one seat held"],
              ["3", "projects shipped, 2 backends"],
              ["S3", "signed URLs, DB-checked roles"],
            ].map(([n, l]) => (
              <div key={n}>
                <dt className="font-display text-2xl text-fg sm:text-3xl">{n}</dt>
                <dd className="mt-1 text-xs leading-snug text-muted">{l}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div
          className="hero-in mx-auto w-full max-w-sm lg:max-w-none"
          style={{ animationDelay: "200ms" }}
          onPointerMove={onMove}
          onPointerLeave={reset}
        >
          <div
            ref={frame}
            className="relative rounded-[1.4rem] border border-line bg-panel p-2 shadow-[0_30px_80px_-30px_rgba(224,70,76,0.45)] transition-transform duration-200 ease-out will-change-transform"
          >
            <Image
              src="/hero_1_2.png"
              alt="Illustrated portrait of Omkar Bhalsing"
              width={733}
              height={600}
              priority
              sizes="(min-width:1024px) 40vw, 90vw"
              className="aspect-[4/4.2] w-full rounded-[1rem] object-cover object-[50%_20%]"
            />
            <span className="absolute -bottom-3 left-6 rounded-md border border-line bg-ink px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-widest text-muted">
              {profile.location}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

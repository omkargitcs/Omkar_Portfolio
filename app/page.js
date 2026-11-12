import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Section from "../components/Section";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Certs from "../components/Certs";
import Contact from "../components/Contact";
import { profile } from "../lib/data";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Section id="projects" index="01" title="Projects" intro="Three projects where a bug costs someone a seat, a file or their place in line.">
          <Projects />
        </Section>
        <Section id="experience" index="02" title="Experience" intro="Where I've worked with real clients and run things.">
          <Experience />
        </Section>
        <Section id="skills" index="03" title="Skills" intro="The tools I reach for.">
          <Skills />
        </Section>
        <Section id="certifications" index="04" title="Certifications" intro="Courses I finished.">
          <Certs />
        </Section>
        <Section id="contact" index="05" title="Contact" intro="Hiring for a backend or full-stack role? Say hello.">
          <Contact />
        </Section>
      </main>
      <footer className="relative z-10 border-t border-line py-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-5 text-sm text-muted sm:flex-row sm:justify-between sm:px-8">
          <p>© 2026 {profile.name}</p>
          <p>{profile.education} · {profile.location}</p>
        </div>
      </footer>
    </>
  );
}

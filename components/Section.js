export default function Section({ id, index, title, intro, children }) {
  return (
    <section id={id} className="relative z-10 py-16 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <header className="reveal mb-10 max-w-2xl sm:mb-14">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-accent">
            {index} / {title}
          </p>
          <h2 className="font-display text-3xl leading-tight sm:text-5xl">
            {intro}
          </h2>
        </header>
        {children}
      </div>
    </section>
  );
}

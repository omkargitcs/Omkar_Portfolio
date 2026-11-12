// Each letter reacts to the cursor (Fraunces' softness / weight axes).
export default function HeroName({ first, last }) {
  const letters = (w) =>
    [...w].map((c, i) => (
      <span key={i} className="glyph" aria-hidden="true">
        {c}
      </span>
    ));
  return (
    <h1
      aria-label={`${first} ${last}`}
      className="hero-in font-display text-[clamp(2.7rem,12vw,5.5rem)] leading-[1.02] tracking-tight"
      style={{ animationDelay: "80ms" }}
    >
      <span className="block">{letters(first)}</span>
      <span className="block italic text-accent">{letters(last)}</span>
    </h1>
  );
}

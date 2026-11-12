"use client";

// Wrapper that feeds the pointer position to CSS so the card glow follows the mouse.
export default function SpotlightCard({ as: Tag = "div", className = "", children, ...rest }) {
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <Tag onPointerMove={onMove} className={`spot ${className}`} {...rest}>
      {children}
    </Tag>
  );
}

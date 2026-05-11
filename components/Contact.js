export default function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full py-20 md:py-32 bg-[#141414] overflow-hidden flex flex-col items-center justify-center border-t border-zinc-800"
    >
      {/* Subtle Glow - Reduced opacity for mobile performance */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(229,9,20,0.08)_0%,_transparent_75%)] pointer-events-none"></div>

      <div className="relative z-10 text-center px-6">
        <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight max-w-sm md:max-w-none mx-auto">
          Ready to Start A New Season?
        </h3>

        <a
          href="mailto:bhalsingom04@gmail.com"
          className="inline-block bg-[#E50914] text-white px-8 md:px-12 py-3 md:py-4 rounded-sm md:rounded-md font-bold text-lg md:text-xl transition-all duration-300 hover:scale-105 md:hover:scale-110 active:scale-95 hover:shadow-[0_0_30px_rgba(229,9,20,0.4)]"
        >
          Contact Me
        </a>

        <div className="mt-12 md:mt-16 flex flex-col space-y-2 text-gray-500 text-[10px] md:text-sm tracking-[0.2em] uppercase">
          <p>© 2026 Omkar Bhalsing Production</p>
          <p className="text-[#E50914] font-semibold">Mithibai Original</p>
        </div>
      </div>
    </section>
  );
}

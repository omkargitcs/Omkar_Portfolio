export default function Contact() {
  return (
    <section className="relative w-full py-32 bg-[#141414] overflow-hidden flex flex-col items-center justify-center border-t border-zinc-800">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(229,9,20,0.1)_0%,_transparent_70%)] pointer-events-none"></div>

      <div className="relative z-10 text-center">
        <h3 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">
          Ready to Start A New Season ?
        </h3>
        <a
          href="mailto:bhalsingom04@gmail.com"
          className="inline-block bg-[#E50914] text-white px-12 py-4 rounded-md font-bold text-xl transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(229,9,20,0.5)]"
        >
          Contact Me
        </a>

        <div className="mt-16 text-gray-500 text-sm tracking-widest uppercase">
          © 2026 Omkar Bhalsing Production • Mithibai Original
        </div>
      </div>
    </section>
  );
}

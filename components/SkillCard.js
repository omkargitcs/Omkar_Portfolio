const SkillCard = ({ title, category, progress, icon, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="relative w-full h-[200px] bg-[#181818] p-6 rounded-md hover:scale-105 transition-all duration-300 cursor-pointer shadow-xl flex flex-col justify-between group overflow-hidden border border-white/5 hover:border-white/20"
    >
      {/* 1. BACKGROUND WATERMARK ICON */}
      {/* Fixed: Moved to bottom-right and lowered opacity to 0.05 so it doesn't clash with text */}
      <div className="absolute -right-6 -center-1 -bottom-3 text-[140px] opacity-[0.05] group-hover:opacity-[10] group-hover:-rotate-16 transition-all duration-700 pointer-events-none z-0">
        {icon}
      </div>

      {/* 2. TOP SECTION: Text and Brand Icon */}
      <div className="relative z-10 flex justify-between items-start">
        <div className="max-w-[70%]">
          <h3 className="text-white font-black text-xl mb-1 tracking-tight group-hover:text-[#E50914] transition-colors line-clamp-1">
            {title}
          </h3>
          <p className="text-gray-500 text-[10px] tracking-[0.2em] font-bold uppercase truncate">
            {category}
          </p>
        </div>

        {/* Small vibrant icon in the corner */}
        <div className="text-4xl text-zinc-700 group-hover:text-white group-hover:scale-110 transition-all duration-500">
          {icon}
        </div>
      </div>

      {/* 3. CENTER GRADIENT (Netflix Flare) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E50914]/0 via-transparent to-[#E50914]/5 opacity-100 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

      {/* 4. BOTTOM SECTION: Progress Bar */}
      <div className="relative z-10 w-full mt-auto">
        <div className="flex justify-between items-end mb-2">
          <span className="text-[10px] text-zinc-500 font-black uppercase tracking-widest">
            Proficiency
          </span>
          <span className="text-xs text-[#E50914] font-black italic">
            {progress}%
          </span>
        </div>

        {/* The "Watched" Bar Style */}
        <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#E50914] rounded-full shadow-[0_0_12px_rgba(229,9,20,0.6)] transition-all duration-1000 ease-out"
            style={{ width: progress ? `${progress}%` : "0%" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;

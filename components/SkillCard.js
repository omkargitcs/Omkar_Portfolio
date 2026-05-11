const SkillCard = ({ title, category, progress, icon, onClick }) => {
  return (
    <div
      onClick={onClick}
      // 1. FIXED WIDTHS: 160px on mobile is the "sweet spot" for swiping
      className="min-w-[160px] md:min-w-[300px] h-[180px] md:h-[220px] bg-[#181818] p-4 md:p-6 rounded-md hover:scale-105 transition-all duration-300 cursor-pointer shadow-xl flex flex-col justify-between group overflow-hidden relative border border-white/5 hover:border-white/20"
    >
      {/* BACKGROUND DECORATIVE ICON */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[100px] md:text-[160px] opacity-[0.02] group-hover:opacity-10 group-hover:-rotate-12 transition-all duration-700 pointer-events-none z-0">
        {icon}
      </div>

      {/* TOP SECTION */}
      <div className="flex justify-between items-start relative z-10">
        <div className="max-w-[70%]">
          <h3 className="text-white font-bold text-sm md:text-xl mb-1 tracking-tight group-hover:text-[#E50914] transition-colors line-clamp-1">
            {title}
          </h3>
          <p className="text-gray-400 text-[8px] md:text-[10px] tracking-[0.1em] md:tracking-[0.2em] font-medium uppercase truncate">
            {category}
          </p>
        </div>

        {/* SMALL ICON */}
        <div className="text-2xl md:text-5xl text-gray-500 group-hover:text-white group-hover:scale-110 transition-all duration-500">
          {icon}
        </div>
      </div>

      {/* PROGRESS SECTION */}
      <div className="relative z-10 w-full">
        <div className="flex justify-between items-end mb-1.5 md:mb-2">
          <span className="text-[8px] md:text-[10px] text-gray-500 font-bold uppercase">
            Level
          </span>
          <span className="text-[8px] md:text-[10px] text-[#E50914] font-bold">
            {progress}%
          </span>
        </div>
        <div className="h-1 md:h-1.5 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#E50914] rounded-full shadow-[0_0_10px_#E50914]"
            style={{ width: progress ? `${progress}%` : "0%" }}
          ></div>
        </div>
      </div>

      {/* OVERLAY FLARE */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E50914]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
};

export default SkillCard;

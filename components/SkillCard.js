// components/SkillCard.js
const SkillCard = ({ title, category, progress, icon, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="min-w-[300px] md:min-w-[300px] h-[200px] bg-[#181818] p-6 rounded-md hover:scale-105 transition-transform duration-300 cursor-pointer shadow-xl flex flex-col justify-between group overflow-hidden relative border border-white/5 hover:border-white/20"
    >
      {/*BACKGROUND IMAGE*/}
      <div className="absolute  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  -bottom-2 text-[160px]  opacity-[0.03] group-hover:opacity-[100] group-hover:-rotate-20 transition-all duration-700 pointer-events-none z-0">
        {icon}
      </div>

      {/* 1. TOP SECTION: Text and Branding */}
      <div className="flex justify-between items-start ">
        <div>
          <h3 className="text-white font-bold text-xl mb-1 tracking-tight group-hover:text-[#E50914] transition-colors">
            {title}
          </h3>
          <p className="text-gray-400 text-[10px] tracking-[0.2em] font-medium uppercase ">
            {category}
          </p>
        </div>

        {/* 2. THE small ICON: Large and vibrant */}
        <div className="text-5xl text-gray-500 group-hover:text-white group-hover:scale-110 transition-all duration-500">
          {icon}
        </div>
      </div>

      {/* 3. CENTER FILLER (Optional background flare) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E50914]/0 via-transparent to-[#E50914]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* 4. BOTTOM SECTION: Progress Bar pinned to bottom */}
      <div className="realtive z-10 w-full ">
        <div className="flex justify-between items-end mb-2">
          <span className="text-[10px] text-gray-500 font-bold uppercase">
            Proficiency
          </span>
          <span className="text-[10px] text-[#E50914] font-bold">
            {progress}%
          </span>
        </div>
        <div className=" h-1.5 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#E50914] rounded-full shadow-[0_0_15px_#E50914]"
            style={{ width: progress ? `${progress}%` : "0%" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;

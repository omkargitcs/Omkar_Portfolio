"use client";
import { useRef } from "react";
import SkillCard from "./SkillCard";

const Row = ({ title, data, type, onItemClick }) => {
  const rowRef = useRef(null);

  const scroll = (direction) => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      // FIXED TYPO: "behaviour" -> "behavior"
      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    // 1. Adjusted padding: px-4 for mobile, md:px-16 for desktop
    <div className="group relative mb-8 px-4 md:px-16">
      <h2 className="mb-4 text-lg font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">
        {title}
      </h2>

      <div className="relative">
        <div
          ref={rowRef}
          // 2. Added -mx-4 on mobile to allow cards to touch the edge while scrolling
          // 3. Changed space-x-4 for mobile, md:space-x-6 for desktop
          className="flex items-center space-x-4 md:space-x-6 overflow-x-scroll scrollbar-hide py-4 md:py-6 -mx-4 px-4 md:mx-0 md:px-0"
        >
          {data.map((item) =>
            type === "skills" ? (
              <div key={item.id} className="min-w-[140px] md:min-w-[200px]">
                <SkillCard
                  title={item.title}
                  category={item.category}
                  icon={item.icon}
                  progress={item.progress}
                  onClick={() => onItemClick(item)}
                />
              </div>
            ) : (
              <div
                key={item.id}
                onClick={() => onItemClick(item)}
                // 4. More aggressive mobile scaling: min-w-[260px] instead of 300px
                className="min-w-[260px] md:min-w-[400px] h-[180px] md:h-[220px] bg-[#181818] rounded-md p-5 md:p-6 hover:scale-105 transition-transform duration-300 cursor-pointer relative overflow-hidden group/card border border-white/5"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-[#E50914]"></div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-xs md:text-sm line-clamp-3">
                  {item.desc}
                </p>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover/card:opacity-100 transition-opacity hidden md:block">
                  <span className="text-[#E50914] text-xs font-bold uppercase tracking-widest">
                    View Details →
                  </span>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default Row;

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
      rowRef.current.scrollTo({ left: scrollTo, behaviour: "smooth" });
    }
  };
  return (
    <div className="group relative mb-8 px-8 md:px-16">
      <h2 className="mb-4 text-xl font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">
        {title}
      </h2>
      <div className="group relative">
        {/*HOrizontal scrolling section*/}
        <div
          ref={rowRef}
          className="flex items-center space-x-6 overflow-x-scroll scrollbar-hide py-6"
        >
          {data.map((item) =>
            type === "skills" ? (
              <SkillCard
                key={item.id}
                title={item.title}
                category={item.category}
                icon={item.icon}
                progress={item.progress}
                onClick={() => onItemClick(item)}
              />
            ) : (
              <div
                key={item.id}
                onClick={() => onItemClick(item)}
                className="min-w-[300px] md:min-w-[400px] h-[200px] bg-[#181818] rounded-md p-6 hover:scale-105 transition-transform duration-300 cursor-pointer relative overflow-hidden group/card"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-[#E50914]"></div>
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm line-clamp-3">
                  {item.desc}
                </p>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover/card:opacity-100 transition-opacity">
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

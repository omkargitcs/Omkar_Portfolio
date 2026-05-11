"use client";
import { IoClose } from "react-icons/io5";
import { FaPlay, FaLinkedin } from "react-icons/fa";

export default function Modal({ item, onClose }) {
  if (!item) return null;

  const displayTech = item.techstack || item.techStack;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-10">
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* 1. Mobile Fix: Changed max-h to 100vh and rounded-none for mobile */}
      <div className="relative bg-[#181818] w-full max-w-4xl h-full md:h-auto md:max-h-[90vh] overflow-y-auto rounded-none md:rounded-xl shadow-2xl animate-in fade-in zoom-in duration-300 scrollbar-hide">
        <button
          onClick={onClose}
          className="fixed md:absolute top-4 right-4 z-50 bg-black/50 p-2 rounded-full hover:bg-black/80 text-white transition"
        >
          <IoClose size={24} className="md:w-[30px] md:h-[30px]" />
        </button>

        {/* HERO SECTION */}
        <div className="relative h-72 md:h-[450px] w-full bg-black overflow-hidden group">
          <div
            className="absolute inset-0 bg-cover bg-center blur-3xl opacity-40 z-0 scale-125"
            style={{ backgroundImage: `url(${item.image || "/modal-bg.png"})` }}
          />

          <div className="absolute inset-0 z-10 flex items-center justify-center p-6 md:p-8">
            <div className="relative group">
              <div className="absolute -inset-4 bg-green-500/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              <img
                src={item.image || "/modal-bg.png"}
                alt={item.title}
                className={`
                  ${
                    item.type === "experience"
                      ? "h-32 w-32 md:h-56 md:w-56 rounded-full border-4 border-white/10 shadow-2xl"
                      : "max-w-[200px] md:max-w-[400px] object-contain"
                  } 
                  drop-shadow-[0_0_40px_rgba(34,197,94,0.3)] transform transition-transform duration-500 group-hover:scale-105
                `}
              />
            </div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-[#181818]/40 to-transparent z-20" />

          <div className="absolute bottom-6 md:bottom-8 left-0 right-0 flex flex-col items-center z-30 text-center px-4">
            <h2 className="text-2xl md:text-5xl font-extrabold mb-4 md:mb-6 tracking-tight text-white drop-shadow-2xl line-clamp-2">
              {item.title}
            </h2>

            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 w-full justify-center px-6 md:px-0">
              {item.github &&
                item.type !== "certs" &&
                item.type !== "experience" && (
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black px-6 md:px-10 py-2 md:py-2.5 rounded-md flex items-center justify-center font-bold hover:bg-gray-200 transition-all shadow-lg active:scale-95 text-sm md:text-base"
                  >
                    <FaPlay className="mr-2" size={12} /> View Code
                  </a>
                )}
              {item.linkedin && (
                <a
                  href={item.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0A66C2] text-white px-6 md:px-10 py-2 md:py-2.5 rounded-md flex items-center justify-center font-bold hover:bg-[#004182] transition-all shadow-lg active:scale-95 text-sm md:text-base"
                >
                  <FaLinkedin className="mr-2" />
                  {item.type === "certs"
                    ? "Verify Certificate"
                    : "View on LinkedIn"}
                </a>
              )}
            </div>
          </div>
        </div>

        {/* INFO SECTION */}
        {/* 2. Responsive Grid: p-6 for mobile, md:p-10 for desktop */}
        <div className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4 md:space-y-6">
            <div className="flex items-center space-x-3 text-green-400 font-bold text-sm md:text-base">
              <span>98% Match</span>
              <span className="border border-gray-600 px-2 py-0.5 text-[10px] md:text-xs text-gray-400">
                2026 Season
              </span>
            </div>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed whitespace-pre-line">
              {item.desc || "No description available for this release."}
            </p>
          </div>

          {/* 3. Sidebar: Removed border-l on mobile */}
          <div className="text-sm space-y-4 md:space-y-6 border-l-0 md:border-l border-white/10 pl-0 md:pl-8 pb-10 md:pb-0">
            {item.category && (
              <div>
                <span className="text-gray-500 block mb-1">Category</span>
                <span className="text-gray-300 font-medium">
                  {item.category}
                </span>
              </div>
            )}

            <div>
              <span className="text-gray-500 block mb-1">
                {item.type === "experience" ? "Key Focus" : "Tech Stack"}
              </span>
              <span className="text-gray-300 font-medium leading-relaxed whitespace-pre-line">
                {displayTech
                  ? displayTech
                  : item.type === "experience"
                    ? "Leadership, Management"
                    : "PERN Stack, Tailwind CSS"}
              </span>
            </div>

            {item.github && !item.type && (
              <div>
                <span className="text-gray-500 block mb-1">Status</span>
                <span
                  className={`font-bold ${item.status === "Project In Progress" ? "text-yellow-500" : "text-green-400"}`}
                >
                  {item.status || "Project Released"}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* GALLERY SECTION */}
        {item.gallery && (
          <div className="px-6 md:px-10 pb-20 md:pb-10">
            <h3 className="text-white font-bold text-lg md:text-xl mb-4 border-b border-white/10 pb-2">
              Behind the Scenes
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {item.gallery.map((img, index) => (
                <a
                  key={index}
                  href={img}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group aspect-video rounded-lg overflow-hidden border border-white/10 hover:border-[#E50914] transition-all duration-300"
                >
                  <img
                    src={img}
                    alt="Gallery"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

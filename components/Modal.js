"use client";
import { IoClose } from "react-icons/io5";
import { FaPlay, FaLinkedin } from "react-icons/fa";

export default function Modal({ item, onClose }) {
  if (!item) return null;

  // Normalizing the tech stack key to handle both camelCase and lowercase from data
  const displayTech = item.techstack || item.techStack;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      <div className="relative bg-[#181818] w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl animate-in fade-in zoom-in duration-300 scrollbar-hide">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 bg-black/50 p-2 rounded-full hover:bg-black/80 text-white transition"
        >
          <IoClose size={30} />
        </button>

        {/* HERO SECTION */}
        {/* HERO SECTION */}
        <div className="relative h-64 md:h-[450px] w-full bg-black overflow-hidden group">
          {/* 1. Atmospheric Background Blur (The "Aura") */}
          <div
            className="absolute inset-0 bg-cover bg-center blur-3xl opacity-40 z-0 scale-125"
            style={{ backgroundImage: `url(${item.image || "/modal-bg.png"})` }}
          />

          {/* 2. Central Logo Container */}
          <div className="absolute inset-0 z-10 flex items-center justify-center p-8">
            <div className="relative group">
              {/* Outer Glow Effect */}
              <div className="absolute -inset-4 bg-green-500/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              <img
                src={item.image || "/modal-bg.png"}
                alt={item.title}
                className={`
          ${
            item.type === "experience"
              ? "h-40 w-40 md:h-56 md:w-56 rounded-full border-4 border-white/10 shadow-2xl"
              : "max-w-[280px] md:max-w-[400px] object-contain"
          } 
          drop-shadow-[0_0_40px_rgba(34,197,94,0.3)] transform transition-transform duration-500 group-hover:scale-105
        `}
              />
            </div>
          </div>

          {/* 3. Cinematic Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-[#181818]/40 to-transparent z-20" />

          {/* 4. Text and Action Buttons (Centered) */}
          <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center z-30 text-center px-4">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight text-white drop-shadow-2xl">
              {item.title}
            </h2>

            <div className="flex space-x-4">
              {/* Your Original Button Logic starts here */}
              {item.github &&
                item.type !== "certs" &&
                item.type !== "experience" && (
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black px-10 py-2.5 rounded-md flex items-center font-bold hover:bg-gray-200 transition-all shadow-lg active:scale-95"
                  >
                    <FaPlay className="mr-2" size={14} /> View Code
                  </a>
                )}
              {item.linkedin && (
                <a
                  href={item.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0A66C2] text-white px-10 py-2.5 rounded-md flex items-center font-bold hover:bg-[#004182] transition-all shadow-lg active:scale-95"
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
        <div className="p-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center space-x-3 text-green-400 font-bold">
              <span>98% Match</span>
              <span className="border border-gray-600 px-2 py-0.5 text-xs text-gray-400">
                2026 Season
              </span>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed whitespace-pre-line">
              {item.desc || "No description available for this release."}
            </p>
          </div>

          {/* METADATA SIDEBAR */}
          <div className="text-sm space-y-6 border-l border-white/10 pl-4 md:pl-8">
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
                  className={`${item.status === "Project In Progress" ? "text-yellow-500" : "text-green-400"} font-bold`}
                >
                  {item.status || "Project Released"}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* GALLERY SECTION */}
        {item.gallery && (
          <div className="px-10 pb-10">
            <h3 className="text-white font-bold text-xl mb-4 border-b border-white/10 pb-2">
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

"use client";
import { useState, useEffect } from "react";
import {
  FaHome,
  FaTools,
  FaCode,
  FaBriefcase,
  FaEnvelope,
} from "react-icons/fa";

const Navbar = () => {
  const [isScrolled, setisScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setisScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* --- DESKTOP/TABLET TOP NAV --- */}
      <nav
        className={`fixed top-0 z-50 flex w-full items-center justify-between px-4 md:px-16 py-4 transition-all duration-500 ${
          isScrolled
            ? "bg-[#141414]/95 backdrop-blur-md shadow-xl"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center space-x-8">
          <h1
            className="text-[#E50914] text-xl md:text-2xl font-black cursor-pointer tracking-tighter"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            OMKAR
          </h1>

          <ul className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
            {["Home", "Skills", "Projects", "Experience"].map((item) => (
              <li
                key={item}
                onClick={() =>
                  item === "Home"
                    ? window.scrollTo({ top: 0, behavior: "smooth" })
                    : scrollToSection(item.toLowerCase())
                }
                className="cursor-pointer hover:text-white transition-colors duration-300"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center">
          <button
            className="bg-[#E50914] text-white px-5 py-1.5 rounded-sm text-sm font-bold hover:bg-[#b20710] transition-all active:scale-95 shadow-lg"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </button>
        </div>
      </nav>

      {/* --- MOBILE BOTTOM NAV (App Style) --- */}
      <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-[#121212]/90 backdrop-blur-lg border-t border-white/10 md:hidden flex items-center justify-around px-2 text-[10px] text-gray-400">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex flex-col items-center space-y-1 active:text-white"
        >
          <FaHome size={20} />
          <span>Home</span>
        </button>
        <button
          onClick={() => scrollToSection("skills")}
          className="flex flex-col items-center space-y-1 active:text-white"
        >
          <FaTools size={18} />
          <span>Skills</span>
        </button>
        <button
          onClick={() => scrollToSection("projects")}
          className="flex flex-col items-center space-y-1 active:text-white"
        >
          <FaCode size={20} />
          <span>Projects</span>
        </button>
        <button
          onClick={() => scrollToSection("experience")}
          className="flex flex-col items-center space-y-1 active:text-white"
        >
          <FaBriefcase size={18} />
          <span>Work</span>
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          className="flex flex-col items-center space-y-1 active:text-white"
        >
          <FaEnvelope size={18} />
          <span>Contact</span>
        </button>
      </div>
    </>
  );
};

export default Navbar;

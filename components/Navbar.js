"use client";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setisScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setisScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, []);

  // Smooth scroll helper
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 z-50 flex w-full items-center justify-between px-8 py-4 transition-all duration-500 ${
        isScrolled ? "bg-[#141414] shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex items-center space-x-8">
        {/* LOGO - Use your name or brand */}
        <h1 className="text-[#E50914] text-2xl font-bold cursor-pointer tracking-tighter">
          OMKAR BHALSING
        </h1>

        {/* NAVIGATION LINKS */}
        <ul className="hidden space-x-8 text-sm font-light text-gray-200 md:flex">
          <li
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="cursor-pointer hover:text-gray-400 transition"
          >
            Home
          </li>
          <li
            onClick={() => scrollToSection("experience")}
            className="cursor-pointer hover:text-gray-400 transition"
          >
            Experience
          </li>
          <li
            onClick={() => scrollToSection("skills")}
            className="cursor-pointer hover:text-gray-400 transition"
          >
            Skills
          </li>
          <li
            onClick={() => scrollToSection("projects")}
            className="cursor-pointer hover:text-gray-400 transition"
          >
            Projects
          </li>
        </ul>
      </div>

      <div className="flex items-center space-x-4">
        {/* Optional: Add a 'Contact' button for that 'Join Now' Netflix look */}
        <button
          className="bg-[#E50914] text-white px-4 py-1.5 rounded text-sm font-medium hover:bg-[#b20710] transition "
          onClick={() => scrollToSection("contact")}
        >
          Contact
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

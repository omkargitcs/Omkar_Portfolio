"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Row from "../components/Row";
import Contact from "../components/Contact";
import Modal from "../components/Modal";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiExpress,
  SiFlutter,
  SiPostgresql,
  SiTailwindcss,
} from "react-icons/si";

export default function HOME() {
  const [selectedItem, setSelectedItem] = useState(null);
  const skillsData = [
    {
      id: 1,
      title: "PostgreSQL",
      category: "Database Management",
      icon: <SiPostgresql className="text-[#336791]" />,
      progress: 60,
      desc: "Skill: Relational Data Modeling & Query Optimization.\nDesigned a relational schema to handle User Profiles, Resource Metadata (PDFs/Books), and Academic Categories.\n\nEstablished One-to-Many relationships between users and their uploaded resources.\nEnsured data integrity so that when a user is authenticated, their specific resources are fetched accurately and securely",
      github: "https://github.com/omkargitcs/campus-share",
    },
    {
      id: 2,
      title: "Express.js",
      category: "Backend Framework",
      icon: <SiExpress className="text-white" />,
      progress: 55,
      desc: "Skill: RESTful API Design & Error Handling.\n\nBuilt the routing logic to bridge the frontend and the database.\n\nImplemented Custom Middleware to handle authentication checks and session validation.\n\nResolved complex 401 Unauthorized errors by structuring proper response codes, ensuring the frontend knows exactly when to trigger a re-login.",
      github: "https://github.com/omkargitcs/campus-share",
    },
    {
      id: 3,
      title: "React.js",
      category: "Frontend Library",
      icon: <FaReact className="text-[#61DAFB]" />,
      progress: 70,
      desc: "Genre: UI/UX Design \n\nDescription: Crafted a cinematic, dark-themed dashboard featuring fluid Skeleton UI shimmers and responsive glassmorphism components.",
      github: "https://github.com/omkargitcs/REACT_PROJECTS",
      image: "/projects/campus-share.png",
    },

    {
      id: 4,
      title: "Node.js",
      category: "JavaScript Runtime",
      icon: <FaNodeJs className="text-[#339933]" />,
      progress: 75,
      github: "https://github.com/omkargitcs/campus-share",
      desc: "Skill: Server-Side Logic & Environment Security.\n\nConfigured the backend environment to handle Asynchronous operations for fast database responses.\n\nManaged Environment Variables (.env) to protect sensitive API keys (PostgreSQL credentials, Cloudinary secrets).\n\nIntegrated JSON Web Tokens (JWT) and Bcrypt for secure password hashing and stateless authentication.",
    },
    {
      id: 5,
      title: "Tailwind CSS",
      category: "Responsive Styling",
      icon: <SiTailwindcss className="text-[#06B6D4]" />,
      progress: 70,
      github: "https://github.com/omkargitcs",
      desc: "The Glass Aesthetic (Backdrop-Blur):\n\n\nCreated deep, translucent cards using bg-zinc-900/50 and backdrop-blur-xl.\n\nAtmospheric Lighting (Radial Glows):Designed 'Studio Lighting' effects by placing absolute-positioned divs with bg-blue-600/10 and blur-[120px]. This transforms a standard dark mode into a cinematic experience.\n\nThe Shimmer Effect (Animate-Pulse):\n\nEngineered custom Skeleton UI loaders. Instead of a blank screen, users see a breathing layout that mimics the content structure, reducing perceived wait time during data fetching.\n\nMicro-Interactions (Active-Scale):\n\nEnhanced the tactile feel of the platform. Using active:scale-[0.98] and transition-all, every button click feels physical—giving the web app the high-end response of a native mobile application.\n\nVisual Hierarchy (Typography & Grids):\n\nMastered the use of tracking-tight for bold headers and text-zinc-500 for secondary metadata. This ensures the user's eye is always guided to the most important Headline first.",
    },
    {
      id: 6,
      title: "Flutter",
      category: "App Development",
      icon: <SiFlutter className="text-[#02569B]" />,
      progress: 75,
      desc: "TokenCare | Real-time Healthcare Queue System Tech Stack: Flutter | Firebase | NoSQL | Cloud Functions \n\nPerformance Engineering: Architected a Denormalized NoSQL Schema in Firebase, \n\nreducing network latency by 95% and ensuring $O(1)$ read performance for real-time dashboards.\nState Management: Leveraged Flutter Streams and StreamBuilder for a reactive UI that updates patient positions instantly without manual refreshes.\n\nSecurity & Verification: Developed a custom Identity Verification flow using EmailJS and 6-digit OTP logic, achieving 100% verified registration during pilot testing.\n\nAdvanced Data Processing: Built a client-side Analytics Engine in Dart to calculate statistical modes (Peak Hours/Top Symptoms) and temporal deltas from raw Unix timestamps.\n Project Metrics (Live Testing Data)14+ \nConcurrent Users: Managed a live queue with zero ID collisions using Firebase Push ID logic.\nSub-Second Sync: Achieved $<800ms$ data propagation from patient check-in to doctor’s view.Dual-Format Reporting: Engineered a reporting module for 1-click PDF and XLSX exports with UTF-8 support for multilingual (English/Hindi) data.",
      github: "https://github.com/omkargitcs/TokenCare",
    },
  ];

  const projectData = [
    {
      id: 1,
      title: "CampusShare",
      desc: "“The Ultimate Academic Streaming Platform.\nThe Synopsis \nIn the fast-paced world of university life, students often find themselves lost in a sea of scattered WhatsApp links and unorganized cloud folders. CampusShare was built to solve this resource fragmentation problem.\n It is a high-performance, community-driven exchange platform where students can seamlessly discover, share, and host academic materials—from handwritten notes to previous year questions (PYQs)—all in one cinematic, centralized dashboard.\n\nThe Tech-Spec Breakdown The Backend Engine (Node.js & Express)\n State Management: Architected a robust REST API to handle complex user sessions and resource mapping. \nThe 401 Resolution: Engineered a resilient authentication flow that gracefully handles 401 Unauthorized errors, ensuring users are never left in a broken state but are smoothly redirected back to the secure entry point. \nSecurity: Integrated JWT (JSON Web Tokens) and Bcrypt for stateless, industry-standard data protection.\n\nRelational Integrity: Designed a PostgreSQL schema that maps users to their uploads with high precision, allowing for instant filtering by subject or semester.\nCloud Delivery: Integrated the Cloudinary API to handle heavy PDF and image assets, ensuring that content delivery is as fast as a streaming service.\nResponsive Design: Optimized for the student on the go, with a mobile-first layout that ensures academic success is just a tap away.",
      linkedin:
        "https://www.linkedin.com/in/omkar-bhalsing-7aa44a2b4/details/projects/",
      github: "https://github.com/omkargitcs/campus-share",
      techstack: "PERN STACK",
      status: "Project In Progress",
      image: "/campus_share.png",
    },
    {
      id: 2,
      title: "CineScope",
      desc: "\n\nCineScope is a sophisticated movie discovery platform designed with a high-fidelity streaming aesthetic. It focuses on delivering a seamless user experience through dynamic content rendering and responsive design principles.\n\nProject Overview\n\nCineScope is a full-stack media exploration tool that allows users to browse, filter, and discover films through an intuitive, cinematic interface. Built with performance and modern UI trends in mind, it leverages professional design patterns to handle large datasets of movie information efficiently.Key Technical Features\nDynamic Genre Filtering: Implements advanced state management to allow users to navigate through various film categories seamlessly.\n\nResponsive Component Architecture: Features a modular React-based structure, ensuring a consistent and fluid experience across mobile, tablet, and desktop devices.\n\nAtmospheric UI/UX: Utilizes a dark-mode, high-impact aesthetic with glassmorphism and radial glow effects, designed to mimic premium streaming services.\n\nInteractive Media Cards: Optimized for user engagement with smooth hover effects and detailed modal transitions for an immersive viewing experience.\n\nOptimized Data Fetching: Engineered to handle dynamic content updates efficiently, ensuring fast load times and a smooth scrolling experience.",
      github: "https://github.com/omkargitcs/CineScope",
      techstack:
        "Frontend: React.js / Next.js\n\nStyling: Tailwind CSS (for atmospheric lighting and layout)\n\nState Management: React Hooks / Context API\n\nAnimations: Framer Motion (for fluid transitions and interactive elements)",
    },
    {
      id: 3,
      title: "TokenCare",
      desc: "Performance Engineering: Architected a Denormalized NoSQL Schema in Firebase, reducing network latency by 95% and ensuring $O(1)$ read performance for real-time dashboards.\nState Management: Leveraged Flutter Streams and StreamBuilder for a reactive UI that updates patient positions instantly without manual refreshes.\nSecurity & Verification: Developed a custom Identity Verification flow using EmailJS and 6-digit OTP logic, achieving 100% verified registration during pilot testing.Advanced Data Processing: Built a client-side Analytics Engine in Dart to calculate statistical modes (Peak Hours/Top Symptoms) and temporal deltas from raw Unix timestamps.\nProject Metrics (Live Testing Data)14+ Concurrent Users: Managed a live queue with zero ID collisions using Firebase Push ID logic.\nSub-Second Sync: Achieved $<800ms$ data propagation from patient check-in to doctor’s view.Dual-Format Reporting: Engineered a reporting module for 1-click PDF and XLSX exports with UTF-8 support for multilingual (English/Hindi) data.Zero-Error RBAC: Implemented Role-Based Access Control, ensuring 0% unauthorized access to administrative clinic tools.",
      github: "https://github.com/omkargitcs/TokenCare",
      techstack:
        "Firebase \nRealtime DB Firebase Auth \nRESTful APIs  \nState Machines Path Provider Excel & PDF Generators",
    },
  ];

  const experienceData = [
    {
      id: 1,
      title: "Shopify Developer Intern",
      company: "Scentivia Perfumes",
      duration: "April 2026 - Present",
      category: "Professional Internship",
      desc: "Currently engineering high-conversion Shopify storefronts. Focusing on Liquid templating, custom UI components, and optimizing the e-commerce user journey for premium fragrance branding.",
      github: "https://scentivia.com", // Link to the site or your portfolio repo
      image: "/Scentivia_logo.png", // Main cover image
      type: "experience",
      linkedin: "https://www.linkedin.com/in/omkar-bhalsing-7aa44a2b4",
    },
    {
      id: 2,
      title: "Code-a-Replica Host",
      company: "TechSpark 2025 (Mithibai College)",
      duration: "Dec 2025 - Feb 2026",
      category: "Leadership & Hosting",
      desc: "Hosted 'Code-a-Replica', where participants rebuilt complex systems from scratch. Managed event planning, technical debugging, and leadership. Special thanks to Teacher Incharge Omkar Mohite sir, Chairperson Gaurav Mehra, and the Events team (Riya, Tisha, and Disha J) for the electrifying energy!",
      github: "https://github.com",
      image: "/mithibaitechspark_logo.png",
      gallery: ["/techspark1.png", "/techspark2.png", "/techspark3.png"], // Your 3 images
      type: "experience",
      linkedin:
        "https://www.linkedin.com/posts/omkar-bhalsing-7aa44a2b4_techspark-2025-ever-tried-rebuilding-activity-7305302848836177920-T39k?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEuHO_IBdcM504AVhYv2_C42x7YdqSIEojE",
    },
  ];

  const certsData = [
    {
      id: 1,
      title: "OCI 2025 AI Associate",
      category: "Oracle Cloud Infrastructure",
      type: "certs",
      techstack: "Machine Learning, Generative AI, OCI Services",
      desc: "A deep dive into the architecture of modern AI. This certification covered the deployment of Generative AI models and LLMs within the Oracle Cloud ecosystem.\n\nKey Focus: Supervised/Unsupervised learning, Neural Networks (CNN/RNN), and implementing OCI Vision and Language services to build context-aware applications.",
      linkedin:
        "https://catalog-education.oracle.com/ords/certview/sharebadge?id=BE9238AB198E418DCC88EB984ECAA5215C3F182D769E349B3C36BAEC334CD6DB",
    },
    {
      id: 2,
      title: "React.js Certified",
      category: "Frontend Architecture",
      type: "certs",
      techstack: "React Hooks, Context API, SPA Routing",
      desc: "Mastered the art of building scalable Single Page Applications (SPAs). This course focus was on component lifecycle, state management, and external API integration.\n\nPractical Application: Developed a high-performance IMDB Clone using the TMDB API, implementing dynamic filtering, watchlist logic, and responsive UI layouts with Tailwind CSS.",
      linkedin: "https://moonshot.scaler.com/s/li/t-mrEst-Cp",
    },
    {
      id: 3,
      title: "Cybersecurity & IAM",
      category: "Tata Group Job Simulation",
      type: "certs",
      techstack: "IAM Strategies, Risk Assessment, Security Protocols",
      desc: "Completed a professional job simulation focusing on Cybersecurity Consulting. This experience simulated real-world scenarios in protecting enterprise data.\n\nKey Focus: Enhancing Identity and Access Management (IAM) strategies, practicing data governance, and implementing industry-standard security protocols to prevent unauthorized access.",
      linkedin:
        "https://www.linkedin.com/posts/omkar-bhalsing-7aa44a2b4_cybersecurity-iam-tata-activity-7314269491528396800-tSc0",
    },
  ];
  return (
    <main className="relative bg-[#141414] min-h-screen text-white overflow-x-hidden">
      <Navbar />
      {/*HERO SECTION */}
      <section
        id="home"
        className="relative h-[85vh] w-full flex flex-col justify-center px-8 md:px-16 bg-gradient-to-b from-black/20 to-[#141414]"
      >
        <div className="absolute inset-0 z-0">
          {/* MOBILE IMAGE: Shows only on small screens (hidden on md+) */}
          <img
            src="/hero_1_2.png"
            alt="Omkar Bhalsing Mobile"
            className="block md:hidden h-full w-full object-cover object-center opacity-80"
          />

          {/* DESKTOP IMAGE: Shows only on medium screens and up (hidden on small) */}
          <img
            src="/hero (1).png"
            alt="Omkar Bhalsing Desktop"
            className="hidden md:block h-full w-full object-cover object-top opacity-100"
          />

          {/* --- GRADIENT OVERLAYS (The Netflix Secret Sauce) --- */}

          {/* 1. The Mobile-First Darkener: Ensures text is ALWAYS readable on phones */}
          <div className="absolute inset-0 bg-black/40 md:hidden" />

          {/* 2. The Horizontal Fade: Fades image to black on the left (Desktop) */}
          <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#141414] via-[#141414]/60 to-transparent" />

          {/* 3. The Bottom Fade: Blends the hero image into your 'Trending Skills' row */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
        </div>

        <div className="flex-grow" />

        {/* --- THE CONTENT LAYER --- */}
        <div className="z-10 max-w-2xl mb-20 md:mb-16 animate-in fade-in slide-in-from-bottom-5 duration-1000">
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-[#E50914] font-black text-[10px] md:text-sm tracking-[0.4em] uppercase">
              A Mithibai Original
            </span>
          </div>

          <h1 className="text-4xl md:text-7xl font-black text-white mb-3 tracking-tighter drop-shadow-2xl">
            Omkar Bhalsing
          </h1>

          <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-6 text-xs md:text-lg font-bold">
            <span className="text-green-400">8.67 CGPA</span>
            <span className="text-gray-500">|</span>
            <span className="text-white border border-gray-600 px-2 py-0.5 text-[8px] rounded-sm uppercase">
              2026 Season
            </span>
            <span className="text-gray-500">|</span>
            <span className="text-white">Full Stack</span>
          </div>

          <p className="text-sm md:text-lg text-gray-200 mb-8 leading-relaxed max-w-[300px] md:max-w-xl font-medium drop-shadow-md">
            COMPUTER SCIENCE STUDENT SPECIALIZING IN THE PERN STACK. SHOPIFY
            DEVELOPER INTERN AT SCENTIVIA.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://github.com/omkargitcs"
              target="_blank"
              className="bg-white text-black px-10 py-3 rounded-md font-bold hover:bg-gray-200 transition text-sm md:text-lg flex items-center justify-center shadow-2xl active:scale-95"
            >
              View Work
            </a>
            <a
              href="https://drive.google.com/file/d/1zfIHksniQ28jLFDyK5iFGhsNBnL2jc7w/view?usp=drivesdk"
              target="_blank"
              className="bg-zinc-800/80 text-white px-10 py-3 rounded-md font-bold hover:bg-zinc-700 transition text-sm md:text-lg flex items-center justify-center backdrop-blur-md border border-white/10 active:scale-95"
            >
              More Info
            </a>
          </div>
        </div>
      </section>

      {/*CONTENT ROW*/}

      <main className="pb-20 space-y-12 md:space-y-16 mt-16 z-20 relative pl-8 md:pl-16">
        <section id="skills">
          <Row
            title="Trending Skills (Top Picks)"
            data={skillsData}
            type="skills"
            onItemClick={(item) => setSelectedItem(item)}
          />
        </section>
        <section id="projects">
          <Row
            title="Original Series (Projects)"
            data={projectData}
            type="projects"
            onItemClick={(item) => setSelectedItem(item)}
          />
        </section>
        <section id="experience">
          <Row
            title="Previous Seasons (Experience)"
            data={experienceData}
            type="experience"
            onItemClick={(item) => setSelectedItem(item)}
          />
        </section>

        <Row
          title="Certifications"
          data={certsData}
          type="certs"
          onItemClick={(item) => setSelectedItem(item)}
        />
      </main>
      <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />

      {/*FOOTER/CONTACT*/}
      <footer
        id="contact"
        className="bg-[#141414] py-20 px-8 text-center border-t border-zinc-800"
      >
        <Contact />
      </footer>
    </main>
  );
}
{
  /*Genre: Systems Security
Description: Secured the entire stack using JWT authentication and strict Git protocols to protect sensitive user data and cloud-storage credentials. */
}

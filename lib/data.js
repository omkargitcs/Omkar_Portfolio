// Single source of truth for the portfolio. Facts here follow the resume.
// Fields marked TODO need your real links; buttons with an empty link are hidden.

export const profile = {
  name: "Omkar Bhalsing",
  role: "Backend-focused Full-Stack Developer",
  tagline: "I build the parts of an app that are not allowed to go wrong.",
  worries: [
    "double bookings",
    "leaked files",
    "lost queue tokens",
    "race conditions",
  ],
  location: "Mumbai, India",
  email: "bhalsingom04@gmail.com",
  github: "https://github.com/omkargitcs",
  linkedin: "https://www.linkedin.com/in/omkar-bhalsing-7aa44a2b4",
  resume: "/Omkar_Bhalsing_Resume_Software_Engineer.pdf",
  education: "B.Sc. Computer Science, SVKM's Mithibai College",
  cgpa: "8.54",
  graduation: "Expected Mar 2027",
};

export const projects = [
  {
    id: "seatdrop",
    title: "SeatDrop",
    kind: "Ticket-booking platform",
    featured: true,
    problem:
      "Two people should never be able to book the same seat, even when they click at the same instant.",
    bullets: [
      "Atomic Redis Lua script holds seats for 5 minutes: all seats in a request, or none.",
      "PostgreSQL transactions, a partial unique index on active seats and idempotent payment references prevent double booking and double payment.",
      "Verified under load: 50 simultaneous requests on one seat gave exactly 1 hold and 49 clean conflicts.",
      "Live seat map for every viewer via Redis pub/sub and Server-Sent Events. Also has coupons, refunds, an admin dashboard and rate limiting.",
    ],
    stack: ["React", "Node.js", "Express", "PostgreSQL", "Redis", "SSE"],
    github: "https://github.com/omkargitcs", // TODO: swap in the SeatDrop repo link
    live: "https://seat-lock-engine.onrender.com/",
  },
  {
    id: "campusshare",
    title: "CampusShare",
    kind: "Role-based academic resource platform",
    problem:
      "Notes and past papers get lost in WhatsApp groups. CampusShare keeps them in one place, with access controlled by role.",
    bullets: [
      "Role-based access (student, teacher, admin) with JWT, re-checked against the database on every request so a revoked role takes effect immediately.",
      "Team-private PDFs are delivered through 5-minute signed S3 URLs, with PDF signature validation, rate limiting, Helmet and a CORS allowlist.",
      "Moved storage from Cloudinary to S3 after finding out why PDFs were downloading as unrecognised files.",
    ],
    stack: ["React", "Node.js", "Express", "PostgreSQL", "AWS S3", "JWT"],
    github: "https://github.com/omkargitcs/campus-share",
    live: "https://campus-share-silk.vercel.app/",
  },
  {
    id: "tokencare",
    title: "TokenCare",
    kind: "Clinic queue app",
    problem:
      "Patients wait in crowded clinics without knowing where they stand in the queue.",
    bullets: [
      "Live patient and clinic views, served first-come-first-served, with one active token per patient per day.",
      "Organised into screens, services and typed models, with unit tests for the queue logic.",
      "Email OTP verification through EmailJS, and Excel and PDF export of records.",
    ],
    stack: ["Flutter", "Firebase", "Dart", "EmailJS"],
    github: "https://github.com/omkargitcs/TokenCare",
    live: "",
  },
];

export const otherWork = [
  {
    title: "CineScope",
    desc: "Movie discovery app built on the TMDB API, with genre filtering, a watchlist and a responsive layout.",
    stack: ["React", "Tailwind CSS", "TMDB API"],
    github: "https://github.com/omkargitcs/CineScope",
  },
];

export const skillGroups = [
  {
    label: "Backend",
    note: "Where most of my project time went",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "JWT",
      "RBAC",
      "Rate limiting",
      "Server-Sent Events",
    ],
  },
  { label: "Frontend", items: ["React", "Vite", "Tailwind CSS"] },
  { label: "Languages", items: ["JavaScript (ES6+)", "SQL", "Python", "Java"] },
  {
    label: "Testing",
    items: ["Postman", "Concurrency testing", "Unit testing"],
  },
  {
    label: "Tools & Cloud",
    items: ["Git", "GitHub", "Linux", "AWS S3", "Vercel", "Render"],
  },
  { label: "Also", items: ["Flutter / Dart", "Firebase", "Shopify Liquid"] },
];

export const experience = [
  {
    title: "Shopify Developer Intern",
    org: "Scentivia Perfumes",
    when: "May 2026 – Jun 2026",
    status: "Completed",
    bullets: [
      "Diagnosed and fixed storefront issues in theme code and published the fixes to a live store.",
      "Migrated the product catalogue to a new store, including variants and metafields.",
      "Improved perceived load time with optimised images and skeleton loaders.",
    ],
    link: "https://scentivia.com",
  },
  {
    title: "Team Lead",
    org: "Smart India Hackathon",
    when: "",
    bullets: [],
  },
  {
    title: "Host, Code-a-Replica",
    org: "TechSpark 2025, Mithibai College",
    when: "",
    bullets: ["Ran a coding event for about 20 participants."],
  },
];

export const certs = [
  {
    title: "OCI 2025 AI Associate",
    org: "Oracle Cloud Infrastructure",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=BE9238AB198E418DCC88EB984ECAA5215C3F182D769E349B3C36BAEC334CD6DB",
  },
  {
    title: "Cybersecurity & IAM Job Simulation",
    org: "Tata Group (Forage)",
    link: "https://www.linkedin.com/posts/omkar-bhalsing-7aa44a2b4_cybersecurity-iam-tata-activity-7314269491528396800-tSc0",
  },
  {
    title: "React.js course",
    org: "Scaler",
    link: "https://moonshot.scaler.com/s/li/t-mrEst-Cp",
  },
];

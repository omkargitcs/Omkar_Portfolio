# Cinematic Portfolio Platform — Netflix UI Theme

A high-performance, responsive full-stack developer portfolio built with a customized streaming-service aesthetic. This platform adapts advanced art direction techniques to display software engineering metrics, academic trajectories, and technical skills as high-impact "Featured Originals" and "Trending Content Rows."

Live Link: [https://omkar-portfolio-cyan.vercel.app/](https://omkar-portfolio-cyan.vercel.app/)

---

## 🚀 Key Features

* **Art Direction Hero Architecture:** Dynamic device-targeted rendering utilizing split portrait-cropped mobile banners (`hero-mobile.png`) and wide landscape desktop layouts (`hero (1).png`) to eliminate aspect-ratio framing issues.
* **Atmospheric Lighting & Gradients:** Layered triple-gradient background stacks incorporating linear text-fade boundaries and deep-red custom radial studio spotlights (`radial-gradient`) to prevent background voids.
* **Responsive Ribbon Grid System:** Fluid, flex-wrap and CSS grid rows that dynamically adjust skill assets across mobile screen-widths up to wide 4K screens without layout shifts or overlap blunders.
* **Netflix Proficiency Trackers:** Re-engineered performance progress metrics modeled after media playback tracking bars with glassmorphism backgrounds (`backdrop-blur-xl`) and customized neon drop shadows.
* **Optimized Continuous Deployment:** Direct integration pipelines syncing local master branches automatically with production Vercel environments.

---

## 🛠️ Tech Stack & Architecture

* **Frontend Library:** React.js (Next.js Framework)
* **Styling Engine:** Tailwind CSS
* **Technical Core Focus:** PERN Stack (PostgreSQL, Express.js, React, Node.js)
* **Hosting/Deployment Architecture:** GitHub Vercel Integration Pipeline

---

## 📂 Repository Structure

text
├── app/
│   ├── layout.js          # Core document wrapping & global fonts
│   └── page.js            # Home view containing Hero and Dashboard rows
├── components/
│   ├── SkillCard.js       # Refactored responsive skill item component
│   └── Navbar.js          # Main navigation bar controller
├── public/
│   ├── hero (1).png       # Primary wide desktop asset
│   └── hero-mobile.png    # High-precision vertical mobile asset
├── package.json
└── README.md
---



##💻 Local Installation & Setup Steps
Follow these explicit terminal instructions to get the development environment running locally on your machine.

1. Clone the Project
Clone this repository directly from GitHub to your workspace:

Bash
git clone [https://github.com/omkargitcs/Omkar_Portfolio.git](https://github.com/omkargitcs/Omkar_Portfolio.git)
cd Omkar_Portfolio
2. Install Project Dependencies
Run npm installation to gather all necessary framework packages and utility tools defined in the package configuration:

npm install
3. Image Assets Placement
Ensure your profile image files are configured properly inside the static file routing engine before initialization:

Crop a portrait version of your banner and name it hero-mobile.png.

Place both hero (1).png and hero-mobile.png inside the /public root directory folder.

4. Run the Development Server
Launch the local compiled instances to view updates instantly via live reloading:

Bash
npm run dev
Open your browser and navigate to http://localhost:3000 to test your application.

🚢 Continuous Deployment to Vercel
This repository relies on automated GitHub triggers. Every push to the main repository automatically updates the production build.

Executing Code Updates:
When structural modifications or layout optimizations are executed, use the following deployment loop in your terminal:

Bash
# 1. Stage modified configuration and system files
git add .

# 2. Commit development updates with professional context flags
git commit -m "Fix: Optimized grid layout constraints and resolved card rendering bounds"

# 3. Transmit code blocks directly to upstream server branches
git push origin main


🛠️ Component API Reference ExampleSkillCard PropertiesThe re-engineered grid component accepts the following input variables to assure visual accuracy:PropertyTypeDescriptiontitleStringTitle text of the technology (e.g., "PostgreSQL").categoryStringCore sector labeling designation (e.g., "Database Management").progressNumberPercentage indicating proficiency level (0 to 100).iconElementDirect SVG / Component icon reference injected directly to background watermark boundaries.onClickFunctionOptional event trigger firing custom modal or interactive timeline content.

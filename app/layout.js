import "@fontsource-variable/fraunces/full.css";
import "@fontsource-variable/fraunces/full-italic.css";
import "@fontsource-variable/dm-sans";
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";
import RevealInit from "../components/RevealInit";

const title = "Omkar Bhalsing | Backend & Full-Stack Developer";
const description =
  "Backend-focused full-stack developer (Node.js, PostgreSQL, Redis, React). Builds PERN-stack systems that stay correct under concurrency. Projects: SeatDrop, CampusShare, TokenCare.";

export const metadata = {
  metadataBase: new URL("https://omkar-portfolio-cyan.vercel.app"),
  title,
  description,
  authors: [{ name: "Omkar Bhalsing" }],
  openGraph: {
    title,
    description,
    type: "website",
    images: [{ url: "/hero_1_2.png", width: 733, height: 600 }],
  },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport = {
  themeColor: "#0e0d0d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <RevealInit />
        {children}
      </body>
    </html>
  );
}

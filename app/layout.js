import "./globals.css";

export const metadata = {
  title: "Omkar Bhalsing | Portfolio",
  description: "PERN Stack Developer & Shopify Intern",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Adding suppressHydrationWarning to the <html> or <body> tag 
          tells React not to panic if an extension modifies these tags.
      */}
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}

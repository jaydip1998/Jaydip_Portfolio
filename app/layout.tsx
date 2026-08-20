import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Jaydip Makwana — Technical Program Manager & Founder of AI-RoboFusion",
  description: "Technical Program Manager and EdTech Founder designing humanoid robots, embedded systems, and scaling AI & Robotics labs to 60+ schools and 25,000+ students.",
  keywords: [
    "Jaydip Makwana",
    "AI-RoboFusion",
    "Technical Program Manager",
    "Robotics Engineer",
    "Humanoid Robots",
    "Embedded Systems",
    "Arduino",
    "ESP32",
    "STEM Education",
    "EdTech Founder",
    "Bhavnagar",
    "Gujarat"
  ],
  authors: [{ name: "Jaydip Makwana" }],
  openGraph: {
    title: "Jaydip Makwana — Technical Program Manager & Founder of AI-RoboFusion",
    description: "I build robots, code, and classrooms — sometimes in the same afternoon.",
    url: "https://jaydipmakwana.com",
    siteName: "Jaydip Makwana Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}

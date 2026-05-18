import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SkillGap Analyzer — Identify Team Skill Gaps for Projects",
  description: "Analyze team skills vs project requirements to identify training needs and hiring gaps. Built for HR departments, team managers, and L&D professionals."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="05091e15-4b2b-4a94-a629-514d114fdd27"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}

import { HeroSection } from "@/components/hero/HeroSection";
import { AboutSection } from "@/components/about/AboutSection";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { ArchitectureSection } from "@/components/architecture/ArchitectureSection";
import { WhatIBuild } from "@/components/what-i-build/WhatIBuild";
import { TechStackSection } from "@/components/tech-stack/TechStackSection";
import { GitHubProofSection } from "@/components/github/GitHubProofSection";
import { ExperienceSection } from "@/components/experience/ExperienceSection";
import { ContactSection } from "@/components/contact/ContactSection";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 01. Hero */}
      <HeroSection />

      {/* 02. About / Engineering Profile with Photo */}
      <AboutSection />

      {/* 03. Selected AI Products with Safari Browser Mockup & Mux Playback */}
      <ProjectsSection />

      {/* 04. Live AI Agent Architecture */}
      <ArchitectureSection />

      {/* 05. What I Build / Capabilities */}
      <WhatIBuild />

      {/* 06. Tech Stack */}
      <TechStackSection />

      {/* 07. Built in Public / GitHub Repositories */}
      <GitHubProofSection />

      {/* 08. Experience / Engineering Journey */}
      <ExperienceSection />

      {/* 09. Let's Talk / Final CTA & Direct Channels */}
      <ContactSection />
    </div>
  );
}

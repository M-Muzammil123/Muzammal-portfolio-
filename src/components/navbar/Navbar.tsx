"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Menu } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/common/Icons";
import { personalData } from "@/data/personal";
import { ThemeToggle } from "./ThemeToggle";
import { MobileNav } from "./MobileNav";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        const yOffset = -76;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
        window.history.pushState(null, "", href);
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = [
        "hero",
        "about",
        "projects",
        "architecture",
        "capabilities",
        "stack",
        "experience",
        "contact",
      ];
      const scrollPosition = window.scrollY + 180;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "py-2.5 sm:py-3 bg-[var(--glass-bg)] backdrop-blur-md border-b border-[var(--border-color)] shadow-sm"
            : "py-4 sm:py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Left: Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => handleScrollTo(e, "#hero")}
            className="group flex items-center gap-2 sm:gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-cyan)] rounded-md shrink-0"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-cyan)] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--accent-cyan)] shadow-[0_0_8px_var(--accent-cyan)]" />
            </span>
            <span className="font-mono-code font-bold text-xs sm:text-sm tracking-wider text-[var(--text-primary)] group-hover:text-[var(--accent-cyan)] transition-colors">
              {personalData.brandName}
            </span>
            <span className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[10px] font-mono-code bg-[var(--accent-glow)] text-[var(--accent-cyan)] border border-[var(--accent-cyan)]/25">
              AI ENG
            </span>
          </a>

          {/* Center: Main Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full border border-[var(--border-color)] bg-[var(--glass-bg)] backdrop-blur-md shadow-xs"
          >
            {personalData.navLinks.map((link) => {
              const targetId = link.href.replace("#", "");
              const isActive =
                activeSection === targetId ||
                (targetId === "about" && activeSection === "capabilities");

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-mono-code tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-cyan)] ${
                    isActive
                      ? "text-[var(--accent-cyan)] font-semibold"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBubble"
                      className="absolute inset-0 bg-[var(--accent-glow)] border border-[var(--accent-cyan)]/30 rounded-full"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Controls: GitHub, LinkedIn, ThemeToggle, and Let's Talk CTA */}
          <div className="flex items-center gap-1 sm:gap-2.5">
            {/* GitHub Profile */}
            <a
              href={personalData.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub Profile"
              aria-label="GitHub Profile"
              className="hidden sm:flex w-8.5 h-8.5 items-center justify-center rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-cyan)]/40 hover:bg-[var(--bg-card-hover)] transition-all shadow-xs"
            >
              <GitHubIcon className="w-4 h-4" />
            </a>

            {/* LinkedIn Profile */}
            <a
              href={personalData.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
              className="hidden sm:flex w-8.5 h-8.5 items-center justify-center rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[#0A66C2] hover:border-[#0A66C2]/40 hover:bg-[var(--bg-card-hover)] transition-all shadow-xs"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>

            {/* Light / Dark Mode Toggle */}
            <ThemeToggle />

            {/* Let's Talk CTA Button */}
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, "#contact")}
              className={`inline-flex items-center gap-1 sm:gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-[11px] sm:text-xs font-mono-code font-bold tracking-wider transition-all duration-200 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-cyan)] bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-violet)] text-white dark:text-slate-950 hover:opacity-95 hover:shadow-md hover:shadow-[var(--accent-glow)] hover:scale-[1.02] active:scale-[0.98] ${
                activeSection === "contact"
                  ? "ring-2 ring-[var(--accent-cyan)] ring-offset-2 ring-offset-[var(--bg-main)] shadow-md shadow-[var(--accent-glow)]"
                  : ""
              }`}
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </a>

            {/* Mobile / Tablet Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
              className="lg:hidden w-8 h-8 sm:w-8.5 sm:h-8.5 flex items-center justify-center rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:border-[var(--accent-cyan)]/50 transition-colors"
            >
              <Menu className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        activeSection={activeSection}
      />
    </>
  );
}

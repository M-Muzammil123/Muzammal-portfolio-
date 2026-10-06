"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowUpRight } from "lucide-react";
import {
  GitHubIcon,
  LinkedInIcon,
  XIcon,
  InstagramIcon,
  YouTubeIcon,
} from "@/components/common/Icons";
import { personalData } from "@/data/personal";
import { ThemeToggle } from "./ThemeToggle";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
}

export function MobileNav({ isOpen, onClose, activeSection }: MobileNavProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const socialLinksList = [
    { name: "LinkedIn", href: personalData.socialLinks.linkedin, icon: LinkedInIcon },
    { name: "GitHub", href: personalData.socialLinks.github, icon: GitHubIcon },
    { name: "X", href: personalData.socialLinks.x, icon: XIcon },
    { name: "Instagram", href: personalData.socialLinks.instagram, icon: InstagramIcon },
    { name: "YouTube", href: personalData.socialLinks.youtube, icon: YouTubeIcon },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          />

          {/* Drawer Menu */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 280 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-xs bg-[var(--bg-main)] border-l border-[var(--border-color)] p-6 flex flex-col justify-between shadow-2xl lg:hidden overflow-y-auto"
          >
            {/* Header with Brand & Close */}
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[var(--border-color)]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--accent-cyan)] shadow-[0_0_8px_var(--accent-cyan)]" />
                  <span className="font-mono-code font-bold text-sm tracking-wider text-[var(--text-primary)]">
                    {personalData.brandName}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close navigation menu"
                  className="w-9 h-9 flex items-center justify-center rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-1.5 mt-6">
                {personalData.navLinks.map((link) => {
                  const isActive = activeSection === link.href.replace("#", "");
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={(e) => {
                        if (link.href.startsWith("#")) {
                          e.preventDefault();
                          onClose();
                          setTimeout(() => {
                            const id = link.href.replace("#", "");
                            const el = document.getElementById(id);
                            if (el) {
                              const yOffset = -76;
                              const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                              window.scrollTo({ top: y, behavior: "smooth" });
                              window.history.pushState(null, "", link.href);
                            }
                          }, 100);
                        } else {
                          onClose();
                        }
                      }}
                      className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-[var(--accent-glow)] text-[var(--accent-cyan)] border border-[var(--accent-cyan)]/25 font-bold"
                          : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)]"
                      }`}
                    >
                      <span>{link.label}</span>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-cyan)] shadow-[0_0_6px_var(--accent-cyan)]" />
                      )}
                    </a>
                  );
                })}

                {/* Let's Talk CTA */}
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    onClose();
                    setTimeout(() => {
                      const el = document.getElementById("contact");
                      if (el) {
                        const yOffset = -76;
                        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                        window.scrollTo({ top: y, behavior: "smooth" });
                        window.history.pushState(null, "", "#contact");
                      }
                    }, 100);
                  }}
                  className="mt-3 flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-violet)] text-white dark:text-slate-950 font-bold text-xs uppercase tracking-wider font-mono-code hover:opacity-95 transition-all shadow-md active:scale-[0.98]"
                >
                  <span>Let&apos;s Talk</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </nav>
            </div>

            {/* Bottom Actions & Controls */}
            <div className="pt-6 border-t border-[var(--border-color)] flex flex-col gap-4 mt-6">
              <div className="flex items-center justify-between">
                <span className="text-xs text-[var(--text-muted)] font-mono-code uppercase tracking-wider font-semibold">
                  Appearance
                </span>
                <ThemeToggle />
              </div>

              {/* Social Links */}
              <div className="flex items-center justify-between gap-1.5">
                {socialLinksList.map((item) => {
                  const IconComp = item.icon;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.name}
                      className="w-10 h-10 flex items-center justify-center rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] hover:border-[var(--accent-cyan)]/40 transition-all"
                    >
                      <IconComp className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

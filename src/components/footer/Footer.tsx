"use client";

import React from "react";
import { ArrowUp, Mail, Phone } from "lucide-react";
import {
  GitHubIcon,
  LinkedInIcon,
  XIcon,
  InstagramIcon,
  YouTubeIcon,
} from "@/components/common/Icons";
import { personalData } from "@/data/personal";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      href: personalData.socialLinks.linkedin,
      icon: LinkedInIcon,
      color: "text-[#0A66C2]",
    },
    {
      name: "GitHub",
      href: personalData.socialLinks.github,
      icon: GitHubIcon,
      color: "text-[var(--text-primary)]",
    },
    {
      name: "X (Twitter)",
      href: personalData.socialLinks.x,
      icon: XIcon,
      color: "text-[var(--text-primary)]",
    },
    {
      name: "Instagram",
      href: personalData.socialLinks.instagram,
      icon: InstagramIcon,
      color: "text-[#E4405F]",
    },
    {
      name: "YouTube",
      href: personalData.socialLinks.youtube,
      icon: YouTubeIcon,
      color: "text-[#FF0000]",
    },
  ];

  return (
    <footer className="relative border-t border-[var(--border-color)] bg-[var(--bg-secondary)] overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-18">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start pb-12 border-b border-[var(--border-color)]">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-cyan)] shadow-[0_0_8px_var(--accent-cyan)]" />
              <span className="font-mono-code font-bold text-lg tracking-wider text-[var(--text-primary)]">
                {personalData.brandName}
              </span>
            </div>
            <p className="text-sm font-mono-code text-[var(--accent-cyan)] font-semibold">
              {personalData.fullName} &bull; {personalData.primaryTitle}
            </p>
            <p className="text-xs text-[var(--text-secondary)] max-w-md leading-relaxed font-normal">
              {personalData.shortBio}
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3">
            <span className="text-xs font-mono-code uppercase tracking-wider text-[var(--text-muted)] block mb-3 font-bold">
              Site Map
            </span>
            <ul className="space-y-2 text-xs font-mono-code">
              {personalData.navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Channels */}
          <div className="md:col-span-4">
            <span className="text-xs font-mono-code uppercase tracking-wider text-[var(--text-muted)] block mb-3 font-bold">
              Connect & Follow
            </span>
            <div className="grid grid-cols-2 gap-2.5 text-xs font-mono-code">
              {socialLinks.map((social) => {
                const IconComp = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2 rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-cyan)]/40 transition-all"
                  >
                    <IconComp className={`w-3.5 h-3.5 ${social.color}`} />
                    <span className="truncate">{social.name}</span>
                  </a>
                );
              })}

              <a
                href={personalData.socialLinks.email}
                className="flex items-center gap-2 p-2 rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-cyan)]/40 transition-all"
              >
                <Mail className="w-3.5 h-3.5 text-[var(--accent-cyan)]" />
                <span>Email</span>
              </a>

              <a
                href={personalData.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2 rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-cyan)]/40 transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-code text-[var(--text-muted)]">
          <p>© 2026 {personalData.fullName} ({personalData.brandName}). All rights reserved.</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] transition-colors"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

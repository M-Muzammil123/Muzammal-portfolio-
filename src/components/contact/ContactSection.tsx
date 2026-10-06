"use client";

import React, { useState } from "react";
import {
  Mail,
  ArrowUpRight,
  Send,
  CheckCircle2,
  Phone,
  Sparkles,
} from "lucide-react";
import {
  GitHubIcon,
  LinkedInIcon,
  XIcon,
  InstagramIcon,
  YouTubeIcon,
} from "@/components/common/Icons";
import { personalData } from "@/data/personal";
import { SectionHeading } from "@/components/common/SectionHeading";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Autonomous AI Agents",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  const directChannels = [
    {
      title: "Direct Email",
      handle: "muzammalsabar0@gmail.com",
      href: personalData.socialLinks.email,
      icon: Mail,
      iconColor: "text-[var(--accent-cyan)]",
    },
    {
      title: "WhatsApp Direct",
      handle: "+92 325 4024491",
      href: personalData.socialLinks.whatsapp,
      icon: Phone,
      iconColor: "text-emerald-400",
    },
    {
      title: "LinkedIn Profile",
      handle: "muhammad-muzammil",
      href: personalData.socialLinks.linkedin,
      icon: LinkedInIcon,
      iconColor: "text-[#0A66C2]",
    },
    {
      title: "GitHub Profile",
      handle: "M-Muzammil123",
      href: personalData.socialLinks.github,
      icon: GitHubIcon,
      iconColor: "text-[var(--text-primary)]",
    },
    {
      title: "X (Twitter)",
      handle: "@MuzammilDevAI",
      href: personalData.socialLinks.x,
      icon: XIcon,
      iconColor: "text-[var(--text-primary)]",
    },
    {
      title: "Instagram",
      handle: "@muzammi.ai",
      href: personalData.socialLinks.instagram,
      icon: InstagramIcon,
      iconColor: "text-[#E4405F]",
    },
    {
      title: "YouTube Channel",
      handle: "@MuzammilDevAI",
      href: personalData.socialLinks.youtube,
      icon: YouTubeIcon,
      iconColor: "text-[#FF0000]",
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden scroll-mt-20">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[var(--accent-glow)] rounded-full blur-[140px] pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          number="08"
          badge="Let's Talk"
          title="Let's Build Something Intelligent."
          subtitle="Have an AI product, automation workflow, or software challenge? Reach out directly or dispatch a project brief."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Channels */}
          <div className="lg:col-span-5 space-y-3">
            <p className="text-base text-[var(--text-secondary)] leading-relaxed mb-4">
              Whether you need an autonomous agent workflow, an enterprise multi-tenant RAG architecture,
              or a production SaaS platform, connect with me across any channel:
            </p>

            {/* Channels Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
              {directChannels.map((channel) => {
                const IconComponent = channel.icon;
                return (
                  <a
                    key={channel.title}
                    href={channel.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] hover:border-[var(--accent-cyan)]/50 hover:bg-[var(--bg-card-hover)] transition-all group shadow-xs"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-9 h-9 rounded-xl bg-[var(--bg-main)] border border-[var(--border-color)] flex items-center justify-center shrink-0">
                        <IconComponent className={`w-4 h-4 ${channel.iconColor}`} />
                      </div>
                      <div className="min-w-0">
                        <span className="text-[10px] font-mono-code text-[var(--text-muted)] uppercase tracking-wider block">
                          {channel.title}
                        </span>
                        <span className="text-xs font-bold font-mono-code text-[var(--text-primary)] group-hover:text-[var(--accent-cyan)] transition-colors truncate block">
                          {channel.handle}
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--accent-cyan)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-2" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="lg:col-span-7 rounded-3xl border border-[var(--border-color)] bg-[var(--bg-card)] p-6 sm:p-8 shadow-xl">
            {submitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 rounded-full bg-[var(--accent-glow)] border border-[var(--accent-cyan)]/40 flex items-center justify-center text-[var(--accent-cyan)] mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2 font-mono-code">
                  Inquiry Dispatched Successfully
                </h3>
                <p className="text-sm text-[var(--text-secondary)] max-w-sm mb-6">
                  Thank you for reaching out, {formData.name}. Muhammad Muzammil will review your system parameters and respond promptly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", projectType: "Autonomous AI Agents", message: "" });
                  }}
                  className="px-5 py-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-main)] text-xs font-mono-code text-[var(--text-primary)] hover:border-[var(--accent-cyan)]"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center gap-2 mb-2 pb-3 border-b border-[var(--border-color)]">
                  <Sparkles className="w-4 h-4 text-[var(--accent-cyan)]" />
                  <span className="font-mono-code text-xs font-bold uppercase tracking-wider text-[var(--text-primary)]">
                    Project Dispatch Matrix
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono-code text-[var(--text-muted)] uppercase tracking-wider mb-1.5 font-semibold">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Miller"
                      className="w-full px-4 py-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-main)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-cyan)] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono-code text-[var(--text-muted)] uppercase tracking-wider mb-1.5 font-semibold">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@company.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-main)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-cyan)] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono-code text-[var(--text-muted)] uppercase tracking-wider mb-1.5 font-semibold">
                    Project Scope / Focus
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-main)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-cyan)] transition-colors"
                  >
                    <option value="Autonomous AI Agents">Autonomous AI Agents (LangGraph / MCP)</option>
                    <option value="Enterprise RAG Systems">Enterprise RAG & Document Retrieval</option>
                    <option value="Full-Stack Multi-Tenant SaaS">Production SaaS (FastAPI + Next.js + PostgreSQL)</option>
                    <option value="AI E-Commerce & Retail">Conversational Commerce & Product Agents</option>
                    <option value="Technical Architecture Review">Consulting & Architecture Review</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono-code text-[var(--text-muted)] uppercase tracking-wider mb-1.5 font-semibold">
                    Project Requirements & Workflow Constraints *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your current system bottleneck, desired automation, or application requirements..."
                    className="w-full px-4 py-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-main)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-cyan)] transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[var(--text-primary)] text-[var(--bg-main)] font-bold text-sm tracking-wider font-mono-code hover:opacity-90 hover:scale-[1.01] active:scale-[0.99] transition-all shadow-md cursor-pointer"
                >
                  <span>DISPATCH PROJECT INQUIRY</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

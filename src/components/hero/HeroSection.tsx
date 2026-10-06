"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { personalData } from "@/data/personal";

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 lg:py-32 overflow-hidden scroll-mt-20"
    >
      {/* Background Grids & Ambient Lighting */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[var(--accent-glow)] rounded-full blur-[150px] pointer-events-none opacity-50" />
      <div className="absolute bottom-10 right-1/3 w-[500px] h-[400px] bg-[var(--accent-violet-glow)] rounded-full blur-[140px] pointer-events-none opacity-35" />

      {/* Subtle Floating Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-5 dark:opacity-10">
        <span className="font-mono-code text-[14vw] font-black tracking-widest text-[var(--text-primary)]">
          AGENTIC AI
        </span>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center"
        >
          {/* Status Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[var(--border-color)] bg-[var(--glass-bg)] backdrop-blur-md mb-6 shadow-xs"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
            </span>
            <span className="text-xs font-mono-code font-semibold tracking-wider text-[var(--text-primary)]">
              {personalData.statusBadge}
            </span>
            <span className="text-[11px] font-mono-code text-[var(--text-muted)] border-l border-[var(--border-color)] pl-2.5 hidden sm:inline">
              {personalData.statusSubtext}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.08] mb-6 max-w-4xl"
          >
            Hi, I&apos;m{" "}
            <span className="text-[var(--accent-cyan)]">{personalData.name}</span>
            <br />
            I Build Intelligent{" "}
            <span className="text-gradient-cyan-violet">
              Software Systems.
            </span>
          </motion.h1>

          {/* Sub-Headline Highlights */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-7 font-mono-code text-xs sm:text-sm font-semibold text-[var(--accent-cyan)]"
          >
            <span className="px-3.5 py-1.5 rounded-xl bg-[var(--accent-glow)] border border-[var(--accent-cyan)]/25">
              AI Agents
            </span>
            <span className="text-[var(--text-muted)]">&bull;</span>
            <span className="px-3.5 py-1.5 rounded-xl bg-[var(--accent-glow)] border border-[var(--accent-cyan)]/25">
              Automation
            </span>
            <span className="text-[var(--text-muted)]">&bull;</span>
            <span className="px-3.5 py-1.5 rounded-xl bg-[var(--accent-violet-glow)] text-[var(--accent-violet)] border border-[var(--accent-violet)]/25">
              RAG Systems
            </span>
            <span className="text-[var(--text-muted)]">&bull;</span>
            <span className="px-3.5 py-1.5 rounded-xl bg-[var(--accent-glow)] border border-[var(--accent-cyan)]/25">
              Production SaaS
            </span>
          </motion.div>

          {/* Supporting Copy */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-[var(--text-secondary)] font-normal leading-relaxed max-w-2xl mb-9"
          >
            <strong className="text-[var(--text-primary)] font-semibold">
              {personalData.primaryTitle}
            </strong>{" "}
            specialized in tool-calling autonomous AI agents, enterprise RAG knowledge retrieval,
            intelligent workflow automations, and scalable multi-tenant SaaS applications.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-12"
          >
            <a
              href="#about"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[var(--text-primary)] text-[var(--bg-main)] font-semibold text-sm tracking-wide hover:opacity-90 hover:scale-[1.02] transition-all shadow-md active:scale-[0.98]"
            >
              <span>Explore My Work</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border border-[var(--border-color)] bg-[var(--glass-bg)] backdrop-blur-md text-[var(--text-primary)] font-semibold text-sm tracking-wide hover:border-[var(--accent-cyan)] hover:bg-[var(--bg-card-hover)] hover:scale-[1.02] transition-all active:scale-[0.98]"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-4 h-4 text-[var(--accent-cyan)]" />
            </a>
          </motion.div>

          {/* Key Metrics Row */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-3xl pt-8 border-t border-[var(--border-color)]"
          >
            {personalData.metrics.map((m) => (
              <div
                key={m.label}
                className="flex flex-col items-center text-center p-3.5 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] shadow-xs transition-transform hover:-translate-y-0.5"
              >
                <span className="font-mono-code text-base sm:text-lg font-bold text-[var(--accent-cyan)]">
                  {m.value}
                </span>
                <span className="text-[11px] text-[var(--text-secondary)] font-medium mt-1">
                  {m.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

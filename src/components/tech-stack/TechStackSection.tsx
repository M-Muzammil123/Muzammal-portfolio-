"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Bot,
  Network,
  Cpu,
  Database,
  Sparkles,
  Boxes,
  BrainCircuit,
  Zap,
  Code2,
  Layers,
  Radio,
  ShieldCheck,
  Globe,
  Code,
  Palette,
  Activity,
  Box,
  GitMerge,
  Cloud,
  Server,
  GitBranch,
} from "lucide-react";
import { techStack } from "@/data/stack";
import { SectionHeading } from "@/components/common/SectionHeading";

const iconLibrary: Record<string, React.ElementType> = {
  Bot,
  Network,
  Cpu,
  Database,
  Sparkles,
  Boxes,
  BrainCircuit,
  Zap,
  Code2,
  Layers,
  Radio,
  ShieldCheck,
  Globe,
  Code,
  Palette,
  Activity,
  Box,
  GitMerge,
  Cloud,
  Server,
  GitBranch,
};

type Category = "All" | "AI & Agents" | "Backend" | "Frontend" | "Infrastructure";

export function TechStackSection() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");

  const categories: Category[] = ["All", "AI & Agents", "Backend", "Frontend", "Infrastructure"];

  const filteredItems =
    selectedCategory === "All"
      ? techStack
      : techStack.filter((item) => item.category === selectedCategory);

  return (
    <section id="stack" className="py-24 relative overflow-hidden scroll-mt-20">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full bg-[var(--accent-glow)] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          number="05"
          badge="Tooling & Protocols"
          title="My Engineering Stack"
          subtitle="Battle-tested technologies selected for architectural reliability, developer velocity, and low-latency runtime performance."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-mono-code transition-all duration-200 ${
                  isSelected
                    ? "bg-[var(--text-primary)] text-[var(--bg-main)] font-bold shadow-md"
                    : "bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-subtle)]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Categorized Tech Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {filteredItems.map((item) => {
            const Icon = iconLibrary[item.iconName] || Code;

            return (
              <motion.div
                key={item.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="group p-5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] hover:border-[var(--accent-cyan)]/50 hover:bg-[var(--bg-card-hover)] transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-[var(--bg-main)] border border-[var(--border-color)] flex items-center justify-center text-[var(--accent-cyan)] group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono-code uppercase tracking-wider text-[var(--text-muted)]">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-cyan)] transition-colors mb-1.5">
                    {item.name}
                  </h3>

                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {item.highlight && (
                  <div className="mt-4 pt-3 border-t border-[var(--border-color)]/60 flex items-center justify-between text-[10px] font-mono-code text-[var(--accent-cyan)]">
                    <span>CORE SPECIALIZATION</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-cyan)]" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

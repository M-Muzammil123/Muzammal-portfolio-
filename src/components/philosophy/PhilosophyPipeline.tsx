"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Compass,
  Layers,
  Terminal,
  ShieldAlert,
  Rocket,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";
import { philosophySteps } from "@/data/stack";
import { SectionHeading } from "@/components/common/SectionHeading";

const iconMap: Record<string, React.ElementType> = {
  Compass,
  Layers,
  Terminal,
  ShieldAlert,
  Rocket,
  TrendingUp,
};

export function PhilosophyPipeline() {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const activeStep = philosophySteps[activeStepIndex];
  const IconComponent = iconMap[activeStep.icon] || Compass;

  return (
    <section id="philosophy" className="py-24 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[var(--accent-glow)] rounded-full blur-[150px] pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          number="03"
          badge="Execution Methodology"
          title="Engineering Pipeline"
          subtitle="How I approach building AI products: from core business understanding to hardened cloud deployments."
        />

        {/* Pipeline Bar / Step Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 mb-10">
          {philosophySteps.map((step, idx) => {
            const isActive = activeStepIndex === idx;
            const StepIcon = iconMap[step.icon] || Compass;

            return (
              <button
                key={step.step}
                type="button"
                onClick={() => setActiveStepIndex(idx)}
                className={`relative p-3.5 sm:p-4 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between ${
                  isActive
                    ? "bg-[var(--bg-card)] border-[var(--accent-cyan)] shadow-lg shadow-[var(--accent-glow)]"
                    : "bg-[var(--bg-main)] border-[var(--border-color)] hover:border-[var(--border-subtle)] hover:bg-[var(--bg-card)]"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`font-mono-code text-[11px] font-bold ${
                      isActive ? "text-[var(--accent-cyan)]" : "text-[var(--text-muted)]"
                    }`}
                  >
                    PHASE {step.step}
                  </span>
                  <StepIcon
                    className={`w-4 h-4 ${
                      isActive ? "text-[var(--accent-cyan)]" : "text-[var(--text-muted)]"
                    }`}
                  />
                </div>
                <span
                  className={`text-sm sm:text-base font-bold tracking-tight ${
                    isActive ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)]"
                  }`}
                >
                  {step.title}
                </span>

                {/* Animated active indicator under card */}
                {isActive && (
                  <motion.div
                    layoutId="activePipelineIndicator"
                    className="absolute bottom-0 left-3 right-3 h-[2px] bg-[var(--accent-cyan)] rounded-full"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Panel */}
        <motion.div
          key={activeStep.step}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] p-6 sm:p-10 shadow-xl relative overflow-hidden"
        >
          {/* Subtle side accent line */}
          <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-[var(--accent-cyan)] to-[var(--accent-violet)]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Stage Overview */}
            <div className="lg:col-span-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--accent-glow)] border border-[var(--accent-cyan)]/30 flex items-center justify-center text-[var(--accent-cyan)]">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-mono-code text-xs text-[var(--accent-cyan)] font-bold tracking-wider">
                    PHASE {activeStep.step} &bull; DISCIPLINE
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)]">
                    {activeStep.title}
                  </h3>
                </div>
              </div>

              <p className="text-base sm:text-lg font-medium text-[var(--text-primary)] mb-3">
                {activeStep.summary}
              </p>

              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {activeStep.detail}
              </p>
            </div>

            {/* Right Column: Core Engineering Principles */}
            <div className="lg:col-span-6 rounded-xl border border-[var(--border-color)] bg-[var(--bg-main)] p-5 sm:p-6">
              <span className="text-xs font-mono-code uppercase tracking-wider text-[var(--accent-cyan)] font-bold block mb-4">
                Rigorous Execution Standards:
              </span>

              <div className="space-y-3.5">
                {activeStep.principles.map((principle, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent-cyan)] mt-0.5 shrink-0" />
                    <span className="leading-relaxed">{principle}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

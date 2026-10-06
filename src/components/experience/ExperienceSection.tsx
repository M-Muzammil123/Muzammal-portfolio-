"use client";

import React from "react";
import { motion } from "motion/react";
import { Briefcase, CheckCircle2, Calendar } from "lucide-react";
import { experienceTimeline } from "@/data/stack";
import { SectionHeading } from "@/components/common/SectionHeading";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          number="07"
          badge="Track Record"
          title="Engineering Experience"
          subtitle="A focused timeline demonstrating progression from resilient backend APIs to complex autonomous agent ecosystems."
        />

        {/* Timeline List */}
        <div className="relative pl-6 sm:pl-8 space-y-12 before:absolute before:left-2 sm:before:left-3 before:top-3 before:bottom-3 before:w-[2px] before:bg-[var(--border-color)]">
          {experienceTimeline.map((item, index) => (
            <motion.div
              key={item.period}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Timeline Node Badge */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-[var(--bg-main)] border-2 border-[var(--accent-cyan)] flex items-center justify-center text-[var(--accent-cyan)] shadow-sm group-hover:scale-110 transition-transform">
                <Briefcase className="w-3 h-3" />
              </div>

              {/* Experience Card */}
              <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] p-6 sm:p-8 hover:border-[var(--accent-cyan)]/50 transition-all duration-300 shadow-md">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <span className="font-mono-code text-xs font-bold text-[var(--accent-cyan)] uppercase tracking-wider">
                      {item.companyOrFocus}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mt-0.5">
                      {item.role}
                    </h3>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[var(--border-color)] bg-[var(--bg-main)] text-xs font-mono-code text-[var(--text-secondary)] self-start sm:self-auto">
                    <Calendar className="w-3.5 h-3.5 text-[var(--accent-cyan)]" />
                    <span>{item.period}</span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-6 font-normal">
                  {item.description}
                </p>

                {/* Key Achievements */}
                <div className="space-y-2.5 mb-6">
                  {item.achievements.map((ach, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-secondary)]">
                      <CheckCircle2 className="w-4 h-4 text-[var(--accent-cyan)] mt-0.5 shrink-0" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Skills tags */}
                <div className="pt-4 border-t border-[var(--border-color)] flex flex-wrap items-center gap-2">
                  <span className="text-[10px] font-mono-code text-[var(--text-muted)] uppercase tracking-wider mr-1">
                    Environment:
                  </span>
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-0.5 rounded-md text-xs font-mono-code bg-[var(--bg-main)] text-[var(--text-primary)] border border-[var(--border-color)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

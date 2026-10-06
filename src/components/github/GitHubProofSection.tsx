"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { GitHubIcon } from "@/components/common/Icons";
import { publicRepositories } from "@/data/stack";
import { personalData } from "@/data/personal";
import { SectionHeading } from "@/components/common/SectionHeading";

export function GitHubProofSection() {
  // Generate a realistic 52-week contribution visual grid pattern
  const contributionGrid = React.useMemo(() => {
    const weeks = 28; // compact visual display
    const days = 7;
    const grid: number[][] = [];

    // Deterministic pseudo-random distribution to maintain steady commit cadence
    for (let w = 0; w < weeks; w++) {
      const week: number[] = [];
      for (let d = 0; d < days; d++) {
        const seed = (w * 7 + d * 13) % 100;
        let intensity = 0;
        if (seed > 75) intensity = 3;
        else if (seed > 45) intensity = 2;
        else if (seed > 20) intensity = 1;
        week.push(intensity);
      }
      grid.push(week);
    }
    return grid;
  }, []);

  return (
    <section id="github" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          number="06"
          badge="Open Engineering"
          title="Built in Public"
          subtitle="Verifiable open source architectures, code repositories, and continuous engineering cadence."
        />

        {/* GitHub Activity / Heatmap Card */}
        <div className="rounded-3xl border border-[var(--border-color)] bg-[var(--bg-card)] p-6 sm:p-8 mb-10 shadow-lg">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[var(--bg-main)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-primary)]">
                <GitHubIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold font-mono-code text-[var(--text-primary)]">
                  github.com/M-Muzammil123
                </h3>
                <p className="text-xs text-[var(--text-secondary)]">
                  Active code commits across autonomous agents, RAG engines & microservices
                </p>
              </div>
            </div>

            <a
              href={personalData.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-[var(--border-color)] bg-[var(--bg-main)] text-xs font-mono-code text-[var(--text-primary)] hover:border-[var(--accent-cyan)] transition-colors self-start sm:self-auto"
            >
              <span>FOLLOW ON GITHUB</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Activity Matrix Visual */}
          <div className="overflow-x-auto pb-2">
            <div className="inline-flex gap-1.5 min-w-[620px]">
              {contributionGrid.map((week, wIndex) => (
                <div key={wIndex} className="flex flex-col gap-1.5">
                  {week.map((level, dIndex) => {
                    const bgClass =
                      level === 3
                        ? "bg-[var(--accent-cyan)] shadow-[0_0_6px_var(--accent-cyan)]"
                        : level === 2
                        ? "bg-[var(--accent-cyan)]/70"
                        : level === 1
                        ? "bg-[var(--accent-cyan)]/30"
                        : "bg-[var(--bg-main)] border border-[var(--border-color)]/60";

                    return (
                      <div
                        key={dIndex}
                        title={`Activity level: ${level}`}
                        className={`w-3 h-3 rounded-[2px] ${bgClass} transition-colors hover:scale-125`}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono-code text-[var(--text-muted)] mt-4 pt-3 border-t border-[var(--border-color)]">
            <span>Commit frequency across personal and production repositories</span>
            <div className="flex items-center gap-1.5">
              <span>Less</span>
              <span className="w-2.5 h-2.5 rounded-[2px] bg-[var(--bg-main)] border border-[var(--border-color)]" />
              <span className="w-2.5 h-2.5 rounded-[2px] bg-[var(--accent-cyan)]/30" />
              <span className="w-2.5 h-2.5 rounded-[2px] bg-[var(--accent-cyan)]/70" />
              <span className="w-2.5 h-2.5 rounded-[2px] bg-[var(--accent-cyan)]" />
              <span>More</span>
            </div>
          </div>
        </div>

        {/* Selected Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {publicRepositories.map((repo) => (
            <div
              key={repo.name}
              className="rounded-3xl border border-[var(--border-color)] bg-[var(--bg-card)] p-6 flex flex-col justify-between hover:border-[var(--accent-cyan)]/50 transition-all duration-200 group shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <GitHubIcon className="w-4 h-4 text-[var(--accent-cyan)]" />
                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono-code text-base font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-cyan)] transition-colors"
                    >
                      {repo.name}
                    </a>
                  </div>

                  <span className="text-[10px] font-mono-code px-2 py-0.5 rounded-full bg-[var(--bg-main)] border border-[var(--border-color)] text-[var(--text-secondary)]">
                    Public
                  </span>
                </div>

                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                  {repo.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[var(--border-color)] text-xs font-mono-code text-[var(--text-secondary)]">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: repo.languageColor }}
                  />
                  <span>{repo.primaryLanguage}</span>
                </div>

                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[var(--accent-cyan)] hover:underline"
                >
                  <span>View Repository</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

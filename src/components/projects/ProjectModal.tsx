"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowUpRight, FileText, CheckCircle2, Shield, Network } from "lucide-react";
import { GitHubIcon } from "@/components/common/Icons";
import { Project } from "@/types";
import { SafariBrowserMockup } from "./SafariBrowserMockup";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && project) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 26, stiffness: 280 }}
          className="relative z-10 w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl border border-[var(--border-color)] bg-[var(--bg-main)] text-[var(--text-primary)] shadow-2xl p-6 sm:p-8"
        >
          {/* Header Bar */}
          <div className="flex items-start justify-between gap-4 pb-6 border-b border-[var(--border-color)]">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono-code text-xs font-bold text-[var(--accent-cyan)]">
                  PROJECT {project.projectNumber}
                </span>
                <span className="text-[var(--text-muted)]">•</span>
                <span className="text-xs font-mono-code uppercase tracking-wider text-[var(--text-secondary)]">
                  {project.category}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)]">
                {project.title}
              </h2>
              <p className="text-sm font-mono-code text-[var(--accent-cyan)] mt-1 font-semibold">
                {project.tagline}
              </p>
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close project modal"
              className="w-10 h-10 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-cyan)]/50 transition-colors shrink-0"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Video Player in Safari Mockup - Live Full Player */}
          <div className="my-6">
            <SafariBrowserMockup
              playbackId={project.muxPlaybackId}
              title={project.title}
              category={project.category}
              urlDisplay={project.githubUrl}
              enable3DTilt={false}
              isThumbnail={false}
            />
          </div>

          {/* Actions: GitHub & Full Case Study (No Live Link) */}
          <div className="flex flex-wrap items-center gap-3 pb-6 border-b border-[var(--border-color)]">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--text-primary)] text-[var(--bg-main)] font-semibold text-xs font-mono-code tracking-wider hover:opacity-90 transition-opacity"
            >
              <GitHubIcon className="w-4 h-4" />
              <span>VIEW GITHUB REPOSITORY</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <a
              href={project.caseStudyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[var(--accent-cyan)]/40 bg-[var(--accent-glow)] text-[var(--accent-cyan)] font-semibold text-xs font-mono-code tracking-wider hover:bg-[var(--accent-cyan)] hover:text-slate-950 transition-all shadow-xs"
            >
              <FileText className="w-4 h-4" />
              <span>OPEN FULL CASE STUDY</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Deep-Dive Grid: Problem vs Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <div className="p-5 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)]">
              <span className="text-xs font-mono-code font-bold text-rose-500 uppercase tracking-wider block mb-2">
                Problem Statement
              </span>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {project.shortProblem}
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)]">
              <span className="text-xs font-mono-code font-bold text-[var(--accent-cyan)] uppercase tracking-wider block mb-2">
                Engineered Solution
              </span>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Architecture & Flow */}
          <div className="my-6 p-5 sm:p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)]">
            <div className="flex items-center gap-2 mb-3">
              <Network className="w-4 h-4 text-[var(--accent-cyan)]" />
              <h4 className="text-sm font-bold font-mono-code uppercase tracking-wider text-[var(--text-primary)]">
                System Architecture & Execution Pipeline
              </h4>
            </div>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
              {project.architectureDetails.overview}
            </p>

            {/* Sequence steps */}
            <div className="space-y-2.5 mb-4">
              {project.architectureDetails.flowSteps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-[var(--text-secondary)] font-mono-code">
                  <span className="w-5 h-5 rounded-md bg-[var(--bg-main)] border border-[var(--border-color)] text-[var(--accent-cyan)] flex items-center justify-center font-bold shrink-0">
                    {idx + 1}
                  </span>
                  <span className="mt-0.5">{step}</span>
                </div>
              ))}
            </div>

            {/* Security Isolation Note */}
            {project.architectureDetails.securityIsolation && (
              <div className="mt-4 pt-3 border-t border-[var(--border-color)] flex items-start gap-2 text-xs text-[var(--text-muted)] font-mono-code">
                <Shield className="w-3.5 h-3.5 text-[var(--accent-violet)] shrink-0 mt-0.5" />
                <span>
                  <strong>Security & Isolation Guarantee:</strong> {project.architectureDetails.securityIsolation}
                </span>
              </div>
            )}
          </div>

          {/* Key Features List */}
          <div className="my-6">
            <h4 className="text-xs font-mono-code uppercase tracking-wider text-[var(--text-muted)] mb-3">
              Key Features & Production Capabilities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.keyFeatures.map((feat, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-cyan)] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Badges */}
          <div className="pt-6 border-t border-[var(--border-color)]">
            <span className="text-[10px] font-mono-code uppercase tracking-wider text-[var(--text-muted)] block mb-2.5">
              Technologies & Infrastructure
            </span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-xs font-mono-code bg-[var(--bg-card)] text-[var(--text-primary)] border border-[var(--border-color)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

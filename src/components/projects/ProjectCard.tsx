"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Play, FileText } from "lucide-react";
import { GitHubIcon } from "@/components/common/Icons";
import { Project } from "@/types";
import { SafariBrowserMockup } from "./SafariBrowserMockup";

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
  index: number;
}

export function ProjectCard({ project, onOpenDetails, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] as const }}
      data-cursor="project"
      className="group relative rounded-3xl border border-[var(--border-color)] bg-[var(--bg-card)] overflow-hidden transition-all duration-300 hover:border-[var(--accent-cyan)]/50 hover:shadow-2xl flex flex-col justify-between"
    >
      {/* Top Header Information */}
      <div className="p-6 sm:p-8 pb-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2.5">
            <span className="font-mono-code text-xs font-bold text-[var(--accent-cyan)] px-2.5 py-0.5 rounded-full bg-[var(--accent-glow)] border border-[var(--accent-cyan)]/25">
              PROJECT {project.projectNumber}
            </span>
            <span className="text-xs font-mono-code text-[var(--text-muted)] truncate max-w-[200px] sm:max-w-none">
              {project.category}
            </span>
          </div>

          {/* GitHub Repository Link (No Live Demo) */}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="View GitHub Repository"
            aria-label={`${project.title} GitHub repository`}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-main)] text-xs font-mono-code font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-cyan)]/50 hover:bg-[var(--bg-card-hover)] transition-all shadow-xs"
          >
            <GitHubIcon className="w-3.5 h-3.5" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3 text-[var(--text-muted)]" />
          </a>
        </div>

        {/* Title - Click opens video screen */}
        <h3
          onClick={() => onOpenDetails(project)}
          className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] group-hover:text-[var(--accent-cyan)] transition-colors cursor-pointer mb-2 leading-tight"
        >
          {project.title}
        </h3>

        {/* Tagline */}
        <p className="text-xs sm:text-sm font-mono-code text-[var(--accent-cyan)] mb-4 font-semibold">
          {project.tagline}
        </p>

        {/* Short Problem & Solution Summary */}
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-3 mb-6">
          {project.solution}
        </p>
      </div>

      {/* Safari Browser Mockup with Interactive Video - Click opens video modal */}
      <div className="px-4 sm:px-6 mb-6">
        <SafariBrowserMockup
          playbackId={project.muxPlaybackId}
          title={project.title}
          category={project.category}
          urlDisplay={project.githubUrl}
          onOpenDetails={() => onOpenDetails(project)}
          onPlayClick={() => onOpenDetails(project)}
          enable3DTilt={true}
          isThumbnail={true}
        />
      </div>

      {/* Technologies & Action Controls */}
      <div className="p-6 sm:p-8 pt-4 border-t border-[var(--border-color)] bg-[var(--bg-main)]/50 flex flex-col gap-4">
        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md text-[11px] font-mono-code bg-[var(--bg-card)] text-[var(--text-secondary)] border border-[var(--border-color)]"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="px-2.5 py-1 rounded-md text-[11px] font-mono-code bg-[var(--bg-card)] text-[var(--text-muted)] border border-[var(--border-color)]">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>

        {/* Action Buttons: Watch Video (opens video screen), Case Study (link), GitHub */}
        <div className="flex flex-wrap items-center gap-2.5 pt-2">
          {/* Watch Video Click -> Opens Video Screen */}
          <button
            type="button"
            onClick={() => onOpenDetails(project)}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[var(--accent-glow)] border border-[var(--accent-cyan)]/35 text-[var(--accent-cyan)] text-xs font-mono-code font-bold tracking-wider hover:bg-[var(--accent-cyan)] hover:text-slate-950 transition-all shadow-xs active:scale-[0.98] cursor-pointer"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Play Video</span>
          </button>

          {/* Case Study Click -> Open Case Study Link */}
          <a
            href={project.caseStudyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-primary)] text-xs font-mono-code font-bold tracking-wider hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan)] hover:bg-[var(--bg-card-hover)] transition-all shadow-xs"
          >
            <FileText className="w-3.5 h-3.5 text-[var(--accent-cyan)]" />
            <span>Case Study</span>
            <ArrowUpRight className="w-3 h-3 text-[var(--text-muted)]" />
          </a>

          {/* GitHub Repository Button */}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-secondary)] text-xs font-mono-code font-semibold tracking-wider hover:text-[var(--text-primary)] hover:border-[var(--border-subtle)] transition-all shadow-xs"
          >
            <GitHubIcon className="w-3.5 h-3.5" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3 text-[var(--text-muted)]" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

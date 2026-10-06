"use client";

import React, { useState } from "react";
import { projects } from "@/data/projects";
import { Project } from "@/types";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 relative overflow-hidden scroll-mt-20">
      {/* Background Subtle Radial Lighting */}
      <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-[var(--accent-glow)] blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          number="02"
          badge="Featured Deployments"
          title="Selected AI Products"
          subtitle="Production-grade AI systems, autonomous agents, and multi-tenant platforms I've designed, engineered, and shipped."
        />

        {/* 4 Featured Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={(p) => setSelectedProject(p)}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Expanded Project & Video Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

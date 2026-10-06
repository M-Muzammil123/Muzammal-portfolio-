"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { Bot, GitMerge, Layers, Database } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";

interface BuildCard {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  icon: React.ElementType;
  architecturalPillars: string[];
}

const buildCards: BuildCard[] = [
  {
    id: "ai-agents",
    number: "01",
    title: "AI Agents",
    tagline: "Autonomous Reasoning & Tool Execution",
    description:
      "Designing tool-using AI agents capable of reasoning, multi-step planning, calling external APIs, retrieving knowledge, and reliably executing complex workflows.",
    technologies: ["OpenAI Agents SDK", "LangGraph", "MCP", "Tool Calling"],
    icon: Bot,
    architecturalPillars: [
      "Dynamic tool selection & parameter schema validation",
      "Cyclic graph state management with human-in-the-loop gates",
      "Model Context Protocol (MCP) standardized host client integration",
    ],
  },
  {
    id: "ai-automation",
    number: "02",
    title: "AI Automation",
    tagline: "Event-Driven Workflow Synthesis",
    description:
      "Connecting AI models with critical business operations using asynchronous APIs, webhook dispatchers, and robust visual & programmatic automation platforms.",
    technologies: ["n8n", "APIs", "Webhooks", "LLM Workflows"],
    icon: GitMerge,
    architecturalPillars: [
      "Zero-data-loss webhook ingress with retry queues",
      "Automated document classification & semantic routing",
      "End-to-end integration across CRM, email, and internal databases",
    ],
  },
  {
    id: "ai-saas",
    number: "03",
    title: "AI SaaS",
    tagline: "Scalable Multi-Tenant Platforms",
    description:
      "Building multi-tenant AI products engineered with organization schema isolation, cryptographic RBAC, billing infrastructure, streaming token outputs, and scalable backend architecture.",
    technologies: ["FastAPI", "PostgreSQL", "Next.js", "Docker"],
    icon: Layers,
    architecturalPillars: [
      "Tenant-scoped PostgreSQL database schemas & connection pooling",
      "Asynchronous FastAPI microservices with sub-50ms baseline latency",
      "Token usage metering, subscription tier gating, and audit telemetry",
    ],
  },
  {
    id: "rag-systems",
    number: "04",
    title: "RAG Systems",
    tagline: "High-Precision Knowledge Retrieval",
    description:
      "Building knowledge-aware AI systems using document ingestion pipelines, dense vector embeddings, hybrid semantic retrieval, and grounded hallucination-free generation.",
    technologies: ["RAG", "Embeddings", "ChromaDB", "PostgreSQL"],
    icon: Database,
    architecturalPillars: [
      "Context-aware semantic chunking with document metadata enrichment",
      "Hybrid dense-sparse retrieval paired with cross-encoder re-ranking",
      "Strict citation synthesis preventing hallucinated statements",
    ],
  },
];

export function WhatIBuild() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section id="capabilities" className="py-24 relative overflow-hidden scroll-mt-20">
      {/* Background Subtle Gradient */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-[var(--accent-glow)] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          number="04"
          badge="Core Competencies"
          title="What I Build"
          subtitle="From intelligent tool-using agents to production-ready multi-tenant AI platforms."
        />

        {/* 4 Premium Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {buildCards.map((card, index) => {
            const Icon = card.icon;
            const isHovered = hoveredCard === card.id;

            return (
              <motion.div
                key={card.id}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-[var(--accent-cyan)]/60 hover:shadow-xl hover:-translate-y-1.5 overflow-hidden"
              >
                {/* Pointer-following subtle glow */}
                <div
                  className={`absolute -top-24 -right-24 w-64 h-64 rounded-full bg-[var(--accent-glow)] blur-[60px] pointer-events-none transition-opacity duration-500 ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`}
                />

                {/* Top Row: Number, Icon, & Architecture Lines */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[var(--bg-main)] border border-[var(--border-color)] flex items-center justify-center text-[var(--accent-cyan)] group-hover:border-[var(--accent-cyan)]/50 group-hover:scale-110 transition-all duration-300 shadow-xs">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-mono-code text-xs font-bold text-[var(--accent-cyan)] tracking-wider">
                          CARD // {card.number}
                        </span>
                        <span className="text-xs text-[var(--text-muted)] font-mono-code">
                          {card.tagline}
                        </span>
                      </div>
                    </div>

                    <span className="font-mono-code text-2xl font-bold text-[var(--border-subtle)] group-hover:text-[var(--accent-cyan)] transition-colors">
                      {card.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-3 group-hover:text-[var(--accent-cyan)] transition-colors">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-6 font-normal">
                    {card.description}
                  </p>

                  {/* Architectural Pillars / Capabilities */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-[var(--border-color)]">
                    {card.architecturalPillars.map((pillar, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--accent-cyan)] mt-1.5 shrink-0" />
                        <span>{pillar}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technology Badges */}
                <div className="pt-4 border-t border-[var(--border-color)] flex flex-wrap items-center gap-2">
                  <span className="text-[10px] font-mono-code text-[var(--text-muted)] uppercase tracking-wider mr-1">
                    Tech:
                  </span>
                  {card.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-mono-code bg-[var(--bg-main)] text-[var(--text-primary)] border border-[var(--border-color)] group-hover:border-[var(--accent-cyan)]/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

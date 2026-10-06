"use client";

import React from "react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ArchitectureVisual } from "@/components/hero/ArchitectureVisual";


export function ArchitectureSection() {
  const pipelineFlow = [
    {
      stage: "01. INGESTION",
      title: "User / Intent",
      description: "JWT authenticated streaming requests across WebSocket or REST API endpoints.",
    },
    {
      stage: "02. ORCHESTRATION",
      title: "Agent & Planner",
      description: "Stateful cyclic graph loops decomposing intents into structured tool executions.",
    },
    {
      stage: "03. TOOLS & RETRIEVAL",
      title: "MCP & RAG Layer",
      description: "Semantic vector retrieval paired with standardized Model Context Protocol tools.",
    },
    {
      stage: "04. PERSISTENCE",
      title: "Database & RBAC",
      description: "Strict tenant-isolated PostgreSQL schemas, audit trails, and deterministic responses.",
    },
  ];

  return (
    <section id="architecture" className="py-24 relative overflow-hidden scroll-mt-20">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[var(--accent-glow)] rounded-full blur-[160px] pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          number="03"
          badge="System Topography"
          title="Live AI Agent Architecture"
          subtitle="How I engineer intelligent agent systems: from inbound intent and planning to sandboxed tool execution and tenant-isolated persistence."
        />

        {/* 4-Stage Architectural Pipeline Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {pipelineFlow.map((stage) => (
            <div
              key={stage.stage}
              className="p-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] flex flex-col justify-between"
            >
              <div>
                <span className="font-mono-code text-[10px] font-bold text-[var(--accent-cyan)] tracking-wider block mb-1">
                  {stage.stage}
                </span>
                <h4 className="text-sm font-bold text-[var(--text-primary)] mb-1">
                  {stage.title}
                </h4>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {stage.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* The Live Interactive Visualizer */}
        <div className="w-full flex items-center justify-center">
          <ArchitectureVisual />
        </div>
      </div>
    </section>
  );
}

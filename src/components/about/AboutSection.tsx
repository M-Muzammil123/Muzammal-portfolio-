"use client";

import React from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/common/SectionHeading";
import { personalData } from "@/data/personal";
import { CheckCircle2, Terminal, Cpu, ShieldCheck } from "lucide-react";

export function AboutSection() {
  const lifecyclePhases = [
    { title: "Understand", detail: "Identify operational bottlenecks, map user workflows, and evaluate model feasibility" },
    { title: "Architect", detail: "Design tenant-isolated schemas, stateful agent loops & sandboxed MCP tools" },
    { title: "Implement", detail: "Build type-safe FastAPI backends, streaming WebSockets, and modern Next.js interfaces" },
    { title: "Validate", detail: "Empirically evaluate RAG groundings, citation fidelity, and penetration test auth boundaries" },
    { title: "Iterate", detail: "Monitor live telemetry, minimize token overhead, and optimize inference p99 latency" },
  ];

  const focusAreas = [
    { label: "AI Agents", desc: "Tool-using reasoning loops via LangGraph & Model Context Protocol (MCP)" },
    { label: "RAG Systems", desc: "High-precision vector retrieval with zero hallucinated output & citations" },
    { label: "AI Automation", desc: "Connecting enterprise workflows via webhooks, n8n, and custom APIs" },
    { label: "Production SaaS", desc: "Multi-tenant platforms with isolated schemas, RBAC & usage billing" },
    { label: "Backend Engineering", desc: "High-throughput asynchronous Python & FastAPI microservices" },
    { label: "Full-Stack Development", desc: "Performant Next.js App Router frontends with streaming UX" },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden scroll-mt-20">
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-[var(--accent-glow)] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          number="01"
          badge="Engineering Profile"
          title="About Muhammad Muzammil"
          subtitle="Agentic AI Engineer specializing in autonomous reasoning loops, RAG, and production SaaS architecture."
        />

        {/* Founder Bio Card with Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16 p-6 sm:p-10 rounded-3xl border border-[var(--border-color)] bg-[var(--bg-card)] shadow-xl">
          {/* Photo Column */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <div className="relative w-56 h-72 sm:w-64 sm:h-80 rounded-2xl overflow-hidden border-2 border-[var(--accent-cyan)]/40 shadow-2xl group">
              <Image
                src={personalData.profileImage}
                alt={personalData.fullName}
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 250px, 300px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050608]/90 via-transparent to-transparent" />
              <div className="absolute bottom-3 inset-x-3 text-center">
                <span className="text-xs font-mono-code font-bold text-white tracking-wider block">
                  {personalData.fullName}
                </span>
                <span className="text-[11px] font-mono-code text-[var(--accent-cyan)]">
                  {personalData.primaryTitle}
                </span>
              </div>
            </div>
          </div>

          {/* Narrative Column */}
          <div className="lg:col-span-8 space-y-4 text-base text-[var(--text-secondary)] leading-relaxed">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[var(--accent-glow)] border border-[var(--accent-cyan)]/25 text-xs font-mono-code text-[var(--accent-cyan)] font-bold">
              <Terminal className="w-3.5 h-3.5" />
              <span>BUILDING INTELLIGENT SYSTEMS</span>
            </div>

            <p className="text-lg text-[var(--text-primary)] font-medium">
              I design and build intelligent software systems that solve concrete operational bottlenecks.
              Rather than treating AI as a conversational gimmick, I engineer it as a foundational computational layer—coupling autonomous LLM reasoning with distributed, scalable backend architecture.
            </p>

            <p>
              My engineering stack spans tool-calling agents using the Model Context Protocol (MCP), grounded enterprise RAG engines with ChromaDB and pgvector, real-time WebSocket pipelines, and multi-tenant SaaS platforms engineered with strict database schema isolation and deterministic escalation mechanisms.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
              <div className="p-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-main)] flex items-center gap-2.5">
                <Cpu className="w-4 h-4 text-[var(--accent-cyan)] shrink-0" />
                <span className="text-xs font-mono-code font-bold text-[var(--text-primary)]">
                  Autonomous Agents
                </span>
              </div>

              <div className="p-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-main)] flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs font-mono-code font-bold text-[var(--text-primary)]">
                  Multi-Tenant Security
                </span>
              </div>

              <div className="p-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-main)] flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent-violet)] shrink-0" />
                <span className="text-xs font-mono-code font-bold text-[var(--text-primary)]">
                  Zero Hallucination RAG
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Focus Areas & Lifecycle Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Narrative & Focus Areas */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-xl font-bold font-mono-code text-[var(--text-primary)] mb-4">
              Core Technical Competencies
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {focusAreas.map((area) => (
                <div
                  key={area.label}
                  className="p-4 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] hover:border-[var(--accent-cyan)]/40 transition-colors flex flex-col justify-between"
                >
                  <span className="font-mono-code text-xs font-bold text-[var(--accent-cyan)] uppercase tracking-wider mb-1.5">
                    {area.label}
                  </span>
                  <span className="text-xs text-[var(--text-secondary)] leading-normal">
                    {area.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Lifecycle Pipeline Card */}
          <div className="lg:col-span-5 rounded-3xl border border-[var(--border-color)] bg-[var(--bg-card)] p-6 sm:p-8 shadow-md">
            <span className="text-xs font-mono-code uppercase tracking-wider text-[var(--accent-cyan)] font-bold block mb-6">
              Engineering Lifecycle
            </span>

            <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[2px] before:bg-[var(--border-color)]">
              {lifecyclePhases.map((phase, idx) => (
                <div key={phase.title} className="relative group">
                  <span className="absolute -left-[29px] top-1 w-3.5 h-3.5 rounded-full bg-[var(--bg-main)] border-2 border-[var(--accent-cyan)] group-hover:bg-[var(--accent-cyan)] transition-colors shadow-xs" />

                  <div className="flex items-center gap-2">
                    <span className="font-mono-code text-xs font-bold text-[var(--accent-cyan)]">
                      0{idx + 1}.
                    </span>
                    <h4 className="text-sm font-bold text-[var(--text-primary)] uppercase tracking-wide">
                      {phase.title}
                    </h4>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] mt-1 leading-normal">
                    {phase.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

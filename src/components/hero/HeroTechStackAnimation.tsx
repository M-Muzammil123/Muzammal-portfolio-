"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Cpu,
  Bot,
  Zap,
  Globe,
  Database,
  Radio,
  Box,
  Layers,
  Sparkles,
  Terminal,
  Activity,
  CheckCircle2,
} from "lucide-react";

interface TechItem {
  id: string;
  name: string;
  category: "AI" | "Backend" | "Frontend" | "DevOps";
  version: string;
  metric: string;
  role: string;
  status: "ONLINE" | "STREAMING" | "INDEXED" | "COMPILED";
  icon: React.ElementType;
  accent: string;
}

const liveStackItems: TechItem[] = [
  {
    id: "langgraph",
    name: "LangGraph",
    category: "AI",
    version: "v0.2",
    metric: "4 Active Loops",
    role: "Cyclic stateful agent reasoning & planning",
    status: "STREAMING",
    icon: Bot,
    accent: "text-[var(--accent-cyan)]",
  },
  {
    id: "fastapi",
    name: "FastAPI",
    category: "Backend",
    version: "Async",
    metric: "12,000 req/s",
    role: "High-throughput asynchronous Python microservices",
    status: "ONLINE",
    icon: Zap,
    accent: "text-emerald-400",
  },
  {
    id: "nextjs",
    name: "Next.js 16",
    category: "Frontend",
    version: "App Router",
    metric: "Turbopack SSR",
    role: "Server components, streaming UIs & client state",
    status: "COMPILED",
    icon: Globe,
    accent: "text-[var(--text-primary)]",
  },
  {
    id: "mcp",
    name: "MCP Protocol",
    category: "AI",
    version: "Anthropic/Open",
    metric: "Sandboxed Tools",
    role: "Standardized tool & context client interoperability",
    status: "ONLINE",
    icon: Cpu,
    accent: "text-[var(--accent-cyan)]",
  },
  {
    id: "rag",
    name: "ChromaDB & RAG",
    category: "AI",
    version: "pgvector",
    metric: "1536-dim Vectors",
    role: "High-precision semantic retrieval with citations",
    status: "INDEXED",
    icon: Database,
    accent: "text-purple-400",
  },
  {
    id: "postgres",
    name: "PostgreSQL",
    category: "Backend",
    version: "v16",
    metric: "Tenant-Isolated",
    role: "Strict multi-tenant schema isolation & RBAC",
    status: "ONLINE",
    icon: Layers,
    accent: "text-blue-400",
  },
  {
    id: "websockets",
    name: "WebSockets",
    category: "Backend",
    version: "RFC 6455",
    metric: "Sub-20ms TTFT",
    role: "Bi-directional streaming token outputs & telephony",
    status: "STREAMING",
    icon: Radio,
    accent: "text-amber-400",
  },
  {
    id: "docker",
    name: "Docker",
    category: "DevOps",
    version: "Compose",
    metric: "Multi-Stage",
    role: "Containerized deployment & reproducible environments",
    status: "ONLINE",
    icon: Box,
    accent: "text-sky-400",
  },
];

export function HeroTechStackAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [activeFilter, setActiveFilter] = useState<string>("ALL");
  const [selectedTech, setSelectedTech] = useState<TechItem>(liveStackItems[0]);
  const [pulsingIndex, setPulsingIndex] = useState(0);

  // Auto pulse indicator cycling through tech stack
  useEffect(() => {
    const timer = setInterval(() => {
      setPulsingIndex((prev) => (prev + 1) % liveStackItems.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const maxTilt = 6;
    const tiltX = -((y - centerY) / centerY) * maxTilt;
    const tiltY = ((x - centerX) / centerX) * maxTilt;

    setRotateX(tiltX);
    setRotateY(tiltY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const filteredItems =
    activeFilter === "ALL"
      ? liveStackItems
      : liveStackItems.filter((item) => item.category === activeFilter);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1200,
        transformStyle: "preserve-3d",
      }}
      className="w-full max-w-xl mx-auto transition-transform duration-200 ease-out select-none"
    >
      <div
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full rounded-3xl p-5 sm:p-7 border border-[var(--border-color)] bg-gradient-to-b from-[var(--bg-card)] via-[var(--bg-card)] to-[var(--bg-secondary)] shadow-2xl transition-all duration-300 group hover:border-[var(--accent-cyan)]/50 hover:shadow-[0_20px_60px_rgba(0,229,255,0.12)] overflow-hidden"
      >
        {/* Cyber Grid & Ambient Glows */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full bg-[var(--accent-glow)] blur-[70px] pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-64 h-64 rounded-full bg-[var(--accent-violet-glow)] blur-[70px] pointer-events-none" />

        {/* Top Header HUD Bar */}
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between pb-3.5 mb-4 border-b border-[var(--border-color)] gap-2">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
            </span>
            <span className="text-[var(--text-primary)] font-bold font-mono-code tracking-wider text-xs">
              LIVE TECH STACK ENGINE
            </span>
          </div>

          {/* Category Filter Chips */}
          <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0">
            {["ALL", "AI", "Backend", "Frontend", "DevOps"].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`px-2 py-0.5 rounded-lg text-[10px] font-mono-code font-bold transition-all cursor-pointer ${
                  activeFilter === cat
                    ? "bg-[var(--accent-glow)] text-[var(--accent-cyan)] border border-[var(--accent-cyan)]/30"
                    : "text-[var(--text-muted)] hover:text-[var(--text-primary)] border border-transparent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Grid of Active Tech Cards */}
        <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-4">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((tech, index) => {
              const isSelected = selectedTech.id === tech.id;
              const isPulsing = pulsingIndex === index;
              const IconComp = tech.icon;

              return (
                <motion.button
                  key={tech.id}
                  layout
                  type="button"
                  onClick={() => setSelectedTech(tech)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className={`relative p-2.5 sm:p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? "bg-[var(--bg-main)] border-2 border-[var(--accent-cyan)] shadow-[0_0_16px_var(--accent-glow)]"
                      : "bg-[var(--bg-main)]/90 border-[var(--border-color)] hover:border-[var(--accent-cyan)]/40 shadow-xs"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div
                      className={`w-7 h-7 rounded-xl flex items-center justify-center ${
                        isSelected
                          ? "bg-[var(--accent-cyan)] text-[#07090E]"
                          : "bg-[var(--bg-card)] " + tech.accent
                      }`}
                    >
                      <IconComp className="w-3.5 h-3.5" />
                    </div>

                    <span className="text-[9px] font-mono-code text-[var(--text-muted)] font-semibold">
                      {tech.version}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold font-mono-code text-[var(--text-primary)] truncate">
                      {tech.name}
                    </h4>
                    <span className="text-[10px] font-mono-code text-[var(--accent-cyan)] font-medium truncate block">
                      {tech.metric}
                    </span>
                  </div>

                  {isPulsing && (
                    <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[var(--accent-cyan)] animate-ping" />
                  )}
                </motion.button>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Selected Tech Inspector & Execution Telemetry Console */}
        <div className="relative z-10 p-3.5 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-main)]/90 backdrop-blur-md flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-8 h-8 rounded-xl bg-[var(--accent-glow)] border border-[var(--accent-cyan)]/30 flex items-center justify-center shrink-0">
              {React.createElement(selectedTech.icon, {
                className: "w-4 h-4 " + selectedTech.accent,
              })}
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold font-mono-code text-[var(--text-primary)] truncate">
                  {selectedTech.name}
                </span>
                <span className="text-[9px] font-mono-code px-1.5 py-0.5 rounded bg-[var(--accent-glow)] text-[var(--accent-cyan)] font-semibold border border-[var(--accent-cyan)]/25">
                  {selectedTech.status}
                </span>
                <span className="text-[9px] font-mono-code text-[var(--text-muted)] hidden sm:inline">
                  [{selectedTech.category}]
                </span>
              </div>
              <p className="text-[11px] text-[var(--text-secondary)] truncate mt-0.5">
                {selectedTech.role}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 font-mono-code text-right border-t sm:border-t-0 pt-2 sm:pt-0 border-[var(--border-color)] justify-between sm:justify-end">
            <div>
              <span className="text-[9px] text-[var(--text-muted)] block uppercase">METRIC</span>
              <span className="text-xs font-bold text-[var(--accent-cyan)]">{selectedTech.metric}</span>
            </div>
            <div>
              <span className="text-[9px] text-[var(--text-muted)] block uppercase">HEALTH</span>
              <span className="text-xs font-bold text-emerald-400">100% ACTIVE</span>
            </div>
          </div>
        </div>

        {/* Bottom Micro Status Bar */}
        <div className="relative z-10 mt-3 pt-2.5 border-t border-[var(--border-color)]/60 flex items-center justify-between text-[10px] font-mono-code text-[var(--text-muted)]">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
            Verified Production Toolchain
          </span>
          <span className="text-[var(--accent-cyan)]">Click any tech for details →</span>
        </div>
      </div>
    </div>
  );
}

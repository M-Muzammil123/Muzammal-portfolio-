"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { User, Bot, Wrench, Database, Cpu, Radio } from "lucide-react";

interface NodeData {
  id: string;
  label: string;
  role: string;
  status: string;
  metric: string;
  icon: React.ElementType;
  position: { x: number; y: number };
}

const architectureNodes: NodeData[] = [
  {
    id: "user",
    label: "User / Client",
    role: "Inbound Intent",
    status: "CONNECTED",
    metric: "JWT Auth / TLS 1.3",
    icon: User,
    position: { x: 12, y: 50 },
  },
  {
    id: "agent",
    label: "Agentic Orchestrator",
    role: "Reasoning & Planning",
    status: "REASONING",
    metric: "LangGraph / OpenAI SDK",
    icon: Bot,
    position: { x: 38, y: 30 },
  },
  {
    id: "rag",
    label: "RAG & Vector Store",
    role: "Knowledge Retrieval",
    status: "INDEXED",
    metric: "ChromaDB / pgvector",
    icon: Database,
    position: { x: 38, y: 72 },
  },
  {
    id: "tools",
    label: "Tool Execution Layer",
    role: "MCP Tool Calling",
    status: "SANDBOXED",
    metric: "Model Context Protocol",
    icon: Wrench,
    position: { x: 68, y: 30 },
  },
  {
    id: "apis",
    label: "External APIs & Webhooks",
    role: "Automation & Telephony",
    status: "DISPATCHING",
    metric: "Twilio / n8n / Stripe",
    icon: Radio,
    position: { x: 68, y: 72 },
  },
  {
    id: "database",
    label: "PostgreSQL & RBAC",
    role: "Isolated Persistence",
    status: "ENCRYPTED",
    metric: "Tenant Schema Scoped",
    icon: Cpu,
    position: { x: 92, y: 50 },
  },
];

export function ArchitectureVisual() {
  const [activeNode, setActiveNode] = useState<NodeData>(architectureNodes[1]); // Default to Agent

  return (
    <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] max-w-xl mx-auto rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)]/90 backdrop-blur-md p-4 sm:p-6 overflow-hidden shadow-xl">
      {/* Background Grid & Ambient Glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-[var(--accent-glow)] blur-[80px] pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-[var(--accent-violet-glow)] blur-[80px] pointer-events-none" />

      {/* Header bar of the simulation */}
      <div className="relative z-10 flex items-center justify-between pb-3 mb-4 border-b border-[var(--border-color)] text-xs font-mono-code">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[var(--accent-cyan)] shadow-[0_0_8px_var(--accent-cyan)] animate-pulse" />
          <span className="text-[var(--text-primary)] font-semibold tracking-wide">
            LIVE AGENT ARCHITECTURE
          </span>
        </div>
        <span className="text-[10px] text-[var(--accent-cyan)] bg-[var(--accent-glow)] px-2 py-0.5 rounded border border-[var(--accent-cyan)]/25">
          STATUS: 100% OPERATIONAL
        </span>
      </div>

      {/* Interactive Canvas */}
      <div className="relative z-10 w-full h-[64%]">
        {/* SVG connection lines with flowing dashes */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {/* User -> Agent */}
          <line
            x1="12"
            y1="50"
            x2="38"
            y2="30"
            stroke="var(--border-color)"
            strokeWidth="1"
          />
          {/* User -> RAG */}
          <line
            x1="12"
            y1="50"
            x2="38"
            y2="72"
            stroke="var(--border-color)"
            strokeWidth="1"
          />
          {/* Agent -> Tools */}
          <line
            x1="38"
            y1="30"
            x2="68"
            y2="30"
            stroke="var(--border-color)"
            strokeWidth="1"
          />
          {/* Agent -> RAG */}
          <line
            x1="38"
            y1="30"
            x2="38"
            y2="72"
            stroke="var(--border-color)"
            strokeWidth="1"
          />
          {/* Tools -> APIs */}
          <line
            x1="68"
            y1="30"
            x2="68"
            y2="72"
            stroke="var(--border-color)"
            strokeWidth="1"
          />
          {/* Tools -> Database */}
          <line
            x1="68"
            y1="30"
            x2="92"
            y2="50"
            stroke="var(--border-color)"
            strokeWidth="1"
          />
          {/* APIs -> Database */}
          <line
            x1="68"
            y1="72"
            x2="92"
            y2="50"
            stroke="var(--border-color)"
            strokeWidth="1"
          />
          {/* Animated active pipeline path */}
          <path
            d="M 12 50 L 38 30 L 68 30 L 92 50"
            fill="none"
            stroke="var(--accent-cyan)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            className="animate-flow-line opacity-75"
          />
          <path
            d="M 38 30 L 38 72 L 68 72 L 92 50"
            fill="none"
            stroke="var(--accent-violet)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            className="animate-flow-line opacity-60"
          />
        </svg>

        {/* Nodes */}
        {architectureNodes.map((node) => {
          const isSelected = activeNode.id === node.id;
          const IconComponent = node.icon;

          return (
            <motion.button
              key={node.id}
              type="button"
              onClick={() => setActiveNode(node)}
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.95 }}
              style={{
                left: `${node.position.x}%`,
                top: `${node.position.y}%`,
                transform: "translate(-50%, -50%)",
              }}
              className={`absolute group z-20 flex flex-col items-center justify-center p-2 rounded-xl transition-all focus-visible:outline-none ${
                isSelected
                  ? "bg-[var(--bg-main)] border-2 border-[var(--accent-cyan)] shadow-[0_0_16px_var(--accent-cyan)]"
                  : "bg-[var(--bg-main)]/90 border border-[var(--border-color)] hover:border-[var(--accent-cyan)]/50"
              }`}
            >
              <div
                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center transition-colors ${
                  isSelected
                    ? "bg-[var(--accent-cyan)] text-[#050608]"
                    : "bg-[var(--bg-card)] text-[var(--text-secondary)] group-hover:text-[var(--accent-cyan)]"
                }`}
              >
                <IconComponent className="w-4 h-4" />
              </div>
              <span
                className={`mt-1 text-[9px] sm:text-[10px] font-mono-code font-semibold tracking-tight whitespace-nowrap ${
                  isSelected
                    ? "text-[var(--accent-cyan)]"
                    : "text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]"
                }`}
              >
                {node.label.split(" ")[0]}
              </span>
            </motion.button>
          );
        })}
      </div>

      {/* Bottom Telemetry Card for Selected Node */}
      <div className="relative z-10 mt-2 p-2.5 sm:p-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-main)]/80 backdrop-blur-sm flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-8 h-8 rounded-lg bg-[var(--accent-glow)] border border-[var(--accent-cyan)]/30 flex items-center justify-center shrink-0">
            {React.createElement(activeNode.icon, {
              className: "w-4 h-4 text-[var(--accent-cyan)]",
            })}
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h4 className="text-xs sm:text-sm font-bold font-mono-code text-[var(--text-primary)] truncate">
                {activeNode.label}
              </h4>
              <span className="text-[9px] font-mono-code px-1.5 py-0.2 rounded bg-[var(--accent-glow)] text-[var(--accent-cyan)] border border-[var(--accent-cyan)]/20 shrink-0">
                {activeNode.status}
              </span>
            </div>
            <p className="text-[10px] sm:text-xs text-[var(--text-secondary)] truncate">
              {activeNode.role} • <span className="text-[var(--text-muted)]">{activeNode.metric}</span>
            </p>
          </div>
        </div>

        <div className="hidden sm:flex flex-col items-end shrink-0 text-right font-mono-code">
          <span className="text-[9px] text-[var(--text-muted)]">LATENCY</span>
          <span className="text-xs font-semibold text-[var(--accent-cyan)]">14ms p99</span>
        </div>
      </div>
    </div>
  );
}

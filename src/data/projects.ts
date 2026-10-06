import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "ai-engineer",
    projectNumber: "01",
    title: "Autonomous AI Software Engineer",
    category: "Agentic AI & Automated Code Engineering",
    tagline: "Autonomous multi-file software engineering agent with self-healing execution loops",
    shortProblem:
      "Modern software engineering workflows require tedious repository navigation, manual boilerplate editing, terminal context switching, and repetitive test debugging cycles across fragmented tools.",
    solution:
      "Engineered an autonomous AI software engineer capable of parsing full repository ASTs, planning multi-step architectures, modifying files across deep directory structures, executing terminal commands, and self-healing runtime errors autonomously.",
    keyFeatures: [
      "Autonomous code synthesis & multi-file editing across full repository trees",
      "Live terminal command execution with sandboxed safety boundaries",
      "Repository AST & codebase structural dependency graph mapping",
      "Self-healing test runner with automated stack trace analysis & retry loop",
      "Interactive developer workspace with dual-pane code and terminal view",
      "Model Context Protocol (MCP) tool integration for real-time file systems",
      "Diff visualizer with syntax-highlighted commit and patch reviews",
      "Containerized deployment environment powered by Docker",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "Next.js",
      "LangGraph",
      "Tool Calling",
      "Docker",
      "Tree-sitter",
      "Git",
      "Tailwind CSS",
    ],
    muxPlaybackId:
      process.env.NEXT_PUBLIC_AI_ENGINEER_MUX_ID ||
      "gLokGcEJA9zcan4DW48q7SPSdPW9c7RVP3brZ02EAiT8",
    githubUrl: "https://github.com/M-Muzammil123/Ai-engineer-",
    caseStudyUrl: "https://github.com/M-Muzammil123/Ai-engineer-/blob/main/docs/architecture.md",
    architectureDetails: {
      overview:
        "High-performance agentic architecture built on Python, FastAPI, and LangGraph. The system orchestrates multi-agent planning loops with tree-sitter AST analysis, an execution sandbox for safe terminal interaction, and a real-time Next.js streaming interface.",
      flowSteps: [
        "User issues high-level feature prompt or bug description via the Next.js frontend",
        "Planning agent scans codebase tree, generates AST dependency graph, and creates step-by-step implementation blueprint",
        "Coding agent issues surgical file edits and generates drop-in replacements with exact line ranges",
        "Validation agent executes test suite and static analysis via sandboxed subprocess runner",
        "If linter or runtime errors occur, self-healing loop parses traceback, adjusts code, and verifies until all tests pass",
      ],
      securityIsolation:
        "Sandboxed file system access with workspace path restrictions and execution timeout limits preventing arbitrary system escalation.",
      highlights: [
        "Autonomous multi-step planning & execution loop",
        "Zero-context loss across large multi-file codebases",
        "Self-healing syntax and test regression recovery",
      ],
    },
  },
  {
    id: "ai-customer-support-saas",
    projectNumber: "02",
    title: "AI Customer Support Enterprise SaaS",
    category: "Enterprise Multi-Tenant AI Support Platform",
    tagline: "Multi-tenant customer intelligence, deterministic ticket escalation & streaming support",
    shortProblem:
      "Enterprise support queues suffer from high latency, disjointed customer contexts across multiple organizations, and repetitive manual ticket triaging across isolated customer workspaces.",
    solution:
      "Architected a production multi-tenant AI customer support engine combining vector-embedded document retrieval (RAG), strict tenant-scoped RBAC, live streaming WebSockets chat, and automated deterministic escalation pipelines.",
    keyFeatures: [
      "Multi-tenancy with tenant-scoped database schema isolation",
      "Robust Authentication & RBAC permissions matrix (Superadmin, Tenant Admin, Agent)",
      "Document ingestion pipeline with semantic chunking & vector embeddings",
      "RAG query engine with grounded generation & source citations",
      "Real-time bi-directional AI Support Chat via low-latency WebSockets",
      "Deterministic human agent ticket escalation and triage workflows",
      "Executive Analytics & Admin telemetry dashboard with SLA monitoring",
      "Billing architecture & security isolation guarantees",
    ],
    technologies: [
      "FastAPI",
      "Next.js",
      "PostgreSQL",
      "SQLAlchemy",
      "WebSockets",
      "ChromaDB",
      "Docker",
      "Tailwind CSS",
    ],
    muxPlaybackId:
      process.env.NEXT_PUBLIC_SUPPORT_SAAS_MUX_ID ||
      "drXMuyhBVeoOvvFDlSvy5AHnyuWxQVRwhfBqs6K75ts",
    githubUrl: "https://github.com/M-Muzammil123/ai-customer-support-saas",
    caseStudyUrl: "https://github.com/M-Muzammil123/ai-customer-support-saas/blob/main/docs/PORTFOLIO_CASE_STUDY.md",
    architectureDetails: {
      overview:
        "High-throughput asynchronous FastAPI gateway backed by ChromaDB vector store for chunked organization knowledge bases and PostgreSQL for tenant metadata, audit logs, and conversation history.",
      flowSteps: [
        "Inbound User Message received via WebSocket connection with JWT auth validation",
        "Semantic router categorizes intent and queries tenant-isolated vector partition",
        "Retrieved high-cosine similarity chunks re-ranked and formatted into system prompt",
        "LLM generates grounded reply with source token streaming back over WebSocket",
        "If sentiment negative or resolution confidence < 80%, triggers automated escalation webhook",
      ],
      securityIsolation:
        "Strict row-level security and tenant organization ID scoping across all database queries and vector embeddings partitions.",
      highlights: [
        "Sub-300ms time-to-first-token streaming",
        "Zero cross-tenant vector data leakage",
        "Asynchronous background document ingestion workers",
      ],
    },
  },
  {
    id: "mk-shop-ai-commerce",
    projectNumber: "03",
    title: "MK Shop AI Commerce",
    category: "Conversational AI E-Commerce & Retail Intelligence",
    tagline: "Autonomous shopping agent with real-time product discovery & pricing intelligence",
    shortProblem:
      "Online shoppers waste hours opening dozens of browser tabs to compare product specs, cross-verify reviews, and track fluctuating merchant prices across fragmented marketplaces.",
    solution:
      "Architected an agentic commerce assistant using tool-calling agents and Model Context Protocol (MCP) to autonomously execute parallel catalog queries, compare technical specs, analyze customer reviews, and deliver tailored purchase recommendations with instant cart integration.",
    keyFeatures: [
      "Conversational shopping interface with dynamic intent recognition",
      "Multi-source real-time search & product aggregation tools via MCP",
      "Intelligent price comparison and merchant inventory analysis",
      "Agent tool-calling workflow with self-correcting query synthesis",
      "Semantic product similarity & visual spec comparison matrix",
      "Personalized preference profiling stored in relational memory",
      "MCP (Model Context Protocol) integration for live retailer tooling",
      "Instant checkout recommendation cards with verified links",
    ],
    technologies: [
      "Next.js",
      "FastAPI",
      "TypeScript",
      "Model Context Protocol (MCP)",
      "Gemini API",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    muxPlaybackId:
      process.env.NEXT_PUBLIC_MK_SHOP_MUX_ID ||
      "EN61YJpSYnVVbtZ5S0101wgF6ncehZ3Gcont6WSydLRac",
    githubUrl: "https://github.com/M-Muzammil123/mk-shop-ai-commerce",
    caseStudyUrl: "https://github.com/M-Muzammil123/mk-shop-ai-commerce/blob/main/PORTFOLIO_CASE_STUDY.md",
    architectureDetails: {
      overview:
        "Next.js App Router client connected to an Agent Orchestrator running tool loops with specialized MCP servers for multi-merchant product scrapers and currency converters.",
      flowSteps: [
        "Natural language prompt received ('Find me noise-canceling headphones under $200 with multipoint Bluetooth')",
        "Agent decomposes prompt into search parameters, price constraints, and feature filters",
        "Executes parallel tool calls across merchant APIs and live search scrapers",
        "Aggregates candidate specs, computes normalized comparison scores, and ranks items",
        "Returns synthesized comparative cards with pros, cons, and direct purchase triggers",
      ],
      securityIsolation:
        "Rate-limited stateless sandboxed MCP tool execution environment with zero consumer credential retention.",
      highlights: [
        "Autonomous multi-step tool-calling agent loops",
        "Live web scrape deduplication & price normalization",
        "Instant structured UI render cards",
      ],
    },
  },
  {
    id: "ai-customer-support-agent",
    projectNumber: "04",
    title: "RAG-Powered AI Customer Support Agent",
    category: "RAG-Based AI Customer Support Agent",
    tagline: "High-precision RAG support agent with semantic document retrieval & zero hallucination",
    shortProblem:
      "Standard customer support bots frequently hallucinate answers, fail to reference proprietary internal knowledge bases, and lack authoritative source citations.",
    solution:
      "Engineered a high-precision RAG customer support agent combining semantic vector retrieval, document chunking, hybrid re-ranking, source citation verification, and automated fallbacks to human triage workflows.",
    keyFeatures: [
      "High-accuracy RAG pipeline with hybrid vector and keyword search",
      "Zero-hallucination guardrails with mandatory source citations and confidence scores",
      "Multi-format document ingestion pipeline (PDF, Markdown, HTML, DOCX)",
      "Semantic intent classification & smart topic routing",
      "Real-time token streaming with sub-250ms time-to-first-token",
      "Human-in-the-loop escalation pipeline with complete ticket context preservation",
      "Admin telemetry dashboard tracking query resolution rates and satisfaction",
      "Containerized deployment configured with Docker Compose",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "ChromaDB",
      "RAG Pipeline",
      "OpenAI / Gemini",
      "Next.js",
      "Tailwind CSS",
      "Docker",
    ],
    muxPlaybackId:
      process.env.NEXT_PUBLIC_SUPPORT_AGENT_MUX_ID ||
      "f00q01Wy9gYpX02Fk8yWzGVsNKF00R00CUZlr5YZvItj00yRc",
    githubUrl: "https://github.com/M-Muzammil123/ai-customer-support-agent",
    caseStudyUrl: "https://github.com/M-Muzammil123/ai-customer-support-agent/blob/main/PORTFOLIO_CASE_STUDY.md",
    architectureDetails: {
      overview:
        "Asynchronous FastAPI backend coupled with ChromaDB vector store. Raw documents undergo semantic chunking and embedding storage. Queries are enriched via cosine similarity retrieval and validated against hallucination thresholds.",
      flowSteps: [
        "Customer submits product query or technical support request",
        "Text is embedded and matched against ChromaDB vector partition via cosine similarity",
        "Top K chunks are re-ranked based on semantic relevance and assembled into a grounded prompt context",
        "LLM generates grounded reply and embeds verifiable chunk source citations",
        "If confidence falls below threshold, query seamlessly escalates to human support agent queue",
      ],
      securityIsolation:
        "Isolated vector collections with tenant separation and encrypted database storage for enterprise knowledge assets.",
      highlights: [
        "Zero hallucination with verified source citations",
        "Sub-250ms streaming response latency",
        "Multi-modal document parsing pipeline",
      ],
    },
  },
];

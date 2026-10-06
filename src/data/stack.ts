import { TechItem, PhilosophyStep, ExperienceItem, RepositoryItem } from "@/types";

export const techStack: TechItem[] = [
  // AI & Agents
  {
    name: "Autonomous AI Agents",
    category: "AI & Agents",
    description: "Multi-agent planning, code engineering loops, self-healing execution, and deterministic guardrails.",
    iconName: "Bot",
    highlight: true,
  },
  {
    name: "LangGraph",
    category: "AI & Agents",
    description: "Cyclic computational graphs, stateful agent loops, and human-in-the-loop workflows.",
    iconName: "Network",
    highlight: true,
  },
  {
    name: "Model Context Protocol (MCP)",
    category: "AI & Agents",
    description: "Standardized tool & context interoperability across LLMs, APIs, databases, and client runtimes.",
    iconName: "Cpu",
    highlight: true,
  },
  {
    name: "Enterprise RAG Pipelines",
    category: "AI & Agents",
    description: "Semantic chunking, high-density embeddings, hybrid keyword/vector search, and re-ranking.",
    iconName: "Database",
    highlight: true,
  },
  {
    name: "Google Gemini API",
    category: "AI & Agents",
    description: "Multimodal reasoning, ultra-long context understanding, and structured JSON tool generation.",
    iconName: "Sparkles",
  },
  {
    name: "LangChain",
    category: "AI & Agents",
    description: "Prompt orchestration, document loaders, vector store retrievers, and chain abstractions.",
    iconName: "Boxes",
  },
  {
    name: "OpenAI Models & SDK",
    category: "AI & Agents",
    description: "Reasoning models, function calling, tool execution, and dense semantic embeddings.",
    iconName: "BrainCircuit",
  },

  // Backend
  {
    name: "FastAPI",
    category: "Backend",
    description: "High-throughput asynchronous Python microservices with strict Pydantic schema validation.",
    iconName: "Zap",
    highlight: true,
  },
  {
    name: "Python",
    category: "Backend",
    description: "Primary backend language for AI orchestration, data pipelines, and async services.",
    iconName: "Code2",
    highlight: true,
  },
  {
    name: "PostgreSQL",
    category: "Backend",
    description: "Production relational data layer, pgvector embeddings, and multi-tenant schema isolation.",
    iconName: "Database",
    highlight: true,
  },
  {
    name: "SQLAlchemy & Alembic",
    category: "Backend",
    description: "Async ORM modeling, transactional query optimization, and deterministic database migrations.",
    iconName: "Layers",
  },
  {
    name: "WebSockets & Streaming",
    category: "Backend",
    description: "Full-duplex bi-directional communication for streaming AI token outputs and live chat.",
    iconName: "Radio",
  },
  {
    name: "JWT & RBAC Security",
    category: "Backend",
    description: "Cryptographic token claims, fine-grained role permissions, and tenant security gates.",
    iconName: "ShieldCheck",
  },

  // Frontend
  {
    name: "Next.js (App Router)",
    category: "Frontend",
    description: "Server Components, streaming SSR, route handlers, and performant web applications.",
    iconName: "Globe",
    highlight: true,
  },
  {
    name: "React 19 & TypeScript",
    category: "Frontend",
    description: "Type-safe UI architecture, custom hooks, and reactive state management.",
    iconName: "Code",
    highlight: true,
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    description: "Token-driven responsive design systems with sleek dark/light palette orchestration.",
    iconName: "Palette",
  },
  {
    name: "Motion for React",
    category: "Frontend",
    description: "Hardware-accelerated physics-based animations, layout transitions, and 3D card tilt reveals.",
    iconName: "Activity",
  },

  // Infrastructure
  {
    name: "Docker & Containerization",
    category: "Infrastructure",
    description: "Multi-stage production images, container isolation, and reproducible deployments.",
    iconName: "Box",
    highlight: true,
  },
  {
    name: "n8n Workflow Automation",
    category: "Infrastructure",
    description: "Event-driven workflow engines connecting webhooks, third-party APIs, and AI nodes.",
    iconName: "GitMerge",
    highlight: true,
  },
  {
    name: "ChromaDB & Vector Stores",
    category: "Infrastructure",
    description: "High-speed vector indexing, semantic search partitions, and persistent embeddings cache.",
    iconName: "Server",
    highlight: true,
  },
  {
    name: "Git & CI/CD",
    category: "Infrastructure",
    description: "Automated test verification, lint checks, container build pipelines, and release gates.",
    iconName: "GitBranch",
  },
];

export const philosophySteps: PhilosophyStep[] = [
  {
    step: "01",
    title: "Think",
    summary: "Understand the core business problem before touching code.",
    detail:
      "Deep dive into user friction points, domain constraints, throughput expectations, and unit economics. Never build AI for novelty—build AI to eliminate bottlenecks.",
    principles: [
      "User problem first, model second",
      "Evaluate if heuristic/SQL suffices before introducing LLM complexity",
      "Define failure modes and deterministic fallback paths upfront",
    ],
    icon: "Compass",
  },
  {
    step: "02",
    title: "Architect",
    summary: "Design APIs, agent loops, data pipelines, and strict system boundaries.",
    detail:
      "Map out sequence diagrams, database schemas, RBAC isolation, stateful agent graphs, and token budgets. Plan for high concurrency, zero data leakage, and low latency.",
    principles: [
      "Multi-tenant isolation at schema & vector partition levels",
      "Model Context Protocol (MCP) and standardized tool interfaces",
      "Async event-driven communication (WebSockets & queues)",
    ],
    icon: "Layers",
  },
  {
    step: "03",
    title: "Build",
    summary: "Implement production-ready, type-safe, resilient software.",
    detail:
      "Write modular, documented, maintainable code across FastAPI, Next.js, and specialized AI SDKs. Enforce strict type safety and structured outputs.",
    principles: [
      "Pydantic schemas and TypeScript end-to-end contracts",
      "Tool-calling agents with self-correction retry logic",
      "Server Components for performance, Client Components for interaction",
    ],
    icon: "Terminal",
  },
  {
    step: "04",
    title: "Test",
    summary: "Validate functionality, security boundaries, and edge cases.",
    detail:
      "Rigorously test prompt variations, token limits, multi-tenant permission gates, streaming interruptions, and network degradation under load.",
    principles: [
      "Automated unit & integration tests on core backend endpoints",
      "Evaluation loops on RAG precision and grounded citations",
      "Penetration testing on auth tokens and cross-tenant queries",
    ],
    icon: "ShieldAlert",
  },
  {
    step: "05",
    title: "Deploy",
    summary: "Containerize, configure reproducible environments, and ship.",
    detail:
      "Package services into optimized multi-stage Docker images. Set up secure secret management, reverse proxies, and zero-downtime database migrations with Alembic.",
    principles: [
      "Immutable container builds with minimal attack surfaces",
      "Environment isolation (.env strictly guarded, never checked into git)",
      "Automated migration rollbacks on failure",
    ],
    icon: "Rocket",
  },
  {
    step: "06",
    title: "Improve",
    summary: "Monitor latency, telemetry, hallucination rates, and iterate.",
    detail:
      "Analyze real telemetry logs, token cost curves, time-to-first-token (TTFT), and agent tool success rates to continuously tune prompts and database indexes.",
    principles: [
      "Real-time latency monitoring and error telemetry",
      "Cache repeated vector queries to optimize operational costs",
      "Iterative prompt tuning based on live conversational feedback",
    ],
    icon: "TrendingUp",
  },
];

export const experienceTimeline: ExperienceItem[] = [
  {
    period: "2024 — Present",
    role: "Lead Agentic AI & Systems Engineer",
    companyOrFocus: "Autonomous Systems & Production SaaS",
    description:
      "Spearheading the architecture and engineering of production multi-tenant AI platforms, autonomous tool-using agents, and low-latency RAG pipelines.",
    achievements: [
      "Engineered Autonomous AI Software Engineer: Agentic software engineering system capable of multi-file synthesis and self-healing test execution.",
      "Architected AI Customer Support Enterprise SaaS: Multi-tenant support platform with schema isolation and streaming WebSockets.",
      "Developed MK Shop AI Commerce: Conversational commerce agent utilizing MCP tools for live price discovery and product intelligence.",
      "Shipped RAG-Powered AI Customer Support Agent: High-precision knowledge retrieval engine with zero-hallucination citation guardrails.",
    ],
    skills: ["AI Agents", "LangGraph", "FastAPI", "Next.js", "MCP", "ChromaDB", "WebSockets"],
  },
  {
    period: "2023 — 2024",
    role: "Full-Stack AI Developer & Backend Architect",
    companyOrFocus: "Enterprise Web Applications & Cloud Systems",
    description:
      "Engineered multi-tenant web applications, RESTful and WebSocket microservices, and database systems with strict reliability standards.",
    achievements: [
      "Built multi-tenant enterprise architectures with PostgreSQL schema isolation and granular RBAC permissions.",
      "Automated high-volume business workflows using n8n, webhooks, and LLM classification routines.",
      "Standardized async SQLAlchemy patterns and Alembic migration procedures across microservices.",
    ],
    skills: ["Python", "FastAPI", "PostgreSQL", "Docker", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    period: "2022 — 2023",
    role: "Software Engineer — Backend & Automation",
    companyOrFocus: "Scalable Infrastructure & Systems Engineering",
    description:
      "Focused on high-performance backend APIs, relational database optimization, containerization, and data integration pipelines.",
    achievements: [
      "Designed and delivered resilient REST APIs handling concurrent transactional data with strict JWT authentication.",
      "Configured containerized staging and production pipelines using Docker and Docker Compose.",
      "Implemented comprehensive automated test suites ensuring zero regression during continuous delivery.",
    ],
    skills: ["Python", "PostgreSQL", "Docker", "REST APIs", "Git", "Linux"],
  },
];

export const publicRepositories: RepositoryItem[] = [
  {
    name: "Ai-engineer-",
    description:
      "Autonomous AI software engineering platform capable of multi-file editing, AST dependency mapping, live terminal execution, and self-healing code loops.",
    primaryLanguage: "Python / Next.js",
    languageColor: "#3572A5",
    stars: 38,
    forks: 9,
    url: "https://github.com/M-Muzammil123/Ai-engineer-",
    isFeatured: true,
  },
  {
    name: "ai-customer-support-saas",
    description:
      "Production multi-tenant AI customer support SaaS platform featuring schema-level isolation, real-time WebSocket chat, and automated deterministic escalation.",
    primaryLanguage: "Python / TypeScript",
    languageColor: "#3178C6",
    stars: 45,
    forks: 12,
    url: "https://github.com/M-Muzammil123/ai-customer-support-saas",
    isFeatured: true,
  },
  {
    name: "mk-shop-ai-commerce",
    description:
      "Conversational shopping agent utilizing Model Context Protocol (MCP) tools for real-time catalog search, spec comparisons, and price intelligence.",
    primaryLanguage: "TypeScript / Python",
    languageColor: "#3178C6",
    stars: 31,
    forks: 7,
    url: "https://github.com/M-Muzammil123/mk-shop-ai-commerce",
    isFeatured: true,
  },
  {
    name: "ai-customer-support-agent",
    description:
      "High-precision RAG customer support agent with dense vector embeddings, semantic document chunking, and verifiable source citation guardrails.",
    primaryLanguage: "Python",
    languageColor: "#3572A5",
    stars: 26,
    forks: 5,
    url: "https://github.com/M-Muzammil123/ai-customer-support-agent",
    isFeatured: true,
  },
];

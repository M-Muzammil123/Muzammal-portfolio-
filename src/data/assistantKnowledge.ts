export interface KnowledgeEntry {
  patterns: RegExp[];
  title: string;
  response: string;
  actionLinks?: { label: string; url: string; isExternal?: boolean }[];
  suggestedQuestions?: string[];
}

export const defaultQuestions: string[] = [
  "What AI systems does Muzammil build?",
  "Show me his 4 flagship projects.",
  "What technologies does he use?",
  "Can he build an AI agent for my company?",
  "How can I contact Muhammad Muzammil?",
];

export const assistantKnowledge: KnowledgeEntry[] = [
  {
    patterns: [/what.*build/i, /speciali/i, /capabilities/i, /what.*do/i, /service/i],
    title: "Core Capabilities & What Muzammil Builds",
    response:
      "Muhammad Muzammil specializes in building production-grade autonomous software systems:\n\n• **Autonomous AI Software Engineers**: Multi-agent coding systems with AST parsing, live sandboxed terminal execution, and self-healing test loops.\n• **Enterprise AI Support SaaS**: Multi-tenant customer support platforms with strict schema isolation, real-time WebSockets, and deterministic ticket escalation.\n• **MK Shop AI Commerce**: Conversational shopping assistants using Model Context Protocol (MCP) for live catalog search and price intelligence.\n• **RAG Customer Support Agents**: High-precision vector retrieval with dense embeddings (ChromaDB, pgvector) and zero-hallucination source citations.",
    actionLinks: [
      { label: "View What I Build", url: "#capabilities" },
      { label: "Explore Projects", url: "#projects" },
    ],
    suggestedQuestions: [
      "Show me his 4 flagship projects.",
      "What technologies does he use?",
      "Can he build an AI agent for my company?",
    ],
  },
  {
    patterns: [/project/i, /strongest/i, /work/i, /portfolio/i, /built/i, /products/i],
    title: "Featured AI Products",
    response:
      "Muzammil has engineered and shipped 4 flagship production-grade AI platforms:\n\n1. **Autonomous AI Software Engineer**: Agentic system with AST analysis, multi-file code synthesis, live terminal runner, and automated test self-healing.\n2. **AI Customer Support Enterprise SaaS**: Multi-tenant support platform featuring database schema isolation, bidirectional WebSockets, RAG, and automated ticket escalation.\n3. **MK Shop AI Commerce**: Conversational retail intelligence agent with real-time MCP retailer tooling, spec comparison matrix, and price intelligence.\n4. **RAG-Powered AI Customer Support Agent**: High-accuracy knowledge retrieval agent with dense embeddings, semantic chunking, and verifiable source citations.",
    actionLinks: [
      { label: "Inspect All Projects", url: "#projects" },
      { label: "GitHub Code", url: "https://github.com/M-Muzammil123", isExternal: true },
    ],
    suggestedQuestions: [
      "What technologies does he use?",
      "Can he build an AI agent for my company?",
      "How can I contact Muhammad Muzammil?",
    ],
  },
  {
    patterns: [/tech/i, /stack/i, /language/i, /framework/i, /python/i, /fastapi/i, /tools/i],
    title: "Engineering Stack",
    response:
      "Muzammil's core technology stack includes:\n\n• **AI & Agents**: LangGraph, Model Context Protocol (MCP), Gemini API, OpenAI SDK, ChromaDB, RAG Pipelines.\n• **Backend Core**: Python, FastAPI (Async), PostgreSQL, SQLAlchemy, Alembic, WebSockets, JWT/RBAC security.\n• **Frontend Stack**: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS, Motion.\n• **Infrastructure & DevOps**: Docker, n8n, Git, Redis, Linux, Cloud microservices.",
    actionLinks: [
      { label: "View Engineering Stack", url: "#stack" },
      { label: "View What I Build", url: "#capabilities" },
    ],
    suggestedQuestions: [
      "Can he build an AI agent for my company?",
      "Show me his 4 flagship projects.",
      "How can I contact Muhammad Muzammil?",
    ],
  },
  {
    patterns: [/agent for my company/i, /hire/i, /consult/i, /collaborate/i, /contract/i, /client/i],
    title: "Custom AI Agent Development for Businesses",
    response:
      "Yes! Muhammad Muzammil partners with founders and engineering teams to design, architect, and deploy production AI systems:\n\n• Identifying high-leverage agentic automation vs deterministic pipelines.\n• Designing tool-calling agents connected to proprietary databases and external APIs.\n• Building multi-tenant RAG systems with strict tenant isolation and zero data leakage.\n• Delivering complete production code with Docker containers, tests, and CI/CD pipelines.",
    actionLinks: [
      { label: "Let's Work Together", url: "#contact" },
      { label: "Email Directly", url: "mailto:muzammalsabar0@gmail.com", isExternal: true },
    ],
    suggestedQuestions: [
      "How can I contact Muhammad Muzammil?",
      "Show me his 4 flagship projects.",
    ],
  },
  {
    patterns: [/contact/i, /email/i, /reach/i, /message/i, /whatsapp/i, /linkedin/i, /social/i, /youtube/i, /instagram/i, /twitter/i, /x/i],
    title: "How to Contact Muhammad Muzammil",
    response:
      "You can connect directly with Muhammad Muzammil through:\n\n• **Direct Email**: muzammalsabar0@gmail.com\n• **WhatsApp**: +92 325 4024491 (wa.me/923254024491)\n• **LinkedIn**: linkedin.com/in/muhammad-muzammil-a77830232\n• **GitHub**: github.com/M-Muzammil123\n• **X (Twitter)**: x.com/MuzammilDevAI\n• **Instagram**: instagram.com/muzammi.ai\n• **YouTube**: youtube.com/@MuzammilDevAI\n\nHe typically responds within 24 hours to discuss new projects, consulting, or technical architecture.",
    actionLinks: [
      { label: "WhatsApp Chat", url: "https://wa.me/923254024491", isExternal: true },
      { label: "Email Muzammil", url: "mailto:muzammalsabar0@gmail.com", isExternal: true },
      { label: "Connect on LinkedIn", url: "https://www.linkedin.com/in/muhammad-muzammil-a77830232", isExternal: true },
    ],
    suggestedQuestions: [
      "What AI systems does Muzammil build?",
      "Show me his 4 flagship projects.",
    ],
  },
];

export function getAssistantResponse(query: string): {
  text: string;
  actionLinks?: { label: string; url: string; isExternal?: boolean }[];
  suggestedQuestions?: string[];
} {
  const normalized = query.trim().toLowerCase();

  for (const entry of assistantKnowledge) {
    if (entry.patterns.some((pattern) => pattern.test(normalized))) {
      return {
        text: entry.response,
        actionLinks: entry.actionLinks,
        suggestedQuestions: entry.suggestedQuestions,
      };
    }
  }

  // Fallback answer
  return {
    text: `Thanks for asking! I'm Muhammad Muzammil's AI Assistant. As an Agentic AI Engineer, Muzammil builds autonomous coding agents, multi-tenant enterprise support platforms, AI commerce assistants, and high-precision RAG knowledge systems.\n\nExplore his 4 featured projects above or reach out directly to build intelligent software for your organization!`,
    actionLinks: [
      { label: "View 4 Shipped Projects", url: "#projects" },
      { label: "Get in Touch", url: "#contact" },
    ],
    suggestedQuestions: defaultQuestions,
  };
}

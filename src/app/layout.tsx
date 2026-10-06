import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { ScrollProgress } from "@/components/common/ScrollProgress";
import { CustomCursor } from "@/components/common/CustomCursor";
import { LoadingScreen } from "@/components/common/LoadingScreen";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { AiAssistant } from "@/components/ai-assistant/AiAssistant";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F7F8FA" },
    { media: "(prefers-color-scheme: dark)", color: "#050608" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://muzammil.ai"),
  title: "Muhammad Muzammil — Agentic AI Engineer | AI Agents, RAG & SaaS",
  description:
    "Muhammad Muzammil is an Agentic AI Engineer specializing in autonomous coding agents, multi-tenant AI SaaS, conversational commerce, and high-precision RAG systems.",
  keywords: [
    "Muhammad Muzammil",
    "Muzammil",
    "Agentic AI Engineer",
    "Autonomous AI Software Engineer",
    "AI Customer Support SaaS",
    "MK Shop AI Commerce",
    "RAG Support Agent",
    "Full-Stack AI Developer",
    "AI Agents",
    "LangGraph",
    "Model Context Protocol",
    "MCP",
    "FastAPI",
    "Next.js",
  ],
  authors: [{ name: "Muhammad Muzammil", url: "https://muzammil.ai" }],
  creator: "Muhammad Muzammil",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://muzammil.ai",
    siteName: "Muzammil.AI",
    title: "Muhammad Muzammil — Agentic AI Engineer | AI Agents, RAG & SaaS",
    description:
      "Muhammad Muzammil is an Agentic AI Engineer building autonomous AI agents, enterprise RAG pipelines, and production-grade SaaS platforms.",
    images: [
      {
        url: "/images/muzammil-profile.jpg",
        width: 1200,
        height: 630,
        alt: "Muhammad Muzammil — Agentic AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Muzammil — Agentic AI Engineer",
    description:
      "Building Autonomous AI Agents, Enterprise RAG & Production SaaS with modern backend and frontend architecture.",
    creator: "@MuzammilDevAI",
    images: ["/images/muzammil-profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Muhammad Muzammil",
    alternateName: "M. Muzammil",
    jobTitle: "Agentic AI Engineer",
    description:
      "Agentic AI Engineer building autonomous AI agents, enterprise RAG pipelines, and production-ready SaaS applications.",
    url: "https://muzammil.ai",
    sameAs: [
      "https://github.com/M-Muzammil123",
      "https://www.linkedin.com/in/muhammad-muzammil-a77830232",
      "https://x.com/MuzammilDevAI",
      "https://www.instagram.com/muzammi.ai/",
      "https://www.youtube.com/channel/UC0ZuRyUotChIqM5JpjDOUmQ",
    ],
    knowsAbout: [
      "Autonomous AI Agents",
      "Model Context Protocol",
      "LangGraph",
      "RAG & Vector Retrieval",
      "FastAPI",
      "Next.js",
      "PostgreSQL",
      "Docker",
    ],
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[var(--bg-main)] text-[var(--text-primary)]">
        <Providers>
          {/* Scroll Progress Bar at very top */}
          <ScrollProgress />

          {/* Desktop Custom Cursor */}
          <CustomCursor />

          {/* Initial Intro Loading Screen */}
          <LoadingScreen />

          {/* Sticky Glassmorphic Navbar */}
          <Navbar />

          {/* Main Page Content */}
          <main className="flex-1 w-full">{children}</main>

          {/* Site Footer */}
          <Footer />

          {/* Floating AI Portfolio Assistant */}
          <AiAssistant />
        </Providers>
      </body>
    </html>
  );
}

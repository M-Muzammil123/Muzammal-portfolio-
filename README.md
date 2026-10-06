# Muzammil.AI — Agentic AI Engineer & Full-Stack AI Developer Portfolio

A premium, production-grade developer portfolio website for **M. Muzammil**, showcasing autonomous AI agent architectures, enterprise RAG systems, real-time voice automation pipelines, and multi-tenant SaaS products.

Built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS v4**, **Motion for React**, **Mux Video Player**, **Lucide Icons**, and **next-themes**.

---

## 🚀 Live Architecture Highlights

- **Editorial Dark & Light Design System**: Curated color tokens featuring `#050608` pitch dark mode with Electric Cyan (`#4DEBFF`) and Violet (`#8B5CF6`) accents, paired with a pristine `#F7F8FA` light mode.
- **Interactive Live AI Architecture Visualizer**: Real-time interactive node canvas showcasing packet flows between `User → Agent → Tools → RAG → APIs → Database` with live telemetry metrics.
- **Adaptive Mux Video Player**: Zero heavy MP4 video asset bloat inside Git. Videos load on-demand via `@mux/mux-player-react` with 16:9 aspect preservation and interactive fallback simulations.
- **Deep-Dive Project Modals**: Complete system sequence flows, problem/solution breakdowns, security boundary audits, and direct live demo triggers.
- **Interactive Engineering Philosophy Pipeline**: Scrollable step-by-step breakdown: `Think → Architect → Build → Test → Deploy → Improve`.
- **Integrated AI Portfolio Assistant ("Ask Muzammil AI")**: Floating conversational widget capable of answering technical questions about Muzammil's projects, stack, and agent engineering capabilities.
- **Micro-Interactions & Desktop Spring Cursor**: Physics-driven cursor with contextual state badges, magnetic CTA responses, and top scroll progress indicator (disabled automatically on touch devices and for users requesting reduced motion).
- **SEO & Accessibility**: Fully semantic HTML5, WCAG color contrast, keyboard navigation (ESC modal dismissal, Tab focus rings), OpenGraph tags, and JSON-LD Person schema.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Turbopack, Server Components)
- **UI & State**: [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with CSS variables
- **Motion**: [Motion for React](https://motion.dev/)
- **Video Delivery**: [@mux/mux-player-react](https://docs.mux.com/guides/video/stream-video-react)
- **Theming**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 📂 Project Directory Structure

```
muzammil_portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css           # Design tokens, color system, and custom utilities
│   │   ├── layout.tsx            # Metadata, OpenGraph, JSON-LD, and layout wrapper
│   │   ├── page.tsx              # Assembled homepage server component
│   │   └── providers.tsx         # NextThemesProvider wrapper
│   ├── components/
│   │   ├── ai-assistant/         # Floating AI portfolio chat widget
│   │   ├── common/               # CustomCursor, LoadingScreen, ScrollProgress, SectionHeading
│   │   ├── hero/                 # HeroSection & Interactive Live ArchitectureVisual
│   │   ├── navbar/               # Sticky glassmorphic Navbar, ThemeToggle, MobileNav
│   │   ├── what-i-build/         # 4 Interactive capability cards
│   │   ├── projects/             # ProjectCard, ProjectModal, MuxVideoPlayer
│   │   ├── philosophy/           # Interactive 6-phase engineering pipeline
│   │   ├── about/                # Developer narrative & lifecycle timeline
│   │   ├── tech-stack/           # Categorized engineering stack (zero fake percentages)
│   │   ├── experience/           # Chronological systems engineering timeline
│   │   ├── github/               # Built-in-public contribution heatmap & repo cards
│   │   ├── contact/              # Direct collaboration channels & inquiry form
│   │   └── footer/               # Footer branding, sitemap & back-to-top
│   ├── data/
│   │   ├── personal.ts           # Bio, positioning, and social links
│   │   ├── projects.ts           # 4 Featured AI products & architecture specs
│   │   ├── stack.ts              # Categorized tooling, philosophy, and experience data
│   │   └── assistantKnowledge.ts # AI assistant intent recognition & answers
│   └── types/
│       └── index.ts              # TypeScript interfaces
├── .env.example                  # Environment configuration template
└── README.md
```

---

## ⚡ Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```
Add your public Mux Playback IDs for each project:
```env
NEXT_PUBLIC_SUPPORTAI_MUX_ID="your_mux_playback_id_here"
NEXT_PUBLIC_SHOPPING_MUX_ID="your_mux_playback_id_here"
NEXT_PUBLIC_CALLING_MUX_ID="your_mux_playback_id_here"
NEXT_PUBLIC_SCHOOL_MUX_ID="your_mux_playback_id_here"
```
*(Note: If playback IDs are left blank, high-fidelity interactive simulation cards are shown automatically).*

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## 🎨 Customizing Content

All data is strictly decoupled from the UI components:
- **Projects**: Modify titles, problems, solutions, architecture flow steps, and links in [`src/data/projects.ts`](file:///Users/m.muzammil/Desktop/muzammil_portfolio/src/data/projects.ts).
- **Personal Info**: Update title, bio, and social handles in [`src/data/personal.ts`](file:///Users/m.muzammil/Desktop/muzammil_portfolio/src/data/personal.ts).
- **Skills & Stack**: Add or update technologies in [`src/data/stack.ts`](file:///Users/m.muzammil/Desktop/muzammil_portfolio/src/data/stack.ts).
- **AI Assistant**: Add new conversational prompts or FAQ intents in [`src/data/assistantKnowledge.ts`](file:///Users/m.muzammil/Desktop/muzammil_portfolio/src/data/assistantKnowledge.ts).

---

## 📄 License
MIT © 2026 M. Muzammil

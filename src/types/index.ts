export interface Project {
  id: string;
  projectNumber: string;
  title: string;
  category: string;
  tagline: string;
  shortProblem: string;
  solution: string;
  keyFeatures: string[];
  technologies: string[];
  muxPlaybackId?: string;
  posterImage?: string;
  githubUrl: string;
  caseStudyUrl: string;
  liveDemoUrl?: string;
  architectureDetails: {
    overview: string;
    flowSteps: string[];
    securityIsolation?: string;
    highlights: string[];
  };
}

export interface TechItem {
  name: string;
  category: "AI & Agents" | "Backend" | "Frontend" | "Infrastructure";
  description: string;
  iconName: string;
  highlight?: boolean;
}

export interface ExperienceItem {
  period: string;
  role: string;
  companyOrFocus: string;
  description: string;
  achievements: string[];
  skills: string[];
}

export interface PhilosophyStep {
  step: string;
  title: string;
  summary: string;
  detail: string;
  principles: string[];
  icon: string;
}

export interface RepositoryItem {
  name: string;
  description: string;
  primaryLanguage: string;
  languageColor: string;
  stars: number;
  forks: number;
  url: string;
  isFeatured?: boolean;
}

export interface AssistantMessage {
  id: string;
  sender: "user" | "assistant";
  text: string;
  actionLinks?: { label: string; url: string; isExternal?: boolean }[];
  suggestedQuestions?: string[];
  timestamp: string;
}

import React from "react";

interface SectionHeadingProps {
  number?: string;
  badge: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  number,
  badge,
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? "text-center max-w-2xl mx-auto" : "max-w-3xl"}`}>
      {/* Badge line */}
      <div
        className={`flex items-center gap-2.5 mb-3.5 ${
          isCenter ? "justify-center" : "justify-start"
        }`}
      >
        {number && (
          <span className="font-mono-code text-xs text-[var(--accent-cyan)] font-semibold tracking-wider">
            [{number}]
          </span>
        )}
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono-code uppercase tracking-wider bg-[var(--accent-glow)] text-[var(--accent-cyan)] border border-[var(--accent-cyan)]/20">
          {badge}
        </span>
      </div>

      {/* Main Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.15]">
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
}

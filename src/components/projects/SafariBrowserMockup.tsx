"use client";

import React, { useRef, useState } from "react";
import {
  Lock,
  RotateCw,
  Share2,
  Plus,
  Copy,
  Check,
  Sidebar,
  ChevronLeft,
  ChevronRight,
  Maximize2,
} from "lucide-react";
import { MuxVideoPlayer } from "./MuxVideoPlayer";

interface SafariBrowserMockupProps {
  playbackId?: string;
  title: string;
  category?: string;
  urlDisplay: string;
  onOpenDetails?: () => void;
  onPlayClick?: () => void;
  enable3DTilt?: boolean;
  isThumbnail?: boolean;
}

export function SafariBrowserMockup({
  playbackId,
  title,
  category,
  urlDisplay,
  onOpenDetails,
  onPlayClick,
  enable3DTilt = true,
  isThumbnail = true,
}: SafariBrowserMockupProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [copied, setCopied] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!enable3DTilt || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Max tilt angle
    const maxTilt = 6;
    const tiltX = -((y - centerY) / centerY) * maxTilt;
    const tiltY = ((x - centerX) / centerX) * maxTilt;

    setRotateX(tiltX);
    setRotateY(tiltY);
  };

  const handleMouseLeave = () => {
    if (!enable3DTilt) return;
    setRotateX(0);
    setRotateY(0);
  };

  const handleCopyUrl = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(urlDisplay);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
        transformStyle: "preserve-3d",
      }}
      className="w-full transition-transform duration-200 ease-out"
    >
      <div
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full rounded-2xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-main)] shadow-2xl transition-all duration-300 group hover:border-[var(--accent-cyan)]/50 hover:shadow-[0_20px_50px_rgba(2,132,199,0.15)] dark:hover:shadow-[0_20px_50px_rgba(77,235,255,0.1)]"
      >
        {/* Safari Window Header Bar */}
        <div className="relative z-10 px-4 py-3 bg-[var(--bg-secondary)] border-b border-[var(--border-color)] flex items-center justify-between gap-3 select-none">
          {/* Traffic Lights & Sidebar Toggle */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/60 inline-block shadow-xs" />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/60 inline-block shadow-xs" />
              <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/60 inline-block shadow-xs" />
            </div>

            <div className="hidden sm:flex items-center gap-1 ml-2 text-[var(--text-muted)] border-l border-[var(--border-color)] pl-2">
              <button
                type="button"
                aria-label="Toggle sidebar"
                className="p-1 rounded hover:bg-[var(--bg-card)] hover:text-[var(--text-primary)] transition-colors"
              >
                <Sidebar className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                aria-label="Back"
                className="p-1 rounded hover:bg-[var(--bg-card)] hover:text-[var(--text-primary)] transition-colors opacity-70"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                aria-label="Forward"
                className="p-1 rounded hover:bg-[var(--bg-card)] hover:text-[var(--text-primary)] transition-colors opacity-70"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Safari Unified URL Bar */}
          <div className="flex-1 max-w-md mx-auto">
            <div
              onClick={handleCopyUrl}
              title="Click to copy link"
              className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent-cyan)]/40 transition-colors cursor-pointer text-xs font-mono-code text-[var(--text-secondary)] shadow-xs"
            >
              <div className="flex items-center gap-1.5 min-w-0">
                <Lock className="w-3 h-3 text-emerald-500 shrink-0" />
                <span className="truncate text-[11px] font-medium text-[var(--text-primary)]">
                  {urlDisplay.replace(/^https?:\/\//, "")}
                </span>
              </div>

              <div className="flex items-center gap-1.5 shrink-0 ml-2 text-[var(--text-muted)]">
                {copied ? (
                  <Check className="w-3 h-3 text-emerald-500" />
                ) : (
                  <Copy className="w-3 h-3 hover:text-[var(--accent-cyan)] transition-colors" />
                )}
                <RotateCw className="w-3 h-3 hover:text-[var(--accent-cyan)] transition-colors ml-0.5" />
              </div>
            </div>
          </div>

          {/* Right Action Icons */}
          <div className="hidden sm:flex items-center gap-1.5 text-[var(--text-muted)]">
            <button
              type="button"
              onClick={onOpenDetails}
              aria-label="Full preview"
              className="p-1 rounded hover:bg-[var(--bg-card)] hover:text-[var(--accent-cyan)] transition-colors"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              aria-label="Share"
              className="p-1 rounded hover:bg-[var(--bg-card)] hover:text-[var(--text-primary)] transition-colors"
            >
              <Share2 className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              aria-label="New tab"
              className="p-1 rounded hover:bg-[var(--bg-card)] hover:text-[var(--text-primary)] transition-colors"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Video Player / Viewport Content inside Safari window */}
        <div className="relative w-full bg-black">
          <MuxVideoPlayer
            playbackId={playbackId}
            title={title}
            category={category}
            autoPlay={!isThumbnail ? "any" : false}
            isInModal={!isThumbnail}
            isThumbnail={isThumbnail}
            onPlayClick={onPlayClick || onOpenDetails}
          />
        </div>
      </div>
    </div>
  );
}

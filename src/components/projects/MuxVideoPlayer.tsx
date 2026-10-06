"use client";

import React from "react";
import MuxPlayer from "@mux/mux-player-react";
import { Play, Sparkles, ShieldCheck } from "lucide-react";

interface MuxVideoPlayerProps {
  playbackId?: string;
  title: string;
  category?: string;
  autoPlay?: boolean | "any";
  isInModal?: boolean;
  isThumbnail?: boolean;
  onPlayClick?: () => void;
}

export function MuxVideoPlayer({
  playbackId,
  title,
  category,
  autoPlay = false,
  isInModal = false,
  isThumbnail = false,
  onPlayClick,
}: MuxVideoPlayerProps) {
  const hasValidPlaybackId =
    playbackId &&
    playbackId.trim() !== "" &&
    playbackId !== "YOUR_MUX_PLAYBACK_ID" &&
    !playbackId.startsWith("YOUR_");

  const posterUrl = hasValidPlaybackId
    ? `https://image.mux.com/${playbackId}/thumbnail.webp?time=2`
    : undefined;

  // When active (not thumbnail mode), render the full interactive Mux Player
  if (hasValidPlaybackId && !isThumbnail) {
    return (
      <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black border border-[var(--border-color)] shadow-2xl">
        <MuxPlayer
          playbackId={playbackId}
          metadata={{
            video_title: title,
          }}
          poster={posterUrl}
          autoPlay="any"
          playsInline
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          streamType="on-demand"
          preload="auto"
          accentColor="#00E5FF"
        />
      </div>
    );
  }

  // Interactive Video Poster / Thumbnail View (before click)
  return (
    <div
      onClick={onPlayClick}
      data-cursor="video"
      className="relative w-full aspect-video rounded-xl overflow-hidden border border-[var(--border-color)] bg-slate-950 p-5 sm:p-6 flex flex-col justify-between select-none cursor-pointer group transition-all duration-300 hover:border-[var(--accent-cyan)]/60 hover:shadow-[0_0_30px_rgba(0,229,255,0.2)]"
    >
      {/* Real Video Thumbnail from Mux */}
      {posterUrl && (
        <img
          src={posterUrl}
          alt={`${title} Preview`}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-75 group-hover:scale-105 transition-all duration-700 pointer-events-none"
        />
      )}

      {/* Dark gradient scrim for legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40 pointer-events-none" />

      {/* Background Grid & Lighting */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
      <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full bg-[var(--accent-glow)] blur-[50px] pointer-events-none group-hover:opacity-100 transition-opacity" />
      <div className="absolute -bottom-10 -left-10 w-44 h-44 rounded-full bg-[var(--accent-violet-glow)] blur-[50px] pointer-events-none" />

      {/* Top Header of Video Preview */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
          </span>
          <span className="text-[10px] font-mono-code font-bold text-emerald-400 tracking-wider">
            SYSTEM WALKTHROUGH
          </span>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[var(--bg-main)]/90 border border-[var(--border-color)] text-[10px] font-mono-code text-[var(--accent-cyan)] shadow-xs">
          <Sparkles className="w-3 h-3" />
          <span>CLICK TO PLAY</span>
        </div>
      </div>

      {/* Center Play Button and Title Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center my-auto">
        <div className="relative mb-3">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[var(--accent-cyan)]/25 border-2 border-[var(--accent-cyan)] text-[var(--accent-cyan)] flex items-center justify-center shadow-[0_0_35px_rgba(0,229,255,0.45)] group-hover:scale-115 group-hover:bg-[var(--accent-cyan)] group-hover:text-slate-950 transition-all duration-300">
            <Play className="w-6 h-6 sm:w-7 sm:h-7 ml-1 fill-current" />
          </div>
          <span className="animate-ping absolute inset-0 rounded-full border border-[var(--accent-cyan)] opacity-40 pointer-events-none" />
        </div>
        <p className="text-sm sm:text-base font-mono-code font-bold text-white group-hover:text-[var(--accent-cyan)] transition-colors">
          Watch Video Demo
        </p>
        <span className="text-[11px] font-mono-code text-slate-300 mt-1 font-medium">
          {category || "Production Architecture Demo"}
        </span>
      </div>

      {/* Bottom Telemetry Bar */}
      <div className="relative z-10 pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px] font-mono-code text-slate-300">
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-[var(--accent-cyan)]" />
          <span>Full HD Walkthrough</span>
        </span>
        <span className="text-[var(--accent-cyan)] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
          Click to Play Video →
        </span>
      </div>
    </div>
  );
}

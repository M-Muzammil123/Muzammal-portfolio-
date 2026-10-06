"use client";

import React, { useEffect, useState, useSyncExternalStore } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

const subscribeMedia = (callback: () => void) => {
  if (typeof window === "undefined") return () => {};
  const m1 = window.matchMedia("(pointer: fine)");
  const m2 = window.matchMedia("(prefers-reduced-motion: reduce)");
  m1.addEventListener("change", callback);
  m2.addEventListener("change", callback);
  return () => {
    m1.removeEventListener("change", callback);
    m2.removeEventListener("change", callback);
  };
};

const getClientSnapshot = () => {
  if (typeof window === "undefined") return true;
  const hasMouse = window.matchMedia("(pointer: fine)").matches;
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  return !hasMouse || prefersReduced;
};

const getServerSnapshot = () => true;

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorType, setCursorType] = useState<"default" | "pointer" | "project" | "video">("default");
  const [cursorText, setCursorText] = useState("");

  const isTouchOrMobile = useSyncExternalStore(subscribeMedia, getClientSnapshot, getServerSnapshot);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (isTouchOrMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const videoElement = target.closest("[data-cursor='video']");
      const projectElement = target.closest("[data-cursor='project']");
      const interactive = target.closest("button, a, [role='button'], input, textarea, select");

      if (videoElement) {
        setCursorType("video");
        setCursorText("Play");
      } else if (projectElement) {
        setCursorType("project");
        setCursorText("View");
      } else if (interactive) {
        setCursorType("pointer");
        setCursorText("");
      } else {
        setCursorType("default");
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseover", handleOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handleOver);
    };
  }, [mouseX, mouseY, isTouchOrMobile]);

  if (isTouchOrMobile || !isVisible) {
    return null;
  }

  return (
    <>
      {/* Primary Dot */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="fixed top-0 left-0 z-50 pointer-events-none w-2 h-2 rounded-full bg-[var(--cursor-dot)] shadow-[0_0_8px_var(--accent-cyan)] transition-opacity duration-150"
      />

      {/* Lagging Spring Ring / Expanded Badge */}
      <motion.div
        initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width:
            cursorType === "project" || cursorType === "video"
              ? 64
              : cursorType === "pointer"
              ? 36
              : 22,
          height:
            cursorType === "project" || cursorType === "video"
              ? 64
              : cursorType === "pointer"
              ? 36
              : 22,
          borderColor:
            cursorType === "default"
              ? "var(--cursor-ring)"
              : "var(--accent-cyan)",
          backgroundColor:
            cursorType === "project" || cursorType === "video"
              ? "rgba(13, 17, 24, 0.85)"
              : cursorType === "pointer"
              ? "var(--accent-glow)"
              : "rgba(0, 0, 0, 0)",
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
        className="fixed top-0 left-0 z-50 pointer-events-none rounded-full border flex items-center justify-center backdrop-blur-xs select-none"
      >
        {cursorText && (
          <span className="text-[10px] font-mono-code font-bold uppercase tracking-wider text-[var(--accent-cyan)]">
            {cursorText}
          </span>
        )}
      </motion.div>
    </>
  );
}

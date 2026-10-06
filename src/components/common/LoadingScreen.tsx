"use client";

import React, { useEffect, useState, useSyncExternalStore } from "react";
import { motion, AnimatePresence } from "motion/react";

const subscribeReducedMotion = (callback: () => void) => {
  if (typeof window === "undefined") return () => {};
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
};

const getReducedMotionClient = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

const getReducedMotionServer = () => false;

export function LoadingScreen() {
  const [stage, setStage] = useState<number>(0);
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionClient,
    getReducedMotionServer
  );

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    // Sequence stages: total duration ~950ms
    const t1 = setTimeout(() => setStage(1), 220); // INITIALIZING SYSTEM...
    const t2 = setTimeout(() => setStage(2), 520); // AI ENGINEER PORTFOLIO
    const t3 = setTimeout(() => {
      setStage(3);
      setTimeout(() => setIsComplete(true), 350);
    }, 850);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [prefersReducedMotion]);

  if (isComplete || prefersReducedMotion) {
    return null;
  }

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          key="loader-overlay"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.02,
            filter: "blur(6px)",
            transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const },
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050608] text-[#F5F7FA] px-6 select-none"
        >
          {/* Subtle background glow */}
          <div className="absolute w-96 h-96 rounded-full bg-[#4DEBFF]/10 blur-[100px] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center max-w-md w-full">
            {/* Brand Title */}
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#4DEBFF] shadow-[0_0_12px_#4DEBFF]" />
              <span className="text-xl sm:text-2xl font-bold tracking-[0.2em] font-mono-code">
                MUZAMMIL.AI
              </span>
            </motion.div>

            {/* Status updates */}
            <div className="h-6 flex items-center justify-center overflow-hidden mb-6">
              <AnimatePresence mode="wait">
                {stage === 0 && (
                  <motion.p
                    key="step-0"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 0.8, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="text-xs font-mono-code text-[#9AA4B2] tracking-wider uppercase"
                  >
                    CONNECTING AGENT ENGINE
                  </motion.p>
                )}
                {stage === 1 && (
                  <motion.p
                    key="step-1"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="text-xs font-mono-code text-[#4DEBFF] tracking-widest uppercase flex items-center gap-1.5"
                  >
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#4DEBFF] animate-ping" />
                    INITIALIZING SYSTEM...
                  </motion.p>
                )}
                {(stage === 2 || stage === 3) && (
                  <motion.p
                    key="step-2"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="text-xs font-mono-code text-[#8B5CF6] tracking-widest uppercase font-semibold"
                  >
                    AI ENGINEER PORTFOLIO
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* Progress bar */}
            <div className="w-48 h-1 bg-[#1B2330] rounded-full overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: stage === 0 ? "25%" : stage === 1 ? "65%" : "100%" }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-[#4DEBFF] to-[#8B5CF6] rounded-full"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

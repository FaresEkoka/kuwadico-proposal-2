"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TOTAL_DURATION = 120; // 2 minutes in seconds

function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

function getLoadingMessage(percent: number): string {
  if (percent < 15) return "Brewing something special for you...";
  if (percent < 30) return "Loading high-resolution visuals...";
  if (percent < 45) return "Crafting the perfect experience...";
  if (percent < 60) return "Polishing every detail...";
  if (percent < 75) return "Almost ready to impress...";
  if (percent < 90) return "Worth the wait, we promise...";
  if (percent < 100) return "Here we go...";
  return "Ready!";
}

interface LoadingScreenProps {
  onLoadComplete: (assets: Record<string, string>) => void;
}

export default function LoadingScreen({ onLoadComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(TOTAL_DURATION);
  const [loadingMessage, setLoadingMessage] = useState("Brewing something special for you...");
  const hasStartedRef = useRef(false);
  const onLoadCompleteRef = useRef(onLoadComplete);
  onLoadCompleteRef.current = onLoadComplete;

  useEffect(() => {
    // Store start time persistently so Strict Mode remounts don't reset it
    if (!hasStartedRef.current) {
      hasStartedRef.current = true;
      (hasStartedRef as any).startTime = Date.now();
    }
    const startTime = (hasStartedRef as any).startTime as number;

    const interval = setInterval(() => {
      const elapsed = (Date.now() - startTime) / 1000;
      const remaining = Math.max(0, Math.ceil(TOTAL_DURATION - elapsed));
      const percent = Math.min(100, Math.round((elapsed / TOTAL_DURATION) * 100));

      setTimeRemaining(remaining);
      setProgress(percent);
      setLoadingMessage(getLoadingMessage(percent));

      if (remaining <= 0) {
        clearInterval(interval);
        setProgress(100);
        setLoadingMessage("Ready!");
        setTimeout(() => {
          onLoadCompleteRef.current({});
        }, 500);
      }
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-[#0A0A0A] flex flex-col items-center justify-center"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.02)_0%,_transparent_70%)]" />

      <div className="relative z-10 flex flex-col items-center px-6 text-center w-full max-w-sm">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <span className="text-xs font-light uppercase tracking-[0.3em] text-white/40">
            Flex Labs
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-light tracking-wide text-white mb-10"
        >
          Website & Social Media Proposal
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-3 mb-12"
        >
          <p className="text-base md:text-lg font-light text-white/80">
            Please wait while your proposal loads
          </p>
          <p className="text-sm font-light text-white/50 max-w-xs mx-auto leading-relaxed">
            This may take a few minutes — we&apos;re loading high-quality visuals for the best experience.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full mb-8"
        >
          <div className="relative h-[2px] bg-white/10 w-full overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-white/80"
              style={{ boxShadow: "0 0 8px rgba(255,255,255,0.3)" }}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </div>
          <div className="mt-3 flex justify-between">
            <span className="text-xs text-white/40 font-light tabular-nums">
              {formatTime(timeRemaining)}
            </span>
            <span className="text-xs text-white/40 font-light tabular-nums">{progress}%</span>
          </div>
        </motion.div>

        <div className="h-6 mb-2">
          <AnimatePresence mode="wait">
            <motion.p
              key={loadingMessage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="text-sm font-light italic text-white/50"
            >
              {loadingMessage}
            </motion.p>
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8"
        >
          <motion.div
            className="w-1 h-1 rounded-full bg-white/30"
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-8 text-xs font-light uppercase tracking-[0.2em] text-white/20"
      >
        Prepared for Kuwadico
      </motion.div>
    </motion.div>
  );
}

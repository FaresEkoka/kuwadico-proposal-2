"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ASSETS_IN_ORDER = [
  "/backgrounds/1.png",
  "/backgrounds/2.png",
  "/backgrounds/3.png",
  "/backgrounds/4.png",
  "/backgrounds/5.png",
  "/backgrounds/6.png",
  "/backgrounds/7.png",
  "/backgrounds/8.png",
  "/backgrounds/9.png",
  "/backgrounds/10.png",
  "/backgrounds/11.png",
  "/hero-fallback.jpg",
  "/hero-video.mp4", // Video LAST
];

// Minimum time to show loading screen (3 seconds for polish)
const MIN_LOADING_DURATION = 3000;

interface LoadingScreenProps {
  onLoadComplete: (assets: Record<string, string>) => void;
}

// Format time remaining into human-readable string
function formatTime(seconds: number): string {
  if (seconds > 60) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `About ${mins}:${secs.toString().padStart(2, "0")} remaining`;
  }
  if (seconds > 10) {
    return `About ${seconds} seconds remaining`;
  }
  return "Almost there";
}

// Get loading message based on progress
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

export default function LoadingScreen({ onLoadComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(120);
  const [loadingMessage, setLoadingMessage] = useState("Brewing something special for you...");

  const hasStartedRef = useRef(false);
  const assetsRef = useRef<Record<string, string>>({});
  const onLoadCompleteRef = useRef(onLoadComplete);

  // Keep callback ref updated
  onLoadCompleteRef.current = onLoadComplete;

  useEffect(() => {
    // Prevent double-execution in React strict mode
    if (hasStartedRef.current) return;
    hasStartedRef.current = true;

    const startTime = Date.now();
    const totalAssets = ASSETS_IN_ORDER.length;
    let loadedCount = 0;
    let assetsFinished = false;

    // ========== PROGRESS UI ==========
    const progressInterval = setInterval(() => {
      const realPercent = Math.round((loadedCount / totalAssets) * 100);
      setProgress(realPercent);
      setLoadingMessage(getLoadingMessage(realPercent));

      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, Math.ceil((MIN_LOADING_DURATION - elapsed) / 1000));
      setTimeRemaining(remaining);
    }, 100);

    const finish = () => {
      clearInterval(progressInterval);
      setProgress(100);
      setLoadingMessage("Ready!");

      setTimeout(() => {
        onLoadCompleteRef.current(assetsRef.current);
      }, 500);
    };

    const tryFinish = () => {
      if (!assetsFinished) return;
      const elapsed = Date.now() - startTime;
      const remaining = MIN_LOADING_DURATION - elapsed;
      if (remaining <= 0) {
        finish();
      } else {
        setTimeout(finish, remaining);
      }
    };

    // ========== REAL ASSET LOADING ==========
    const loadAssetsSequentially = async () => {
      for (const url of ASSETS_IN_ORDER) {
        try {
          const response = await fetch(url);
          const blob = await response.blob();
          const blobUrl = URL.createObjectURL(blob);
          assetsRef.current[url] = blobUrl;
        } catch (error) {
          console.error(`Failed to load: ${url}`, error);
        }
        loadedCount++;
      }
      assetsFinished = true;
      tryFinish();
    };

    loadAssetsSequentially();

    return () => {
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-[#0A0A0A] flex flex-col items-center justify-center"
    >
      {/* Subtle radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.02)_0%,_transparent_70%)]" />

      <div className="relative z-10 flex flex-col items-center px-6 text-center w-full max-w-sm">
        {/* Flex Labs - small, subtle brand mark */}
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

        {/* Main title - elegant, not chunky */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-light tracking-wide text-white mb-10"
        >
          Website Proposal
        </motion.h1>

        {/* Please wait message */}
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

        {/* Progress bar - thin and refined */}
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
          <div className="mt-3 flex justify-end">
            <span className="text-xs text-white/40 font-light tabular-nums">{progress}%</span>
          </div>
        </motion.div>

        {/* Loading message - italic, subtle */}
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

        {/* Time remaining - very subtle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="h-5"
        >
          {progress < 100 && (
            <p className="text-xs font-light text-white/30">
              {formatTime(timeRemaining)}
            </p>
          )}
        </motion.div>

        {/* Subtle pulse indicator - replacing dots */}
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

      {/* Footer - very subtle */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-8 text-xs font-light uppercase tracking-[0.2em] text-white/20"
      >
        Prepared for Forte Cloud
      </motion.div>
    </motion.div>
  );
}

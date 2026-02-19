"use client";

import { motion } from "framer-motion";
import { content } from "@/content";
import Frame from "../Frame";
import { useNavigation } from "@/context/NavigationContext";
import { useAsset } from "@/context/AssetContext";

export default function HeroFrame() {
  const frame = content.frames[0];
  const { scrollToSection } = useNavigation();
  const videoSrc = useAsset("/hero-video.mp4");
  const posterSrc = useAsset("/hero-fallback.jpg");

  return (
    <Frame
      id="hero"
      className="bg-dark"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster={posterSrc}
        src={videoSrc}
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        style={{ transform: "scale(1.1)" }}
      />
      <div className="absolute inset-0 bg-gradient-radial from-accent-muted/5 via-transparent to-transparent opacity-50 pointer-events-none" />
      <div className="h-full flex flex-col justify-between p-4 sm:p-6 md:p-16 lg:p-24 relative z-10">
        {/* Top Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start w-full gap-2 sm:gap-0">
          <div className="text-[10px] sm:text-xs uppercase tracking-wider text-white/70 font-medium">
            {content.proposal.preparedBy} × {content.client.name}
          </div>
          <div className="text-[10px] sm:text-xs uppercase tracking-wider text-white/70 font-medium">
            {content.client.group}
          </div>
        </div>

        {/* Center Content */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-4"
          >
            {frame.badge && (
              <span className="inline-block px-3 py-1 text-xs uppercase tracking-widest text-accent-muted border border-accent-muted/30 mb-2 font-medium">
                {frame.badge.toUpperCase()}
              </span>
            )}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[0.9] mb-6 sm:mb-8 tracking-tight uppercase"
          >
            {frame.headline}
          </motion.h1>

          {/* Quick Navigation Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3 mb-4"
          >
            <button
              onClick={() => scrollToSection(1)} // Executive Summary
              className="group px-5 sm:px-6 py-3 bg-accent-muted text-dark font-semibold text-sm rounded-lg hover:bg-accent hover:scale-105 transition-all duration-200 shadow-lg active:scale-95"
            >
              Read Full Proposal →
            </button>
            <button
              onClick={() => scrollToSection(16)} // Approach section
              className="px-5 sm:px-6 py-3 border border-white/20 text-white/90 font-semibold text-sm rounded-lg hover:border-accent-muted/50 hover:bg-white/5 transition-all duration-200 active:scale-95"
            >
              View Approach
            </button>
            <button
              onClick={() => scrollToSection(20)} // Pricing section
              className="px-5 sm:px-6 py-3 border border-white/10 text-white/70 font-medium text-sm rounded-lg hover:text-white/90 hover:border-white/30 transition-all duration-200 active:scale-95"
            >
              See Investment
            </button>
          </motion.div>

          {/* Human Touch - Prepared By Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-[10px] sm:text-xs text-white/50 italic"
          >
            Personally prepared for {content.client.name} by the {content.proposal.preparedBy} team
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="flex justify-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="border-t border-white/10 pt-3 sm:pt-4"
          >
            <div className="text-[10px] sm:text-xs uppercase tracking-wider text-white/70 space-y-0.5 sm:space-y-1 font-medium">
              <div>CLIENT: {content.client.name.toUpperCase()}</div>
              <div>GROUP: {content.client.group.toUpperCase()}</div>
              <div>PREPARED BY: {content.proposal.preparedBy.toUpperCase()}</div>
            </div>
          </motion.div>
        </div>
      </div>
    </Frame>
  );
}

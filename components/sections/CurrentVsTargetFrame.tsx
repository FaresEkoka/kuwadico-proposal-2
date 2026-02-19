"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { content, getFrame } from "@/content";
import Frame from "../Frame";
import KeyHighlight from "../KeyHighlight";

const EXPLANATIONS: Record<string, { current: string; target: string }> = {
  "Limited digital visibility": {
    current: "The current website has minimal presence in search results and doesn't effectively showcase the scale of Kuwadico's developments.",
    target: "A modern, SEO-optimized website that ranks for West Cairo and Sheikh Zayed real estate searches and showcases Grand Heights prominently.",
  },
  "Inconsistent brand presentation": {
    current: "Mixed messaging and visual styles across digital touchpoints create confusion about brand identity and positioning.",
    target: "Unified brand expression across website and social media, with clear visual hierarchy reinforcing Kuwadico's premium positioning.",
  },
  "No lead capture or tracking": {
    current: "No integrated CRM or lead forms means potential buyer interest goes uncaptured and untracked.",
    target: "CRM-integrated lead capture with real-time tracking, enabling the sales team to follow up with qualified prospects.",
  },
  "Minimal social media presence": {
    current: "Limited or inactive social media channels mean missed opportunities for community building and buyer engagement.",
    target: "Active, managed social media presence with consistent branding, community engagement, and content that drives traffic to the website.",
  },
};

export default function CurrentVsTargetFrame() {
  const frame = getFrame("current-vs-target")!;
  const [isHovered, setIsHovered] = useState(false);

  const currentItems = frame.currentState?.items || [];
  const targetItems = frame.targetState?.items || [];

  return (
    <Frame id="current-vs-target" className="bg-dark">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "url('/backgrounds/6.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100%"
        }}
      />
      <div className="h-full flex flex-col justify-center p-6 md:p-8 lg:p-10 max-w-6xl overflow-hidden mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          {frame.kicker && (
            <div className="text-sm uppercase tracking-widest text-accent-muted mb-3 font-sans font-medium">
              {frame.kicker.toUpperCase()}
            </div>
          )}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 leading-[0.9] tracking-tighter uppercase presentation-headline">
            {frame.headline}
          </h2>
        </motion.div>

        {/* Column Headers */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-[1fr_auto_1fr] gap-4 mb-6"
        >
          <div className="text-sm uppercase tracking-wide font-sans font-medium text-white/70">
            Current State
          </div>
          <div className="w-8" /> {/* Spacer for arrow column */}
          <div className="text-sm uppercase tracking-wide font-sans font-medium text-accent-muted">
            Target State
          </div>
        </motion.div>

        {/* Comparison Rows */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-6"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="space-y-0">
            {currentItems.map((currentItem, index) => {
              const targetItem = targetItems[index];
              const explanation = EXPLANATIONS[currentItem];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="grid grid-cols-[1fr_auto_1fr] gap-4 py-5 border-b border-white/10 last:border-b-0"
                >
                  {/* Current State (Left) */}
                  <div className="flex flex-col">
                    <span className="text-sm md:text-base font-sans font-medium text-white">
                      {currentItem}
                    </span>
                    <motion.div
                      initial={false}
                      animate={{
                        height: isHovered ? "auto" : 0,
                        opacity: isHovered ? 1 : 0,
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      {explanation && (
                        <p className="pt-2 pb-2 text-sm text-white/60 leading-relaxed">
                          {explanation.current}
                        </p>
                      )}
                    </motion.div>
                  </div>

                  {/* Arrow Connector */}
                  <div className="flex items-start pt-1">
                    <span className="text-white/50 text-xl">→</span>
                  </div>

                  {/* Target State (Right) */}
                  <div className="flex flex-col">
                    <span className="text-sm md:text-base font-sans font-medium text-accent-muted">
                      {targetItem}
                    </span>
                    <motion.div
                      initial={false}
                      animate={{
                        height: isHovered ? "auto" : 0,
                        opacity: isHovered ? 1 : 0,
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      {explanation && (
                        <p className="pt-2 pb-2 text-sm text-white/60 leading-relaxed">
                          {explanation.target}
                        </p>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Hover Hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 0 : 1 }}
            transition={{ duration: 0.2 }}
            className="mt-4 text-center"
          >
            <span className="text-xs uppercase tracking-wide text-white/40 font-sans">
              Hover to explore
            </span>
          </motion.div>
        </motion.div>

        <KeyHighlight delay={0.8}>
          The proposed website and social media strategy are designed to close this gap.
        </KeyHighlight>
      </div>
    </Frame>
  );
}

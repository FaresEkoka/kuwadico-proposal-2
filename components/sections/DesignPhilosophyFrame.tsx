"use client";

import { motion } from "framer-motion";
import { content, getFrame } from "@/content";
import Frame from "../Frame";
import KeyHighlight from "../KeyHighlight";

const DESIGN_DESCRIPTIONS = [
  "The site won't shout. No aggressive CTAs, no flashing banners, no clutter. Clean layouts, generous whitespace, and restrained motion that lets the developments speak for themselves.",
  "Premium authority without arrogance. Strong typography, clear hierarchy, and confident statements backed by masterplan visuals and development details. The design says \"this is a serious developer\" without saying it.",
  "Current design patterns that signal relevance — not trends that will age in 6 months. Feels 2026, not 2018.",
];

export default function DesignPhilosophyFrame() {
  const frame = getFrame("design-philosophy")!;

  return (
    <Frame id="design-philosophy" className="bg-dark-lighter">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "url('/backgrounds/2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100%",
        }}
      />
      <div className="h-full flex flex-col justify-center p-6 md:p-8 lg:p-10 max-w-6xl overflow-hidden mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          {frame.kicker && (
            <div className="text-xs uppercase tracking-widest text-accent-muted mb-2 font-sans font-medium">
              {frame.kicker.toUpperCase()}
            </div>
          )}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[0.9] tracking-tighter uppercase presentation-headline">
            {frame.headline}
          </h2>
        </motion.div>

        {/* Description Paragraphs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6 mb-8"
        >
          {DESIGN_DESCRIPTIONS.map((description, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="border-l-2 border-accent-muted pl-4 text-readable-muted font-sans text-base leading-relaxed max-w-2xl"
            >
              {description}
            </motion.p>
          ))}
        </motion.div>

        <KeyHighlight delay={0.8}>
          {frame.conclusion}
        </KeyHighlight>
      </div>
    </Frame>
  );
}

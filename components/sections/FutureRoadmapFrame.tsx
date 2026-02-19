"use client";

import { motion } from "framer-motion";
import Frame from "../Frame";
import LazyBackground from "../LazyBackground";
import KeyHighlight from "../KeyHighlight";

const FOUNDATION_ITEMS = [
  "Launch new development phases without redesigning the site",
  "Showcase sub-developer partnerships (Porto Group, Mountain View, Badreldin)",
  "Build campaign landing pages for Glory Phase II in hours, not weeks",
  "Integrate community app and property portal features",
  "Scale to regional investor sites with consistent branding",
];

export default function FutureRoadmapFrame() {
  return (
    <Frame id="future-roadmap" className="bg-dark">
      <LazyBackground src="/backgrounds/9.png" />
      <div className="h-full flex flex-col justify-center p-6 md:p-8 lg:p-10 max-w-6xl overflow-hidden mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="text-xs uppercase tracking-widest text-accent-muted mb-2 font-sans font-medium">
            DESIGNED TO EVOLVE
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[0.9] tracking-tighter uppercase presentation-headline">
            BUILT TO GROW WITH YOU.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <div className="text-sm uppercase tracking-wide text-accent-muted font-sans font-medium mb-6">
            What the foundation enables:
          </div>
          <div className="space-y-4 max-w-3xl">
            {FOUNDATION_ITEMS.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="flex gap-4 items-start"
              >
                <span className="text-accent-muted text-xl flex-shrink-0">→</span>
                <p className="text-white/90 font-sans text-lg md:text-xl leading-relaxed">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <KeyHighlight delay={0.8}>
          We're not building a website. We're building a platform you can grow on.
        </KeyHighlight>
      </div>
    </Frame>
  );
}

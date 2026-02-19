"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { content } from "@/content";
import Frame from "../Frame";
import LazyBackground from "../LazyBackground";
import ReadTimeIndicator from "../ReadTimeIndicator";
import KeyHighlight from "../KeyHighlight";

const PHASE_DETAILS: Record<string, { activities: string[]; deliverables: string[]; dependencies?: string; milestones: string[]; weeks: string }> = {
  "Phase 1 — Foundation": {
    weeks: "Week 1",
    activities: [
      "Stakeholder interviews and requirements gathering",
      "Competitive analysis and best practices research",
      "Content audit and messaging framework development",
      "Information architecture design and validation",
    ],
    deliverables: [
      "Complete sitemap documentation",
      "Page architecture diagrams",
      "Content structure recommendations",
      "Wireframes for all key pages",
    ],
    milestones: ["Sitemap approved", "Wireframes complete"],
  },
  "Phase 2 — Design": {
    weeks: "Week 2–5",
    activities: [
      "Design system development",
      "Visual design exploration",
      "Component library creation",
      "Responsive design implementation",
    ],
    deliverables: [
      "Complete design system",
      "High-fidelity designs for all pages",
      "Mobile and tablet responsive designs",
      "Interactive prototypes",
    ],
    dependencies: "Requires Phase 1 approval",
    milestones: ["Design system approved", "All designs complete"],
  },
  "Phase 3 — Build & Launch": {
    weeks: "Week 5–8",
    activities: [
      "Frontend development",
      "Content integration",
      "Performance optimization",
      "Cross-browser testing",
    ],
    deliverables: [
      "Fully functional website",
      "Performance optimized build",
      "QA documentation",
      "Launch support and training",
    ],
    dependencies: "Requires Phase 2 approval",
    milestones: ["Development complete", "Launch"],
  },
};

export default function ApproachFrame() {
  const frame = content.frames[16];
  const [expandedPhase, setExpandedPhase] = useState<string | null>(null);

  return (
    <Frame id="approach" className="bg-dark !min-h-[150vh]">
      <LazyBackground src="/backgrounds/6.png" />
      <div className="h-full flex flex-col justify-center py-16 px-8 md:py-24 md:px-16 lg:py-36 lg:px-24 max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          {frame.kicker && (
            <div className="flex items-center gap-3 mb-3">
              <div className="text-xs uppercase tracking-widest text-accent-muted font-medium">
                {frame.kicker.toUpperCase()}
              </div>
              <ReadTimeIndicator minutes={4} label="interactive" />
            </div>
          )}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 leading-[0.9] tracking-tighter uppercase presentation-headline">
            {frame.headline}
          </h2>
        </motion.div>

        <KeyHighlight delay={0.2}>
          Three clear phases with transparent milestones — designed to adapt if priorities shift during the project.
        </KeyHighlight>

        <div className="relative mt-8">
          {/* Horizontal Timeline Container */}
          <div className="relative">
            {/* Horizontal line - centered on dots */}
            <div className="absolute top-1.5 left-0 right-0 h-px bg-white/20" />

            {/* Animated progress line */}
            <motion.div
              className="absolute top-1.5 left-0 right-0 h-px bg-accent-muted origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 1.2,
                delay: 0.3,
                ease: "easeOut",
              }}
            />

            {/* Timeline dots with week labels - match grid layout */}
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
              {frame.phases?.map((phase, index) => {
                const isExpanded = expandedPhase === phase.name;
                const weekLabels = ["Week 1", "Week 2–5", "Week 5–8"];

                return (
                  <div key={index} className="flex flex-col items-center">
                    <motion.button
                      onClick={() => setExpandedPhase(isExpanded ? null : phase.name)}
                      className="w-3 h-3 rounded-full bg-accent-muted z-10 hover:scale-125 transition-transform focus:outline-none"
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{
                        duration: 0.3,
                        delay: 0.4 + index * 0.2,
                        ease: "easeOut",
                      }}
                      animate={{
                        scale: isExpanded ? 1.5 : 1,
                      }}
                      aria-label={`Expand ${phase.name}`}
                    />
                    <span className="mt-2 text-xs text-accent-muted font-sans font-medium uppercase tracking-wide">
                      {weekLabels[index]}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Phases Content */}
          <AnimatePresence mode="wait">
            {!expandedPhase ? (
              <motion.div
                key="all-phases"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
              >
                {frame.phases?.map((phase, index) => {
                  const details = PHASE_DETAILS[phase.name];

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: 0.7 + index * 0.4 }}
                      className="relative"
                    >
                      <button
                        onClick={() => setExpandedPhase(phase.name)}
                        className="w-full text-left hover:bg-white/5 rounded-lg p-4 transition-all group"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="text-lg md:text-xl font-semibold uppercase tracking-wide text-white/90 group-hover:text-accent-muted transition-colors">
                            {phase.name}
                          </h3>
                          {details && (
                            <span className="text-accent-muted text-xl group-hover:scale-110 transition-transform">
                              +
                            </span>
                          )}
                        </div>
                        <ul className="space-y-2">
                          {phase.items?.map((item, itemIndex) => (
                            <motion.li
                              key={itemIndex}
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: 0.9 + index * 0.4 + itemIndex * 0.1 }}
                              className="text-sm md:text-base text-white/90 flex items-start gap-2 font-normal tracking-wide"
                            >
                              <span className="text-accent-muted mt-1">•</span>
                              <span>{item}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </button>
                    </motion.div>
                  );
                })}
              </motion.div>
            ) : (
              <motion.div
                key={`expanded-${expandedPhase}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative"
              >
                {frame.phases?.map((phase) => {
                  if (phase.name !== expandedPhase) return null;
                  const details = PHASE_DETAILS[phase.name];

                  return (
                    <div key={phase.name} className="bg-white/5 rounded-lg p-4 md:p-6 border border-accent-muted/30">
                      <div className="flex flex-col sm:flex-row items-start justify-between mb-6 gap-3">
                        <div>
                          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold uppercase tracking-wide text-accent-muted">
                            {phase.name}
                          </h3>
                          {details?.weeks && (
                            <span className="text-sm text-white/60 font-sans mt-1 block">
                              {details.weeks}
                            </span>
                          )}
                        </div>
                        <button
                          onClick={() => setExpandedPhase(null)}
                          className="flex items-center gap-2 px-4 py-2 text-sm text-white/70 hover:text-accent-muted border border-white/20 hover:border-accent-muted/50 rounded transition-all whitespace-nowrap flex-shrink-0"
                        >
                          <span>←</span>
                          <span className="hidden sm:inline">Back to All Phases</span>
                          <span className="inline sm:hidden">Back</span>
                        </button>
                      </div>

                      <ul className="space-y-3 mb-8">
                        {phase.items?.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="text-base md:text-lg text-white/90 flex items-start gap-3 font-normal tracking-wide"
                          >
                            <span className="text-accent-muted mt-1 text-lg">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {details && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6 pt-6 border-t border-white/10">
                          <div>
                            <div className="text-xs uppercase tracking-widest text-accent-muted mb-4 font-medium">
                              Activities
                            </div>
                            <ul className="space-y-3">
                              {details.activities.map((activity, actIndex) => (
                                <li
                                  key={actIndex}
                                  className="text-sm text-white/80 flex items-start gap-2"
                                >
                                  <span className="text-accent-muted mt-1">→</span>
                                  <span>{activity}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <div className="text-xs uppercase tracking-widest text-accent-muted mb-4 font-medium">
                              Deliverables
                            </div>
                            <ul className="space-y-3">
                              {details.deliverables.map((deliverable, delIndex) => (
                                <li
                                  key={delIndex}
                                  className="text-sm text-white/80 flex items-start gap-2"
                                >
                                  <span className="text-accent-muted mt-1">✓</span>
                                  <span>{deliverable}</span>
                                </li>
                              ))}
                            </ul>
                            {details.dependencies && (
                              <div className="mt-4 pt-4 border-t border-white/10">
                                <div className="text-sm text-white/60">
                                  <span className="font-medium">Dependencies: </span>
                                  {details.dependencies}
                                </div>
                              </div>
                            )}
                          </div>
                          <div className="md:col-span-2">
                            <div className="text-xs uppercase tracking-widest text-accent-muted mb-4 font-medium">
                              Key Milestones
                            </div>
                            <div className="flex flex-wrap gap-3">
                              {details.milestones.map((milestone, milIndex) => (
                                <span
                                  key={milIndex}
                                  className="px-4 py-2 text-sm bg-accent-muted/20 text-accent-muted rounded border border-accent-muted/30"
                                >
                                  {milestone}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-8 text-sm md:text-base text-white/90 italic font-normal tracking-wide"
        >
          {frame.note}
        </motion.p>
      </div>
    </Frame>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { content } from "@/content";
import Frame from "../Frame";
import ReadTimeIndicator from "../ReadTimeIndicator";
import KeyHighlight from "../KeyHighlight";

const DELIVERABLE_DETAILS: Record<string, { breakdown: string[]; timeline: string; dependencies?: string }> = {
  "Clear site structure and page hierarchy": {
    breakdown: [
      "Information architecture documentation",
      "Site map with page relationships",
      "Navigation structure recommendations",
      "Content organization strategy",
    ],
    timeline: "Week 1-2",
  },
  "High-fidelity website designs": {
    breakdown: [
      "Desktop and mobile designs for all pages",
      "Design system documentation",
      "Component library and style guide",
      "Interactive prototypes for key flows",
    ],
    timeline: "Week 3-5",
  },
  "Modern, responsive implementation": {
    breakdown: [
      "Fully responsive Next.js website",
      "Performance optimized (Core Web Vitals)",
      "Accessibility compliant (WCAG 2.1)",
      "Cross-browser tested",
    ],
    timeline: "Week 6-7",
    dependencies: "Requires approved designs",
  },
  "Content-ready framework for future expansion": {
    breakdown: [
      "CMS integration ready",
      "Scalable component architecture",
      "Documentation for content updates",
      "Training materials for team",
    ],
    timeline: "Week 7-8",
  },
  "Documentation and handover": {
    breakdown: [
      "Technical documentation",
      "Content management guide",
      "Design system documentation",
      "Handover session with team",
    ],
    timeline: "Week 8",
  },
};

export default function DeliverablesFrame() {
  const frame = content.frames[17];
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  return (
    <Frame id="deliverables" className="bg-dark-lighter">
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "url('/backgrounds/7.png')",
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
          className="mb-16"
        >
          {frame.kicker && (
            <div className="flex items-center gap-3 mb-3">
              <div className="text-xs uppercase tracking-widest text-accent-muted font-medium">
                {frame.kicker.toUpperCase()}
              </div>
              <ReadTimeIndicator minutes={3} label="expandable" />
            </div>
          )}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 leading-[0.9] tracking-tighter uppercase presentation-headline">
            {frame.headline}
          </h2>
        </motion.div>

        <KeyHighlight delay={0.2}>
          Every deliverable is concrete, verifiable, and structured to prevent surprises at handover.
        </KeyHighlight>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {frame.items?.map((item, index) => {
            const isExpanded = expandedItems.has(item);
            const details = DELIVERABLE_DETAILS[item];
            const toggleItem = () => {
              setExpandedItems((prev) => {
                const next = new Set(prev);
                if (next.has(item)) {
                  next.delete(item);
                } else {
                  next.add(item);
                }
                return next;
              });
            };

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className={`border-t border-white/10 pt-4 transition-colors ${
                  isExpanded ? "bg-white/5 rounded-lg p-4 border-accent-muted/30" : ""
                }`}
              >
                <button
                  onClick={toggleItem}
                  className="w-full text-left flex items-start gap-4 group"
                >
                  <div className="w-1 h-1 rounded-full bg-accent-muted flex-shrink-0 mt-2 group-hover:scale-150 transition-transform" />
                  <div className="flex-1">
                    <p className="text-sm md:text-base text-white/90 leading-relaxed font-normal tracking-wide group-hover:text-white transition-colors">
                      {item}
                    </p>
                    {details && (
                      <div className="mt-2 flex items-center gap-3 text-xs text-white/50">
                        <span>{details.timeline}</span>
                        {details.dependencies && (
                          <span className="px-2 py-0.5 bg-white/10 rounded">
                            {details.dependencies}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                  {details && (
                    <span className="text-accent-muted text-lg mt-1 flex-shrink-0">
                      {isExpanded ? "−" : "+"}
                    </span>
                  )}
                </button>

                <AnimatePresence>
                  {isExpanded && details && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 ml-5 space-y-3">
                        <div>
                          <div className="text-xs uppercase tracking-widest text-accent-muted mb-2 font-medium">
                            Detailed Breakdown:
                          </div>
                          <ul className="space-y-2">
                            {details.breakdown.map((point, pointIndex) => (
                              <li
                                key={pointIndex}
                                className="flex items-start gap-2 text-xs text-white/70"
                              >
                                <span className="text-accent-muted mt-1">✓</span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        {details.dependencies && (
                          <div className="pt-3 border-t border-white/10">
                            <div className="text-xs text-white/50">
                              <span className="font-medium">Dependencies: </span>
                              {details.dependencies}
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </Frame>
  );
}

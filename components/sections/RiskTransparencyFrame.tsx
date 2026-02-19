"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Frame from "../Frame";
import ReadTimeIndicator from "../ReadTimeIndicator";
import KeyHighlight from "../KeyHighlight";

const RISK_SCENARIOS = [
  {
    question: "What if the timeline slips?",
    answer: "We build buffer into each phase and communicate early if priorities shift. If delays occur, we'll propose adjusted milestones before they become problems.",
    mitigation: "Weekly check-ins and transparent milestone tracking"
  },
  {
    question: "What if you don't understand our business?",
    answer: "Phase 1 includes stakeholder interviews specifically to prevent this. We don't design until we understand your positioning, audience, and goals deeply.",
    mitigation: "Structured discovery process with sign-off gates"
  },
  {
    question: "What if the design doesn't feel right?",
    answer: "Design approval happens in stages. You'll see concepts, review wireframes, and approve directions before we commit to high-fidelity work. No surprises.",
    mitigation: "Multiple review checkpoints with revision rounds included"
  },
  {
    question: "What if we need changes after launch?",
    answer: "The site is built on a modern, maintainable stack with documentation. Post-launch support is included for 30 days, and we can discuss ongoing arrangements.",
    mitigation: "Handover documentation and training included"
  },
  {
    question: "What if this is more expensive than expected?",
    answer: "The pricing is fixed and transparent. No hidden costs. The only additions would be if scope expands beyond what's agreed in Phase 1.",
    mitigation: "Clear scope definition and change request process"
  }
];

export default function RiskTransparencyFrame() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <Frame id="risk-transparency" className="bg-dark !h-[160vh]">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "url('/backgrounds/5.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100%"
        }}
      />
      <div className="h-full flex flex-col justify-center py-16 px-8 md:py-24 md:px-16 lg:py-36 lg:px-24 max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="text-xs uppercase tracking-widest text-accent-muted font-medium">
              Risk Transparency
            </div>
            <ReadTimeIndicator minutes={2} label="interactive" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 md:mb-6 leading-[0.9] tracking-tighter uppercase presentation-headline">
            What if this fails?
          </h2>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-3xl">
            Good projects acknowledge risks upfront. Here are the most common concerns we hear, and how we handle them.
          </p>
        </motion.div>

        <KeyHighlight delay={0.2}>
          Transparency about risks is more valuable than pretending they don&apos;t exist.
        </KeyHighlight>

        <div className="space-y-3 mt-8">
          {RISK_SCENARIOS.map((scenario, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className={`border border-white/10 rounded-lg overflow-hidden transition-colors ${
                  isExpanded ? "bg-white/5 border-accent-muted/30" : "hover:bg-white/5"
                }`}
              >
                <button
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4"
                >
                  <span className="text-base md:text-lg font-medium text-white/90">
                    {scenario.question}
                  </span>
                  <span className="text-accent-muted text-xl flex-shrink-0">
                    {isExpanded ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 space-y-4 border-t border-white/10 pt-4">
                        <div>
                          <div className="text-xs uppercase tracking-widest text-accent-muted mb-2 font-medium">
                            Our Answer
                          </div>
                          <p className="text-sm text-white/80 leading-relaxed">
                            {scenario.answer}
                          </p>
                        </div>
                        <div>
                          <div className="text-xs uppercase tracking-widest text-white/60 mb-2 font-medium">
                            How We Mitigate This
                          </div>
                          <p className="text-sm text-white/70 leading-relaxed">
                            {scenario.mitigation}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 pt-6 border-t border-white/10"
        >
          <p className="text-sm text-white/70 italic">
            Have a concern not covered here? Let&apos;s discuss it upfront. The best partnerships are built on honest conversations about what could go wrong.
          </p>
        </motion.div>
      </div>
    </Frame>
  );
}

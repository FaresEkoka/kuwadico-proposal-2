"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getFrame } from "@/content";
import Frame from "../Frame";
import LazyBackground from "../LazyBackground";
import { Monitor, Share2, ClipboardList } from "lucide-react";

const ICONS: Record<string, React.ElementType> = {
  Monitor,
  Share2,
  ClipboardList,
};

export default function WhatsIncludedFrame() {
  const frame = getFrame("whats-included")!;
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const cards = (frame as any).cards || [];

  return (
    <Frame id="whats-included" className="bg-dark !h-[160vh]">
      <LazyBackground src="/backgrounds/3.png" />
      <div className="h-full flex flex-col justify-center py-16 px-6 md:py-24 md:px-10 lg:py-36 lg:px-16 max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          {frame.kicker && (
            <div className="text-xs uppercase tracking-widest text-accent-muted mb-2 font-medium">
              {frame.kicker.toUpperCase()}
            </div>
          )}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[0.9] tracking-tighter uppercase presentation-headline">
            {frame.headline}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card: any, index: number) => {
            const Icon = ICONS[card.icon] || Monitor;
            const isExpanded = expandedIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className={`bg-white/5 rounded-lg border transition-colors ${
                  isExpanded ? "border-accent-muted/30" : "border-white/10 hover:border-accent-muted/20"
                }`}
              >
                <button
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                  className="w-full text-left p-5"
                >
                  <div className="flex items-start gap-4 mb-3">
                    <div className="p-2 bg-accent-muted/10 rounded-lg flex-shrink-0">
                      <Icon className="w-5 h-5 text-accent-muted" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-semibold text-white mb-1">
                        {card.title}
                      </h3>
                      <p className="text-sm text-white/60 leading-relaxed">
                        {card.summary}
                      </p>
                    </div>
                    <span className="text-accent-muted text-xl flex-shrink-0">
                      {isExpanded ? "−" : "+"}
                    </span>
                  </div>
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
                        {card.details?.pages && (
                          <div>
                            <div className="text-xs uppercase tracking-widest text-accent-muted mb-2 font-medium">
                              Pages
                            </div>
                            <ul className="space-y-1">
                              {card.details.pages.map((page: string, i: number) => (
                                <li key={i} className="text-[13px] text-white/90 flex items-start gap-2">
                                  <span className="text-accent-muted mt-0.5">•</span>
                                  <span>{page}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {card.details?.features && (
                          <div>
                            <div className="text-xs uppercase tracking-widest text-accent-muted mb-2 font-medium">
                              Features
                            </div>
                            <ul className="space-y-1">
                              {card.details.features.map((feature: string, i: number) => (
                                <li key={i} className="text-[13px] text-white/90 flex items-start gap-2">
                                  <span className="text-accent-muted mt-0.5">•</span>
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {card.details?.approach && (
                          <div>
                            <div className="text-xs uppercase tracking-widest text-accent-muted mb-2 font-medium">
                              Approach
                            </div>
                            <ul className="space-y-1">
                              {card.details.approach.map((item: string, i: number) => (
                                <li key={i} className="text-[13px] text-white/90 flex items-start gap-2">
                                  <span className="text-accent-muted mt-0.5">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {card.details?.tiers && (
                          <div>
                            <div className="text-xs uppercase tracking-widest text-accent-muted mb-2 font-medium">
                              Packages
                            </div>
                            <div className="space-y-2">
                              {card.details.tiers.map((tier: any, i: number) => (
                                <div key={i} className="flex items-center justify-between text-[13px]">
                                  <span className="text-white/90">{tier.name}</span>
                                  <span className="text-red-500 font-medium">{tier.price}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        {card.details?.team && (
                          <div>
                            <div className="text-xs uppercase tracking-widest text-accent-muted mb-2 font-medium">
                              Team & Management
                            </div>
                            <ul className="space-y-1">
                              {card.details.team.map((item: string, i: number) => (
                                <li key={i} className="text-[13px] text-white/90 flex items-start gap-2">
                                  <span className="text-accent-muted mt-0.5">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {card.details?.process && (
                          <div>
                            <div className="text-xs uppercase tracking-widest text-accent-muted mb-2 font-medium">
                              Process
                            </div>
                            <ul className="space-y-1">
                              {card.details.process.map((item: string, i: number) => (
                                <li key={i} className="text-[13px] text-white/90 flex items-start gap-2">
                                  <span className="text-accent-muted mt-0.5">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {card.details?.inputs && (
                          <div>
                            <div className="text-xs uppercase tracking-widest text-white/60 mb-2 font-medium">
                              Kuwadico Inputs
                            </div>
                            <ul className="space-y-1">
                              {card.details.inputs.map((item: string, i: number) => (
                                <li key={i} className="text-[13px] text-white/90 flex items-start gap-2">
                                  <span className="text-accent-muted mt-0.5">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Frame>
  );
}

"use client";

import { motion } from "framer-motion";
import { getFrame } from "@/content";
import Frame from "../Frame";
import LazyBackground from "../LazyBackground";

export default function TimelineInvestmentFrame() {
  const frame = getFrame("timeline-investment")!;
  const gantt = (frame as any).gantt || [];
  const pricing = (frame as any).pricing || [];

  const totalWeeks = 8;

  return (
    <Frame id="timeline-investment" className="bg-dark">
      <LazyBackground src="/backgrounds/10.png" />
      <div className="h-full flex flex-col justify-center p-6 md:p-8 lg:p-10 max-w-6xl overflow-hidden mx-auto relative z-10">
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 leading-[0.9] tracking-tighter uppercase presentation-headline">
            {frame.headline}
          </h2>
        </motion.div>

        {/* Gantt Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10"
        >
          {/* Week headers */}
          <div className="hidden md:grid grid-cols-8 gap-1 mb-3">
            {Array.from({ length: totalWeeks }, (_, i) => (
              <div key={i} className="text-center text-[10px] uppercase tracking-wider text-white/40 font-medium">
                W{i + 1}
              </div>
            ))}
          </div>

          {/* Gantt bars */}
          <div className="space-y-3">
            {gantt.map((phase: any, index: number) => {
              const weekStart = parseInt(phase.weeks.split("-")[0]) || parseInt(phase.weeks);
              const startCol = weekStart;
              const spanCols = phase.span;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  {/* Mobile: simple list */}
                  <div className="md:hidden flex items-center gap-3 py-2">
                    <div className="w-2 h-2 rounded-full bg-accent-muted flex-shrink-0" />
                    <div>
                      <span className="text-sm text-white/90 font-medium">{phase.phase}</span>
                      <span className="text-xs text-white/40 ml-2">Weeks {phase.weeks}</span>
                    </div>
                  </div>

                  {/* Desktop: Gantt bar */}
                  <div className="hidden md:block relative h-10">
                    <div className="hidden md:grid grid-cols-8 gap-1 h-10">
                      {Array.from({ length: totalWeeks }, (_, i) => (
                        <div key={i} className="h-10" />
                      ))}
                    </div>
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.15 }}
                      className="absolute top-0 h-10 bg-accent-muted/20 border border-accent-muted/30 rounded-md origin-left flex items-center"
                      style={{
                        left: `${((startCol - 1) / totalWeeks) * 100}%`,
                        width: `${(spanCols / totalWeeks) * 100}%`,
                      }}
                    >
                      <span className="text-xs text-white/90 font-medium pl-3 whitespace-nowrap">
                        {phase.phase}
                      </span>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Pricing Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center gap-4 mb-8"
        >
          {pricing.map((item: any, index: number) => (
            <div
              key={index}
              className="bg-white/5 rounded-lg p-5 border border-white/10 flex items-center justify-between w-full md:w-1/2"
            >
              <div>
                <div className="text-sm text-white/60 uppercase tracking-wide font-medium mb-1">
                  {item.name}
                </div>
                <div className="text-xs text-white/40">{item.detail}</div>
              </div>
              <div className="text-2xl md:text-3xl font-bold text-red-500">
                {item.price}
              </div>
            </div>
          ))}
        </motion.div>

        {(frame as any).footer && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-sm text-white/50 italic text-center"
          >
            {(frame as any).footer}
          </motion.p>
        )}
      </div>
    </Frame>
  );
}

"use client";

import { motion } from "framer-motion";
import { getFrame } from "@/content";
import Frame from "../Frame";
import LazyBackground from "../LazyBackground";

export default function ProjectManagementFrame() {
  const frame = getFrame("project-management")!;
  const cards = (frame as any).cards || [];

  return (
    <Frame id="project-management" className="bg-dark-lighter">
      <LazyBackground src="/backgrounds/7.png" />
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {cards.map((card: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-white/5 rounded-lg p-5 border border-white/10 hover:border-accent-muted/20 hover:shadow-[0_10px_40px_rgba(57,255,20,0.08)] transition-all"
            >
              <h3 className="text-sm uppercase tracking-wide text-accent-muted font-medium border-b border-accent-muted/30 pb-2 mb-4">
                {card.title}
              </h3>
              <ul className="space-y-2">
                {card.items?.map((item: string, i: number) => (
                  <li key={i} className="text-[13px] text-white/90 flex items-start gap-2">
                    <span className="text-accent-muted mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {(frame as any).footer && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-sm text-white/50 italic"
          >
            {(frame as any).footer}
          </motion.p>
        )}
      </div>
    </Frame>
  );
}

"use client";

import { motion } from "framer-motion";
import { getFrame } from "@/content";
import Frame from "../Frame";
import LazyBackground from "../LazyBackground";

export default function WhatsIncludedFrame() {
  const frame = getFrame("whats-included")!;
  const cards = (frame as any).cards || [];
  const website = cards[0]; // Website Design card

  if (!website) return null;

  const { pages, features, approach } = website.details || {};

  return (
    <Frame id="whats-included" className="bg-dark">
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[0.9] tracking-tighter uppercase presentation-headline mb-3">
            {frame.headline}
          </h2>
          <p className="text-sm sm:text-base text-white/70 leading-relaxed max-w-2xl">
            {website.summary}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pages */}
          {pages && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/5 rounded-lg p-5 border border-white/10"
            >
              <div className="text-xs uppercase tracking-widest text-accent-muted mb-4 font-medium">
                10 Pages
              </div>
              <ul className="space-y-2">
                {pages.map((page: string, i: number) => (
                  <li key={i} className="text-[13px] text-white/90 flex items-start gap-2">
                    <span className="text-accent-muted mt-0.5">•</span>
                    <span>{page}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Features */}
          {features && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white/5 rounded-lg p-5 border border-white/10"
            >
              <div className="text-xs uppercase tracking-widest text-accent-muted mb-4 font-medium">
                Features
              </div>
              <ul className="space-y-2">
                {features.map((feature: string, i: number) => (
                  <li key={i} className="text-[13px] text-white/90 flex items-start gap-2">
                    <span className="text-accent-muted mt-0.5">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Strategic Approach */}
          {approach && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white/5 rounded-lg p-5 border border-white/10"
            >
              <div className="text-xs uppercase tracking-widest text-accent-muted mb-4 font-medium">
                Strategic Approach
              </div>
              <ul className="space-y-2">
                {approach.map((item: string, i: number) => (
                  <li key={i} className="text-[13px] text-white/90 flex items-start gap-2">
                    <span className="text-accent-muted mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </Frame>
  );
}

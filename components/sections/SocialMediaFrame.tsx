"use client";

import { motion } from "framer-motion";
import { getFrame } from "@/content";
import Frame from "../Frame";
import LazyBackground from "../LazyBackground";

export default function SocialMediaFrame() {
  const frame = getFrame("social-media")!;
  const packages = (frame as any).packages || [];

  return (
    <Frame id="social-media" className="bg-dark">
      <LazyBackground src="/backgrounds/5.png" />
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
          {packages.map((pkg: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className={`bg-white/5 rounded-lg p-6 border flex flex-col ${
                pkg.recommended
                  ? "border-accent-muted/40 shadow-[0_10px_40px_rgba(57,255,20,0.15)]"
                  : "border-white/10 hover:border-accent-muted/20"
              } transition-all`}
            >
              {pkg.recommended && (
                <div className="text-[10px] uppercase tracking-widest text-accent-muted font-medium mb-3">
                  Recommended
                </div>
              )}
              <h3 className="text-lg font-semibold text-white mb-2">
                {pkg.name}
              </h3>
              <div className="mb-4">
                <span className="text-3xl md:text-4xl font-bold text-red-500">
                  {pkg.price}
                </span>
                <span className="text-white/50 text-sm">{pkg.period}</span>
              </div>

              <div className="w-full h-px bg-white/10 mb-4" />

              <ul className="space-y-2 flex-1">
                {pkg.features?.map((feature: string, i: number) => (
                  <li key={i} className="text-[13px] text-white/90 flex items-start gap-2">
                    <span className="text-accent-muted mt-0.5">✓</span>
                    <span>{feature}</span>
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
            className="text-sm text-white/50 italic text-center"
          >
            {(frame as any).footer}
          </motion.p>
        )}
      </div>
    </Frame>
  );
}

"use client";

import { motion } from "framer-motion";
import { content, getFrame } from "@/content";
import Frame from "../Frame";
import KeyHighlight from "../KeyHighlight";

export default function UserJourneysFrame() {
  const frame = getFrame("user-journeys")!;

  return (
    <Frame id="user-journeys" className="bg-dark-lighter">
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "url('/backgrounds/9.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100%"
        }}
      />
      <div className="h-full flex flex-col justify-center p-6 md:p-8 lg:p-10 max-w-6xl overflow-hidden mx-auto relative z-10">
        {/* Header */}
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

        {/* Main content grid: Primary audiences left, Each audience needs right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Left: Primary audiences */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-xs uppercase tracking-widest text-white/70 mb-4 font-medium">
              Primary audiences:
            </p>
            <div className="space-y-2">
              {frame.audiences?.map((audience, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3 text-sm md:text-base text-white/90 font-normal tracking-wide"
                >
                  <span className="text-accent-muted mt-1">•</span>
                  <span>{audience}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Each audience needs */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-xs uppercase tracking-widest text-white/70 mb-4 font-medium">
              {frame.needs}
            </p>
            <div className="space-y-2">
              {frame.needsList?.map((need, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="flex items-start gap-3 text-sm md:text-base text-white/90 font-normal tracking-wide"
                >
                  <span className="text-accent-muted mt-1">•</span>
                  <span>{need}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom: Key highlight */}
        <KeyHighlight delay={0.8}>
          The structure is designed so every audience finds reassurance without custom paths.
        </KeyHighlight>
      </div>
    </Frame>
  );
}

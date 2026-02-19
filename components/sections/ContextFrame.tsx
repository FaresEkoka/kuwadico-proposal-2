"use client";

import { motion } from "framer-motion";
import { content, getFrame } from "@/content";
import Frame from "../Frame";
import ReadTimeIndicator from "../ReadTimeIndicator";
import KeyHighlight from "../KeyHighlight";

export default function ContextFrame() {
  const frame = getFrame("context")!;

  return (
    <Frame id="context" className="bg-dark-lighter">
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "url('/backgrounds/3.png')",
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
            <div className="flex items-center gap-3 mb-3">
              <div className="text-xs uppercase tracking-widest text-accent-muted font-medium">
                {frame.kicker.toUpperCase()}
              </div>
              <ReadTimeIndicator minutes={2} />
            </div>
          )}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 leading-[0.9] tracking-tighter uppercase presentation-headline">
            {frame.headline}
          </h2>
        </motion.div>

        {/* Main content grid: Stacked paragraphs left, audiences right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Left: Stacked paragraphs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <p className="text-sm md:text-base text-white/90 leading-relaxed font-normal tracking-wide">
              {frame.body}
            </p>
            <p className="text-sm md:text-base text-white/90 leading-relaxed font-normal tracking-wide">
              {frame.challenge}
            </p>
          </motion.div>

          {/* Right: Audiences list */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-xs uppercase tracking-widest text-white/70 mb-4 font-medium">
              This gap is increasingly visible to:
            </div>
            <div className="space-y-2">
              {frame.audiences?.map((audience, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="flex items-start gap-3 text-sm md:text-base text-white/90 font-normal tracking-wide"
                >
                  <span className="text-accent-muted mt-1">•</span>
                  <span>{audience}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom: Key highlights */}
        <KeyHighlight delay={0.8}>
          The development is world-class — but the digital presence doesn&apos;t reflect it yet.
        </KeyHighlight>

        {frame.conclusion && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mt-4"
          >
            <KeyHighlight delay={1.0}>
              {frame.conclusion}
            </KeyHighlight>
          </motion.div>
        )}
      </div>
    </Frame>
  );
}

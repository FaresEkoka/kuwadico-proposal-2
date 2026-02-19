"use client";

import { motion } from "framer-motion";
import { content } from "@/content";
import Frame from "../Frame";
import ReadTimeIndicator from "../ReadTimeIndicator";
import KeyHighlight from "../KeyHighlight";

export default function BestPracticesFrame() {
  const frame = content.frames[4];

  return (
    <Frame id="best-practices" className="bg-dark-lighter">
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
      <div className="h-full flex flex-col justify-center p-6 md:p-8 lg:p-10 max-w-6xl overflow-hidden mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          {frame.kicker && (
            <div className="flex items-center gap-3 mb-3">
              <div className="text-xs uppercase tracking-widest text-accent-muted font-medium">
                {frame.kicker.toUpperCase()}
              </div>
              <ReadTimeIndicator minutes={3} />
            </div>
          )}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 leading-[0.9] tracking-tighter uppercase presentation-headline">
            {frame.headline}
          </h2>
          <p className="text-sm md:text-base text-white/90 leading-relaxed mb-4 font-normal tracking-wide">
            {frame.intro}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-2 mb-4"
        >
          {frame.patterns?.map((pattern, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="flex items-start gap-3 text-sm md:text-base text-white/90 font-normal tracking-wide"
            >
              <span className="text-accent-muted mt-1">•</span>
              <span>{pattern}</span>
            </motion.div>
          ))}
        </motion.div>

        <KeyHighlight delay={0.7}>
          This prevents the common enterprise mistake of: &apos;Explaining everything equally and clarifying nothing.&apos;
        </KeyHighlight>
      </div>
    </Frame>
  );
}

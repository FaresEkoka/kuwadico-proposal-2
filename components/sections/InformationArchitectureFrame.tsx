"use client";

import { motion } from "framer-motion";
import { content } from "@/content";
import Frame from "../Frame";
import KeyHighlight from "../KeyHighlight";

export default function InformationArchitectureFrame() {
  const frame = content.frames[9];

  return (
    <Frame id="information-architecture" className="bg-dark">
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "url('/backgrounds/10.png')",
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
            <div className="text-xs uppercase tracking-widest text-accent-muted mb-2 font-medium">
              {frame.kicker.toUpperCase()}
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
          {frame.principles?.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="flex items-start gap-3 text-sm md:text-base text-white/90 font-normal tracking-wide"
            >
              <span className="text-accent-muted mt-1">•</span>
              <span>{principle}</span>
            </motion.div>
          ))}
        </motion.div>

        <KeyHighlight delay={0.7}>
          {frame.conclusion}
        </KeyHighlight>
      </div>
    </Frame>
  );
}

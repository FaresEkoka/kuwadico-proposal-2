"use client";

import { motion } from "framer-motion";
import { content, getFrame } from "@/content";
import Frame from "../Frame";
import KeyHighlight from "../KeyHighlight";

const BRAND_SECTIONS = [
  {
    header: "What we'll keep",
    items: [
      "Your existing logo and wordmark",
      "Core brand colors",
      "Established positioning as a premium developer",
    ],
  },
  {
    header: "What we'll elevate",
    items: [
      "Typography system and hierarchy",
      "Visual consistency across digital channels",
      "Imagery and tone of voice",
    ],
  },
  {
    header: "What we won't do",
    items: [
      "Propose a full rebrand (that's a different project)",
      "Invent a new visual identity",
      "Change what's working",
    ],
  },
];

export default function BrandRealityFrame() {
  const frame = getFrame("brand-reality")!;

  return (
    <Frame id="brand-reality" className="bg-dark-lighter">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "url('/backgrounds/1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100%",
        }}
      />
      <div className="h-full flex flex-col justify-center p-6 md:p-8 lg:p-10 max-w-6xl overflow-hidden mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          {frame.kicker && (
            <div className="text-xs uppercase tracking-widest text-accent-muted mb-2 font-sans font-medium">
              {frame.kicker.toUpperCase()}
            </div>
          )}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 leading-[0.9] tracking-tighter uppercase presentation-headline">
            {frame.headline}
          </h2>
          <p className="text-sm md:text-base text-white/90 leading-relaxed font-sans font-normal tracking-wide">
            Kuwadico already has the core elements — logo, colors, positioning. The problem isn&apos;t the brand itself. It&apos;s that the digital presence isn&apos;t applying it with the consistency and confidence it deserves.
          </p>
        </motion.div>

        {/* Three Columns - Clean Typography */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-6 items-start"
        >
          {BRAND_SECTIONS.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + sectionIndex * 0.1 }}
              className="flex flex-col items-start"
            >
              <div className="text-sm uppercase tracking-wide text-accent-muted font-sans font-medium border-b border-accent-muted/30 pb-2 mb-4 w-full">
                {section.header}
              </div>
              <div className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="text-base text-readable-muted font-sans leading-loose"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <KeyHighlight delay={0.7}>
          The goal is immediate impact within your current brand — not a 6-month identity overhaul.
        </KeyHighlight>
      </div>
    </Frame>
  );
}

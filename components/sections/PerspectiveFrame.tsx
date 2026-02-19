"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { content, getFrame } from "@/content";
import Frame from "../Frame";

const PERSPECTIVE_ITEMS = [
  {
    number: "1",
    title: "Clarity in seconds",
    description:
      "The homepage must answer \"what is Grand Heights and why should I care\" within 5 seconds. No scrolling required. No guessing.",
  },
  {
    number: "2",
    title: "Structure signals credibility",
    description:
      "Property buyers judge developers by how organized their information is. Messy navigation = messy developer. Clear architecture = clear thinking.",
  },
  {
    number: "3",
    title: "Restraint builds trust",
    description:
      "The most confident brands say less, not more. Every extra word, animation, or graphic dilutes the message. We cut until only the essential remains.",
  },
  {
    number: "4",
    title: "Proof over promises",
    description:
      "Claims like \"luxury living\" mean nothing. Masterplan visuals, renders, community features, and specific unit details build real credibility.",
  },
  {
    number: "5",
    title: "Design for the skeptic",
    description:
      "Your most important visitors are the hardest to impress — serious property buyers who've seen every developer pitch. The site must earn their trust, not assume it.",
  },
];

export default function PerspectiveFrame() {
  const frame = getFrame("perspective")!;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Frame id="perspective" className="bg-dark">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "url('/backgrounds/11.png')",
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
            {frame.intro}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="space-y-0">
            {PERSPECTIVE_ITEMS.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="py-4 border-b border-white/10 last:border-b-0"
              >
                <div className="flex items-start gap-3">
                  <span className="text-accent-muted font-sans font-medium">
                    {item.number}.
                  </span>
                  <div className="flex flex-col">
                    <span className="text-sm md:text-base font-sans font-medium text-white">
                      {item.title}
                    </span>
                    <motion.div
                      initial={false}
                      animate={{
                        height: isHovered ? "auto" : 0,
                        opacity: isHovered ? 1 : 0,
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pt-2 text-sm text-readable-muted leading-relaxed font-sans">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Hover Hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 0 : 1 }}
            transition={{ duration: 0.2 }}
            className="mt-4 text-center"
          >
            <span className="text-xs uppercase tracking-wide text-readable-subtle font-sans">
              Hover to explore
            </span>
          </motion.div>
        </motion.div>
      </div>
    </Frame>
  );
}

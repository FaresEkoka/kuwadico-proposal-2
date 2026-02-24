"use client";

import { motion } from "framer-motion";
import Frame from "../Frame";
import LazyBackground from "../LazyBackground";

const DIRECTIONS = [
  {
    id: "direction-1",
    title: "Direction 1",
    subtitle: "Enterprise Authority",
    description: "Dark, confident, globe-focused. Emphasizes legacy, trust, and global scale.",
    link: "https://advansys-1.vercel.app/",
  },
  {
    id: "direction-2",
    title: "Direction 2",
    subtitle: "Modern Minimal",
    description: "Light, clean, scroll-driven. Feels contemporary, design-forward, and calm.",
    link: "https://advansys-2.vercel.app/",
  },
];

export default function StyleDirectionsFrame() {
  return (
    <Frame id="style-directions" className="bg-dark">
      <LazyBackground src="/backgrounds/11.png" />
      <div className="h-full flex flex-col justify-center p-6 md:p-8 lg:p-10 max-w-6xl overflow-hidden mx-auto relative z-10">
        {/* Header - matches other sections */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <div className="text-xs uppercase tracking-widest text-accent-muted mb-2 font-sans font-medium">
            See it in action
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black leading-[0.9] tracking-tighter uppercase presentation-headline mb-3">
            We built two directions to show you — not just tell you.
          </h2>
          <p className="text-sm md:text-base text-white/70 font-sans max-w-2xl leading-relaxed">
            These samples do not represent a final design in any way. They were created quickly and exclusively for this proposal to help you feel how different directions could come to life for Kuwadico.
          </p>
        </motion.div>

        {/* Cards - Grid with equal heights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4"
        >
          {DIRECTIONS.map((direction, index) => (
            <motion.div
              key={direction.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
              className="bg-white/5 rounded-lg p-5 md:p-6 border border-white/10 flex flex-col h-full"
            >
              {/* Card content - flex-1 to push button to bottom */}
              <div className="flex-1 mb-4">
                <div className="text-xs uppercase tracking-widest text-white/50 font-sans font-medium mb-3">
                  {direction.title}
                </div>
                <h3 className="font-sans font-semibold text-white text-xl md:text-2xl mb-4 whitespace-nowrap">
                  {direction.subtitle}
                </h3>
                <p className="text-sm text-white/60 font-sans leading-relaxed">
                  {direction.description}
                </p>
              </div>

              {/* Button - always at bottom */}
              <a
                href={direction.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-6 py-3 bg-accent-muted text-dark font-sans font-semibold rounded-lg hover:bg-accent-muted/90 transition-colors text-sm text-center mt-auto"
              >
                View {direction.title} →
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Note - matches proposal style */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-sm text-white/50 font-sans italic"
        >
          These are conversation starters, not commitments. None of this is final. None of this is locked. The real design process begins together.
        </motion.p>
      </div>
    </Frame>
  );
}

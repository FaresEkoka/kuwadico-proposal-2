"use client";

import { motion } from "framer-motion";

interface KeyHighlightProps {
  children: React.ReactNode;
  delay?: number;
}

export default function KeyHighlight({ children, delay = 0 }: KeyHighlightProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      className="my-6 pl-6 border-l-4 border-accent-muted"
    >
      <p className="text-lg md:text-xl text-accent-muted font-medium leading-relaxed">
        {children}
      </p>
    </motion.div>
  );
}

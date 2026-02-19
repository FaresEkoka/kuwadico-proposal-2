"use client";

import { motion } from "framer-motion";

interface SocialProofProps {
  delay?: number;
  compact?: boolean;
}

export default function SocialProof({ delay = 0, compact = false }: SocialProofProps) {
  const stats = [
    { value: "8+ years", label: "In strategic digital work" },
    { value: "Enterprise", label: "Focus across MENA" },
    { value: "Structure-first", label: "Approach to execution" },
  ];

  if (compact) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay }}
        className="flex flex-wrap items-center gap-6 py-4 border-y border-white/10"
      >
        {stats.map((stat, index) => (
          <div key={index} className="flex items-baseline gap-2">
            <span className="text-sm font-semibold text-accent-muted">
              {stat.value}
            </span>
            <span className="text-xs text-white/60">{stat.label}</span>
          </div>
        ))}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-white/5 border border-white/10 rounded-lg"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: delay + 0.1 + index * 0.1 }}
          className="text-center"
        >
          <div className="text-2xl md:text-3xl font-bold text-accent-muted mb-2">
            {stat.value}
          </div>
          <div className="text-xs text-white/70 uppercase tracking-wider">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

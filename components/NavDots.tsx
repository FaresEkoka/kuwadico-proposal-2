"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface NavDotsProps {
  total: number;
  current: number;
  onDotClick: (index: number) => void;
}

export default function NavDots({ total, current, onDotClick }: NavDotsProps) {
  return (
    <div className="hidden md:flex fixed left-8 top-1/2 -translate-y-1/2 z-50 flex-col gap-3">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className="relative w-2 h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-muted/50"
          aria-label={`Go to section ${index + 1}`}
        >
          <motion.div
            className={`absolute inset-0 rounded-full ${
              index === current
                ? "bg-accent-muted"
                : "bg-white/20 hover:bg-white/40"
            }`}
            animate={{
              scale: index === current ? 1.5 : 1,
              opacity: index === current ? 1 : 0.5,
            }}
            transition={{ duration: 0.2 }}
          />
        </button>
      ))}
    </div>
  );
}

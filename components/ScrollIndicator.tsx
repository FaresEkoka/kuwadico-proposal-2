"use client";

import { motion } from "framer-motion";
import { useNavigation } from "@/context/NavigationContext";

interface ScrollIndicatorProps {
  total: number;
  current: number;
}

export default function ScrollIndicator({ total, current }: ScrollIndicatorProps) {
  const { scrollToSection } = useNavigation();

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-2">
      {Array.from({ length: total }, (_, i) => {
        const isActive = i === current;

        return (
          <button
            key={i}
            onClick={() => scrollToSection(i)}
            className="group relative flex items-center gap-3 transition-all duration-200"
            aria-label={`Go to slide ${i + 1}`}
          >
            {/* Dot indicator */}
            <div
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                isActive
                  ? "bg-accent-muted scale-150"
                  : "bg-white/20 group-hover:bg-accent-muted/50 group-hover:scale-125"
              }`}
            />

            {/* Slide number - appears on hover or when active */}
            <span
              className={`text-[11px] font-medium transition-all duration-200 ${
                isActive
                  ? "text-accent-muted opacity-100"
                  : "text-white/60 opacity-0 group-hover:opacity-100"
              }`}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
          </button>
        );
      })}
    </div>
  );
}

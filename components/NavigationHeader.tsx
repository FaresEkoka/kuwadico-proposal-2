"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigation } from "@/context/NavigationContext";
import { content } from "@/content";
import { FRAME_IDS, SECTION_NAMES } from "@/constants/frames";

export default function NavigationHeader() {
  const { currentSection, scrollToSection } = useNavigation();
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowMenu(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const progress = ((currentSection + 1) / FRAME_IDS.length) * 100;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark/98 backdrop-blur-xl border-b border-white/5">
      {/* Progress bar at top */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-white/5">
        <motion.div
          className="h-full bg-gradient-to-r from-accent-muted to-accent-muted/60"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-2 sm:py-3">
        <div className="flex items-center justify-between gap-3 sm:gap-6">
          {/* Left: Section counter and name */}
          <div className="flex items-center gap-2 sm:gap-4 flex-1 min-w-0">
            <div className="flex-shrink-0">
              <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-accent-muted/60 font-medium leading-none">
                {String(currentSection + 1).padStart(2, "0")} / {FRAME_IDS.length}
              </div>
            </div>
            <div className="h-3 sm:h-4 w-px bg-white/10" />
            <div className="flex-1 min-w-0">
              <div className="text-[10px] sm:text-xs uppercase tracking-[0.1em] sm:tracking-[0.15em] text-white/80 truncate font-medium">
                {SECTION_NAMES[currentSection]}
              </div>
            </div>
          </div>

          {/* Right: Menu button */}
          <div className="relative">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="group px-3 sm:px-5 py-2 text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] font-medium text-white/70 hover:text-accent-muted border border-white/10 hover:border-accent-muted/30 rounded transition-all duration-200 active:scale-95"
              aria-label="Navigation menu"
            >
              <span className="flex items-center gap-1.5 sm:gap-2">
                <span className="hidden sm:inline">Filter Sections</span>
                <span className="inline sm:hidden">Menu</span>
                <svg
                  className={`w-2.5 sm:w-3 h-2.5 sm:h-3 transition-transform duration-200 ${showMenu ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>

            <AnimatePresence>
              {showMenu && (
                <>
                  <div
                    className="fixed inset-0 z-40 bg-dark/20 backdrop-blur-sm"
                    onClick={() => setShowMenu(false)}
                  />
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute right-0 top-full mt-2 sm:mt-3 w-[calc(100vw-2rem)] sm:w-80 max-w-md bg-dark/98 backdrop-blur-xl border border-white/10 rounded-lg shadow-2xl z-50 max-h-[60vh] sm:max-h-[70vh] overflow-hidden"
                  >
                    {/* Header */}
                    <div className="px-4 py-3 border-b border-white/5">
                      <div className="text-[10px] uppercase tracking-[0.2em] text-accent-muted/60 font-medium">
                        All Sections
                      </div>
                    </div>

                    {/* Sections list */}
                    <div className="overflow-y-auto max-h-[calc(75vh-120px)] py-1">
                      {FRAME_IDS.map((id, index) => {
                        const frame = content.frames[index];
                        return (
                          <button
                            key={id}
                            onClick={() => {
                              scrollToSection(index);
                              setShowMenu(false);
                            }}
                            className={`w-full text-left px-4 py-3 transition-all duration-150 ${
                              index === currentSection
                                ? "bg-accent-muted/10 border-l-2 border-accent-muted"
                                : "border-l-2 border-transparent hover:bg-white/5 hover:border-white/20"
                            }`}
                          >
                            <div className="flex items-start gap-3">
                              <div className={`text-[10px] uppercase tracking-wider font-medium leading-none mt-0.5 flex-shrink-0 ${
                                index === currentSection ? "text-accent-muted" : "text-white/40"
                              }`}>
                                {String(index + 1).padStart(2, "0")}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className={`text-xs uppercase tracking-wide font-medium mb-1 ${
                                  index === currentSection ? "text-accent-muted" : "text-white/80"
                                }`}>
                                  {SECTION_NAMES[index]}
                                </div>
                                {frame?.headline && (
                                  <div className="text-[10px] text-white/40 line-clamp-1 leading-relaxed">
                                    {frame.headline}
                                  </div>
                                )}
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    {/* Footer */}
                    <div className="border-t border-white/5 px-4 py-3 hidden sm:block">
                      <div className="text-[10px] text-white/40 tracking-wide">
                        Press <kbd className="px-1.5 py-0.5 bg-white/5 rounded text-white/60 font-mono">?</kbd> for keyboard shortcuts
                      </div>
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </header>
  );
}

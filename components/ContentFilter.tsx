"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigation } from "@/context/NavigationContext";
import { FRAME_IDS } from "@/constants/frames";

const SECTION_TAGS: Record<string, string[]> = {
  "hero": ["Overview"],
  "executive-summary": ["Overview", "Summary"],
  "about-flex": ["About", "Team"],
  "context": ["Context", "Background"],
  "business-context": ["Context", "Business"],
  "best-practices": ["Strategy", "Research"],
  "current-vs-target": ["Analysis", "Comparison"],
  "challenge": ["Problem", "Analysis"],
  "objective": ["Strategy", "Goals"],
  "user-journeys": ["Strategy", "Users"],
  "information-architecture": ["Strategy", "Structure"],
  "perspective": ["Strategy", "Approach"],
  "brand-reality": ["Strategy", "Brand"],
  "design-philosophy": ["Design", "Approach"],
  "whats-included": ["Overview", "Scope"],
  "website": ["Scope", "Website"],
  "social-media": ["Scope", "Social Media", "Commercial"],
  "project-management": ["Process", "Management"],
  "timeline-investment": ["Commercial", "Timeline"],
  "content-strategy": ["Strategy", "Content"],
  "governance": ["Process", "Management"],
  "risks": ["Process", "Planning"],
  "risk-transparency": ["Process", "Planning", "Trust"],
};

const ALL_TAGS = Array.from(new Set(Object.values(SECTION_TAGS).flat()));

export default function ContentFilter() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set());
  const { scrollToSection } = useNavigation();

  const filteredSections = useMemo(() => {
    return FRAME_IDS.filter((id) => {
      const tags = SECTION_TAGS[id] || [];

      // Filter by tags
      if (selectedTags.size > 0) {
        const hasSelectedTag = Array.from(selectedTags).some((tag) =>
          tags.includes(tag)
        );
        if (!hasSelectedTag) return false;
      }

      return true;
    }).map((id) => ({
      id,
      index: FRAME_IDS.indexOf(id),
    }));
  }, [selectedTags]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => {
      const next = new Set(prev);
      if (next.has(tag)) {
        next.delete(tag);
      } else {
        next.add(tag);
      }
      return next;
    });
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-40 px-3 py-2 sm:px-4 sm:py-3 bg-accent-muted text-dark text-sm font-semibold rounded-lg shadow-lg hover:bg-accent-muted/90 transition-colors active:scale-95"
        aria-label="Filter content"
      >
        <span className="hidden sm:inline">Filter Sections</span>
        <span className="inline sm:hidden">Filter</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 bg-dark/98 backdrop-blur-xl border border-white/20 rounded-lg shadow-xl p-4 sm:p-6 w-[calc(100vw-2rem)] sm:w-auto sm:max-w-md max-h-[70vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white">Filter Sections</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>

              {/* Tags */}
              <div className="mb-6">
                <div className="text-xs uppercase tracking-widest text-white/70 mb-3 font-medium">
                  Filter by Topic
                </div>
                <div className="flex flex-wrap gap-2">
                  {ALL_TAGS.map((tag) => {
                    const isSelected = selectedTags.has(tag);
                    return (
                      <button
                        key={tag}
                        onClick={() => toggleTag(tag)}
                        className={`px-3 py-1.5 text-xs rounded transition-colors ${
                          isSelected
                            ? "bg-accent-muted text-dark"
                            : "bg-white/10 text-white/70 hover:bg-white/20"
                        }`}
                      >
                        {tag}
                      </button>
                    );
                  })}
                </div>
                {selectedTags.size > 0 && (
                  <button
                    onClick={() => setSelectedTags(new Set())}
                    className="mt-3 text-xs text-accent-muted hover:text-accent-muted/80 transition-colors"
                  >
                    Clear filters
                  </button>
                )}
              </div>

              {/* Results */}
              {filteredSections.length > 0 && (
                <div>
                  <div className="text-xs uppercase tracking-widest text-white/70 mb-3 font-medium">
                    Matching Sections ({filteredSections.length})
                  </div>
                  <div className="space-y-2">
                    {filteredSections.map(({ id, index }) => (
                      <button
                        key={id}
                        onClick={() => {
                          scrollToSection(index);
                          setIsOpen(false);
                        }}
                        className="w-full text-left px-3 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded transition-colors"
                      >
                        {id.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

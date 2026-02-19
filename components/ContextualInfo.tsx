"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ContextualInfoProps {
  term: string;
  definition: string;
  relatedContent?: string[];
  children: React.ReactNode;
}

export default function ContextualInfo({
  term,
  definition,
  relatedContent,
  children,
}: ContextualInfoProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState<{ top: number; left: number } | null>(null);
  const triggerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (isOpen && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + 8,
        left: rect.left,
      });
    }
  }, [isOpen]);

  return (
    <>
      <span
        ref={triggerRef}
        onClick={() => setIsOpen(!isOpen)}
        className="underline decoration-dotted decoration-accent-muted/50 underline-offset-2 cursor-help hover:decoration-accent-muted transition-colors"
      >
        {children}
      </span>

      <AnimatePresence>
        {isOpen && position && (
          <>
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              className="fixed z-50 bg-dark border border-white/20 rounded-lg shadow-xl p-4 max-w-xs"
              style={{
                top: `${position.top}px`,
                left: `${position.left}px`,
              }}
            >
              <div className="text-xs uppercase tracking-widest text-accent-muted mb-2 font-medium">
                {term}
              </div>
              <p className="text-xs text-white/80 leading-relaxed mb-3">
                {definition}
              </p>
              {relatedContent && relatedContent.length > 0 && (
                <div className="pt-3 border-t border-white/10">
                  <div className="text-xs text-white/60 mb-2">Related:</div>
                  <ul className="space-y-1">
                    {relatedContent.map((item, index) => (
                      <li key={index} className="text-xs text-accent-muted">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <button
                onClick={() => setIsOpen(false)}
                className="mt-3 text-xs text-white/50 hover:text-white transition-colors"
              >
                Close
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

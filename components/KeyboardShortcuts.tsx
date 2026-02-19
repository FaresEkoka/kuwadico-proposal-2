"use client";

import { motion, AnimatePresence } from "framer-motion";

interface KeyboardShortcutsProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function KeyboardShortcuts({ isOpen, onClose }: KeyboardShortcutsProps) {
  const shortcuts = [
    { key: "↑ / ↓", description: "Navigate between sections" },
    { key: "Space / Enter", description: "Go to next section" },
    { key: "1-9", description: "Jump to section number" },
    { key: "?", description: "Show/hide this menu" },
    { key: "Esc", description: "Close menus/overlays" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark border border-white/20 rounded-lg shadow-xl z-50 p-6 max-w-md w-full mx-4"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-white">Keyboard Shortcuts</h3>
              <button
                onClick={onClose}
                className="text-white/60 hover:text-white transition-colors"
                aria-label="Close"
              >
                ✕
              </button>
            </div>
            <div className="space-y-3">
              {shortcuts.map((shortcut, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-2 border-b border-white/10 last:border-0"
                >
                  <span className="text-sm text-white/70">{shortcut.description}</span>
                  <kbd className="px-2 py-1 text-xs font-mono bg-white/10 text-white/90 rounded">
                    {shortcut.key}
                  </kbd>
                </div>
              ))}
            </div>
            <button
              onClick={onClose}
              className="mt-6 w-full px-4 py-2 text-sm font-medium text-white bg-accent-muted/20 hover:bg-accent-muted/30 border border-accent-muted/50 rounded transition-colors"
            >
              Got it
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

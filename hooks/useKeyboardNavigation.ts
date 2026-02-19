"use client";

import { useEffect, useState } from "react";
import { useNavigation } from "@/context/NavigationContext";
import { FRAME_IDS } from "@/constants/frames";

export function useKeyboardNavigation() {
  const { currentSection, scrollToSection } = useNavigation();
  const [showShortcuts, setShowShortcuts] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't interfere with input fields
      if (
        (e.target as HTMLElement).tagName === "INPUT" ||
        (e.target as HTMLElement).tagName === "TEXTAREA" ||
        (e.target as HTMLElement).isContentEditable
      ) {
        return;
      }

      // Show shortcuts overlay
      if (e.key === "?") {
        e.preventDefault();
        setShowShortcuts((prev) => !prev);
        return;
      }

      // Close shortcuts overlay
      if (e.key === "Escape") {
        setShowShortcuts(false);
        return;
      }

      // Number keys: Jump to section (1-9, then 0 for 10, etc.)
      if (e.key >= "1" && e.key <= "9") {
        e.preventDefault();
        const sectionIndex = parseInt(e.key) - 1;
        if (sectionIndex < FRAME_IDS.length) {
          scrollToSection(sectionIndex);
        }
      }

      // Arrow keys: Navigate between sections
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        const direction = e.key === "ArrowDown" ? 1 : -1;
        const nextSection = Math.max(
          0,
          Math.min(FRAME_IDS.length - 1, currentSection + direction)
        );
        scrollToSection(nextSection);
      }

      // Space/Enter: Scroll down one section
      if (e.key === " " || e.key === "Enter") {
        if (e.key === " ") {
          e.preventDefault();
        }
        if (currentSection < FRAME_IDS.length - 1) {
          scrollToSection(currentSection + 1);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSection, scrollToSection]);

  return { showShortcuts, setShowShortcuts };
}

"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { FRAME_IDS } from "@/constants/frames";

interface NavigationContextType {
  currentSection: number;
  setCurrentSection: (index: number) => void;
  expandedSections: Set<string>;
  toggleSection: (sectionId: string) => void;
  scrollToSection: (index: number) => void;
  selectedPricingPlan: string | null;
  setSelectedPricingPlan: (plan: string | null) => void;
  viewModes: Record<string, string>;
  setViewMode: (frameId: string, mode: string) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [currentSection, setCurrentSection] = useState(0);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());
  const [selectedPricingPlan, setSelectedPricingPlan] = useState<string | null>(null);
  const [viewModes, setViewModes] = useState<Record<string, string>>({});

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) => {
      const next = new Set(prev);
      if (next.has(sectionId)) {
        next.delete(sectionId);
      } else {
        next.add(sectionId);
      }
      return next;
    });
  };

  const scrollToSection = (index: number) => {
    const sectionId = FRAME_IDS[index];
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        setCurrentSection(index);
      }
    }
  };

  const setViewMode = (frameId: string, mode: string) => {
    setViewModes((prev) => ({
      ...prev,
      [frameId]: mode,
    }));
  };

  return (
    <NavigationContext.Provider
      value={{
        currentSection,
        setCurrentSection,
        expandedSections,
        toggleSection,
        scrollToSection,
        selectedPricingPlan,
        setSelectedPricingPlan,
        viewModes,
        setViewMode,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
}

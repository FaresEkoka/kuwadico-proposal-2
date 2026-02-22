"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import { FRAME_IDS } from "@/constants/frames";
import LoadingScreen from "@/components/LoadingScreen";
import HeroFrame from "@/components/sections/HeroFrame";
import ExecutiveSummaryFrame from "@/components/sections/ExecutiveSummaryFrame";
import AboutFlexFrame from "@/components/sections/AboutFlexFrame";
import ContextFrame from "@/components/sections/ContextFrame";
import BusinessContextFrame from "@/components/sections/BusinessContextFrame";
import BestPracticesFrame from "@/components/sections/BestPracticesFrame";
import CurrentVsTargetFrame from "@/components/sections/CurrentVsTargetFrame";
import ChallengeFrame from "@/components/sections/ChallengeFrame";
import ObjectiveFrame from "@/components/sections/ObjectiveFrame";
import UserJourneysFrame from "@/components/sections/UserJourneysFrame";
import InformationArchitectureFrame from "@/components/sections/InformationArchitectureFrame";
import PerspectiveFrame from "@/components/sections/PerspectiveFrame";
import DesignPhilosophyFrame from "@/components/sections/DesignPhilosophyFrame";
import WhatsIncludedFrame from "@/components/sections/WhatsIncludedFrame";
import WebsiteFrame from "@/components/sections/WebsiteFrame";
import SocialMediaFrame from "@/components/sections/SocialMediaFrame";
import ProjectManagementFrame from "@/components/sections/ProjectManagementFrame";
import TimelineInvestmentFrame from "@/components/sections/TimelineInvestmentFrame";
import GovernanceFrame from "@/components/sections/GovernanceFrame";
import ScrollIndicator from "@/components/ScrollIndicator";
import ProgressCounter from "@/components/ProgressCounter";
import NavigationHeader from "@/components/NavigationHeader";
import KeyboardShortcuts from "@/components/KeyboardShortcuts";
import ContentFilter from "@/components/ContentFilter";
import { useNavigation } from "@/context/NavigationContext";
import { useAssetContext } from "@/context/AssetContext";
import { useKeyboardNavigation } from "@/hooks/useKeyboardNavigation";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const { currentSection, setCurrentSection } = useNavigation();
  const { setAllAssets } = useAssetContext();
  const { showShortcuts, setShowShortcuts } = useKeyboardNavigation();
  const observerRef = useRef<IntersectionObserver | null>(null);

  const handleLoadComplete = useCallback((assets: Record<string, string>) => {
    setAllAssets(assets);
    setIsLoading(false);
  }, [setAllAssets]);

  useEffect(() => {
    const frames = FRAME_IDS.map((id) => document.getElementById(id));
    const validFrames = frames.filter(Boolean) as HTMLElement[];

    if (validFrames.length === 0) {
      return;
    }

    // Use IntersectionObserver only - no redundant scroll handler
    const observerOptions = {
      root: null,
      rootMargin: "-45% 0px -45% 0px",
      threshold: 0,
    };

    let lastSetSection = -1;

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      // Find the entry that is intersecting (if any)
      const intersectingEntry = entries.find((entry) => entry.isIntersecting);

      if (intersectingEntry) {
        const frameId = intersectingEntry.target.id;
        const index = FRAME_IDS.indexOf(frameId as typeof FRAME_IDS[number]);
        if (index !== -1 && index !== lastSetSection) {
          lastSetSection = index;
          setCurrentSection(index);
        }
      }
    };

    observerRef.current = new IntersectionObserver(observerCallback, observerOptions);

    validFrames.forEach((frame) => {
      observerRef.current?.observe(frame);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [setCurrentSection]);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen onLoadComplete={handleLoadComplete} />}
      </AnimatePresence>

      <main className={`relative w-full ${isLoading ? "opacity-0" : "opacity-100"} transition-opacity duration-500`}>
        <NavigationHeader />
        <KeyboardShortcuts isOpen={showShortcuts} onClose={() => setShowShortcuts(false)} />
        <ContentFilter />
        <ScrollIndicator
          total={FRAME_IDS.length}
          current={currentSection}
        />
        <ProgressCounter current={currentSection + 1} total={FRAME_IDS.length} />

        <HeroFrame />
        <ExecutiveSummaryFrame />
        <AboutFlexFrame />
        <ContextFrame />
        <BusinessContextFrame />
        <BestPracticesFrame />
        <CurrentVsTargetFrame />
        <ChallengeFrame />
        <ObjectiveFrame />
        <UserJourneysFrame />
        <InformationArchitectureFrame />
        <PerspectiveFrame />
        <DesignPhilosophyFrame />
        <WhatsIncludedFrame />
        <WebsiteFrame />
        <SocialMediaFrame />
        <ProjectManagementFrame />
        <TimelineInvestmentFrame />
        <GovernanceFrame />
      </main>
    </>
  );
}

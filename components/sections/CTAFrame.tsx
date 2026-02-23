"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { getFrame } from "@/content";
import Frame from "../Frame";
import LazyBackground from "../LazyBackground";

const QUICK_LINKS = [
  { label: "Overview", href: "#executive-summary" },
  { label: "What's Included", href: "#whats-included" },
  { label: "Website", href: "#website" },
  { label: "Social Media", href: "#social-media" },
  { label: "Timeline", href: "#timeline-investment" },
];

export default function CTAFrame() {
  const [copied, setCopied] = useState(false);
  const frame = getFrame("cta")!;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Frame id="cta" className="bg-dark-lighter">
      <LazyBackground src="/backgrounds/1.png" />
      <div className="min-h-full flex flex-col justify-center items-center p-8 md:p-16 lg:p-24 mx-auto text-center relative z-10 max-w-3xl">
        {/* Kicker */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="text-xs uppercase tracking-widest text-accent-muted font-medium">
            Flex Labs × Kuwadico
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-6"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[0.9] tracking-tighter uppercase presentation-headline">
            {frame.headline}
          </h2>
        </motion.div>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base md:text-lg text-white/70 leading-relaxed max-w-2xl mb-10"
        >
          {(frame as any).intro}
        </motion.p>

        {/* Next Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-10 w-full max-w-md"
        >
          <div className="text-xs uppercase tracking-widest text-accent-muted mb-4 font-medium">
            Next Steps
          </div>
          <div className="space-y-3 text-left">
            {((frame as any).nextSteps || []).map((step: string, i: number) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-accent-muted font-mono text-sm mt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm text-white/80 leading-relaxed">{step}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 mb-8"
        >
          <a
            href="/downloads/Kuwadico_Commercial_Proposal.pdf"
            download
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-accent-muted text-dark font-semibold rounded-lg hover:bg-accent hover:scale-105 transition-all text-center"
          >
            Download Commercial Proposal
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </a>
          <button
            onClick={handleShare}
            className="px-8 py-3 border border-white/20 text-white font-semibold rounded-lg hover:border-white/40 hover:bg-white/5 transition-colors min-w-[160px]"
          >
            {copied ? "Copied!" : "Share Proposal"}
          </button>
        </motion.div>

        {/* Closing */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-sm text-white/50 italic mb-12 max-w-lg"
        >
          {(frame as any).closing}
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="w-full max-w-md h-px bg-white/10 mb-10"
        />

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-10"
        >
          <div className="text-xs uppercase tracking-widest text-white/50 mb-4">
            Quick Links
          </div>
          <div className="flex flex-wrap justify-center gap-x-2 gap-y-2 text-sm text-white/50">
            {QUICK_LINKS.map((link, index) => (
              <span key={link.label} className="flex items-center">
                <button
                  onClick={() => scrollToSection(link.href)}
                  className="hover:text-white transition-colors"
                >
                  {link.label}
                </button>
                {index < QUICK_LINKS.length - 1 && (
                  <span className="mx-2 text-white/30">·</span>
                )}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center"
        >
          <div className="text-xs uppercase tracking-[0.2em] text-white/30 mb-2">
            Flex Labs
          </div>
          <div className="text-xs uppercase tracking-widest text-white/20">
            Prepared for Kuwadico
          </div>
        </motion.div>
      </div>
    </Frame>
  );
}

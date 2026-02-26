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

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base md:text-lg text-white/70 leading-relaxed max-w-2xl mb-8"
        >
          This proposal outlines how Flex Labs can help Kuwadico close the gap between what you&apos;re building and how it&apos;s seen online. Let&apos;s talk when you&apos;re ready.
        </motion.p>

        {/* Share Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          <button
            onClick={handleShare}
            className="px-8 py-3 border border-white/20 text-white font-semibold rounded-lg hover:border-white/40 hover:bg-white/5 transition-colors min-w-[160px]"
          >
            {copied ? "Copied!" : "Share Proposal"}
          </button>
        </motion.div>

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

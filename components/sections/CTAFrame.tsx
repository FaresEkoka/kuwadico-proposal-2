"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Frame from "../Frame";
import LazyBackground from "../LazyBackground";

const QUICK_LINKS = [
  { label: "Overview", href: "#executive-summary" },
  { label: "Approach", href: "#approach" },
  { label: "Pricing", href: "#pricing" },
  { label: "Success Criteria", href: "#success-criteria" },
  { label: "Roadmap", href: "#future-roadmap" },
];

export default function CTAFrame() {
  const [copied, setCopied] = useState(false);

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
      <div className="min-h-full flex flex-col justify-center items-center p-8 md:p-16 lg:p-24 mx-auto text-center relative z-10 max-w-2xl">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            That&apos;s everything.
          </h2>
          <p className="text-lg md:text-xl text-white/70 mb-8">
            Questions? Thoughts? Let&apos;s talk.
          </p>

          {/* Email */}
          <a
            href="mailto:morad@flexlabs.me"
            className="inline-block text-lg md:text-xl text-white hover:text-accent-muted transition-colors mb-10 underline underline-offset-4 decoration-white/30 hover:decoration-accent-muted"
          >
            morad@flexlabs.me
          </a>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col sm:flex-row gap-4 mb-16"
        >
          <a
            href="mailto:morad@flexlabs.me"
            className="px-8 py-3 bg-accent-muted text-dark font-semibold rounded-lg hover:bg-accent-muted/90 transition-colors text-center"
          >
            Email Morad →
          </a>
          <button
            onClick={handleShare}
            className="px-8 py-3 border border-white/20 text-white font-semibold rounded-lg hover:border-white/40 hover:bg-white/5 transition-colors min-w-[160px]"
          >
            {copied ? "Copied!" : "Share Proposal"}
          </button>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-md h-px bg-white/10 mb-10"
        />

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
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

        {/* Bottom Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-24 h-px bg-white/10 mb-10"
        />

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <div className="text-xs uppercase tracking-[0.2em] text-white/30 mb-2">
            Flex Labs
          </div>
          <div className="text-xs uppercase tracking-widest text-white/20">
            Prepared for Forte Cloud
          </div>
        </motion.div>
      </div>
    </Frame>
  );
}

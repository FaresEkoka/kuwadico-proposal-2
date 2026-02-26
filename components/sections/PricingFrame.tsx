"use client";

import { motion } from "framer-motion";
import Frame from "../Frame";
import LazyBackground from "../LazyBackground";

const WHATS_INCLUDED = [
  "10 unique page designs",
  "Lead tracking & CRM integration",
  "Mobile-first responsive build",
  "CMS setup and documentation",
  "SEO optimized for West Cairo & Sheikh Zayed",
  "8-week delivery timeline",
];

const PAGE_BREAKDOWN = [
  { page: "Home / Landing", detail: "unique design" },
  { page: "About Kuwadico", detail: "corporate positioning" },
  { page: "Grand Heights Overview", detail: "master plan showcase" },
  { page: "Glory Phase II", detail: "phase-specific" },
  { page: "Master District Overview", detail: "unique design" },
  { page: "Commercial Offering", detail: "unique design" },
  { page: "Partnership", detail: "unique design" },
  { page: "Contact / Inquiry", detail: "CRM gateway" },
  { page: "Blog / News", detail: "unique design" },
];

export default function PricingFrame() {
  return (
    <Frame id="pricing" className="bg-dark">
      <LazyBackground src="/backgrounds/10.png" />
      <div className="h-full flex flex-col justify-center p-6 md:p-8 lg:p-10 max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="text-xs uppercase tracking-widest text-accent-muted mb-2 font-sans font-medium">
            Website Investment
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[0.9] tracking-tighter uppercase presentation-headline mb-4">
            Transparent Pricing.
          </h2>
          <p className="text-sm md:text-base text-white/70 font-sans">
            One package. Clear scope. No hidden costs.
          </p>
        </motion.div>

        {/* Two Cards Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Card 1 - What's Included */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/5 rounded-lg p-6 md:p-8 border border-white/10 flex flex-col"
          >
            {/* Title & Price */}
            <div className="mb-6">
              <div className="text-xs uppercase tracking-widest text-white/50 font-sans font-medium mb-4">
                Complete Package
              </div>
              <div className="font-sans font-bold text-4xl md:text-5xl text-accent-muted">
                $8,000
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-white/10 mb-6" />

            {/* Checklist */}
            <ul className="space-y-3 flex-1">
              {WHATS_INCLUDED.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                  className="flex items-center gap-3 text-sm md:text-base text-white/90 font-sans"
                >
                  <span className="text-accent-muted text-lg">✓</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Card 2 - Page Breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white/5 rounded-lg p-6 md:p-8 border border-white/10 flex flex-col"
          >
            {/* Title */}
            <div className="mb-6">
              <div className="text-xs uppercase tracking-widest text-white/50 font-sans font-medium mb-4">
                Page Breakdown
              </div>
              <div className="font-sans font-semibold text-xl md:text-2xl text-white/90">
                What You Get
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-white/10 mb-6" />

            {/* Page List */}
            <ul className="space-y-3 flex-1">
              {PAGE_BREAKDOWN.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                  className="flex items-start gap-3 text-sm md:text-base font-sans"
                >
                  <span className="text-accent-muted mt-0.5">•</span>
                  <span>
                    <span className="text-white/90">{item.page}</span>
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-sm text-white/50 font-sans italic text-center"
        >
          Phased payments aligned to milestones. No hidden costs. All prices are estimates pending discovery.
        </motion.p>
      </div>
    </Frame>
  );
}

"use client";

import { motion } from "framer-motion";
import Frame from "../Frame";
import LazyBackground from "../LazyBackground";
import ReadTimeIndicator from "../ReadTimeIndicator";

export default function ExecutiveSummaryFrame() {
  return (
    <Frame id="executive-summary" className="bg-dark">
      <LazyBackground src="/backgrounds/1.png" />
      <div className="h-full flex flex-col justify-center p-8 md:p-16 lg:p-24 max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="text-xs uppercase tracking-widest text-accent-muted font-medium">
              Executive Summary
            </div>
            <ReadTimeIndicator minutes={1} />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 leading-[0.9] tracking-tighter uppercase presentation-headline">
            The 60-second version
          </h2>
        </motion.div>

        {/* Key Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-3"
          >
            <div className="text-xs uppercase tracking-widest text-accent-muted font-medium">
              The Problem
            </div>
            <p className="text-base text-white/90 leading-relaxed">
              Kuwadico is developing one of the largest master-planned communities in West Cairo, but the current digital presence doesn&apos;t reflect the scale or quality of what&apos;s being built. It creates weak first impressions with buyers, investors, and partners.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-3"
          >
            <div className="text-xs uppercase tracking-widest text-accent-muted font-medium">
              The Solution
            </div>
            <p className="text-base text-white/90 leading-relaxed">
              A 10-page bilingual website and social media strategy designed to position Kuwadico as West Cairo&apos;s premier residential destination, showcase Grand Heights &amp; Glory Phase II, and generate qualified leads.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-3"
          >
            <div className="text-xs uppercase tracking-widest text-accent-muted font-medium">
              The Approach
            </div>
            <p className="text-base text-white/90 leading-relaxed">
              Three clear phases over 8 weeks: Discovery &amp; Content Strategy, Website Design, and Development &amp; Launch — plus ongoing social media management packages.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-3"
          >
            <div className="text-xs uppercase tracking-widest text-accent-muted font-medium">
              The Investment
            </div>
            <p className="text-base text-white/90 leading-relaxed">
              USD 3,000 for a 10-page bilingual website with CRM integration, plus social media packages from $500/mo. Transparent pricing with no hidden costs.
            </p>
          </motion.div>
        </div>

        {/* Trust Signal */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-8 pt-6 border-t border-white/5"
        >
          <p className="text-xs text-white/50 italic">
            This entire proposal is intentionally transparent about approach, timeline, and pricing — because that&apos;s how we believe partnerships should start.
          </p>
        </motion.div>
      </div>
    </Frame>
  );
}

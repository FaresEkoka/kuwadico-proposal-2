"use client";

import { motion } from "framer-motion";
import { content } from "@/content";
import Frame from "../Frame";

export default function RiskTransparencyFrame() {
  return (
    <Frame id="risk-transparency" className="bg-dark">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "url('/backgrounds/5.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100%",
        }}
      />
      <div className="h-full flex flex-col items-center justify-center px-8 md:px-16 lg:px-24 max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <div className="text-xs uppercase tracking-widest text-accent-muted font-medium mb-4">
            {content.proposal.preparedBy} &times; {content.client.name}
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[0.9] tracking-tighter uppercase presentation-headline mb-6"
        >
          Let&apos;s build
          <br />
          something great.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl mb-10"
        >
          Thank you for reviewing our proposal. We&apos;re ready to move forward whenever you are.
        </motion.p>

        <motion.a
          href="/downloads/Kuwadico_Commercial_Proposal.pdf"
          download
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="inline-flex items-center gap-3 px-8 py-4 bg-accent-muted text-dark font-semibold text-sm rounded-lg hover:bg-accent hover:scale-105 transition-all duration-200 shadow-lg active:scale-95"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download Commercial Proposal
        </motion.a>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 pt-6 border-t border-white/10"
        >
          <p className="text-xs text-white/40 uppercase tracking-wider">
            Prepared for {content.client.name} by {content.proposal.preparedBy}
          </p>
        </motion.div>
      </div>
    </Frame>
  );
}

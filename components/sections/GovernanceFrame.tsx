"use client";

import { motion } from "framer-motion";
import { content } from "@/content";
import Frame from "../Frame";
import KeyHighlight from "../KeyHighlight";

const TIMELINE_STEPS = [
  {
    title: "Single point of contact",
    description:
      "One person from Forte Cloud owns all decisions — copy approvals, design direction, final sign-off. No committees. No \"let me check with the team.\" This alone prevents 80% of project delays.",
  },
  {
    title: "Staged approvals",
    description:
      "We don't build everything then ask for feedback. You approve in stages: sitemap first, then wireframes, then design, then build. Once approved, we move forward. No backtracking.",
  },
  {
    title: "Timeboxed feedback",
    description:
      "48 hours to review each deliverable. After 48 hours, silence = approval. This keeps momentum and prevents \"we'll get to it next week\" from killing the timeline.",
  },
  {
    title: "Scope lock after kickoff",
    description:
      "New ideas mid-project are logged for Phase 2, not added to current scope. Scope creep is the #1 killer of website projects. We protect the timeline by protecting the scope.",
  },
];

export default function GovernanceFrame() {
  const frame = content.frames[14];

  return (
    <Frame id="governance" className="bg-dark-lighter">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "url('/backgrounds/4.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100%",
        }}
      />
      <div className="h-full flex flex-col justify-center p-6 md:p-8 lg:p-10 max-w-6xl overflow-hidden mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          {frame.kicker && (
            <div className="text-xs uppercase tracking-widest text-accent-muted mb-2 font-sans font-medium">
              {frame.kicker.toUpperCase()}
            </div>
          )}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[0.9] tracking-tighter uppercase presentation-headline">
            {frame.headline}
          </h2>
        </motion.div>

        {/* Horizontal Timeline - Desktop */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mb-8 hidden md:block"
        >
          {/* Timeline container with line and dots */}
          <div className="relative">
            {/* Horizontal line - centered on dots */}
            <div className="absolute top-1.5 left-0 right-0 h-px bg-white/20" />

            {/* Animated progress line */}
            <motion.div
              className="absolute top-1.5 left-0 right-0 h-px bg-accent-muted origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 1.2,
                delay: 0.3,
                ease: "easeOut",
              }}
            />

            {/* Steps with dots and content */}
            <div className="relative flex justify-between">
              {TIMELINE_STEPS.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.15 }}
                  className="flex flex-col items-center flex-1"
                >
                  {/* Dot - centered on the line */}
                  <motion.div
                    className="w-3 h-3 rounded-full bg-accent-muted relative z-10"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{
                      duration: 0.3,
                      delay: 0.4 + index * 0.2,
                      ease: "easeOut",
                    }}
                  />

                  {/* Content below */}
                  <div className="mt-6 text-center px-2">
                    <h3 className="text-white font-sans font-semibold text-sm uppercase tracking-wide mb-2">
                      {step.title}
                    </h3>
                    <p className="text-readable-muted font-sans text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Mobile: Vertical Stack */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mb-8 md:hidden"
        >
          {/* Vertical Line */}
          <div className="absolute left-[3px] top-2 bottom-2 w-px bg-white/20">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="h-full bg-accent-muted origin-top"
            />
          </div>

          <div className="space-y-6">
            {TIMELINE_STEPS.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="flex items-start gap-4 relative"
              >
                {/* Dot */}
                <div className="w-2 h-2 rounded-full bg-accent-muted flex-shrink-0 relative z-10 mt-1.5" />
                <div>
                  <h3 className="text-white font-sans font-semibold text-sm uppercase tracking-wide mb-1">
                    {step.title}
                  </h3>
                  <p className="text-readable-muted font-sans text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <KeyHighlight delay={1.0}>
          Clear ownership = fast decisions = on-time delivery.
        </KeyHighlight>
      </div>
    </Frame>
  );
}

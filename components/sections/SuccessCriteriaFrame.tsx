"use client";

import { motion } from "framer-motion";
import Frame from "../Frame";
import LazyBackground from "../LazyBackground";

const SUCCESS_CRITERIA = [
  {
    number: "01",
    statement: "A first-time visitor understands what Forte Cloud does within 10 seconds of landing on the homepage.",
  },
  {
    number: "02",
    statement: "The sales team actively uses the website when engaging enterprise clients.",
  },
  {
    number: "03",
    statement: "Forte Cloud's position as Egypt's leading AWS partner is immediately clear.",
  },
  {
    number: "04",
    statement: "New hires can understand the company's expertise and market position.",
  },
  {
    number: "05",
    statement: "The site structure scales for new services and case studies.",
  },
];

export default function SuccessCriteriaFrame() {
  return (
    <Frame id="success-criteria" className="bg-dark-lighter">
      <LazyBackground src="/backgrounds/8.png" />
      <div className="h-full flex flex-col justify-center p-6 md:p-8 lg:p-10 max-w-6xl overflow-hidden mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="text-xs uppercase tracking-widest text-accent-muted mb-2 font-sans font-medium">
            HOW SUCCESS IS MEASURED
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[0.9] tracking-tighter uppercase presentation-headline">
            THIS PROJECT SUCCEEDS WHEN:
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6 md:space-y-8 mb-8"
        >
          {SUCCESS_CRITERIA.map((criterion, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="flex items-start gap-6 md:gap-8"
            >
              <span className="text-accent-muted font-sans font-bold text-2xl md:text-3xl w-[3.5rem] md:w-16 shrink-0 text-left">
                {criterion.number}
              </span>
              <p className="text-white/90 font-sans text-lg md:text-xl leading-relaxed flex-1">
                {criterion.statement}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer highlight aligned with text column */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex items-start gap-6 md:gap-8"
        >
          <span className="w-[3.5rem] md:w-16 shrink-0" aria-hidden="true" />
          <div className="flex-1 pl-6 border-l-4 border-accent-muted">
            <p className="text-lg md:text-xl text-accent-muted font-medium leading-relaxed">
              If these things are true at launch, the project delivered real value.
            </p>
          </div>
        </motion.div>
      </div>
    </Frame>
  );
}

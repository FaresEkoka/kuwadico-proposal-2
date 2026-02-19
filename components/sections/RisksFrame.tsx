"use client";

import { motion } from "framer-motion";
import { content } from "@/content";
import Frame from "../Frame";

export default function RisksFrame() {
  const frame = content.frames[15];

  return (
    <Frame id="risks" className="bg-dark">
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "url('/surreal_abstarct_green_an_dblack_modern_imagery_for_webite_background__7qgxorynhyci6bv5nmzz_3.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100%"
        }}
      />
      <div className="h-full flex flex-col justify-center p-6 md:p-8 lg:p-10 max-w-6xl overflow-hidden mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          {frame.kicker && (
            <div className="text-xs uppercase tracking-widest text-accent-muted mb-2 font-medium">
              {frame.kicker.toUpperCase()}
            </div>
          )}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 leading-[0.9] tracking-tighter uppercase presentation-headline">
            {frame.headline}
          </h2>
          <p className="text-sm md:text-base text-white/90 leading-relaxed mb-4 font-normal tracking-wide">
            {frame.intro}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          {frame.risks?.map((riskItem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.15 }}
              className="border-t border-white/10 pt-6"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-3 mb-2">
                <span className="text-accent-muted font-semibold text-sm md:text-base tracking-wide">
                  {riskItem.risk} →
                </span>
                <span className="text-sm md:text-base text-white/90 font-normal tracking-wide">
                  {riskItem.mitigation}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Frame>
  );
}

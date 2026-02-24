"use client";

import { motion } from "framer-motion";
import { content, getFrame } from "@/content";
import Frame from "../Frame";
import ReadTimeIndicator from "../ReadTimeIndicator";

const clientLogos = [
  { src: "/logos/auc-logo-new.png", alt: "The American University in Cairo", url: "https://www.aucegypt.edu/", size: "h-8 md:h-10" },
  { src: "/logos/coventry-university-logo-landscape2.png", alt: "Coventry University", url: "https://tkh.edu.eg/coventry-university-degree-egypt/", size: "h-8 md:h-10" },
  { src: "/logos/X14 Holding.png", alt: "X14 Holding", url: "https://x14.ae/", size: "h-8 md:h-10" },
  { src: "/logos/Rowad-Logo.png", alt: "Rowad", url: "https://rowad-rme.com/", size: "h-8 md:h-10" },
  { src: "/logos/Geneina Logos No Background-04.png", alt: "Geneina", url: "https://www.geneina.org/", size: "h-8 md:h-10" },
  { src: "/logos/ASP Logo final 2.png", alt: "AS+P", url: "https://www.as-p.ae/about-us/", size: "h-8 md:h-10" },
];

export default function AboutFlexFrame() {
  const frame = getFrame("about-flex")!;

  const stats = [
    { value: "4,000+", label: "employees impacted through operational redesigns" },
    { value: "AED 25M+", label: "in cost savings through process optimization and AI enablement" },
    { value: "AED 100M+", label: "raised across venture and corporate finance support" },
    { value: "25M+", label: "high-impact projects across MENA, F&B, mobility, and tech" },
  ];

  return (
    <Frame id="about-flex" className="bg-dark">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "url('/backgrounds/2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100%"
        }}
      />
      <div className="h-full flex flex-col justify-start px-6 md:px-8 lg:px-10 max-w-6xl overflow-hidden mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="text-xs uppercase tracking-widest text-accent-muted font-medium">
              WHO WE ARE
            </div>
            <ReadTimeIndicator minutes={2} />
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-3 leading-[0.9] tracking-tighter uppercase presentation-headline">
            {frame.headline}
          </h2>
        </motion.div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-sm md:text-base text-white/90 leading-relaxed font-normal tracking-wide">
              {frame.body}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-sm md:text-base text-white/90 leading-relaxed font-normal tracking-wide">
              {frame.note}
            </p>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 gap-2 mb-3"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              className="flex flex-col p-3 border border-white/10 rounded-lg"
            >
              <span className="text-xl md:text-2xl font-semibold text-accent-muted mb-1">
                {stat.value}
              </span>
              <span className="text-xs md:text-sm text-white/60 tracking-wide leading-relaxed">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Trusted By Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="text-xs uppercase tracking-widest text-white/70 mb-2 font-medium">
            TRUSTED BY
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg py-3 px-4 overflow-hidden">
            <div className="flex animate-marquee">
              {[...clientLogos, ...clientLogos].map((logo, index) => (
                <a
                  key={index}
                  href={logo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 mx-6 hover:scale-105 transition-transform"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className={`${logo.size} w-auto object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-opacity`}
                  />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Frame>
  );
}

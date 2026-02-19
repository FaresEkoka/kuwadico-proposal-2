"use client";

import { motion } from "framer-motion";
import { content } from "@/content";
import Frame from "../Frame";
import KeyHighlight from "../KeyHighlight";

const CONTENT_EXAMPLES = [
  {
    bad: "We provide comprehensive end-to-end business automation solutions leveraging cutting-edge technology to drive digital transformation across your enterprise.",
    good: "We automate business operations. 100+ enterprise clients. 50 years of delivery.",
  },
  {
    bad: "Our team of highly skilled engineers utilizes industry-leading methodologies to deliver innovative solutions tailored to your unique business requirements.",
    good: "450 engineers. One focus: making your systems work better.",
  },
  {
    bad: "Partner with us to unlock the full potential of your organization through our transformative digital solutions.",
    good: "Let's talk about what you're trying to fix.",
  },
];

export default function ContentStrategyFrame() {
  const frame = content.frames[13];

  return (
    <Frame id="content-strategy" className="bg-dark">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "url('/backgrounds/3.png')",
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
          className="mb-6"
        >
          {frame.kicker && (
            <div className="text-xs uppercase tracking-widest text-accent-muted mb-2 font-sans font-medium">
              {frame.kicker.toUpperCase()}
            </div>
          )}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[0.9] tracking-tighter uppercase presentation-headline mb-4">
            {frame.headline}
          </h2>
          <p className="text-sm md:text-base text-white/90 leading-relaxed font-sans font-normal tracking-wide">
            Every sentence should earn its place. Here&apos;s what that looks like:
          </p>
        </motion.div>

        {/* Before/After Examples */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-0 mb-6"
        >
          {CONTENT_EXAMPLES.map((example, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 py-5 border-b border-white/10 last:border-b-0"
            >
              {/* Bad Copy */}
              <div>
                <div className="text-readable-subtle text-sm uppercase tracking-wide font-sans mb-2">
                  Instead of:
                </div>
                <p className="text-readable-muted font-sans text-sm italic leading-relaxed">
                  &ldquo;{example.bad}&rdquo;
                </p>
              </div>

              {/* Good Copy */}
              <div>
                <div className="text-accent-muted text-sm uppercase tracking-wide font-sans mb-2">
                  We&apos;d write:
                </div>
                <p className="text-white font-sans font-medium text-sm leading-relaxed">
                  &ldquo;{example.good}&rdquo;
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <KeyHighlight delay={0.8}>
          Clear beats clever. Specific beats grand.
        </KeyHighlight>
      </div>
    </Frame>
  );
}

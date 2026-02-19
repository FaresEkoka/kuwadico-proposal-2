"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface FrameProps {
  children: ReactNode;
  id: string;
  className?: string;
}

export default function Frame({ children, id, className = "" }: FrameProps) {
  return (
    <section
      id={id}
      className={`w-screen h-screen snap-start snap-mandatory relative overflow-hidden ${className}`}
      style={{ width: "100vw" }}
    >
      <div className="relative z-10 h-full w-full">{children}</div>
    </section>
  );
}

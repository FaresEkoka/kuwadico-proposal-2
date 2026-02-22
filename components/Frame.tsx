"use client";

import { ReactNode } from "react";

interface FrameProps {
  children: ReactNode;
  id: string;
  className?: string;
}

export default function Frame({ children, id, className = "" }: FrameProps) {
  return (
    <section
      id={id}
      className={`w-screen h-screen snap-start relative overflow-hidden ${className}`}
      style={{ width: "100vw" }}
    >
      <div className="relative z-10 h-full w-full py-12 sm:py-16 md:py-20">{children}</div>
    </section>
  );
}

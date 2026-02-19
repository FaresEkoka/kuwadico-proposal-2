"use client";

import { useEffect, useState } from "react";

interface ProgressCounterProps {
  current: number;
  total: number;
}

export default function ProgressCounter({
  current,
  total,
}: ProgressCounterProps) {
  const [displayCurrent, setDisplayCurrent] = useState(current);

  useEffect(() => {
    setDisplayCurrent(current);
  }, [current]);

  return (
    <div className="fixed top-6 right-6 z-50 text-xs uppercase tracking-widest font-medium text-white/70">
      {String(displayCurrent).padStart(2, "0")} / {String(total).padStart(2, "0")}
    </div>
  );
}

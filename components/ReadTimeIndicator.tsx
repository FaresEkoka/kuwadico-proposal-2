"use client";

interface ReadTimeIndicatorProps {
  minutes: number;
  label?: string;
}

export default function ReadTimeIndicator({ minutes, label }: ReadTimeIndicatorProps) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-white/60">
      <svg
        className="w-3.5 h-3.5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10" strokeWidth="2"/>
        <path strokeLinecap="round" strokeWidth="2" d="M12 6v6l4 2"/>
      </svg>
      <span>{minutes} min read</span>
      {label && <span className="text-white/40">• {label}</span>}
    </div>
  );
}

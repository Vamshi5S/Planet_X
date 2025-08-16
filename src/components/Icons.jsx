// src/components/Icons.jsx
import React from "react";

/** Soft-glass badge wrapper so icons feel premium & consistent */
export const IconBadge = ({ children }) => (
  <div
    className="
      h-12 w-12 rounded-full
      bg-white/10 backdrop-blur-sm
      ring-1 ring-white/100
      shadow-[0_18px_40px_-14px_rgba(0,0,0,0.55)]
      flex items-center justify-center
    "
  >
    {children}
  </div>
);

/* Shared gradient + inner glow used by all icons */
const SvgFX = () => (
  <defs>
    <linearGradient id="fx-main" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stopColor="#F472B6" />
      <stop offset="1" stopColor="#8B5CF6" />
    </linearGradient>
    <radialGradient id="fx-glow" cx="50%" cy="50%" r="60%">
      <stop offset="0" stopColor="#ffffff" stopOpacity=".25" />
      <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
    </radialGradient>
  </defs>
);

/* ========== 1) Built for Scale (Rocket) ========== */
export const RocketPro = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden>
    <SvgFX />
    {/* body */}
    <path
      d="M12 2.2c3.9 2.8 5.6 7 5.6 10.2v.7l-2.7 1L12 12.2l-2.9 1.9-2.7-1v-.7C6.4 9.2 8.1 5 12 2.2Z"
      fill="url(#fx-main)"
    />
    {/* window */}
    <circle cx="12" cy="8.7" r="1.5" fill="#fff" fillOpacity=".92" />
    {/* fins */}
    <path
      d="M8.9 14.7l-1.7 3M15.1 14.7l1.7 3"
      stroke="url(#fx-main)"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    {/* flame */}
    <path
      d="M12 18.3c-1.7 0-3.2 1.4-3.2 3.2 1.3-.2 2.2-.8 3.2-1.7 1 .9 1.9 1.5 3.2 1.7 0-1.8-1.5-3.2-3.2-3.2Z"
      fill="url(#fx-main)"
    />
    {/* inner glow */}
    <circle cx="12" cy="12" r="10" fill="url(#fx-glow)" />
  </svg>
);

/* ========== 2) Rapid Development, Rigid Standards (Stopwatch + Shield) ========== */
export const StopwatchShieldPro = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden>
    <SvgFX />
    {/* bezel */}
    <circle cx="12" cy="12.2" r="6.8" fill="none" stroke="url(#fx-main)" strokeWidth="2.1" />
    {/* crown + tick */}
    <rect x="9.1" y="2.2" width="5.8" height="1.8" rx=".9" fill="url(#fx-main)" />
    <circle cx="16.4" cy="5.3" r="1" fill="url(#fx-main)" />
    {/* hand */}
    <path d="M12 12.2l3.2-2.3" stroke="#fff" strokeWidth="1.9" strokeLinecap="round" />
    {/* shield */}
    <path
      d="M17.6 13.5v2.7c0 2.7-2.3 4.9-5.1 4.9s-5.1-2.2-5.1-4.9v-2.7l5.1-2.2 5.1 2.2Z"
      fill="url(#fx-main)"
      opacity=".9"
    />
    {/* check */}
    <path d="M11.9 17l2.2-2.2" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" />
    <circle cx="12" cy="12" r="10" fill="url(#fx-glow)" />
  </svg>
);

/* ========== 3) Truly Borderless (Globe + network) ========== */
export const GlobeDotsPro = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden>
    <SvgFX />
    <circle cx="12" cy="12" r="9.2" fill="none" stroke="url(#fx-main)" strokeWidth="2.1" />
    <path
      d="M3 12h18M12 2.8c3.3 3.8 3.3 13.6 0 18.4M12 2.8c-3.3 3.8-3.3 13.6 0 18.4"
      stroke="url(#fx-main)"
      strokeWidth="1.7"
      fill="none"
    />
    {/* nodes + links */}
    <g fill="url(#fx-main)" stroke="url(#fx-main)">
      <circle cx="7.5" cy="8.2" r="1.1" />
      <circle cx="15.1" cy="6.4" r="1.1" />
      <circle cx="17" cy="14.4" r="1.1" />
      <circle cx="9.3" cy="16.1" r="1.1" />
      <path d="M7.5 8.2 15.1 6.4 17 14.4 9.3 16.1Z" fill="none" strokeWidth="1.25" />
    </g>
    <circle cx="12" cy="12" r="10" fill="url(#fx-glow)" />
  </svg>
);

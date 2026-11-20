import React from "react";

/** Upward arrow for the back-to-top button. */
export const ArrowUp = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="square"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M12 19V5M6 11l6-6 6 6" />
  </svg>
);

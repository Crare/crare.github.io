import React from "react";

type IconProps = { size?: number };

/** Right-pointing arrow used on primary buttons and "more" links. */
export const ArrowRight = ({ size = 18 }: IconProps) => (
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
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

/** Diagonal arrow that marks links leaving the site. */
export const ArrowUpRight = ({ size = 16 }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M7 17L17 7M9 7h8v8" />
  </svg>
);

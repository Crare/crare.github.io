import React from "react";
import { trackEvent } from "../utils/analytics";

interface NavButtonProps {
  label: string;
  ariaLabel?: string;
  className?: string;
  onClick?: () => void;
  // Analytics tracking
  trackingPage?: string;
  trackingIdentifier?: string;
}

/**
 * Reusable navigation button component with built-in analytics tracking
 * Automatically tracks navigation clicks with page context and identifier
 */
const NavButton = ({
  label,
  ariaLabel,
  className = "landing-feature-read-more",
  onClick,
  trackingPage,
  trackingIdentifier,
}: NavButtonProps) => {
  const handleClick = () => {
    if (trackingPage && trackingIdentifier) {
      trackEvent("navigation_click", {
        page: trackingPage,
        [trackingPage]: trackingIdentifier,
      });
    }
    onClick?.();
  };

  return (
    <button className={className} onClick={handleClick} type="button" aria-label={ariaLabel}>
      {label}
    </button>
  );
};

export default NavButton;

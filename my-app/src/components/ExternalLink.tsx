import React from "react";
import { Link } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { trackEvent } from "../utils/analytics";

interface ExternalLinkProps {
  href: string;
  label: string;
  ariaLabel?: string;
  className?: string;
  // Analytics tracking
  trackingType?: string;
  trackingIdentifier?: string;
}

/**
 * Reusable external link component with security attributes and built-in analytics
 * Automatically adds rel="noopener noreferrer", opens in new tab, and tracks clicks
 */
const ExternalLink = ({
  href,
  label,
  ariaLabel,
  className = "project-external-link",
  trackingType,
  trackingIdentifier,
}: ExternalLinkProps) => {
  const handleClick = () => {
    if (trackingType && trackingIdentifier) {
      trackEvent("external_link_click", {
        type: trackingType,
        [trackingType]: trackingIdentifier,
      });
    }
  };

  return (
    <Link
      referrerPolicy="origin"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={ariaLabel}
      onClick={handleClick}
    >
      {label}
      <OpenInNewIcon className="project-external-link-icon" />
    </Link>
  );
};

export default ExternalLink;

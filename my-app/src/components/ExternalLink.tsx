import React from "react";
import { trackEvent } from "../utils/analytics";

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
  /** Name sent with the analytics event, e.g. "GitHub" or a project title. */
  trackingLabel?: string;
  /** Where on the site the link lives, e.g. "footer". */
  trackingLocation?: string;
}

/**
 * Link to another site. Opens in a new tab with safe rel attributes and
 * records an analytics event when a tracking label is given.
 */
const ExternalLink = ({
  href,
  children,
  className,
  ariaLabel,
  trackingLabel,
  trackingLocation,
}: ExternalLinkProps) => (
  <a
    href={href}
    className={className}
    target="_blank"
    rel="noopener noreferrer"
    referrerPolicy="origin"
    aria-label={ariaLabel}
    onClick={() => {
      if (trackingLabel) {
        trackEvent("external_link_click", {
          target: trackingLabel,
          ...(trackingLocation && { location: trackingLocation }),
        });
      }
    }}
  >
    {children}
  </a>
);

export default ExternalLink;

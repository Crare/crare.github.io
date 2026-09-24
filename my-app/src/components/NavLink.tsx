import React from "react";
import { Link as RouterLink, LinkProps as RouterLinkProps } from "react-router-dom";
import { trackEvent } from "../utils/analytics";

interface NavLinkProps extends Omit<RouterLinkProps, "to"> {
  to: string;
  children?: React.ReactNode;
  // Analytics tracking
  trackingPage?: string;
  trackingSource?: string;
}

/**
 * Reusable navigation link component wrapping RouterLink with built-in analytics tracking
 * Automatically tracks navigation clicks with destination page context
 */
const NavLink = ({
  to,
  children,
  className,
  trackingPage,
  trackingSource,
  ...props
}: NavLinkProps) => {
  const handleClick = () => {
    if (trackingPage) {
      trackEvent("navigation_click", {
        page: trackingPage,
        path: to,
        ...(trackingSource && { source: trackingSource }),
      });
    }
  };

  return (
    <RouterLink to={to} className={className} onClick={handleClick} {...props}>
      {children}
    </RouterLink>
  );
};

export default NavLink;

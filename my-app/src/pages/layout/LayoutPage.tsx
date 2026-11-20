import React, { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { trackEvent, trackPageView } from "../../utils/analytics";

const LayoutPage = () => {
  const location = useLocation();

  useEffect(() => {
    const pageName = location.pathname.replace(/^\/+|\/+$/g, "") || "home";
    trackPageView(pageName);
    trackEvent("page_view", { page: pageName });
  }, [location.pathname]);

  // When the route changes (first load, or an old page URL redirecting to a
  // #section), jump to the section or reset to the top. In-page #links on the
  // same route are left to the browser, which already scrolls to them.
  const lastPath = useRef<string | null>(null);
  useEffect(() => {
    const samePage = lastPath.current === location.pathname;
    lastPath.current = location.pathname;
    if (samePage) return;

    const id = location.hash.slice(1);
    const target = id ? document.getElementById(decodeURIComponent(id)) : null;
    if (target) {
      target.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const trackClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      const anchor = target.closest("a[href]") as HTMLAnchorElement | null;
      if (!anchor) return;

      let url: URL;
      try {
        url = new URL(anchor.href);
      } catch {
        return;
      }

      if (url.hostname === window.location.hostname) return;

      const gc = window.goatcounter;
      if (gc?.count) {
        gc.count({
          path: `/outbound/${url.hostname}${url.pathname}`,
          title: `Outbound: ${url.hostname}`,
          event: true,
        });
      }
    };

    document.addEventListener("click", trackClick);
    return () => document.removeEventListener("click", trackClick);
  }, []);

  return (
    <div className="page">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Outlet />
    </div>
  );
};

export default LayoutPage;

import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { trackEvent, trackPageView } from "../../utils/analytics";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";

const LayoutPage = () => {
  const location = useLocation();

  useEffect(() => {
    const pageName = location.pathname.replace(/^\/+|\/+$/g, "") || "home";
    trackPageView(pageName);
    trackEvent("page_view", { page: pageName });
  }, [location.pathname]);

  // Client-side navigation keeps the old scroll position, so reset it on
  // every route change, or jump to the #section the link points at.
  useEffect(() => {
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
    <div className="pg">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
};

export default LayoutPage;

import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { trackEvent, trackPageView } from "../utils/analytics";
import HeaderSection from "../components/HeaderSection";
import FooterSection from "../components/FooterSection";
import AnimatedBackground from "../components/AnimatedBackground";
import "../styles/global.css";

const LayoutPage = () => {
  const location = useLocation();

  useEffect(() => {
    const pageName = location.pathname.replace(/^\/+|\/+$/g, "") || "home";
    trackPageView(pageName);
    trackEvent("page_view", { page: pageName });
  }, [location.pathname]);

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
    <div className="container">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <AnimatedBackground />
      <HeaderSection />
      <div className="page-content">
        <Outlet />
      </div>
      <main id="main-content">
        <FooterSection />
      </main>
    </div>
  );
};

export default LayoutPage;

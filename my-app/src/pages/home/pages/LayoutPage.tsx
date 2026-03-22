import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { trackEvent, trackPageView } from "../../../utils/analytics";
import HeaderSection from "../components/HeaderSection";
import FooterSection from "../components/FooterSection";
import "../Home.css";

const LayoutPage = () => {
  const location = useLocation();

  useEffect(() => {
    const pageName = location.pathname.replace(/^\//, "") || "skills";
    trackPageView(pageName);
    trackEvent("page_view", { page: pageName });
  }, [location.pathname]);

  useEffect(() => {
    const trackClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      const anchor = target.closest("a[href]") as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.href;
      const gc = (window as any).goatcounter;

      if (gc && typeof gc.count === "function") {
        const path = `/link-click${new URL(href).pathname}`;
        gc.count({ path, title: `Link to ${href}`, event: true });
      }
    };

    document.addEventListener("click", trackClick);
    return () => document.removeEventListener("click", trackClick);
  }, []);

  return (
    <div className="container">
      <HeaderSection />
      <Outlet />
      <FooterSection />
    </div>
  );
};

export default LayoutPage;

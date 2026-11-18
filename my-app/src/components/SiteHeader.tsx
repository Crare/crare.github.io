import React from "react";
import { Link, NavLink } from "react-router-dom";
import { trackEvent } from "../utils/analytics";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Games", href: "/games" },
  { label: "Contact", href: "/contact" },
];

const SiteHeader = () => (
  <header className="wrap">
    <nav className="nav" aria-label="Primary">
      <Link className="brand" to="/" aria-label="Juho Heikkinen, home">
        <span className="mark" aria-hidden="true">
          JH
        </span>
        <span className="brandtxt" aria-hidden="true">
          <b>Juho Heikkinen</b>
          <small>software developer / FI</small>
        </span>
      </Link>
      <ul className="navlinks">
        {navItems.map((item) => (
          <li key={item.href}>
            {/* NavLink sets aria-current="page" on the active route. */}
            <NavLink
              to={item.href}
              end={item.href === "/"}
              onClick={() => trackEvent("navigation_click", { page: item.label, path: item.href })}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default SiteHeader;

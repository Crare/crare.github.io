import { Container } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const HeaderSection = () => {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Skills", href: "/skills" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Games", href: "/games" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div className="header">
      <Container maxWidth="lg">
        <p className="title">Juho Heikkinen</p>
        <p className="subtitle-container">Software Developer from Finland</p>
        <nav className="header-nav" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              end={item.href === "/"}
              className={({ isActive }) =>
                isActive ? "header-nav-link header-nav-link-active" : "header-nav-link"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </Container>
    </div>
  );
};

export default HeaderSection;

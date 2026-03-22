import { Container } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const HeaderSection = () => {
  const navItems = [
    { label: "Skills", href: "/skills" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Games", href: "/games" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div className="header">
      <Container maxWidth="lg">
        <h1 className="title">Juho Heikkinen</h1>
        <p className="subtitle-container">Software Developer from Finland</p>
        <nav className="header-nav" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink key={item.href} to={item.href} className="header-nav-link">
              {item.label}
            </NavLink>
          ))}
        </nav>
      </Container>
    </div>
  );
};

export default HeaderSection;

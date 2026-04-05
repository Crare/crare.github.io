import { Container } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const FooterSection = () => {
  return (
    <footer className="site-footer">
      <Container maxWidth="lg">
        <nav className="footer-nav" aria-label="Footer">
          <NavLink to="/about" className="footer-nav-link">About</NavLink>
          <NavLink to="/skills" className="footer-nav-link">Skills</NavLink>
          <NavLink to="/projects" className="footer-nav-link">Projects</NavLink>
          <NavLink to="/games" className="footer-nav-link">Games</NavLink>
          <NavLink to="/contact" className="footer-nav-link">Contact</NavLink>
        </nav>
        <div className="footer-social">
          <a
            href="https://github.com/Crare"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            aria-label="GitHub profile"
          >
            <GitHubIcon fontSize="small" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/juhopmheikkinen/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            aria-label="LinkedIn profile"
          >
            <LinkedInIcon fontSize="small" />
            LinkedIn
          </a>
          <a
            href="https://jukepoks1.itch.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            aria-label="Itch.io game portfolio"
          >
            Itch.io
          </a>
          <a
            href="https://bsky.app/profile/jukepoks1.bsky.social"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            aria-label="Bluesky profile"
          >
            Bluesky
          </a>
        </div>
        <p className="footer-line">Website made by Juho Heikkinen.</p>
        <p className="footer-line footer-muted">
          Anonymous analytics are collected for page visits and outbound link clicks.
        </p>
      </Container>
    </footer>
  );
};

export default FooterSection;

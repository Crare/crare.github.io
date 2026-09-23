import { Container } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import { trackEvent } from "../utils/analytics";

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
            referrerPolicy="origin"
            href="https://github.com/Crare"
            target="_blank"
            rel="noopener"
            className="footer-social-link"
            aria-label="GitHub profile"
            onClick={() => trackEvent("external_link_click", { platform: "GitHub", location: "footer" })}
          >
            <GitHubIcon fontSize="small" />
            GitHub
          </a>
          <a
            referrerPolicy="origin"
            href="https://www.linkedin.com/in/juhopmheikkinen/"
            target="_blank"
            rel="noopener"
            className="footer-social-link"
            aria-label="LinkedIn profile"
            onClick={() => trackEvent("external_link_click", { platform: "LinkedIn", location: "footer" })}
          >
            <LinkedInIcon fontSize="small" />
            LinkedIn
          </a>
          <a
            referrerPolicy="origin"
            href="https://jukepoks1.itch.io/"
            target="_blank"
            rel="noopener"
            className="footer-social-link"
            aria-label="Itch.io game portfolio"
            onClick={() => trackEvent("external_link_click", { platform: "Itch.io", location: "footer" })}
          >
            <SportsEsportsIcon fontSize="small" />
            Itch.io
          </a>
          <a
            referrerPolicy="origin"
            href="https://bsky.app/profile/jukepoks1.bsky.social"
            target="_blank"
            rel="noopener"
            className="footer-social-link"
            aria-label="Bluesky profile"
            onClick={() => trackEvent("external_link_click", { platform: "Bluesky", location: "footer" })}
          >
            <EmojiPeopleIcon fontSize="small" />
            Bluesky
          </a>
        </div>
        <p className="footer-line">Website made by Juho Heikkinen.</p>
        <p className="footer-line footer-muted">
          Anonymous analytics are collected.
        </p>
      </Container>
    </footer>
  );
};

export default FooterSection;

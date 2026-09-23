import { Container, Link } from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CloudIcon from "@mui/icons-material/Cloud";
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { trackEvent } from "../utils/analytics";

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section">
      <Container maxWidth="lg">
        <h1 className="section-title">Get in Touch</h1>
        <div className="contact-grid">
          <Link
            referrerPolicy="origin"
            href="https://www.linkedin.com/in/juhopmheikkinen/"
            target="_blank"
            underline="none"
            className="contact-card contact-card-link"
            rel="noopener"
            onClick={() => trackEvent("external_link_click", { platform: "LinkedIn" })}
          >
            <LinkedInIcon />
            <div className="contact-title-row">
              <div>LinkedIn</div>
              <OpenInNewIcon className="contact-title-icon" />
            </div>
            <div className="contact-description">Connect professionally</div>
          </Link>
          <Link
            referrerPolicy="origin"
            href="https://github.com/Crare"
            target="_blank"
            underline="none"
            className="contact-card contact-card-link"
            rel="noopener"
            onClick={() => trackEvent("external_link_click", { platform: "GitHub" })}
          >
            <GitHubIcon />
            <div className="contact-title-row">
              <div>GitHub</div>
              <OpenInNewIcon className="contact-title-icon" />
            </div>
            <div className="contact-description">View source code</div>
          </Link>
          <Link
            referrerPolicy="origin"
            href="https://jukepoks1.itch.io/"
            target="_blank"
            underline="none"
            className="contact-card contact-card-link"
            rel="noopener"
            onClick={() => trackEvent("external_link_click", { platform: "Itch.io" })}
          >
            <SportsEsportsIcon />
            <div className="contact-title-row">
              <div>Itch.io</div>
              <OpenInNewIcon className="contact-title-icon" />
            </div>
            <div className="contact-description">Game portfolio</div>
          </Link>
          <Link
            referrerPolicy="origin"
            href="https://bsky.app/profile/jukepoks1.bsky.social"
            target="_blank"
            underline="none"
            className="contact-card contact-card-link"
            rel="noopener"
            onClick={() => trackEvent("external_link_click", { platform: "Bluesky" })}
          >
            <EmojiPeopleIcon />
            <div className="contact-title-row">
              <div>Bluesky</div>
              <OpenInNewIcon className="contact-title-icon" />
            </div>
            <div className="contact-description">Follow updates and posts</div>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;

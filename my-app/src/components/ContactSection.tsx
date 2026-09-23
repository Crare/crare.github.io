import { Container, Link } from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CloudIcon from "@mui/icons-material/Cloud";
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

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
          >
            <LinkedInIcon />
            <div>LinkedIn</div>
            <div className="contact-description">Connect professionally</div>
          </Link>
          <Link
            referrerPolicy="origin"
            href="https://github.com/Crare"
            target="_blank"
            underline="none"
            className="contact-card contact-card-link"
            rel="noopener"
          >
            <GitHubIcon />
            <div>GitHub</div>
            <div className="contact-description">View source code</div>
          </Link>
          <Link
            referrerPolicy="origin"
            href="https://jukepoks1.itch.io/"
            target="_blank"
            underline="none"
            className="contact-card contact-card-link"
            rel="noopener"
          >
            <SportsEsportsIcon />
            <div>Itch.io</div>
            <div className="contact-description">Game portfolio</div>
          </Link>
          <Link
            referrerPolicy="origin"
            href="https://bsky.app/profile/jukepoks1.bsky.social"
            target="_blank"
            underline="none"
            className="contact-card contact-card-link"
            rel="noopener"
          >
            <EmojiPeopleIcon />
            <div>Bluesky</div>
            <div className="contact-description">Follow updates and posts</div>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;

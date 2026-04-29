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
            href="https://www.linkedin.com/in/juhopmheikkinen/"
            target="_blank"
            underline="none"
            className="contact-card contact-card-link"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
            <div>LinkedIn</div>
            <div className="contact-description">Connect professionally</div>
          </Link>
          <Link
            href="https://github.com/Crare"
            target="_blank"
            underline="none"
            className="contact-card contact-card-link"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
            <div>GitHub</div>
            <div className="contact-description">View source code</div>
          </Link>
          <Link
            href="https://jukepoks1.itch.io/?ref=crare.github.io"
            target="_blank"
            underline="none"
            className="contact-card contact-card-link"
            rel="noopener noreferrer"
          >
            <SportsEsportsIcon />
            <div>Itch.io</div>
            <div className="contact-description">Game portfolio</div>
          </Link>
          <Link
            href="https://bsky.app/profile/jukepoks1.bsky.social"
            target="_blank"
            underline="none"
            className="contact-card contact-card-link"
            rel="noopener noreferrer"
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

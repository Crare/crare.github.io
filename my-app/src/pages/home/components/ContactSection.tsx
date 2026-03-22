import { Container, Link } from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CloudIcon from "@mui/icons-material/Cloud";

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section">
      <Container maxWidth="lg">
        <h2 className="section-title">Get in Touch</h2>
        <div className="contact-grid">
          <div className="contact-card">
            <LinkedInIcon />
            <Link href="https://www.linkedin.com/in/juhopmheikkinen/" target="_blank">
              LinkedIn
            </Link>
            <div className="contact-description">Connect professionally</div>
          </div>
          <div className="contact-card">
            <GitHubIcon />
            <Link href="https://github.com/Crare" target="_blank">
              GitHub
            </Link>
            <div className="contact-description">View source code</div>
          </div>
          <div className="contact-card">
            <CloudIcon />
            <Link href="https://jukepoks1.itch.io/" target="_blank">
              Itch.io
            </Link>
            <div className="contact-description">Game portfolio</div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;

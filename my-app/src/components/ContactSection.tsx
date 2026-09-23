import { Container, Link } from "@mui/material";
import React from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { SiGithub, SiItchdotio, SiBluesky } from "@icons-pack/react-simple-icons";
import { trackEvent } from "../utils/analytics";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const contacts = [
  {
    id: "linkedin",
    icon: <LinkedInIcon />,
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/juhopmheikkinen/",
    description: "Connect professionally",
  },
  {
    id: "github",
    icon: <SiGithub />,
    label: "GitHub",
    link: "https://github.com/Crare",
    description: "View source code",
  },
  {
    id: "itch",
    icon: <SiItchdotio />,
    label: "Itch.io",
    link: "https://jukepoks1.itch.io/",
    description: "Game portfolio",
  },
  {
    id: "bluesky",
    icon: <SiBluesky />,
    label: "Bluesky",
    link: "https://bsky.app/profile/jukepoks1.bsky.social",
    description: "Follow updates and posts",
  },
];

const ContactCard = ({ contact }: { contact: any }) => {
  const ref = useIntersectionObserver();
  return (
    <div ref={ref}>
      <Link
        referrerPolicy="origin"
        href={contact.link}
        target="_blank"
        underline="none"
        className="contact-card contact-card-link"
        rel="noopener"
        onClick={() => trackEvent("external_link_click", { platform: contact.label })}
      >
        {contact.icon}
        <div className="contact-title-row">
          <div>{contact.label}</div>
          <OpenInNewIcon className="contact-title-icon" />
        </div>
        <div className="contact-description">{contact.description}</div>
      </Link>
    </div>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section">
      <Container maxWidth="lg">
        <h1 className="section-title">Get in Touch</h1>
        <div className="contact-grid">
          {contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;

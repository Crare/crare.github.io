import React from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { trackEvent } from "../../utils/analytics";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

interface Contact {
  id: string;
  icon: React.ReactNode;
  label: string;
  description: string;
  link: string;
}

interface ContactCardProps {
  contact: Contact;
}

const ContactCard = ({ contact }: ContactCardProps) => {
  const ref = useIntersectionObserver();
  return (
    <div ref={ref}>
      <a
        referrerPolicy="origin"
        href={contact.link}
        target="_blank"
        className="contact-card contact-card-link"
        rel="noopener noreferrer"
        aria-label={`Visit ${contact.label}: ${contact.description}`}
        onClick={() => trackEvent("external_link_click", { platform: contact.label })}
      >
        {contact.icon}
        <div className="contact-title-row">
          <div>{contact.label}</div>
          <OpenInNewIcon className="contact-title-icon" />
        </div>
        <div className="contact-description">{contact.description}</div>
      </a>
    </div>
  );
};

export default ContactCard;

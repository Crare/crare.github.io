import { Container } from "@mui/material";
import React from "react";
import ContactCard from "./ContactCard";
import { contacts } from "../../data/contacts";

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section" role="region" aria-labelledby="contact-heading">
      <Container maxWidth="lg">
        <h2 id="contact-heading" className="section-title">Get in Touch</h2>
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

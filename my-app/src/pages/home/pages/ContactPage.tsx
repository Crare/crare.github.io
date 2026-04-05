import React from "react";
import { Helmet } from "react-helmet-async";
import ContactSection from "../components/ContactSection";

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact – Juho Heikkinen | Software Developer</title>
        <meta name="description" content="Get in touch with Juho Heikkinen via LinkedIn, GitHub, Itch.io or Bluesky." />
        <meta property="og:title" content="Contact – Juho Heikkinen | Software Developer" />
        <meta property="og:description" content="Connect with Juho Heikkinen on LinkedIn, GitHub, Itch.io or Bluesky." />
        <meta property="og:url" content="https://crare.github.io/contact" />
        <link rel="canonical" href="https://crare.github.io/contact" />
      </Helmet>
      <ContactSection />
    </>
  );
};

export default ContactPage;

import React from "react";
import { Helmet } from "react-helmet-async";
import AboutSection from "../components/AboutSection";

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About – Juho Heikkinen | Software Developer</title>
        <meta name="description" content="About Juho Heikkinen – software developer from Finland with experience in web, mobile, Azure cloud, and game development since 2017." />
        <meta property="og:title" content="About – Juho Heikkinen | Software Developer" />
        <meta property="og:description" content="Software developer from Finland. Bachelor's degree in ICT from Haaga-Helia, 8+ years of professional experience across private and public sector projects." />
        <meta property="og:url" content="https://crare.github.io/about" />
        <link rel="canonical" href="https://crare.github.io/about" />
      </Helmet>
      <AboutSection />
    </>
  );
};

export default AboutPage;

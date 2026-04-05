import React from "react";
import { Helmet } from "react-helmet-async";
import SkillsSection from "../components/SkillsSection";

const SkillsPage = () => {
  return (
    <>
      <Helmet>
        <title>Skills – Juho Heikkinen | Software Developer</title>
        <meta name="description" content="Core skills of Juho Heikkinen: web development, mobile apps, Azure cloud services, game development, TypeScript, React, C#, and more." />
        <meta property="og:title" content="Skills – Juho Heikkinen | Software Developer" />
        <meta property="og:description" content="Production-focused experience across web, mobile, cloud, and game development." />
        <meta property="og:url" content="https://crare.github.io/skills" />
        <link rel="canonical" href="https://crare.github.io/skills" />
      </Helmet>
      <SkillsSection />
    </>
  );
};

export default SkillsPage;

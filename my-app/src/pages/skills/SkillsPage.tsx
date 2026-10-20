import React from "react";
import { Helmet } from "react-helmet-async";
import SkillsSection from "./SkillsSection";

const SkillsPage = () => {
  return (
    <>
      <Helmet>
        <title>Skills – Juho Heikkinen | Software Developer</title>
        <meta name="description" content="Core skills and broader familiarity of Juho Heikkinen across web, mobile, cloud, backend, databases, testing, DevOps, and game development." />
        <meta property="og:title" content="Skills – Juho Heikkinen | Software Developer" />
        <meta property="og:description" content="Production-focused core skills and familiarity across web, mobile, cloud, backend, testing, DevOps, and game development." />
        <meta property="og:url" content="https://crare.github.io/skills" />
        <link referrerPolicy="origin" rel="canonical" href="https://crare.github.io/skills" />
      </Helmet>
      <SkillsSection />
    </>
  );
};

export default SkillsPage;

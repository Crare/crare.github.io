import { Container } from "@mui/material";
import React from "react";
import { skillsData } from "../../data/skills";
import SkillCard from "./SkillCard";

const SkillsSection = () => {
  return (
    <section id="skills" className="skills-section" role="region" aria-labelledby="skills-heading">
      <Container maxWidth="lg">
        <div className="skills-header">
          <h2 id="skills-heading" className="section-title">Core Skills</h2>
          <p className="section-lead">
            Production-focused experience across web, mobile, and cloud delivery.
          </p>
        </div>
        <div className="skills-grid">
          {skillsData.map((skill, idx) => (
            <SkillCard key={idx} skill={skill} idx={idx} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SkillsSection;

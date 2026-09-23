import { Container } from "@mui/material";
import React from "react";
import { skillsData } from "../data/skills";

const SkillsSection = () => {
  return (
    <section id="skills" className="skills-section">
      <Container maxWidth="lg">
        <div className="skills-header">
          <h1 className="section-title">Core Skills</h1>
          <p className="section-lead">
            Production-focused experience across web, mobile, and cloud delivery.
          </p>
        </div>
        <div className="skills-grid">
          {skillsData.map((skill, idx) => (
            <div key={idx} className="skill-card">
              {skill.icon}
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SkillsSection;

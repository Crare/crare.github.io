import { Container } from "@mui/material";
import React from "react";
import { familiarSkillsData, skillsData } from "../../data/skills";
import SkillCard from "./SkillCard";

const SkillsSection = () => {
  return (
    <>
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
      <section id="familiar-skills" className="familiar-skills-section" aria-labelledby="familiar-skills-heading">
        <Container maxWidth="lg">
          <div className="skills-header">
            <h2 id="familiar-skills-heading" className="section-title">Also Familiar With</h2>
            <p className="section-lead">
              A broader range of technologies, platforms, and tools I have worked with.
            </p>
          </div>
          <div className="familiar-skills-grid">
            {familiarSkillsData.map((category) => (
              <article className="familiar-skill-category" key={category.title}>
                <h3 className="familiar-skill-category-title">
                  <span aria-hidden="true">{category.icon}</span>
                  {category.title}
                </h3>
                <ul className="familiar-skill-list">
                  {category.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default SkillsSection;

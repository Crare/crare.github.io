import { Container } from "@mui/material";
import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <Container maxWidth="lg">
        <h2 className="section-title">About Me</h2>
        <div className="about-card">
          <p>
            I'm passionate about coding and creating software that makes a difference. I studied ICT at Haaga-Helia University of Applied Sciences, specializing in software development, which gave me a solid foundation in practical programming and systems design.
          </p>
          <p>
            Beyond my professional work, I love exploring game development and building mobile apps in my free time. These projects push me to expand my skills and experiment with new technologies.
          </p>
          <p>
            When I'm not coding, you'll find me staying active outdoors-cycling, running, and working out at the gym keep me balanced and energized. I believe in continuous learning and challenging myself both mentally and physically.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;

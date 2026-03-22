import { Container } from "@mui/material";
import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <Container maxWidth="lg">
        <h2 className="section-title">About Me</h2>
        <div className="about-card">
          <p>
            I am a software developer from Finland, currently working with Azure cloud services and mobile app development. I focus on practical solutions that are reliable, maintainable, and useful in everyday work.
          </p>
          <p>
            In my free time I build games, web and mobile apps, and side tools. I also enjoy tinkering with IoT and home automation projects to learn new technologies in hands-on ways.
          </p>
          <p>
            Outside coding, I stay active with running, cycling, and regular workouts. Continuous learning, both technical and personal, is a big part of how I work.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;

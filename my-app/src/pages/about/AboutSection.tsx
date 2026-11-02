import { Container } from "@mui/material";
import React from "react";
import { workExperiences } from "../../data/work-experience";
import WorkExperienceCard from "./WorkExperienceCard";
import ProfilePhoto from "../../components/ProfilePhoto";

const AboutSection = () => {
  return (
    <section id="about" className="about-section" role="region" aria-labelledby="about-heading">
      <Container maxWidth="lg">
        <h2 id="about-heading" className="section-title">About Me</h2>
        <div className="about-card about-intro">
          <ProfilePhoto className="about-profile-photo-frame" size={220} />
          <div className="about-intro-copy">
            <p>
              I am a software developer from Finland. I studied Information Technology at Haaga-Helia University of Applied Sciences from 2015 to 2018, and started working professionally in 2017. Since then I have worked across
              three companies on projects in both private and public sectors for many customers.
            </p>
            <p>
              My day-to-day work has included Azure cloud services, mobile app development, and
              practical product delivery. I focus on solutions that are reliable, maintainable,
              and useful in everyday work.
            </p>
            <p>
              In my free time I build games, web and mobile apps, and side tools. I also enjoy
              tinkering with IoT and home automation projects to learn new technologies in hands-on
              ways.
            </p>
            <p>
              Outside coding, I stay active with running, cycling, and regular workouts.
              Continuous learning, both technical and personal, is a big part of how I work.
            </p>
          </div>
        </div>
        <h2 className="work-section-subtitle">Work Experience</h2>
        <div className="work-history-grid">
          {workExperiences.map((exp) => (
            <WorkExperienceCard key={exp.company} exp={exp} />
          ))}
        </div>
        <h2 className="work-section-subtitle">Education</h2>
        <div className="about-credential-grid">
          <article className="about-credential-card">
            <h3 className="company-name">Haaga-Helia University of Applied Sciences</h3>
            <p className="about-credential-description">Bachelor&apos;s Degree, Information Technology</p>
            <p className="work-date-range">2015–2018</p>
          </article>
        </div>
        <h2 className="work-section-subtitle">Certificates</h2>
        <div className="about-credential-grid">
          <article className="about-credential-card">
            <h3 className="company-name">Microsoft Certified: Azure Fundamentals</h3>
            <p className="about-credential-description">Microsoft</p>
            <p className="work-date-range">Issued Feb 2026</p>
          </article>
          <article className="about-credential-card">
            <h3 className="company-name">Microsoft Certified: Azure Developer Associate</h3>
            <p className="about-credential-description">Microsoft</p>
            <p className="work-date-range">Issued Apr 2023 · Expires Apr 2027</p>
          </article>
          <article className="about-credential-card">
            <h3 className="company-name">The Complete React Native and Redux Course</h3>
            <p className="about-credential-description">Udemy</p>
            <p className="work-date-range">Issued Jul 2019</p>
          </article>
          <article className="about-credential-card">
            <h3 className="company-name">Elements of AI</h3>
            <p className="about-credential-description">University of Helsinki · Course</p>
            <p className="work-date-range">Issued Jul 2019</p>
          </article>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;

import { Container } from "@mui/material";
import React from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

interface WorkExperience {
  company: string;
  current: boolean;
  dateRange: string;
  highlights: string[];
}

const workExperiences: WorkExperience[] = [
  {
    company: "Zure",
    current: true,
    dateRange: "Dec 2019 – Present",
    highlights: [
      "Full-stack development on Microsoft Azure",
      "Frontend, backend, mobile applications, and API integrations",
      "Customer projects include Seure, KEVA, and Kuusakoski",
    ],
  },
  {
    company: "CGI",
    current: false,
    dateRange: "Aug 2018 – Dec 2019",
    highlights: [
      "Software development on private sector projects",
      "Bachelor's thesis: web application integrating transportation APIs and other open public data sources",
    ],
  },
  {
    company: "SuperApp",
    current: false,
    dateRange: "Apr 2017 – Apr 2018",
    highlights: [
      "Mobile app development across multiple projects",
      "Helped establish team development workflows and practices",
      "Built custom interactive prototypes for multiple customers",
      "Contributed to a computer vision solution for a customer project",
    ],
  },
];

const WorkExperienceCard = ({ exp }: { exp: WorkExperience }) => {
  const ref = useIntersectionObserver();
  return (
    <div ref={ref} key={exp.company} className="work-experience-card">
      <p className="company-name">
        {exp.company}
        {exp.current && <span className="company-current-badge">Current</span>}
      </p>
      <p className="work-date-range">{exp.dateRange}</p>
      <ul className="work-highlights">
        {exp.highlights.map((h: string) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
    </div>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <Container maxWidth="lg">
        <h1 className="section-title">About Me</h1>
        <div className="about-card">
          <p>
            I am a software developer from Finland. I studied at Haaga-Helia University of Applied Sciences for a Bachelor's degree in ICT 2015-2018, and started working professionally in 2017. Since then I have worked across
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
        <h2 className="work-section-subtitle">Work Experience</h2>
        <div className="work-history-grid">
          {workExperiences.map((exp) => (
            <WorkExperienceCard key={exp.company} exp={exp} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;

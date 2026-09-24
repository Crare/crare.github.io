import React from "react";
import { WorkExperience } from "../../data/work-experience";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

interface WorkExperienceCardProps {
  exp: WorkExperience;
}

const WorkExperienceCard = ({ exp }: WorkExperienceCardProps) => {
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

export default WorkExperienceCard;

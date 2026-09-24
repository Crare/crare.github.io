import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import NavButton from "../../components/NavButton";
import { Project } from "../../types";

interface FeatureCardProps {
  project: Project;
  toAnchorId: (prefix: string, title: string) => string;
}

const FeatureCard = ({ project, toAnchorId }: FeatureCardProps) => {
  const ref = useIntersectionObserver();
  return (
    <RouterLink
      key={project.title}
      to={`/projects#${toAnchorId("project", project.title)}`}
      className="landing-card-link"
      aria-label={`Open projects page from ${project.title}`}
    >
      <article ref={ref} className="landing-feature-card">
        <div className="landing-feature-topline">
          <span className="landing-feature-category">{project.category}</span>
          <div className="landing-feature-icon">{project.icon}</div>
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <NavButton
          label="Read more →"
          trackingPage="landing"
          trackingIdentifier={project.title}
        />
        <div className="landing-chip-row">
          {project.tech.slice(0, 3).map((tech: string) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </article>
    </RouterLink>
  );
};

export default FeatureCard;

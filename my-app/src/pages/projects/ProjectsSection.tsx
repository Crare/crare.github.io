import React from "react";
import { Container } from "@mui/material";
import { Project, GalleryItem } from "../../types";
import ProjectCard from "./ProjectCard";
import { generateSectionHeadingId } from "../../utils/id-generator";

type ProjectsSectionProps = {
  projects: Project[];
  title?: string;
  openGalleryModal: (
    title: string,
    items: GalleryItem[],
    index: number,
    triggerElement?: HTMLElement | null
  ) => void;
};

const ProjectsSection = ({ projects, title = "Featured Projects", openGalleryModal }: ProjectsSectionProps) => {
  const isCustomerProjects = title === "Customer Projects";
  const linkText = isCustomerProjects ? "Read the case" : "Go to the project";
  const headingId = generateSectionHeadingId(title);

  return (
    <section id="projects" className="projects-section" role="region" aria-labelledby={headingId}>
      <Container maxWidth="lg">
        <h2 id={headingId} className="section-title">
          {title}
        </h2>
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <ProjectCard
              key={idx}
              project={project}
              idx={idx}
              openGalleryModal={openGalleryModal}
              isCustomerProjects={isCustomerProjects}
              linkText={linkText}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProjectsSection;

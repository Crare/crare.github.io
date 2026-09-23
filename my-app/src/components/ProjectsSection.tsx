import { Container, Link } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import React from "react";
import MediaThumb from "./MediaThumb";
import { GalleryItem, Project } from "../types";
import { trackEvent } from "../utils/analytics";

const toProjectAnchorId = (title: string) => {
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  return `project-${slug}`;
};

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

  return (
    <section id="projects" className="projects-section">
      <Container maxWidth="lg">
        <h1 className="section-title">{title}</h1>
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div key={idx} id={toProjectAnchorId(project.title)} className="project-card">
              
              <div className="project-title-row">
                {project.icon}
                <h2>{project.title}</h2>
              </div>
              <div style={{ marginBottom: "1rem" }}>
                {project.images && (() => {
                const projectGalleryItems: GalleryItem[] = project.images.map((img, imageIdx) => ({
                  thumb: img.thumb,
                  full: img.full,
                  alt: `${project.title} preview ${imageIdx + 1}`,
                }));

                return (
                  <>
                    <div className="project-image-row">
                      {projectGalleryItems.map((img, imageIdx) => (
                        <MediaThumb
                          key={imageIdx}
                          thumb={img.thumb}
                          alt={img.alt}
                          wrapperClass="project-image-wrapper"
                          onOpen={(event) => openGalleryModal(project.title, projectGalleryItems, imageIdx, event.currentTarget)}
                          isProject
                          buttonLabel={`Open ${project.title} image ${imageIdx + 1} in gallery`}
                        />
                      ))}
                    </div>
                    <p className="game-media-info">Click a thumbnail to open gallery. Use arrows or keyboard left/right.</p>
                  </>
                );
              })()}
              </div>
              <p className="project-description">{project.description}</p>
              <div style={{ marginTop: "1rem" }}>
                {project.link && (
                  <Link referrerPolicy="origin" href={project.link} target="_blank" className="project-external-link" onClick={() => trackEvent("external_link_click", { type: "project", project: project.title })}>
                    {linkText}
                    <OpenInNewIcon className="project-external-link-icon" />
                  </Link>
                )}
              </div>
              <div>
                {project.tech.map((tech, tidx) => (
                  <span key={tidx} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProjectsSection;

import { Container, Link } from "@mui/material";
import React from "react";
import MediaThumb from "./MediaThumb";
import { GalleryItem, Project } from "../types";

const toProjectAnchorId = (title: string) => {
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  return `project-${slug}`;
};

type ProjectsSectionProps = {
  projects: Project[];
  openGalleryModal: (
    title: string,
    items: GalleryItem[],
    index: number,
    triggerElement?: HTMLElement | null
  ) => void;
};

const ProjectsSection = ({ projects, openGalleryModal }: ProjectsSectionProps) => {
  return (
    <section id="projects" className="projects-section">
      <Container maxWidth="lg">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div key={idx} id={toProjectAnchorId(project.title)} className="project-card">
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
              <div className="project-title-row">
                {project.icon}
                <h4>
                  <Link href={project.link} target="_blank">
                    {project.title}
                  </Link>
                </h4>
              </div>
              <p className="project-description">{project.description}</p>
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

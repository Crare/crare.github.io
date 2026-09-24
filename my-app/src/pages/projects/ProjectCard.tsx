import React from "react";
import MediaThumb from "../../components/MediaThumb";
import BaseCard from "../../components/BaseCard";
import ExternalLink from "../../components/ExternalLink";
import { GalleryItem, Project } from "../../types";
import { generateAnchorId } from "../../utils/id-generator";

export const toProjectAnchorId = (title: string) => generateAnchorId("project", title);

interface ProjectCardProps {
  project: Project;
  idx: number;
  openGalleryModal: (
    title: string,
    items: GalleryItem[],
    index: number,
    triggerElement?: HTMLElement | null
  ) => void;
  isCustomerProjects: boolean;
  linkText: string;
}

const ProjectCard = ({ project, idx, openGalleryModal, isCustomerProjects, linkText }: ProjectCardProps) => {
  const projectGalleryItems: GalleryItem[] = project.images
    ? project.images.map((img: any, imageIdx: number) => ({
        thumb: img.thumb,
        full: img.full,
        alt: `${project.title} preview ${imageIdx + 1}`,
      }))
    : [];

  const projectCardContent = (
    <>
      <div className="project-title-row">
        {project.icon}
        <h2>{project.title}</h2>
      </div>
      <div style={{ marginBottom: "1rem" }}>
        {projectGalleryItems.length > 0 && (
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
        )}
      </div>
      <p className="project-description">{project.description}</p>
      <div style={{ marginTop: "1rem" }}>
        {project.link && (
          <ExternalLink
            href={project.link}
            label={linkText}
            ariaLabel={`${project.title} - ${linkText}`}
            trackingType="project"
            trackingIdentifier={project.title}
          />
        )}
      </div>
      <div>
        {project.tech.map((tech: string, tidx: number) => (
          <span key={tidx} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>
    </>
  );

  return <BaseCard id={toProjectAnchorId(project.title)} className="project-card" children={projectCardContent} />;
};

export default ProjectCard;

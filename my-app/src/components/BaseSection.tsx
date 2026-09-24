import React from "react";
import { Container } from "@mui/material";
import { generateSectionHeadingId } from "../utils/id-generator";

interface BaseSectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  gridClassName?: string;
}

/**
 * Base section component that provides:
 * - Semantic section with role="region"
 * - aria-labelledby for accessibility
 * - Container and heading structure
 * - Consistent grid wrapper
 */
const BaseSection = ({ id, title, children, gridClassName = "grid" }: BaseSectionProps) => {
  const headingId = generateSectionHeadingId(title);

  return (
    <section id={id} role="region" aria-labelledby={headingId}>
      <Container maxWidth="lg">
        <h2 id={headingId} className="section-title">
          {title}
        </h2>
        <div className={gridClassName}>{children}</div>
      </Container>
    </section>
  );
};

export default BaseSection;

import React from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

interface BaseCardProps {
  id: string;
  className: string;
  children: React.ReactNode;
}

/**
 * Base card component that provides:
 * - Intersection observer for fade-in animations
 * - Consistent card wrapper structure
 * - Unique ID for anchor linking
 */
const BaseCard = ({ id, className, children }: BaseCardProps) => {
  const ref = useIntersectionObserver();

  return (
    <div ref={ref} id={id} className={className}>
      {children}
    </div>
  );
};

export default BaseCard;

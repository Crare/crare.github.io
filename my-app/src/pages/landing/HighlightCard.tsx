import React from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

interface HighlightItem {
  label: string;
  value: string;
  description: string;
}

interface HighlightCardProps {
  item: HighlightItem;
}

const HighlightCard = ({ item }: HighlightCardProps) => {
  const ref = useIntersectionObserver();
  return (
    <article ref={ref} className="landing-highlight-card">
      <p className="landing-highlight-value">{item.value}</p>
      <h3>{item.label}</h3>
      <p>{item.description}</p>
    </article>
  );
};

export default HighlightCard;

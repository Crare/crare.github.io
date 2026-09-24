import React from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

interface SkillCardProps {
  skill: any;
  idx: number;
}

const SkillCard = ({ skill, idx }: SkillCardProps) => {
  const ref = useIntersectionObserver();

  return (
    <div ref={ref} key={idx} className="skill-card">
      {skill.icon}
      <h3>{skill.title}</h3>
      <p>{skill.description}</p>
    </div>
  );
};

export default SkillCard;

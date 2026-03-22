import { Container } from "@mui/material";
import React from "react";
import FadeInText from "../FadeInText";

type HeaderSectionProps = {
  subTitles: string[];
};

const HeaderSection = ({ subTitles }: HeaderSectionProps) => {
  return (
    <div className="header">
      <Container maxWidth="lg">
        <h1 className="title">Juho Heikkinen</h1>
        <div className="subtitle-container">
          {subTitles.map((skill, idx) => (
            <FadeInText key={idx} subTitle={skill} index={idx} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default HeaderSection;

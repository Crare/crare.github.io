import { Fade, styled } from "@mui/material";
import React, { PropsWithChildren, useEffect, useState } from "react";

const HoverText = styled("div")({
  ":hover": {
    color: "#879",
    cursor: "default",
    transition: "2s",
    animationDuration: "2s",
    animationDelay: "2s",
  },
  transition: "2s",
  animationDuration: "2s",
  animationDelay: "2s",
  display: "inline-block",
  marginRight: 10,
});

interface FadeInTextProps extends PropsWithChildren {
  subTitle: string;
  index: number;
}

const FadeInText: React.FC<FadeInTextProps> = (props) => {
  const [fadeIn, setFadeIn] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true);
    }, Math.random() * 1000);
  }, []);

  const onPointerLeave = () => {
    setFadeIn(false);
    setTimeout(() => {
      setFadeIn(true);
    }, 2000);
  };

  return (
    <Fade
      in={fadeIn}
      style={{
        animationDuration: "2s",
        animationDelay: "0.2s",
        transition: "2s",
      }}
      onPointerLeave={onPointerLeave}
      timeout={{ appear: 2500, enter: 2500, exit: 2500 }}
    >
      <HoverText>
        {props.subTitle}
        {props.index === 9 ? null : ", "}
      </HoverText>
    </Fade>
  );
};

export default FadeInText;

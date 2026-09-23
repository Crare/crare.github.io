import { Fade, styled } from "@mui/material";
import React, { PropsWithChildren, useEffect, useState } from "react";

const HoverText = styled("span")({
  ":hover": {
    color: "#a78bfa",
    cursor: "default",
    transition: "0.3s ease-in-out",
  },
  transition: "0.3s ease-in-out",
  display: "inline-block",
  marginRight: "8px",
  marginBottom: "4px",
  color: "#cbd5e0",
  fontWeight: 500,
  fontSize: "14px",

  "@media (max-width: 600px)": {
    marginRight: "6px",
    fontSize: "13px",
  },
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
        transition: "0.3s ease-in-out",
      }}
      onPointerLeave={onPointerLeave}
      timeout={{ appear: 2500, enter: 2500, exit: 2500 }}
    >
      <HoverText>
        {props.subTitle}
        {props.index === 5 ? "" : " •"}
      </HoverText>
    </Fade>
  );
};

export default FadeInText;


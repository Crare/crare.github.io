import { Fade, Grid, Link, Typography, styled } from "@mui/material";
import React, { useState } from "react";
import "./Home.css";

const HoverText = styled("div")({
  ":hover": {
    color: "#879",
    cursor: "default",
  },
  animationDuration: "2s",
  animationDelay: "2s",
  display: "inline-block",
  marginRight: 10,
});

const subTitles = [
  "Software developer",
  "Mobile apps",
  "Websites",
  "Integration systems",
  "IoT-devices",
  "Azure",
  ".NET",
  "React",
  "React Native",
];

const Home = () => {
  const [fadeIn, setFadeIn] = useState<boolean>(true);
  return (
    <Grid container className="container">
      <Grid container xs={12} className="header">
        <Grid item xs={6}>
          <Typography variant="h1" className="title" mb={4}>
            Juho Heikkinen
          </Typography>
          <Typography variant="h4" flexDirection={"column"}>
            {subTitles
              .sort((a, b) => (a < b ? -1 : 1))
              .map((subTitle, index) => (
                <Fade
                  in={fadeIn}
                  style={{ animationDuration: "2s", animationDelay: "0.2s" }}
                >
                  <HoverText>
                    {subTitle}
                    {index === subTitles.length - 1 ? null : ", "}
                  </HoverText>
                </Fade>
              ))}
          </Typography>
        </Grid>
      </Grid>
      <Grid container xs={12} spacing={2} justifyContent={"center"}>
        <Grid item xs={6}>
          <Typography variant="h4" mb={2}>
            Contact:
          </Typography>
          <Typography variant="h5">
            <Link href="https://www.linkedin.com/in/juhopmheikkinen/">
              LinkedIn
            </Link>
          </Typography>
          <Typography variant="h5">
            <Link href="https://jukepoks1.itch.io/">Itch.io</Link>
          </Typography>
          <Typography variant="h5">
            <Link href="https://github.com/Crare">Github</Link>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;


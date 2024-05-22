import { Fade, Grid, Link, Typography, styled } from "@mui/material";
import React, { PropsWithChildren, useEffect, useState } from "react";
import "./Home.css";

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

const FadeInText = (
  props: PropsWithChildren<{ subTitle: string; index: number }>
) => {
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
        {props.index === subTitles.length - 1 ? null : ", "}
      </HoverText>
    </Fade>
  );
};

const Home = () => {
  const [fadeIn, setFadeIn] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true);
    }, 500);
  }, []);

  return (
    <Grid container xs={12} pt={2} pb={12} className="container">
      <Grid container xs={12} className="header">
        <Grid item xs={12} sm={6}>
          <Typography variant="h1" className="title" mb={4}>
            Juho Heikkinen
          </Typography>
          <Typography variant="h2" textAlign={"center"}>
            {subTitles
              .sort((a, b) => (a > b ? 1 : -1))
              .map((subTitle, index) => (
                <FadeInText subTitle={subTitle} index={index} />
              ))}
          </Typography>
        </Grid>
      </Grid>
      <Grid container xs={12} spacing={4} justifyContent={"center"}>
        <Grid item xs={12} md={6} m={2} justifyContent={"center"}>
          <Typography variant="h3" mb={2}>
            Projects:
          </Typography>
          <Typography variant="h4">
            <Link
              href="https://github.com/Crare/VocabularyTeacher"
              target="_blank"
            >
              VocabularyTeacher
            </Link>
            {" - "}
            Memorize new vocabulary.
          </Typography>
          <Typography variant="h4">
            <Link href="https://github.com/Crare/telegrambot" target="_blank">
              Telegrambot
            </Link>
            {" - "}
            Bot for a mobile chat-app.
          </Typography>
          <Typography variant="h4">
            <Link href="https://github.com/Crare/organizeFiles" target="_blank">
              OrganizeFiles
            </Link>
            {" - "}
            Organizes files in folders by year & month.
          </Typography>
          <Typography variant="h4">
            <Link href="https://github.com/Crare/fridge" target="_blank">
              FridgeApp
            </Link>
            {" - "}
            Fridge app for shopping and storing food.
          </Typography>
        </Grid>

        <Grid item xs={12} md={1} m={2} justifyContent={"center"}>
          <Typography variant="h3" mb={2}>
            Contact:
          </Typography>
          <Typography variant="h4">
            <Link
              href="https://www.linkedin.com/in/juhopmheikkinen/"
              target="_blank"
            >
              LinkedIn
            </Link>
          </Typography>
          <Typography variant="h4">
            <Link href="https://jukepoks1.itch.io/" target="_blank">
              Itch.io
            </Link>
          </Typography>
          <Typography variant="h4">
            <Link href="https://github.com/Crare" target="_blank">
              Github
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;


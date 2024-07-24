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
  "Video games",
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
  return (
    <Grid container xs={12} pt={4} pb={12} className="container">
      <Grid container xs={12} className="header">
        <Grid item xs={12} sm={6} mb={4}>
          <Typography
            variant="h1"
            className="title"
            mb={4}
            style={{ borderBottom: "2px dotted white" }}
          >
            Juho Heikkinen
          </Typography>
          <Typography variant="h3" textAlign={"center"} fontWeight={"200"}>
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
          <Typography variant="h4" mb={2}>
            <Link
              href="https://github.com/Crare/GameEnginePublic"
              target="_blank"
            >
              Game engine
            </Link>
            <Typography variant="h6">
              2D Game Engine made with C#, MonoGame and XNA-framework. Used to
              make Pong- and Pacman-clone.
            </Typography>
          </Typography>
          <Typography variant="h4" mb={2}>
            <Link
              href="https://github.com/Crare/VocabularyTeacher"
              target="_blank"
            >
              Vocabulary teacher
            </Link>
            <Typography variant="h6">
              Angular, Typescript website for memorize new vocabulary in any
              language.
            </Typography>
          </Typography>
          <Typography variant="h4" mb={2}>
            <Link href="https://github.com/Crare/telegrambot" target="_blank">
              Telegram-bot
            </Link>
            <Typography variant="h6">
              Bot for a mobile chat-app with API calls to many open-source
              endpoints like news and trains information.
            </Typography>
          </Typography>
          <Typography variant="h4" mb={2}>
            <Link href="https://github.com/Crare/organizeFiles" target="_blank">
              Organize files
            </Link>
            <Typography variant="h6">
              Organizes files in folders by year & month for example managing
              lots of photos.
            </Typography>
          </Typography>
          <Typography variant="h4" mb={2}>
            <Link href="https://github.com/Crare/fridge" target="_blank">
              Fridge-app
            </Link>
            <Typography variant="h6">
              React-Native app for shopping and storing food.
            </Typography>
          </Typography>
        </Grid>

        <Grid item xs={12} md={2} m={2} justifyContent={"center"}>
          <Typography variant="h3" mb={2}>
            Contact:
          </Typography>
          <Typography variant="h4" mb={2}>
            <Link
              href="https://www.linkedin.com/in/juhopmheikkinen/"
              target="_blank"
            >
              LinkedIn
            </Link>
            <Typography variant="h6">- Send me a message</Typography>
          </Typography>
          <Typography variant="h4" mb={2}>
            <Link href="https://jukepoks1.itch.io/" target="_blank">
              Itch.io
            </Link>
            <Typography variant="h6">- Game portfolio</Typography>
          </Typography>
          <Typography variant="h4" mb={2}>
            <Link href="https://github.com/Crare" target="_blank">
              Github
            </Link>
            <Typography variant="h6">- Source Code & Projects</Typography>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;


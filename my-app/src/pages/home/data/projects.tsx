import React from "react";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import { Project } from "../types";
import vocabularyAppImage from "../../../img/vocabulary-app.png";
import vocabularyAppImage2 from "../../../img/vocabulary-app2.png";
import vocabularyAppImage3 from "../../../img/vocabulary-app3.png";
import telegramBotImage from "../../../img/telegrambot.png";
import gameEngineImage from "../../../img/gameengine.png";
import vocabularyAppThumb from "../../../img/vocabulary-app-thumb.jpg";
import vocabularyAppThumb2 from "../../../img/vocabulary-app2-thumb.jpg";
import vocabularyAppThumb3 from "../../../img/vocabulary-app3-thumb.jpg";
import telegramBotThumb from "../../../img/telegrambot-thumb.jpg";
import gameEngineThumb from "../../../img/gameengine-thumb.jpg";

export const projectsData: Project[] = [
  {
    title: "Vocabulary Trainer",
    category: "Web",
    tech: ["React", "TypeScript"],
    description: "React TypeScript website to memorize new vocabulary in any language with interactive learning.",
    link: "https://crare.github.io/vocabulary-app?ref=githubpages",
    images: [
      { thumb: vocabularyAppThumb, full: vocabularyAppImage },
      { thumb: vocabularyAppThumb2, full: vocabularyAppImage2 },
      { thumb: vocabularyAppThumb3, full: vocabularyAppImage3 },
    ],
    icon: <MenuBookIcon className="project-title-icon" />,
  },
  {
    title: "Telegram Bot",
    category: "Cloud",
    tech: ["APIs", "Automation"],
    description: "Bot for mobile chat-apps with API calls to news, trains, and open-source endpoints.",
    link: "https://github.com/Crare/telegrambot",
    images: [{ thumb: telegramBotThumb, full: telegramBotImage }],
    icon: <SmartToyIcon className="project-title-icon" />,
  },
  {
    title: "Game Engine",
    category: "Systems",
    tech: ["C#", "MonoGame", "XNA"],
    description: "2D Game Engine built with C#, MonoGame and XNA-framework. Pong & Pacman clones included.",
    link: "https://github.com/Crare/GameEnginePublic",
    images: [{ thumb: gameEngineThumb, full: gameEngineImage }],
    icon: <SportsEsportsIcon className="project-title-icon" />,
  },
  {
    title: "Fridge App",
    category: "Mobile",
    tech: ["React Native", "Shopping"],
    description: "React-Native app for shopping and storing food. Track inventory across your devices.",
    link: "https://github.com/Crare/fridge",
    icon: <PhoneAndroidIcon className="project-title-icon" />,
  },
  {
    title: "Organize Files",
    category: "Utilities",
    tech: ["File Management"],
    description: "Organizes files into folders by year & month. Perfect for managing photo libraries.",
    link: "https://github.com/Crare/organizeFiles",
    icon: <FolderOpenIcon className="project-title-icon" />,
  },
];

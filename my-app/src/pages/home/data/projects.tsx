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
import midiToMinecraftAppImage from "../../../img/midi-to-minecraft-webapp.png";
import vocabularyAppThumb from "../../../img/vocabulary-app-thumb.jpg";
import vocabularyAppThumb2 from "../../../img/vocabulary-app2-thumb.jpg";
import vocabularyAppThumb3 from "../../../img/vocabulary-app3-thumb.jpg";
import telegramBotThumb from "../../../img/telegrambot-thumb.jpg";
import gameEngineThumb from "../../../img/gameengine-thumb.jpg";
import midiToMinecraftAppThumb from "../../../img/midi-to-minecraft-webapp-thumb.jpg";

export const projectsData: Project[] = [
  {
    title: "MIDI to Minecraft webapp",
    category: "Web",
    tech: ["React"],
    description: "React webapp that converts MIDI files into Minecraft note block arrangements. A fun project combining music and gaming, allowing users to create custom Minecraft music tracks from their favorite songs.",
    link: "https://crare.github.io/midi-to-minecraft?ref=githubpages",
    images: [
      { thumb: midiToMinecraftAppThumb, full: midiToMinecraftAppImage },
    ],
    icon: <SmartToyIcon className="project-title-icon" />,
  },
  {
    title: "Vocabulary Trainer",
    category: "Web",
    tech: ["React", "TypeScript"],
    description: "React TypeScript website to memorize new vocabulary in any language with interactive learning. Originally built to help with studying Swedish in school, it has gone through many iterations since and continues to evolve.",
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
    description: "Bot for mobile chat-apps with API calls to news, trains, and open-source endpoints. Involved work with mobile web-app integrations, cron jobs, and various API integrations.",
    link: "https://github.com/Crare/telegrambot",
    images: [{ thumb: telegramBotThumb, full: telegramBotImage }],
    icon: <SmartToyIcon className="project-title-icon" />,
  },
  {
    title: "Game Engine",
    category: "Systems",
    tech: ["C#", "MonoGame", "XNA"],
    description: "2D Game Engine built with C#, MonoGame and XNA-framework. A deep dive into game engine logic, rendering pipelines, physics, and game flow design. Pong & Pacman clones included.",
    link: "https://github.com/Crare/GameEnginePublic",
    images: [{ thumb: gameEngineThumb, full: gameEngineImage }],
    icon: <SportsEsportsIcon className="project-title-icon" />,
  },
  {
    title: "Fridge App",
    category: "Mobile",
    tech: ["React Native", "Shopping"],
    description: "React Native app for tracking fridge inventory and shopping lists across devices. One of the first mobile apps I built, it has gone through many iterations and a new version with a different twist is in the works.",
    link: "https://github.com/Crare/fridge",
    icon: <PhoneAndroidIcon className="project-title-icon" />,
  },
  {
    title: "Organize Files",
    category: "Utilities",
    tech: ["File Management"],
    description: "Born from having too many scattered files and photos, this tool quickly organizes them into folders by year and month — making large photo libraries easy to manage.",
    link: "https://github.com/Crare/organizeFiles",
    icon: <FolderOpenIcon className="project-title-icon" />,
  },
];

import React from "react";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import RecyclingIcon from "@mui/icons-material/Recycling";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import WorkIcon from "@mui/icons-material/Work";
import { Project } from "../types";
import vocabularyAppImage from "../img/vocabulary-app.png";
import vocabularyAppImage2 from "../img/vocabulary-app2.png";
import vocabularyAppImage3 from "../img/vocabulary-app3.png";
import telegramBotImage from "../img/telegrambot.png";
import gameEngineImage from "../img/gameengine.png";
import midiToMinecraftAppImage from "../img/midi-to-minecraft-webapp.png";
import vocabularyAppThumb from "../img/vocabulary-app-thumb.jpg";
import vocabularyAppThumb2 from "../img/vocabulary-app2-thumb.jpg";
import vocabularyAppThumb3 from "../img/vocabulary-app3-thumb.jpg";
import telegramBotThumb from "../img/telegrambot-thumb.jpg";
import gameEngineThumb from "../img/gameengine-thumb.jpg";
import midiToMinecraftAppThumb from "../img/midi-to-minecraft-webapp-thumb.jpg";

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

export const customerProjectsData: Project[] = [
  {
    title: "Seure – OmaSeure",
    category: "Customer",
    tech: ["Azure PaaS", "Mobile", "API Integration"],
    description: "Developed the OmaSeure workforce management app for Seure — a personnel service company with 19,000+ employees in Finnish healthcare, education, and social services. Built across the full stack: mobile frontend, Azure PaaS backend, and API integrations. The app manages 6.4 million work hours annually and holds a 4.2+ star rating on app stores.",
    shortDescription: "Workforce management app for 19,000+ employees in Finnish healthcare, education, and social services. Manages 6.4 million work hours annually with 4.2+ star rating.",
    link: "https://zure.com/cases/seure-exceptional-worker-experience-through-digital-design-and-innovation",
    icon: <WorkIcon className="project-title-icon" />,
  },
  {
    title: "KEVA – Pension & Rehabilitation App",
    category: "Customer",
    tech: ["Mobile", "API Integration", "Suomi.fi Auth", "Accessibility"],
    description: "Developed the Keva Pension and Rehabilitation mobile app for Finland's largest pension provider. Implemented Suomi.fi strong authentication, benefit payment views, document management, push notifications, and a digital pension card. Built to WCAG 2.2 AA accessibility standards with the elderly as a primary user group.",
    shortDescription: "Mobile app for Finland's largest pension provider with Suomi.fi authentication, payments, documents, and digital pension card. Built to WCAG 2.2 AA accessibility standards.",
    link: "https://zure.com/cases/keva",
    icon: <AccountBalanceIcon className="project-title-icon" />,
  },
  {
    title: "Kuusakoski – Customer Portal",
    category: "Customer",
    tech: ["Azure", "Web", "DevOps", "Data Integration"],
    description: "Developed and updated the Kuusakoski Customer Portal — an Azure-based self-service web platform for Northern Europe's leading recycling provider. The portal enables order management, reporting, and sustainability analytics for all customer segments. The user base grew from 115 to 1,141 after the initial release; Customer Portal 2.0 launched in January 2025.",
    shortDescription: "Azure-based self-service portal for Europe's leading recycling provider. Grew from 115 to 1,141 users; Customer Portal 2.0 launched January 2025.",
    link: "https://zure.com/cases/kuusakoski-customer-portal-1",
    icon: <RecyclingIcon className="project-title-icon" />,
  },
];

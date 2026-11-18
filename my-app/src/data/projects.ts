import { ClientCase, Project } from "../types";
import vocabularyAppImage from "../img/vocabulary-app-thumb.jpg";
import telegramBotImage from "../img/telegrambot-thumb.jpg";
import gameEngineImage from "../img/gameengine-thumb.jpg";
import midiToMinecraftAppImage from "../img/midi-to-minecraft-webapp-thumb.jpg";

/** Personal side projects, shown on the Projects page and (first three) on Home. */
export const projectsData: Project[] = [
  {
    title: "MIDI to Minecraft",
    category: "Web",
    tech: ["React"],
    description:
      "Web app that converts MIDI files into Minecraft note block arrangements, so you can build your favourite songs in the game.",
    link: "https://crare.github.io/midi-to-minecraft?ref=githubpages",
    live: true,
    image: midiToMinecraftAppImage,
    imageAlt: "MIDI to Minecraft web app screenshot",
  },
  {
    title: "Vocabulary Trainer",
    category: "Web",
    tech: ["React", "TypeScript"],
    description:
      "Memorise vocabulary in any language. Started as a tool for school Swedish and has kept evolving through many iterations.",
    link: "https://crare.github.io/vocabulary-app?ref=githubpages",
    live: true,
    image: vocabularyAppImage,
    imageAlt: "Vocabulary Trainer screenshot",
  },
  {
    title: "Game Engine",
    category: "Systems",
    tech: ["C#", "MonoGame", "XNA"],
    description:
      "2D game engine: rendering pipeline, physics and game flow. Pong and Pacman clones included.",
    link: "https://github.com/Crare/GameEnginePublic",
    image: gameEngineImage,
    imageAlt: "Game engine screenshot",
  },
  {
    title: "Telegram Bot",
    category: "Cloud",
    tech: ["APIs", "Automation"],
    description:
      "Chat bot that calls news, train and open data APIs, with cron jobs and mobile web-app integrations.",
    link: "https://github.com/Crare/telegrambot",
    image: telegramBotImage,
    imageAlt: "Telegram bot conversation screenshot",
  },
  {
    title: "Fridge App",
    category: "Mobile",
    tech: ["React Native"],
    description:
      "Tracks fridge inventory and shopping lists across devices. One of my first mobile apps, with a new version in the works.",
    link: "https://github.com/Crare/fridge",
  },
  {
    title: "Organize Files",
    category: "Utilities",
    tech: ["File management"],
    description:
      "Sorts scattered files and photos into year and month folders, so large photo libraries stay manageable.",
    link: "https://github.com/Crare/organizeFiles",
  },
];

/** Client work delivered via Zure. All details come from the public case studies. */
export const clientCases: ClientCase[] = [
  {
    client: "Seure",
    product: "OmaSeure workforce app",
    sector: "Staffing services",
    role: "Full-stack · mobile · Azure PaaS · APIs · DevOps",
    description:
      "Developed the OmaSeure workforce management app for Seure, a personnel service company with 19,000+ employees in Finnish healthcare, education and social services. Built across the full stack: mobile frontend, Azure PaaS backend and API integrations.",
    figures: [
      { value: "19,000+", label: "employees using the app" },
      { value: "6.4M", label: "work hours managed per year" },
      { value: "4.2★", label: "app store rating" },
    ],
    tech: ["Azure PaaS", "Mobile", "API integration", "DevOps"],
    link: "https://zure.com/cases/seure-exceptional-worker-experience-through-digital-design-and-innovation",
  },
  {
    client: "Keva",
    product: "Pension & rehabilitation app",
    sector: "Public pensions",
    role: "Mobile · auth · accessibility · DevOps",
    description:
      "Developed the Keva Pension and Rehabilitation mobile app for Finland’s largest pension provider. Implemented Suomi.fi strong authentication, benefit payment views, document management, push notifications and a digital pension card, built to WCAG 2.2 AA with the elderly as a primary user group.",
    figures: [
      { value: "AA", label: "WCAG 2.2 accessibility level" },
      { value: "Suomi.fi", label: "strong authentication" },
      { value: "#1", label: "largest pension provider in Finland" },
    ],
    tech: ["Mobile", "API integration", "Suomi.fi auth", "Accessibility"],
    link: "https://zure.com/cases/keva",
  },
  {
    client: "Kuusakoski",
    product: "Customer portal",
    sector: "Recycling",
    role: "Web · Azure · DevOps · data integration",
    description:
      "Developed and updated the Kuusakoski Customer Portal, an Azure-based self-service web platform for Northern Europe’s leading recycling provider. The portal handles order management, reporting and sustainability analytics for all customer segments.",
    figures: [
      { value: "115 → 1,141", label: "users after the first release" },
      { value: "2.0", label: "Customer Portal 2.0, January 2025" },
      { value: "Self-service", label: "orders, reporting, sustainability data" },
    ],
    tech: ["Azure", "Web", "DevOps", "Data integration"],
    link: "https://zure.com/cases/kuusakoski-customer-portal-1",
  },
];

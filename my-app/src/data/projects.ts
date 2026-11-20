import { ClientCase, Project } from "../types";
import midiThumb from "../img/midi-to-minecraft-webapp-thumb.jpg";
import midiLarge from "../img/midi-to-minecraft-webapp-large.jpg";
import vocabularyThumb from "../img/vocabulary-app-thumb.jpg";
import vocabularyLarge from "../img/vocabulary-app-large.jpg";
import gameEngineThumb from "../img/gameengine-thumb.jpg";
import gameEngineLarge from "../img/gameengine-large.jpg";

/**
 * Personal side projects. Projects with an `image` are shown as framed
 * screenshots; the rest are listed as text below them.
 */
export const projectsData: Project[] = [
  {
    title: "MIDI to Minecraft",
    category: "Web",
    tech: ["React"],
    description: "Turns a MIDI file into Minecraft note blocks. React.",
    link: "https://crare.github.io/midi-to-minecraft?ref=githubpages",
    live: true,
    image: { small: midiThumb, smallWidth: 400, large: midiLarge, largeWidth: 1126 },
    imageAlt: "Screenshot of the MIDI to Minecraft web app",
  },
  {
    title: "Vocabulary Trainer",
    category: "Web",
    tech: ["React", "TypeScript"],
    description: "Started as a way to study Swedish at school. React and TypeScript.",
    link: "https://crare.github.io/vocabulary-app?ref=githubpages",
    live: true,
    image: { small: vocabularyThumb, smallWidth: 224, large: vocabularyLarge, largeWidth: 640 },
    imageAlt: "Screenshot of the Vocabulary Trainer",
  },
  {
    title: "2D game engine",
    category: "Systems",
    tech: ["C#", "MonoGame", "XNA"],
    description: "Rendering, physics and game flow, with Pong and Pacman clones. C# and MonoGame.",
    link: "https://github.com/Crare/GameEnginePublic",
    image: { small: gameEngineThumb, smallWidth: 224, large: gameEngineLarge, largeWidth: 640 },
    imageAlt: "Screenshot of the 2D game engine’s README",
  },
  {
    title: "Telegram bot",
    category: "Cloud",
    tech: ["APIs", "Automation"],
    description: "A chat bot that fetches news, train times and open data, with scheduled jobs.",
    link: "https://github.com/Crare/telegrambot",
  },
];

/** Client work from Zure. Every fact here comes from the public case studies. */
export const clientCases: ClientCase[] = [
  {
    client: "Seure",
    sector: "Staffing for healthcare, education and social services",
    headline: "OmaSeure, the app Seure’s employees use to manage their work",
    description:
      "I worked across the whole stack: the mobile app, the Azure PaaS backend, the API integrations and the DevOps setup.",
    facts: "Used by more than 19,000 employees. Handles 6.4 million work hours a year. Rated 4.2 in the app stores.",
    link: "https://zure.com/cases/seure-exceptional-worker-experience-through-digital-design-and-innovation",
  },
  {
    client: "Keva",
    sector: "Finland’s largest pension provider",
    headline: "A pension and rehabilitation app built for older users",
    description:
      "On the mobile app I worked on benefit payments, documents, push notifications and the digital pension card, along with DevOps. Many of the users are elderly, so it’s built to WCAG 2.2 AA.",
    facts: "Meets WCAG 2.2 AA.",
    link: "https://zure.com/cases/keva",
  },
  {
    client: "Kuusakoski",
    sector: "Recycling in Northern Europe",
    headline: "A self-service customer portal on Azure",
    description:
      "Customers use the portal for orders, reporting and sustainability data. I developed and updated it, including the DevOps and data integrations.",
    facts: "Users grew from 115 to 1,141 after the first release. Portal 2.0 launched in January 2025.",
    link: "https://zure.com/cases/kuusakoski-customer-portal-1",
  },
];

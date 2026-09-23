import React from "react";
import CloudIcon from "@mui/icons-material/Cloud";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import TerminalIcon from "@mui/icons-material/Terminal";
import StorageIcon from "@mui/icons-material/Storage";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import BugReportIcon from "@mui/icons-material/BugReport";
import { Skill } from "../types";

export const skillsData: Skill[] = [
  {
    title: "Mobile Development",
    icon: <PhoneAndroidIcon />,
    description: "React Native expertise for cross-platform mobile applications with full pipeline experience from development to production deployment and maintenance",
  },
  {
    title: "Cloud & Azure",
    icon: <CloudIcon />,
    description: "Azure services, cloud integrations, and production-ready deployments",
  },
  {
    title: "Frontend & Web",
    icon: <TerminalIcon />,
    description: "React, TypeScript, and practical web development with a focus on usability and maintainability",
  },
  {
    title: "Backend & Databases",
    icon: <StorageIcon />,
    description: "C#, .NET, Python, SQL-based databases, and API-focused service development",
  },
  {
    title: "Testing & QA Automation",
    icon: <BugReportIcon />,
    description:
      "Backend unit testing with Moq and MSTest, frontend Jest tests, E2E testing with Selenium and Maestro, BrowserStack pipeline integration, and CI pipelines with automated test runs.",
  },
  {
    title: "Game Development",
    icon: <SportsEsportsIcon />,
    description: "Godot, Unity, and gameplay prototyping through jams and personal projects",
  },
];

import React from "react";
import CloudIcon from "@mui/icons-material/Cloud";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import TerminalIcon from "@mui/icons-material/Terminal";
import StorageIcon from "@mui/icons-material/Storage";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import { Skill } from "../types";

export const skillsData: Skill[] = [
  {
    title: "Mobile Development",
    icon: <PhoneAndroidIcon />,
    description: "React Native expertise for cross-platform mobile applications",
  },
  {
    title: "Cloud & Azure",
    icon: <CloudIcon />,
    description: "Azure services, cloud integrations, and production-ready deployments",
  },
  {
    title: "Frontend & Mobile",
    icon: <TerminalIcon />,
    description: "React, TypeScript, React Native, and Expo for cross-platform app development",
  },
  {
    title: "Backend & Databases",
    icon: <StorageIcon />,
    description: "C#, .NET, Python, SQL-based databases, and API-focused service development",
  },
  {
    title: "Game Development",
    icon: <SportsEsportsIcon />,
    description: "Godot, Unity, and gameplay prototyping through jams and personal projects",
  },
];

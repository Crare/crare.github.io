import React from "react";
import CloudIcon from "@mui/icons-material/Cloud";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
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
    description: "Cloud infrastructure and Azure cloud services deployment",
  },
];

import { FamiliarSkillCategory, Skill } from "../types";

/** Core skills, each with the tools used for it. */
export const skillsData: Skill[] = [
  {
    title: "Mobile",
    description: "Cross-platform apps with React Native, from development to app store release and maintenance.",
    toolkit: ["React Native", "Expo", "push notifications", "app store releases"],
  },
  {
    title: "Cloud and Azure",
    description: "Azure services, cloud integrations and production deployments.",
    toolkit: ["Azure", "Azure PaaS", "DevOps", "data integration"],
  },
  {
    title: "Frontend and web",
    description: "React and TypeScript, with attention to usability, accessibility and maintainability.",
    toolkit: ["React", "TypeScript", "MUI", "SCSS", "WCAG 2.2 AA"],
  },
  {
    title: "Backend and databases",
    description: "APIs and services in C#, .NET and Python, on SQL databases.",
    toolkit: ["C#", ".NET", ".NET Framework", "LINQ", "Python", "SQL", "REST APIs", "FastEndpoints"],
  },
  {
    title: "CI/CD and testing",
    description: "Pipelines that run backend unit tests, frontend tests and end-to-end tests on real devices.",
    toolkit: ["CI/CD pipelines", "Moq", "MSTest", "Jest", "Selenium", "Maestro", "BrowserStack"],
  },
];

/** AI tools named in the "How I use AI" paragraph. */
export const aiTools = ["Claude Code", "OpenCode", "GitHub Copilot", "OpenSpec", "ChatGPT"];

/** Wider toolbox: technologies used along the way, beyond the core skills. */
export const familiarSkillsData: FamiliarSkillCategory[] = [
  {
    title: "Frontend and mobile",
    skills: ["Expo", "React Native", "Ionic", "TypeScript", "JavaScript", "CSS", "HTML", "React", "AngularJS", "Angular", "Bootstrap", "MUI", "Node.js", "Next.js", "npm", "Yarn"],
  },
  {
    title: "Backend",
    skills: ["C#", "Java", "PHP", "Python", "Azure", "Firebase", ".NET", "FastEndpoints", "Entity Framework", "MediatR", "LINQ", "Convex"],
  },
  {
    title: "Databases",
    skills: ["Microsoft SQL Server", "MariaDB", "MySQL", "PostgreSQL", "SQLite"],
  },
  {
    title: "DevOps and CI",
    skills: ["Shell scripting", "Bash", "Git", "Docker", "Azure DevOps", "GitHub Actions", "pipelines", "deployment", "automation"],
  },
  {
    title: "Testing",
    skills: ["Cypress", "Maestro", "Playwright", "Selenium", "BrowserStack", "Jest", "Moq", "MSTest"],
  },
  {
    title: "Editors and tools",
    skills: ["VS Code", "Visual Studio", "Rider", "Eclipse", "Figma", "Miro", "Trello", "Postman"],
  },
  {
    title: "Game development",
    skills: ["Aseprite", "Blender", "3D modelling", "Unity", "Godot"],
  },
  {
    title: "Other",
    skills: ["Windows", "Linux (Ubuntu, Mint, Debian)", "macOS", "Arduino", "Raspberry Pi", "Home Assistant"],
  },
];

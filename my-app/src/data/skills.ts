import { FamiliarSkillCategory, Skill, StackLayer } from "../types";

/** Header diagram on the Skills page, from the user-facing top down to production. */
export const stackLayers: StackLayer[] = [
  { title: "Frontend & web", tools: "React · TypeScript" },
  { title: "Mobile", tools: "React Native · Expo" },
  { title: "Backend & data", tools: "C# · .NET · Python · SQL" },
  { title: "Cloud", tools: "Azure · PaaS" },
  { title: "CI/CD & testing", tools: "Pipelines · unit · E2E" },
];

export const skillsData: Skill[] = [
  {
    title: "Mobile development",
    description:
      "Cross-platform apps with React Native, with the full pipeline from development to production deployment and maintenance.",
    toolkit: ["React Native", "Expo", "Push notifications", "Suomi.fi auth", "App store releases"],
  },
  {
    title: "Cloud & Azure",
    description: "Azure services, cloud integrations and production-ready deployments.",
    toolkit: ["Azure", "Azure PaaS", "DevOps", "Data integration"],
  },
  {
    title: "Frontend & web",
    description:
      "React, TypeScript and practical web development with a focus on usability, accessibility and maintainability.",
    toolkit: ["React", "TypeScript", "MUI", "SCSS", "WCAG 2.2 AA"],
  },
  {
    title: "Backend & databases",
    description: "API-focused service development with C#, .NET, Python and SQL-based databases.",
    toolkit: ["C#", ".NET", ".NET Framework", "LINQ", "Python", "SQL", "REST APIs", "FastEndpoints"],
  },
  {
    title: "CI/CD & test automation",
    description:
      "Pipelines with automated test runs: backend unit tests, frontend tests and E2E on real devices.",
    toolkit: ["CI/CD pipelines", "Moq", "MSTest", "Jest", "Selenium", "Maestro", "BrowserStack"],
  },
];

/** Wider toolbox: technologies used at some point, beyond the core skills above. */
export const familiarSkillsData: FamiliarSkillCategory[] = [
  {
    title: "Frontend & Mobile",
    skills: ["Expo", "React Native", "Ionic", "TypeScript", "JavaScript", "CSS3", "HTML5", "React", "AngularJS", "Angular", "Bootstrap", "MUI", "Node.js", "Next.js", "npm", "Yarn"],
  },
  {
    title: "Backend",
    skills: ["C#", "Java", "PHP", "Python", "Azure", "Firebase", ".NET", "Fast Endpoints", "EntityFramework", "MediatR", "LINQ", "Convex"],
  },
  {
    title: "Database",
    skills: ["Microsoft SQL Server (MSSQL)", "MariaDB", "MySQL", "PostgreSQL", "SQLite"],
  },
  {
    title: "DevOps & Continuous Integration",
    skills: ["Shell scripting", "Bash", "Git", "Docker", "Azure DevOps", "GitHub Actions", "Pipelines", "Deployment", "Automation"],
  },
  {
    title: "Testing & Quality Assurance",
    skills: ["Cypress", "Maestro", "Playwright", "Selenium", "BrowserStack", "Jest", "Moq", "MSTest"],
  },
  {
    title: "IDEs & Tools",
    skills: ["VS Code", "Visual Studio", "IntelliJ Rider", "Eclipse", "Figma", "Miro", "Trello", "Postman"],
  },
  {
    title: "Agentic Development",
    skills: ["Agentic coding", "GitHub Copilot", "OpenSpec", "OpenCode", "Claude", "ChatGPT"],
  },
  {
    title: "Game Development",
    skills: ["Aseprite", "Blender", "3D-modeling", "Unity", "Godot"],
  },
  {
    title: "Other",
    skills: ["Windows", "Linux", "Ubuntu", "Linux Mint", "Debian", "macOS", "Arduino", "Raspberry Pi"],
  },
];

import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/about/AboutPage";
import ContactPage from "./pages/contact/ContactPage";
import GamesPage from "./pages/games/GamesPage";
import LandingPage from "./pages/landing/LandingPage";
import LayoutPage from "./pages/layout/LayoutPage";
import ProjectsPage from "./pages/projects/ProjectsPage";
import SkillsPage from "./pages/skills/SkillsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<LandingPage />} />
          <Route path="skills" element={<SkillsPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="games" element={<GamesPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


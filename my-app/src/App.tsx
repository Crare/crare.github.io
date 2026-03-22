import React from "react";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/home/pages/AboutPage";
import ContactPage from "./pages/home/pages/ContactPage";
import GamesPage from "./pages/home/pages/GamesPage";
import LayoutPage from "./pages/home/pages/LayoutPage";
import ProjectsPage from "./pages/home/pages/ProjectsPage";
import SkillsPage from "./pages/home/pages/SkillsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<Navigate to="/skills" replace />} />
          <Route path="skills" element={<SkillsPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="games" element={<GamesPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/skills" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


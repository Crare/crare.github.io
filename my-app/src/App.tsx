import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import LayoutPage from "./pages/layout/LayoutPage";

/** The site used to have one route per page; old links now jump to the matching section. */
export const legacyRoutes: Record<string, string> = {
  about: "about",
  skills: "skills",
  projects: "work",
  games: "games",
  contact: "contact",
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<HomePage />} />
          {Object.entries(legacyRoutes).map(([path, section]) => (
            <Route key={path} path={path} element={<Navigate to={{ pathname: "/", hash: section }} replace />} />
          ))}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import PasswordPage from "./PasswordPage.jsx";
import WelcomePage from "./WelcomePage.jsx";
import App from "./App.jsx";
import AnimationPage from "./AnimationPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(

  <BrowserRouter>

    <Routes>

      <Route path="/" element={<PasswordPage />} />

      <Route path="/welcome" element={<WelcomePage />} />

      <Route path="/home" element={<App />} />

      <Route path="/animation" element={<AnimationPage />} />

    </Routes>

  </BrowserRouter>

);
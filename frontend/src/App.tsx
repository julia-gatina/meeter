import React from "react";
import "./App.scss";
import { Navigate, Route, Routes } from "react-router-dom";
import { DashboardPage } from "./pages/DashboardPage";
import { LoginPage } from "./pages/LoginPage";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="*" element={<Navigate to="login" replace />} />
    </Routes>
  );
}

export default App;

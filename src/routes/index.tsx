
import { HomePage } from "@/pages/HomePage";
import { LivePage } from "@/pages/LivePage";
import { Routes, Route } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/agenda" element={<h1>Minha Agenda</h1>} />
      <Route path="/lives" element={<LivePage />} />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
};

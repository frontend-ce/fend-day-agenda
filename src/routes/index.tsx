
import { HomePage } from "@/pages/HomePage";
import { LivePage } from "@/pages/LivePage";
import { MyAgenda } from "@/pages/MyAgenda";
import { Routes, Route } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/agenda" element={<h1>Minha Agenda</h1>} />
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/agenda" element={<MyAgenda/>} />
      <Route path="/lives" element={<LivePage />} />
      <Route path="*" element={<h1>404</h1>} />
      
    </Routes>
  );
};

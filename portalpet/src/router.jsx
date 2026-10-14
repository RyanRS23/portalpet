import { BrowserRouter, Routes, Route } from "react-router-dom";

import Menu from "./menu/menuprincipal";
import MeusAnimais from "./Meus_animais/meusanimais";
import SaibaMais from "./saibamais/saibamais";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/meus-animais" element={<MeusAnimais />} />
        <Route path="/saiba-mais" element={<SaibaMais />} />
      </Routes>
    </BrowserRouter>
  );
}
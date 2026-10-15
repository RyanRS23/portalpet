import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./menu/menuprincipal";
import Adocao from "./adocao/adocao";
import MeuPerfil from "./meuperfil/meuperfil";
import MeusAnimais from "./Meus_animais/meusanimais";
import SaibaMais from "./saibamais/saibamais";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/adocao" element={<Adocao />} />
        <Route path="/meu-perfil" element={<MeuPerfil />} />
        <Route path="/meus-animais" element={<MeusAnimais />} />
        <Route path="/saiba-mais" element={<SaibaMais />} />
      </Routes>
    </BrowserRouter>
  );
}

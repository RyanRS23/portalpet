import { BrowserRouter, Routes, Route } from "react-router-dom";

import Menu from "./menu/menuprincipal";
import Inicio from "./menu/menuprincipal";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  );
}
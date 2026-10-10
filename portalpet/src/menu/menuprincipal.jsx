import { Home, Dog, Heart, Search, User } from "lucide-react";
import "./menuprincipal.scss";

function Menu() {
  return (
    <aside className="sidebar">

      <div className="header-container">
        <img className="logo" src="/images/logo.png" alt="Logo PortalPet" />
        
        <div className="texto-header">
          <h1 className="titulomenu">PortalPet</h1>
          <p className="subtitulomenu">Adoção & Cuidado</p>
        </div>
      </div>

 
      <nav className="menu-nav">
        <a href="#inicio" className="menu-item active">
          <Home className="icon" size={20} />
          <span>Início</span>
        </a>

        <a href="#meus-animais" className="menu-item">
          <Dog className="icon" size={20} />
          <span>Meus Animais</span>
        </a>

        <a href="#adocao" className="menu-item">
          <Heart className="icon" size={20} />
          <span>Adoção</span>
        </a>

        <a href="#desaparecidos" className="menu-item">
          <Search className="icon" size={20} />
          <span>Desaparecidos</span>
        </a>

        <a href="#meu-perfil" className="menu-item">
          <User className="icon" size={20} />
          <span>Meu Perfil</span>
        </a>
      </nav>
    </aside>
  );
}

export default Menu;
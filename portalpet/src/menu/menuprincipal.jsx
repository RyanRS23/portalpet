import React, { useState } from "react";
import { 
  Home, Dog, Heart, Search, User, Menu as MenuIcon, X, 
  PawPrint, Eye, ArrowRight, MapPin, Cat, Rabbit 
} from "lucide-react";
import "./menuprincipal.scss";

const animaisDisponiveis = [
  {
    id: 1,
    nome: "Thor",
    idade: "3 anos",
    raca: "Golden Retriever",
    sexo: "Macho",
    porte: "Grande",
    cidade: "São Paulo",
    imagem: "https://images.pexels.com/photos/11106504/pexels-photo-11106504.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    favorito: false
  },
  {
    id: 2,
    nome: "Luna",
    idade: "2 anos",
    raca: "SRD",
    sexo: "Fêmea",
    porte: "Médio",
    cidade: "Campinas",
    imagem: "https://images.pexels.com/photos/39537892/pexels-photo-39537892.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    favorito: true
  },
  {
    id: 3,
    nome: "Bob",
    idade: "1 ano",
    raca: "Beagle",
    sexo: "Macho",
    porte: "Médio",
    cidade: "Rio de Janeiro",
    imagem: "https://images.pexels.com/photos/22395025/pexels-photo-22395025.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    favorito: true
  },
  {
    id: 4,
    nome: "Mia",
    idade: "2 anos",
    raca: "SRD",
    sexo: "Fêmea",
    porte: "Pequeno",
    cidade: "Campinas",
    imagem: "https://images.pexels.com/photos/15652928/pexels-photo-15652928.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    favorito: false
  }
];

function Menu() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <>
      <button 
        className="btn-hamburguer" 
        onClick={() => setMenuAberto(!menuAberto)}
      >
        {menuAberto ? <X size={24} /> : <MenuIcon size={24} />}
      </button>

      {menuAberto && (
        <div 
          className="menu-overlay" 
          onClick={() => setMenuAberto(false)} 
        />
      )}

      <aside className={`sidebar ${menuAberto ? "open" : ""}`}>
        <div className="header-container">
          <img className="logo" src="/images/logo.png" alt="Logo PortalPet" />
          
          <div className="texto-header">
            <h1 className="titulomenu">PortalPet</h1>
            <p className="subtitulomenu">Adoção & Cuidado</p>
          </div>
        </div>

        <nav className="menu-nav">
          <a href="#inicio" className="menu-item active" onClick={() => setMenuAberto(false)}>
            <Home className="icon" size={20} />
            <span>Início</span>
          </a>

          <a href="#meus-animais" className="menu-item" onClick={() => setMenuAberto(false)}>
            <Dog className="icon" size={20} />
            <span>Meus Animais</span>
          </a>

          <a href="#adocao" className="menu-item" onClick={() => setMenuAberto(false)}>
            <Heart className="icon" size={20} />
            <span>Adoção</span>
          </a>

          <a href="#desaparecidos" className="menu-item" onClick={() => setMenuAberto(false)}>
            <Search className="icon" size={20} />
            <span>Desaparecidos</span>
          </a>

          <a href="#meu-perfil" className="menu-item" onClick={() => setMenuAberto(false)}>
            <User className="icon" size={20} />
            <span>Meu Perfil</span>
          </a>
        </nav>
      </aside>
    </>
  );
}

export default function Inicio() {
  return (
    <div className="app-layout">
      <Menu />

      <main className="main-content">
       
        <section className="hero-card">
          <div className="hero-content">
            <div className="badge-tag">
              <PawPrint size={16} />
              <span>Plataforma de adoção</span>
            </div>

            <h1 className="hero-title">
              Encontre um <br /> novo melhor <br /> amigo.
            </h1>

            <p className="hero-description">
              Ajude um animal a encontrar um lar cheio de carinho ou encontre seu próximo companheiro.
            </p>

            <div className="hero-buttons">
              <button className="btn-primary">
                <Heart size={18} />
                <span>Quero Adotar</span>
              </button>

              <button className="btn-secondary">
                <PawPrint size={18} />
                <span>Quero colocar para adoção</span>
              </button>
            </div>
          </div>

          <div className="hero-image-wrapper">
            <img 
              src="/images/cachorroegato.avif" 
              alt="Cão e gato juntos" 
              className="hero-image" 
            />

            <div className="floating-badge">
              <div className="heart-icon-wrapper">
                <Heart size={20} className="heart-icon" />
              </div>
              <div className="badge-text">
                <strong>+200 animais</strong>
                <span>encontraram um lar</span>
              </div>
            </div>
          </div>
        </section>

        
        <section className="pets-section">
          <div className="pets-header">
            <div>
              <h2>Animais esperando por um lar</h2>
              <p>Conheça alguns dos animais disponíveis para adoção</p>
            </div>
            <a href="#adocao" className="ver-todos">
              <span>Ver todos</span>
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="pets-grid">
            {animaisDisponiveis.map((pet) => (
              <div key={pet.id} className="pet-card">
                <div className="pet-image-container">
                  <img src={pet.imagem} alt={pet.nome} />
                  <span className="badge-adocao">Disponível para adoção</span>
                  <button className={`btn-favorito ${pet.favorito ? "active" : ""}`}>
                    <Heart size={16} fill={pet.favorito ? "#f17c3e" : "none"} />
                  </button>
                </div>

                <div className="pet-info">
                  <div className="pet-title-row">
                    <h3>{pet.nome}</h3>
                    <span className="pet-idade">{pet.idade}</span>
                  </div>

                  <p className="pet-raca">{pet.raca}</p>

                  <div className="pet-tags">
                    <span className="tag">{pet.sexo}</span>
                    <span className="tag">{pet.porte}</span>
                  </div>

                  <div className="pet-location">
                    <MapPin size={14} />
                    <span>{pet.cidade}</span>
                  </div>

                  <button className="btn-detalhes">
                    <Eye size={16} />
                    <span>Ver detalhes</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        
        <section className="cta-banner">
          <div className="cta-icons">
            <Dog size={28} />
            <Cat size={28} />
            <Rabbit size={28} />
          </div>

          <h2 className="cta-title">
            Pronto para encontrar seu companheiro?
          </h2>

          <p className="cta-description">
            Junte-se a centenas de pessoas que já encontraram um novo amigo através do PortalPet.
          </p>

          <div className="cta-buttons">
            <a href="#adocao" className="btn-cta-white">
              <Heart size={18} />
              <span>Ver animais para adoção</span>
            </a>

            <a href="#cadastrar" className="btn-cta-outline">
              <PawPrint size={18} />
              <span>Cadastrar um animal</span>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
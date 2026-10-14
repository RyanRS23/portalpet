
import React, { useState } from "react";
import {
  Home,
  Dog,
  Heart,
  Search,
  User,
  Info,
  Menu as MenuIcon,
  X,
  PawPrint,
  Eye,
  ArrowRight,
  MapPin,
  Cat,
  Rabbit,
  Calendar,
  Scale,
  ArrowLeft,
} from "lucide-react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import "./menuprincipal.scss";

const animaisDisponiveis = [
  {
    id: 1,
    nome: "Thor",
    idade: "3 anos",
    raca: "Golden Retriever",
    sexo: "Macho",
    porte: "Grande",
    peso: "32 kg",
    cidade: "São Paulo",
    responsavel: "Carlos Mendes",
    descricao:
      "Thor é um cachorro muito brincalhão e cheio de energia. Adora correr em parques e brincar com bolinhas. É muito carinhoso com crianças e se dá bem com outros animais. Vacinado e castrado.",
    imagem:
      "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=80",
    favorito: false,
  },
  {
    id: 2,
    nome: "Luna",
    idade: "2 anos",
    raca: "SRD",
    sexo: "Fêmea",
    porte: "Médio",
    peso: "14 kg",
    cidade: "Campinas",
    responsavel: "Ana Paula",
    descricao:
      "Luna é super dócil, tranquila e ama fazer companhia. Já está adestrada e convive super bem em apartamentos.",
    imagem:
      "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=800&q=80",
    favorito: true,
  },
  {
    id: 3,
    nome: "Bob",
    idade: "1 ano",
    raca: "Beagle",
    sexo: "Macho",
    porte: "Médio",
    peso: "11 kg",
    cidade: "Rio de Janeiro",
    responsavel: "Mariana Silva",
    descricao:
      "Bob é curioso, esperto e adorável. Precisa de uma família que goste de fazer passeios ao ar livre.",
    imagem:
      "https://images.unsplash.com/photo-1505628346881-b72b27e84530?auto=format&fit=crop&w=800&q=80",
    favorito: true,
  },
  {
    id: 4,
    nome: "Mia",
    idade: "2 anos",
    raca: "SRD",
    sexo: "Fêmea",
    porte: "Pequeno",
    peso: "4 kg",
    cidade: "Campinas",
    responsavel: "Lucas Rocha",
    descricao:
      "Mia é uma gatinha calma, limpa e carinhosa. Adora um cantinho ensolarado para tirar um cochilo.",
    imagem:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80",
    favorito: false,
  },
];

function Menu({ itemAtivo, setItemAtivo, setPetSelecionado }) {
  const [menuAberto, setMenuAberto] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navegarPara = (item) => {
    setItemAtivo(item);

    if (item === "inicio") {
      setPetSelecionado(null);
      navigate("/");
    }

    setMenuAberto(false);
  };

  return (
    <>
      <button
        className="btn-hamburguer"
        onClick={() => setMenuAberto(!menuAberto)}
        aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
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
          <img
            className="logo"
            src="/images/logo.png"
            alt="Logo PortalPet"
          />

          <div className="texto-header">
            <h1 className="titulomenu">PortalPet</h1>
            <p className="subtitulomenu">Adoção & Cuidado</p>
          </div>
        </div>

        <nav className="menu-nav">
          {/* INÍCIO */}
          <Link
            to="/"
            className={`menu-item ${
              location.pathname === "/" && itemAtivo === "inicio"
                ? "active"
                : ""
            }`}
            onClick={() => navegarPara("inicio")}
          >
            <Home className="icon" size={20} />
            <span>Início</span>
          </Link>

          {/* MEUS ANIMAIS */}
          <Link
            to="/meus-animais"
            className={`menu-item ${
              itemAtivo === "meus-animais" ||
              location.pathname === "/meus-animais"
                ? "active"
                : ""
            }`}
            onClick={() => {
              setItemAtivo("meus-animais");
              setPetSelecionado(null);
              setMenuAberto(false);
            }}
          >
            <Dog className="icon" size={20} />
            <span>Meus Animais</span>
          </Link>

          {/* ADOÇÃO */}
          <a
            href="#adocao"
            className={`menu-item ${
              itemAtivo === "adocao" ? "active" : ""
            }`}
            onClick={() => navegarPara("adocao")}
          >
            <Heart className="icon" size={20} />
            <span>Adoção</span>
          </a>

          {/* DESAPARECIDOS */}
          <a
            href="#desaparecidos"
            className={`menu-item ${
              itemAtivo === "desaparecidos" ? "active" : ""
            }`}
            onClick={() => navegarPara("desaparecidos")}
          >
            <Search className="icon" size={20} />
            <span>Desaparecidos</span>
          </a>

          {/* MEU PERFIL */}
          <a
            href="#meu-perfil"
            className={`menu-item ${
              itemAtivo === "meu-perfil" ? "active" : ""
            }`}
            onClick={() => navegarPara("meu-perfil")}
          >
            <User className="icon" size={20} />
            <span>Meu Perfil</span>
          </a>

          {/* SAIBA MAIS */}
          <Link
            to="/saiba-mais"
            className={`menu-item ${
              location.pathname === "/saiba-mais" ? "active" : ""
            }`}
            onClick={() => setMenuAberto(false)}
          >
            <Info className="icon" size={20} />
            <span>Saiba Mais</span>
          </Link>
        </nav>
      </aside>
    </>
  );
}

export default function Inicio() {
  const [petSelecionado, setPetSelecionado] = useState(null);
  const [itemAtivo, setItemAtivo] = useState("inicio");

  return (
    <div className="app-layout">
      <Menu
        itemAtivo={itemAtivo}
        setItemAtivo={setItemAtivo}
        setPetSelecionado={setPetSelecionado}
      />

      <main className="main-content">
        {petSelecionado ? (
          <div className="pet-details-container">
            <div className="breadcrumb">
              <span
                onClick={() => {
                  setPetSelecionado(null);
                  setItemAtivo("inicio");
                }}
              >
                Início
              </span>

              <span className="separator">&gt;</span>
              <span className="current">{petSelecionado.nome}</span>
            </div>

            <div className="pet-details-grid">
              <div className="pet-details-image-wrapper">
                <img
                  src={petSelecionado.imagem}
                  alt={petSelecionado.nome}
                />

                <button className="btn-favorito-large">
                  <Heart
                    size={20}
                    fill={petSelecionado.favorito ? "#f17c3e" : "none"}
                  />
                </button>
              </div>

              <div className="pet-details-info">
                <div className="title-row">
                  <h1>{petSelecionado.nome}</h1>
                  <span className="badge-adocao-tag">
                    Disponível para adoção
                  </span>
                </div>

                <div className="attributes-grid">
                  <div className="attr-card">
                    <Calendar className="attr-icon" size={22} />
                    <div>
                      <span className="attr-label">Idade</span>
                      <strong>{petSelecionado.idade}</strong>
                    </div>
                  </div>

                  <div className="attr-card">
                    <Dog className="attr-icon" size={22} />
                    <div>
                      <span className="attr-label">Raça</span>
                      <strong>{petSelecionado.raca}</strong>
                    </div>
                  </div>

                  <div className="attr-card">
                    <Dog className="attr-icon" size={22} />
                    <div>
                      <span className="attr-label">Sexo</span>
                      <strong>{petSelecionado.sexo}</strong>
                    </div>
                  </div>

                  <div className="attr-card">
                    <Scale className="attr-icon" size={22} />
                    <div>
                      <span className="attr-label">Peso</span>
                      <strong>{petSelecionado.peso}</strong>
                    </div>
                  </div>

                  <div className="attr-card">
                    <MapPin className="attr-icon" size={22} />
                    <div>
                      <span className="attr-label">Cidade</span>
                      <strong>{petSelecionado.cidade}</strong>
                    </div>
                  </div>

                  <div className="attr-card">
                    <User className="attr-icon" size={22} />
                    <div>
                      <span className="attr-label">Responsável</span>
                      <strong>{petSelecionado.responsavel}</strong>
                    </div>
                  </div>
                </div>

                <div className="description-section">
                  <h3>DESCRIÇÃO</h3>
                  <p>{petSelecionado.descricao}</p>
                </div>

                <div className="details-actions">
                  <button
                    className="btn-voltar"
                    onClick={() => {
                      setPetSelecionado(null);
                      setItemAtivo("inicio");
                    }}
                  >
                    <ArrowLeft size={18} />
                    <span>Voltar</span>
                  </button>

                  <button className="btn-interesse">
                    <Heart size={18} />
                    <span>Tenho interesse em adotar</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <section className="hero-card">
              <div className="hero-content">
                <div className="badge-tag">
                  <PawPrint size={16} />
                  <span>Plataforma de adoção</span>
                </div>

                <h1 className="hero-title">
                  Encontre um <br />
                  novo melhor <br />
                  amigo.
                </h1>

                <p className="hero-description">
                  Ajude um animal a encontrar um lar cheio de carinho ou
                  encontre seu próximo companheiro.
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
                  <p>
                    Conheça alguns dos animais disponíveis para adoção
                  </p>
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

                      <span className="badge-adocao">
                        Disponível para adoção
                      </span>

                      <button
                        className={`btn-favorito ${
                          pet.favorito ? "active" : ""
                        }`}
                      >
                        <Heart
                          size={16}
                          fill={pet.favorito ? "#f17c3e" : "none"}
                        />
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

                      <button
                        className="btn-detalhes"
                        onClick={() => {
                          setPetSelecionado(pet);
                          setItemAtivo("inicio");
                        }}
                      >
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
                Junte-se a centenas de pessoas que já encontraram um novo
                amigo através do PortalPet.
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
          </>
        )}
      </main>
    </div>
  );
}

export { Menu };

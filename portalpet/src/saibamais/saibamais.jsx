
import React, { useState } from "react";
import {
  PawPrint,
  UserRound,
  ClipboardList,
  Search,
  Heart,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import { Menu } from "../menu/menuprincipal";
import "./saibamais.scss";

const etapas = [
  {
    numero: "1",
    titulo: "Cadastre um animal",
    texto:
      "Preencha as informações do animal para que ele possa encontrar um novo lar.",
    icone: <ClipboardList size={21} />,
  },
  {
    numero: "2",
    titulo: "Encontre um adotante",
    texto:
      "Conheça pessoas interessadas em oferecer carinho e cuidado ao animal.",
    icone: <Search size={21} />,
  },
  {
    numero: "3",
    titulo: "Entre em contato",
    texto:
      "Converse com o responsável e conheça melhor o animal antes da adoção.",
    icone: <UserRound size={21} />,
  },
  {
    numero: "4",
    titulo: "Dê um novo lar",
    texto:
      "Finalize o processo e ajude um animal a começar uma nova história.",
    icone: <Heart size={21} />,
  },
];

const cachorros = [
  {
    nome: "Cachorro 1",
    imagem:
      "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=500&q=85",
  },
  {
    nome: "Cachorro 2",
    imagem:
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=500&q=85",
  },
  {
    nome: "Cachorro 3",
    imagem:
      "https://images.unsplash.com/photo-1551717743-49959800b1f6?auto=format&fit=crop&w=500&q=85",
  },
  {
    nome: "Cachorro 4",
    imagem:
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=500&q=85",
  },
  {
    nome: "Cachorro 5",
    imagem:
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=500&q=85",
  },
];

export default function SaibaMais() {
  const [petSelecionado, setPetSelecionado] = useState(null);
  const [itemAtivo, setItemAtivo] = useState("inicio");

  return (
    <div className="app-layout">
      <Menu
        itemAtivo={itemAtivo}
        setItemAtivo={setItemAtivo}
        setPetSelecionado={setPetSelecionado}
      />

      <main className="main-content saiba-mais-page">
        <section className="saiba-hero">
          <div className="saiba-hero-copy">
            <span className="saiba-eyebrow">
              <PawPrint size={15} />
              Adoção responsável
            </span>

            <h1>
              COMO <span>FUNCIONA?</span>
            </h1>

            <h2>Adotar é um ato de amor.</h2>

            <p>
              Veja como é simples dar um lar para um animal e transformar uma
              vida!
            </p>

            <div className="saiba-patinha saiba-patinha-1">
              <PawPrint />
            </div>
          </div>

          <div className="saiba-hero-image">
            <img
              src="https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=900&q=90"
              alt="Cachorro esperando por um novo lar"
            />

            <span className="saiba-paw paw-a">
              <PawPrint />
            </span>

            <span className="saiba-paw paw-b">
              <PawPrint />
            </span>
          </div>

          <div className="saiba-steps">
            {etapas.map((etapa) => (
              <article className="saiba-step" key={etapa.numero}>
                <div className="saiba-step-icon">
                  {etapa.icone}
                  <span>{etapa.numero}</span>
                </div>

                <div>
                  <h3>{etapa.titulo}</h3>
                  <p>{etapa.texto}</p>
                </div>
              </article>
            ))}

            <div className="saiba-step-footer">
              <PawPrint size={19} />
              <span>Cada adoção transforma duas vidas.</span>
            </div>
          </div>
        </section>

        <section className="saiba-dogs">
          <div className="saiba-dogs-heading">
            <span>AMOR QUE TRANSFORMA</span>
            <h2>Uma nova história começa aqui.</h2>
          </div>

          <div className="saiba-dogs-row">
            {cachorros.map((cachorro) => (
              <div className="saiba-dog" key={cachorro.nome}>
                <img src={cachorro.imagem} alt={cachorro.nome} />
              </div>
            ))}
          </div>

          <div className="saiba-patinha saiba-patinha-2">
            <PawPrint />
          </div>
        </section>

        <section className="saiba-cta">
          <div className="saiba-cta-icon">
            <PawPrint size={27} />
          </div>

          <div className="saiba-cta-text">
            <h2>
              Pronto para encontrar seu <span>companheiro?</span>
            </h2>

            <p>
              Junte-se a nós e descubra como é fácil mudar uma vida,
              incluindo a sua.
            </p>
          </div>

          <div className="saiba-cta-arrow">
            <ArrowRight size={24} />
          </div>
        </section>

        <footer className="saiba-footer">
          <PawPrint size={18} />
          <span>ADOTE</span>
          <span>•</span>
          <span>CUIDE</span>
          <span>•</span>
          <span>TRANSFORME</span>
          <PawPrint size={18} />
        </footer>
      </main>
    </div>
  );
}

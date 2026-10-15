import React, { useState } from "react";
import {
  Search,
  Heart,
  MapPin,
  PawPrint,
  X,
  SlidersHorizontal,
} from "lucide-react";
import { Menu } from "../menu/menuprincipal";
import "./adocao.scss";

const animais = [
  {
    id: 1,
    nome: "Thor",
    raca: "Golden Retriever",
    porte: "Grande",
    cidade: "São Paulo",
    sexo: "Macho",
    idade: "3 anos",
    imagem:
      "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=600&q=85",
  },
  {
    id: 2,
    nome: "Mia",
    raca: "Gato SRD",
    porte: "Pequeno",
    cidade: "Campinas",
    sexo: "Fêmea",
    idade: "1,5 anos",
    imagem:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=600&q=85",
  },
  {
    id: 3,
    nome: "Bob",
    raca: "Jack Russell",
    porte: "Pequeno",
    cidade: "São Paulo",
    sexo: "Macho",
    idade: "3 meses",
    imagem:
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=600&q=85",
  },
  {
    id: 4,
    nome: "Luna",
    raca: "Golden Retriever",
    porte: "Grande",
    cidade: "Santos",
    sexo: "Fêmea",
    idade: "4 anos",
    imagem:
      "https://images.unsplash.com/photo-1633722715463-d30f4f325e24?auto=format&fit=crop&w=600&q=85",
  },
  {
    id: 5,
    nome: "Toby",
    raca: "SRD",
    porte: "Pequeno",
    cidade: "Campinas",
    sexo: "Macho",
    idade: "3 meses",
    imagem:
      "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=600&q=85",
  },
  {
    id: 6,
    nome: "Mel",
    raca: "Gato SRD",
    porte: "Pequeno",
    cidade: "São Paulo",
    sexo: "Fêmea",
    idade: "2 anos",
    imagem:
      "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=600&q=85",
  },
];

const filtrosVazios = {
  busca: "",
  porte: "",
  cidade: "",
  raca: "",
  sexo: "",
};

export default function Adocao() {
  const [itemAtivo, setItemAtivo] = useState("adocao");
  const [petSelecionado, setPetSelecionado] = useState(null);

  const [busca, setBusca] = useState("");
  const [porte, setPorte] = useState("");
  const [cidade, setCidade] = useState("");
  const [raca, setRaca] = useState("");
  const [sexo, setSexo] = useState("");

  const [filtrosAplicados, setFiltrosAplicados] =
    useState(filtrosVazios);

  function filtrarAnimais(event) {
    event.preventDefault();

    setFiltrosAplicados({
      busca: busca.trim().toLowerCase(),
      porte,
      cidade: cidade.trim().toLowerCase(),
      raca: raca.trim().toLowerCase(),
      sexo,
    });
  }

  function limparFiltros() {
    setBusca("");
    setPorte("");
    setCidade("");
    setRaca("");
    setSexo("");
    setFiltrosAplicados({ ...filtrosVazios });
  }

  const animaisFiltrados = animais.filter((animal) => {
    const correspondeBusca =
      `${animal.nome} ${animal.raca} ${animal.cidade}`
        .toLowerCase()
        .includes(filtrosAplicados.busca);

    const correspondePorte =
      !filtrosAplicados.porte ||
      animal.porte === filtrosAplicados.porte;

    const correspondeCidade =
      !filtrosAplicados.cidade ||
      animal.cidade.toLowerCase().includes(filtrosAplicados.cidade);

    const correspondeRaca =
      !filtrosAplicados.raca ||
      animal.raca.toLowerCase().includes(filtrosAplicados.raca);

    const correspondeSexo =
      !filtrosAplicados.sexo ||
      animal.sexo === filtrosAplicados.sexo;

    return (
      correspondeBusca &&
      correspondePorte &&
      correspondeCidade &&
      correspondeRaca &&
      correspondeSexo
    );
  });

  return (
    <div className="app-layout adocao-layout">
      <Menu
        itemAtivo={itemAtivo}
        setItemAtivo={setItemAtivo}
        setPetSelecionado={setPetSelecionado}
      />

      <main className="main-content adocao-page">
        <div className="adocao-conteudo">
          <form className="adocao-filtros" onSubmit={filtrarAnimais}>
            <div className="adocao-filtros-topo">
              <div className="adocao-titulo">
                <h1>
                  ENCONTRE SEU
                  <br />
                  COMPANHEIRO!
                </h1>

                <p>Animais disponíveis para adoção</p>
              </div>

              <label className="adocao-busca">
                <input
                  type="text"
                  placeholder="Buscar animal..."
                  value={busca}
                  onChange={(event) => setBusca(event.target.value)}
                />
                <Search size={17} />
              </label>
            </div>

            <div className="adocao-filtros-campos">
              <label>
                <span className="sr-only">Porte</span>
                <select
                  value={porte}
                  onChange={(event) => setPorte(event.target.value)}
                >
                  <option value="">Porte</option>
                  <option value="Pequeno">Pequeno</option>
                  <option value="Médio">Médio</option>
                  <option value="Grande">Grande</option>
                </select>
              </label>

              <label>
                <span className="sr-only">Cidade</span>
                <input
                  type="text"
                  placeholder="Cidade"
                  value={cidade}
                  onChange={(event) => setCidade(event.target.value)}
                />
              </label>

              <label>
                <span className="sr-only">Raça</span>
                <input
                  type="text"
                  placeholder="Raça"
                  value={raca}
                  onChange={(event) => setRaca(event.target.value)}
                />
              </label>

              <label>
                <span className="sr-only">Sexo</span>
                <select
                  value={sexo}
                  onChange={(event) => setSexo(event.target.value)}
                >
                  <option value="">Sexo</option>
                  <option value="Macho">Macho</option>
                  <option value="Fêmea">Fêmea</option>
                </select>
              </label>
            </div>

            <div className="adocao-acoes-filtro">
              <button
                className="adocao-limpar"
                type="button"
                onClick={limparFiltros}
              >
                <X size={13} />
                Limpar
              </button>

              <button className="adocao-filtrar" type="submit">
                <SlidersHorizontal size={13} />
                Filtrar
              </button>
            </div>
          </form>

          <section className="adocao-listagem">
            <div className="adocao-listagem-titulo">
              <div>
                <PawPrint size={17} />
                <span>Animais disponíveis</span>
              </div>

              <span className="adocao-contagem">
                {animaisFiltrados.length} animais
              </span>
            </div>

            {petSelecionado ? (
              <div className="adocao-detalhe">
                <button
                  className="adocao-voltar"
                  type="button"
                  onClick={() => setPetSelecionado(null)}
                >
                  ← Voltar aos animais
                </button>

                <img
                  src={petSelecionado.imagem}
                  alt={petSelecionado.nome}
                />

                <div className="adocao-detalhe-info">
                  <span className="adocao-disponivel">
                    Disponível para adoção
                  </span>

                  <h2>{petSelecionado.nome}</h2>
                  <p>{petSelecionado.raca}</p>

                  <div className="adocao-detalhe-dados">
                    <span>{petSelecionado.idade}</span>
                    <span>{petSelecionado.porte}</span>
                    <span>{petSelecionado.sexo}</span>
                  </div>

                  <p className="adocao-detalhe-cidade">
                    <MapPin size={15} />
                    {petSelecionado.cidade}
                  </p>

                  <button
                    type="button"
                    className="adocao-botao-interesse"
                    onClick={() =>
                      window.alert(
                        "Entre em contato com a organização responsável para demonstrar interesse."
                      )
                    }
                  >
                    <Heart size={16} />
                    Tenho interesse em adotar
                  </button>
                </div>
              </div>
            ) : (
              <div className="adocao-grid">
                {animaisFiltrados.map((animal) => (
                  <article className="adocao-card" key={animal.id}>
                    <div className="adocao-card-imagem">
                      <img src={animal.imagem} alt={animal.nome} />

                      <button
                        className="adocao-favorito"
                        type="button"
                        aria-label={`Favoritar ${animal.nome}`}
                        onClick={(event) => {
                          event.currentTarget.classList.toggle("favoritado");
                        }}
                      >
                        <Heart size={15} />
                      </button>
                    </div>

                    <div className="adocao-card-info">
                      <div className="adocao-card-nome">
                        <h2>{animal.nome}</h2>
                        <span>{animal.idade}</span>
                      </div>

                      <div className="adocao-card-tags">
                        <span>{animal.porte}</span>
                        <span>{animal.sexo}</span>
                      </div>

                      <button
                        className="adocao-card-botao"
                        type="button"
                        onClick={() => setPetSelecionado(animal)}
                      >
                        Ver detalhes...
                      </button>
                    </div>
                  </article>
                ))}

                {animaisFiltrados.length === 0 && (
                  <div className="adocao-vazio">
                    <PawPrint size={35} />
                    <h2>Nenhum animal encontrado</h2>
                    <p>Tente alterar os filtros da busca.</p>

                    <button type="button" onClick={limparFiltros}>
                      Limpar filtros
                    </button>
                  </div>
                )}
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}

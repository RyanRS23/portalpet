import { useState } from "react";
import { PawPrint, Search, SlidersHorizontal } from "lucide-react";
import { Menu } from "../menu/menuprincipal";
import "./Desaparecidos.scss";

const animais = [
  {
    id: 1,
    nome: "Léo",
    idade: "4 anos",
    porte: "Médio",
    cidade: "São Paulo",
    raca: "Golden Retriever",
    sexo: "Macho",
    foto: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=600&q=85",
  },
  {
    id: 2,
    nome: "Frajola",
    idade: "5 anos",
    porte: "Pequeno",
    cidade: "Campinas",
    raca: "Gato SRD",
    sexo: "Macho",
    foto: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=600&q=85",
  },
  {
    id: 3,
    nome: "Pipoca",
    idade: "2 anos",
    porte: "Pequeno",
    cidade: "Santos",
    raca: "Gato SRD",
    sexo: "Fêmea",
    foto: "https://images.unsplash.com/photo-1511044568932-338cba0ad803?auto=format&fit=crop&w=600&q=85",
  },
];

function CardAnimal({ nome, idade, porte, cidade, foto }) {
  return (
    <article className="desaparecidos-card">
      <div className="desaparecidos-moldura">
        <img className="desaparecidos-foto" src={foto} alt={nome} />
        <span className="desaparecidos-selo">Desaparecido</span>
      </div>
      <div className="desaparecidos-info">
        <div className="desaparecidos-titulo-card">
          <h2>{nome}</h2>
          <span>{idade}</span>
        </div>
        <p className="desaparecidos-local">{porte} · {cidade}</p>
      </div>
    </article>
  );
}

export default function Desaparecidos() {
  const [itemAtivo, setItemAtivo] = useState("desaparecidos");
  const [petSelecionado, setPetSelecionado] = useState(null);
  const [busca, setBusca] = useState("");
  const [cidade, setCidade] = useState("");
  const [raca, setRaca] = useState("");
  const [sexo, setSexo] = useState("");
  const [filtrosAplicados, setFiltrosAplicados] = useState({
    busca: "",
    cidade: "",
    raca: "",
    sexo: "",
  });

  function filtrarAnimais(event) {
    event.preventDefault();
    setFiltrosAplicados({
      busca: busca.trim().toLowerCase(),
      cidade: cidade.trim().toLowerCase(),
      raca: raca.trim().toLowerCase(),
      sexo,
    });
  }

  const animaisFiltrados = animais.filter((animal) => {
    const correspondeBusca = `${animal.nome} ${animal.raca} ${animal.cidade}`
      .toLowerCase()
      .includes(filtrosAplicados.busca);
    const correspondeCidade = animal.cidade
      .toLowerCase()
      .includes(filtrosAplicados.cidade);
    const correspondeRaca = animal.raca
      .toLowerCase()
      .includes(filtrosAplicados.raca);
    const correspondeSexo = !filtrosAplicados.sexo || animal.sexo === filtrosAplicados.sexo;

    return correspondeBusca && correspondeCidade && correspondeRaca && correspondeSexo;
  });

  return (
    <div className="app-layout desaparecidos-layout">
      <Menu
        itemAtivo={itemAtivo}
        setItemAtivo={setItemAtivo}
        setPetSelecionado={setPetSelecionado}
      />

      <main className="main-content desaparecidos-page">
        <div className="desaparecidos-conteudo">
          <form className="desaparecidos-filtros" onSubmit={filtrarAnimais}>
            <div className="desaparecidos-filtros-topo">
              <div className="desaparecidos-cabecalho">
                <h1>ANIMAIS DESAPARECIDOS</h1>
                <p>Ajude um pet a voltar para casa.</p>
              </div>
              <div className="desaparecidos-busca">
                <input
                  type="search"
                  placeholder="Buscar animal..."
                  aria-label="Buscar animal"
                  value={busca}
                  onChange={(event) => setBusca(event.target.value)}
                />
                <Search size={17} aria-hidden="true" />
              </div>
            </div>

            <div className="desaparecidos-campos">
              <label>
                <span className="desaparecidos-sr-only">Cidade</span>
                <input
                  type="text"
                  placeholder="Cidade"
                  value={cidade}
                  onChange={(event) => setCidade(event.target.value)}
                />
              </label>
              <label>
                <span className="desaparecidos-sr-only">Raça</span>
                <input
                  type="text"
                  placeholder="Raça"
                  value={raca}
                  onChange={(event) => setRaca(event.target.value)}
                />
              </label>
              <label>
                <span className="desaparecidos-sr-only">Sexo</span>
                <select value={sexo} onChange={(event) => setSexo(event.target.value)}>
                  <option value="">Sexo</option>
                  <option value="Fêmea">Fêmea</option>
                  <option value="Macho">Macho</option>
                </select>
              </label>
            </div>

            <div className="desaparecidos-acoes-filtro">
              <button type="submit">
                <SlidersHorizontal size={14} aria-hidden="true" />
                Filtrar
              </button>
            </div>
          </form>

          <section className="desaparecidos-listagem">
            <div className="desaparecidos-listagem-titulo">
              <div>
                <PawPrint size={17} aria-hidden="true" />
                <h2>Pets para localizar</h2>
              </div>
              <span>{animaisFiltrados.length} animais</span>
            </div>

            {animaisFiltrados.length > 0 ? (
              <div className="desaparecidos-grid">
                {animaisFiltrados.map((animal) => (
                  <CardAnimal key={animal.id} {...animal} />
                ))}
              </div>
            ) : (
              <p className="desaparecidos-vazio">Nenhum animal encontrado com esses filtros.</p>
            )}
          </section>

          <aside className="desaparecidos-dica">
            <h2>Dica do dia</h2>
            <p>Mantenha os dados de contato e as fotos do seu pet sempre atualizados.</p>
          </aside>
        </div>
      </main>
    </div>
  );
}
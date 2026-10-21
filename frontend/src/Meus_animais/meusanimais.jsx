

import { useState } from "react";
import {
  Eye,
  Pencil,
  Trash2,
  ArrowLeft,
  Upload,
  X,
} from "lucide-react";
import { Menu } from "../menu/menuprincipal";
import "./meusanimais.scss";

const animaisIniciais = [
  {
    id: 1,
    nome: "Thor",
    idade: "3 anos",
    raca: "Golden Retriever",
    sexo: "Macho",
    peso: "32 kg",
    porte: "Grande",
    cidade: "São Paulo",
    status: "Disponível para adoção",
    descricao: "Thor é carinhoso, brincalhão e adora passear.",
    imagem:
      "https://images.unsplash.com/photo-1552053831-71594a27632d?w=600",
  },
  {
    id: 2,
    nome: "Luna",
    idade: "2 anos",
    raca: "SRD",
    sexo: "Fêmea",
    peso: "18 kg",
    porte: "Médio",
    cidade: "Campinas",
    status: "Disponível para adoção",
    descricao: "Luna é dócil, companheira e adora receber carinho.",
    imagem:
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=600",
  },
  {
    id: 3,
    nome: "Mel",
    idade: "5 anos",
    raca: "SRD",
    sexo: "Fêmea",
    peso: "8 kg",
    porte: "Pequeno",
    cidade: "São Paulo",
    status: "Comigo",
    descricao: "Mel é tranquila e gosta de ficar perto das pessoas.",
    imagem:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600",
  },
  {
    id: 4,
    nome: "Rex",
    idade: "4 anos",
    raca: "Pastor Alemão",
    sexo: "Macho",
    peso: "35 kg",
    porte: "Grande",
    cidade: "São Paulo",
    status: "Comigo",
    descricao: "Rex é ativo, atento e gosta de brincar.",
    imagem:
      "https://images.unsplash.com/photo-1551717743-49959800b1f6?w=600",
  },
  {
    id: 5,
    nome: "Nina",
    idade: "3 anos",
    raca: "SRD",
    sexo: "Fêmea",
    peso: "15 kg",
    porte: "Médio",
    cidade: "São Paulo",
    status: "Adotado",
    descricao: "Nina é carinhosa e muito brincalhona.",
    imagem:
      "https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=600",
  },
];

const formularioInicial = {
  nome: "",
  idade: "",
  raca: "",
  sexo: "Macho",
  peso: "",
  porte: "Médio",
  cidade: "",
  status: "Comigo",
  descricao: "",
  imagem: "",
};

export default function MeusAnimais() {
  const [itemAtivo, setItemAtivo] = useState("meus-animais");
  const [petSelecionado, setPetSelecionado] = useState(null);
  const [animais, setAnimais] = useState(animaisIniciais);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [editandoId, setEditandoId] = useState(null);
  const [formulario, setFormulario] = useState(formularioInicial);

  function abrirCadastro() {
    setFormulario({ ...formularioInicial });
    setEditandoId(null);
    setPetSelecionado(null);
    setMostrarFormulario(true);
  }

  function cancelarFormulario() {
    setMostrarFormulario(false);
    setEditandoId(null);
    setFormulario({ ...formularioInicial });
  }

  function atualizarCampo(event) {
    const { name, value } = event.target;

    setFormulario((anterior) => ({
      ...anterior,
      [name]: value,
    }));
  }

  function selecionarFoto(event) {
    const arquivo = event.target.files?.[0];

    if (!arquivo) return;

    if (!arquivo.type.startsWith("image/")) {
      alert("Selecione um arquivo de imagem válido.");
      event.target.value = "";
      return;
    }

    const leitor = new FileReader();

    leitor.onload = () => {
      setFormulario((anterior) => ({
        ...anterior,
        imagem: leitor.result,
      }));
    };

    leitor.readAsDataURL(arquivo);
  }

  function salvarAnimal(event) {
    event.preventDefault();

    const animalSalvo = {
      ...formulario,
      id: editandoId ?? Date.now(),
      idade: formulario.idade.trim(),
      nome: formulario.nome.trim(),
      raca: formulario.raca.trim(),
      cidade: formulario.cidade.trim(),
      peso: `${formulario.peso.trim()} kg`,
      imagem:
        formulario.imagem ||
        "https://images.unsplash.com/photo-1552053831-71594a27632d?w=600",
    };

    if (editandoId !== null) {
      setAnimais((anteriores) =>
        anteriores.map((animal) =>
          animal.id === editandoId ? animalSalvo : animal
        )
      );
    } else {
      setAnimais((anteriores) => [animalSalvo, ...anteriores]);
    }

    setMostrarFormulario(false);
    setEditandoId(null);
    setFormulario({ ...formularioInicial });
    setPetSelecionado(null);
  }

  function abrirEdicao(animal) {
    setFormulario({
      ...animal,
      peso: String(animal.peso).replace(/\s*kg$/i, ""),
    });
    setEditandoId(animal.id);
    setPetSelecionado(null);
    setMostrarFormulario(true);
  }

  function excluirAnimal(id) {
    const confirmar = window.confirm(
      "Tem certeza de que deseja excluir este animal?"
    );

    if (!confirmar) return;

    setAnimais((anteriores) =>
      anteriores.filter((animal) => animal.id !== id)
    );

    if (petSelecionado?.id === id) {
      setPetSelecionado(null);
    }
  }

  return (
    <div className="pagina-animais">
      <Menu
        itemAtivo={itemAtivo}
        setItemAtivo={setItemAtivo}
        setPetSelecionado={setPetSelecionado}
      />

      <main className="main-content conteudo-animais">
        {mostrarFormulario ? (
          <section className="formulario-animal">
            <button
              type="button"
              className="voltar-detalhes"
              onClick={cancelarFormulario}
            >
              <ArrowLeft size={18} />
              Voltar para meus animais
            </button>

            <header className="cabecalho-formulario">
              <div>
                <h1>
                  {editandoId !== null
                    ? "Editar animal"
                    : "Cadastrar animal"}
                </h1>
                <p>
                  {editandoId !== null
                    ? "Atualize as informações do seu animal."
                    : "Preencha as informações para cadastrar seu animal."}
                </p>
              </div>

              <button
                type="button"
                className="fechar-formulario"
                onClick={cancelarFormulario}
                aria-label="Fechar formulário"
              >
                <X size={20} />
              </button>
            </header>

            <form onSubmit={salvarAnimal}>
              <div className="formulario-layout">
                <section className="bloco-foto">
                  <h2>Foto do animal</h2>
                  <p>Adicione uma foto para identificar seu animal.</p>

                  <label className="area-upload">
                    {formulario.imagem ? (
                      <img
                        className="previa-foto"
                        src={formulario.imagem}
                        alt="Prévia do animal"
                      />
                    ) : (
                      <div className="conteudo-upload">
                        <span className="icone-upload">
                          <Upload size={28} />
                        </span>
                        <strong>Adicionar foto</strong>
                        <span>Clique aqui para escolher uma imagem</span>
                        <small>JPG, PNG ou outro formato de imagem</small>
                      </div>
                    )}

                    <input
                      type="file"
                      accept="image/*"
                      onChange={selecionarFoto}
                    />
                  </label>

                  {formulario.imagem && (
                    <button
                      type="button"
                      className="remover-foto"
                      onClick={() =>
                        setFormulario((anterior) => ({
                          ...anterior,
                          imagem: "",
                        }))
                      }
                    >
                      <X size={15} />
                      Remover foto
                    </button>
                  )}
                </section>

                <section className="bloco-campos">
                  <h2>Informações do animal</h2>
                  <p>Informe os dados do seu cão ou gato.</p>

                  <div className="campos-formulario">
                    <div className="campo-formulario campo-completo">
                      <label htmlFor="nome">Nome do animal *</label>
                      <input
                        id="nome"
                        name="nome"
                        type="text"
                        placeholder="Ex.: Thor"
                        value={formulario.nome}
                        onChange={atualizarCampo}
                        required
                      />
                    </div>

                    <div className="campo-formulario">
                      <label htmlFor="idade">Idade *</label>
                      <input
                        id="idade"
                        name="idade"
                        type="text"
                        placeholder="Ex.: 2 anos"
                        value={formulario.idade}
                        onChange={atualizarCampo}
                        required
                      />
                    </div>

                    <div className="campo-formulario">
                      <label htmlFor="raca">Raça *</label>
                      <input
                        id="raca"
                        name="raca"
                        type="text"
                        placeholder="Ex.: Golden Retriever"
                        value={formulario.raca}
                        onChange={atualizarCampo}
                        required
                      />
                    </div>

                    <div className="campo-formulario">
                      <label htmlFor="sexo">Sexo *</label>
                      <select
                        id="sexo"
                        name="sexo"
                        value={formulario.sexo}
                        onChange={atualizarCampo}
                        required
                      >
                        <option value="Macho">Macho</option>
                        <option value="Fêmea">Fêmea</option>
                      </select>
                    </div>

                    <div className="campo-formulario">
                      <label htmlFor="peso">Peso (kg) *</label>
                      <input
                        id="peso"
                        name="peso"
                        type="number"
                        min="0.1"
                        step="0.1"
                        placeholder="Ex.: 12"
                        value={formulario.peso}
                        onChange={atualizarCampo}
                        required
                      />
                    </div>

                    <div className="campo-formulario">
                      <label htmlFor="porte">Porte *</label>
                      <select
                        id="porte"
                        name="porte"
                        value={formulario.porte}
                        onChange={atualizarCampo}
                        required
                      >
                        <option value="Pequeno">Pequeno</option>
                        <option value="Médio">Médio</option>
                        <option value="Grande">Grande</option>
                      </select>
                    </div>

                    <div className="campo-formulario">
                      <label htmlFor="cidade">Cidade *</label>
                      <input
                        id="cidade"
                        name="cidade"
                        type="text"
                        placeholder="Ex.: São Paulo"
                        value={formulario.cidade}
                        onChange={atualizarCampo}
                        required
                      />
                    </div>

                    <div className="campo-formulario campo-completo">
                      <label htmlFor="status">Situação do animal *</label>
                      <select
                        id="status"
                        name="status"
                        value={formulario.status}
                        onChange={atualizarCampo}
                        required
                      >
                        <option value="Comigo">Comigo</option>
                        <option value="Disponível para adoção">
                          Disponível para adoção
                        </option>
                        <option value="Desaparecido">Desaparecido</option>
                        <option value="Adotado">Adotado</option>
                      </select>
                    </div>

                    <div className="campo-formulario campo-completo">
                      <label htmlFor="descricao">Descrição</label>
                      <textarea
                        id="descricao"
                        name="descricao"
                        placeholder="Conte um pouco sobre a personalidade e os cuidados do animal..."
                        value={formulario.descricao}
                        onChange={atualizarCampo}
                        rows="4"
                      />
                    </div>
                  </div>
                </section>
              </div>

              <div className="acoes-formulario">
                <button
                  type="button"
                  className="botao-cancelar-formulario"
                  onClick={cancelarFormulario}
                >
                  Cancelar
                </button>

                <button
                  type="submit"
                  className="botao-salvar-formulario"
                >
                  {editandoId !== null
                    ? "Salvar alterações"
                    : "Cadastrar animal"}
                </button>
              </div>
            </form>
          </section>
        ) : petSelecionado ? (
          <section className="detalhes-animal">
            <button
              className="voltar-detalhes"
              onClick={() => setPetSelecionado(null)}
            >
              <ArrowLeft size={18} />
              Voltar para meus animais
            </button>

            <div className="detalhes-corpo">
              <div className="detalhes-foto">
                <img
                  src={petSelecionado.imagem}
                  alt={petSelecionado.nome}
                />
                <span className="status-animal">
                  {petSelecionado.status}
                </span>
              </div>

              <div className="detalhes-informacoes">
                <h1>{petSelecionado.nome}</h1>
                <p className="detalhes-raca">{petSelecionado.raca}</p>

                <div className="detalhes-dados">
                  <p>
                    <span>Idade</span>
                    <strong>{petSelecionado.idade}</strong>
                  </p>
                  <p>
                    <span>Sexo</span>
                    <strong>{petSelecionado.sexo}</strong>
                  </p>
                  <p>
                    <span>Peso</span>
                    <strong>{petSelecionado.peso}</strong>
                  </p>
                  <p>
                    <span>Porte</span>
                    <strong>{petSelecionado.porte || "Não informado"}</strong>
                  </p>
                  <p>
                    <span>Cidade</span>
                    <strong>{petSelecionado.cidade}</strong>
                  </p>
                </div>

                <div className="detalhes-descricao">
                  <h2>Sobre o animal</h2>
                  <p>
                    {petSelecionado.descricao ||
                      "Nenhuma descrição informada."}
                  </p>
                </div>

                <div className="botoes-detalhes">
                  <button
                    className="botao-editar-detalhes"
                    onClick={() => abrirEdicao(petSelecionado)}
                  >
                    <Pencil size={17} />
                    Editar animal
                  </button>

                  <button
                    className="botao-excluir-detalhes"
                    onClick={() => excluirAnimal(petSelecionado.id)}
                  >
                    <Trash2 size={17} />
                    Excluir animal
                  </button>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <>
            <header className="cabecalho-animais">
              <div>
                <h1>Meus Animais</h1>
                <p>Gerencie os animais que você cadastrou</p>
              </div>

              <button
                className="botao-cadastrar"
                onClick={abrirCadastro}
              >
                <span className="mais">+</span>
                Cadastrar animal
              </button>
            </header>

            <section className="grade-animais">
              {animais.map((animal) => (
                <article className="card-animal" key={animal.id}>
                  <div className="imagem-animal">
                    <img src={animal.imagem} alt={animal.nome} />
                    <span className="status-animal">{animal.status}</span>
                  </div>

                  <div className="informacoes-animal">
                    <div className="nome-idade">
                      <h2>{animal.nome}</h2>
                      <span>{animal.idade}</span>
                    </div>

                    <p className="raca-animal">{animal.raca}</p>

                    <div className="etiquetas">
                      <span>{animal.sexo}</span>
                      <span>{animal.peso}</span>
                      <span>{animal.cidade}</span>
                    </div>

                    <div className="acoes-animal">
                      <button
                        className="botao-detalhes"
                        onClick={() => setPetSelecionado(animal)}
                      >
                        <Eye size={16} />
                        Detalhes
                      </button>

                      <div className="grupo-acoes">
                        <button
                          className="botao-acao"
                          title="Editar animal"
                          aria-label={`Editar ${animal.nome}`}
                          onClick={() => abrirEdicao(animal)}
                        >
                          <Pencil size={17} />
                        </button>

                        <button
                          className="botao-acao excluir"
                          title="Excluir animal"
                          aria-label={`Excluir ${animal.nome}`}
                          onClick={() => excluirAnimal(animal.id)}
                        >
                          <Trash2 size={17} />
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </section>
          </>
        )}
      </main>
    </div>
  );
}

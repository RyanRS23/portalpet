
import { useState } from "react";
import { Eye, Pencil, Trash2 } from "lucide-react";
import { Menu } from "../menu/menuprincipal";
import "./meusanimais.scss";

export default function MeusAnimais() {
  const [itemAtivo, setItemAtivo] = useState("meus-animais");
  const [petSelecionado, setPetSelecionado] = useState(null);

  const animais = [
    {
      id: 1,
      nome: "Thor",
      idade: "3 anos",
      raca: "Golden Retriever",
      sexo: "Macho",
      peso: "32 kg",
      cidade: "São Paulo",
      status: "Disponível para adoção",
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
      cidade: "Campinas",
      status: "Disponível para adoção",
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
      cidade: "São Paulo",
      status: "Comigo",
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
      cidade: "São Paulo",
      status: "Comigo",
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
      cidade: "São Paulo",
      status: "Adotado",
      imagem:
        "https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=600",
    },
  ];

  return (
    <div className="pagina-animais">
      <Menu
        itemAtivo={itemAtivo}
        setItemAtivo={setItemAtivo}
        setPetSelecionado={setPetSelecionado}
      />

      <main className="main-content conteudo-animais">
        <header className="cabecalho-animais">
          <div>
            <h1>Meus Animais</h1>
            <p>Gerencie os animais que você cadastrou</p>
          </div>

          <button
            className="botao-cadastrar"
            onClick={() =>
              alert("Aqui ficará o formulário de cadastro.")
            }
          >
            <span className="mais">+</span>
            Cadastrar animal
          </button>
        </header>

        <section className="grade-animais">
          {animais.map((animal) => (
            <article className="card-animal" key={animal.id}>
              <div className="imagem-animal">
                <img
                  src={animal.imagem}
                  alt={animal.nome}
                />

                <span className="status-animal">
                  {animal.status}
                </span>
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
                    onClick={() =>
                      alert(
                        `Detalhes de ${animal.nome}\n` +
                          `Raça: ${animal.raca}\n` +
                          `Idade: ${animal.idade}\n` +
                          `Cidade: ${animal.cidade}`
                      )
                    }
                  >
                    <Eye size={16} />
                    Detalhes
                  </button>

                  <div className="grupo-acoes">
                    <button
                      className="botao-acao"
                      aria-label={`Editar ${animal.nome}`}
                      title="Editar animal"
                      onClick={() =>
                        alert(`Editar ${animal.nome}`)
                      }
                    >
                      <Pencil size={17} />
                    </button>

                    <button
                      className="botao-acao excluir"
                      aria-label={`Excluir ${animal.nome}`}
                      title="Excluir animal"
                      onClick={() => {
                        const confirmar = window.confirm(
                          `Deseja excluir ${animal.nome}?`
                        );

                        if (confirmar) {
                          alert(
                            "Esta demonstração ainda não salva nem exclui animais."
                          );
                        }
                      }}
                    >
                      <Trash2 size={17} />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}

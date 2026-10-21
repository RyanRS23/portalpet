import React, { useState } from "react";
import { UserRound, Save } from "lucide-react";
import { Menu } from "../menu/menuprincipal";
import "./meuperfil.scss";

export default function MeuPerfil() {
  const [itemAtivo, setItemAtivo] = useState("meu-perfil");
  const [petSelecionado, setPetSelecionado] = useState(null);

  const [perfil, setPerfil] = useState({
    nome: "",
    email: "",
    telefone: "",
    cidade: "",
    sobre: "",
  });

  const [mensagem, setMensagem] = useState("");

  function atualizarCampo(e) {
    setPerfil({
      ...perfil,
      [e.target.name]: e.target.value,
    });

    setMensagem("");
  }

  function salvarPerfil(e) {
    e.preventDefault();
    setMensagem("Alterações atualizadas nesta página.");
  }

  return (
    <div className="app-layout">
      <Menu
        itemAtivo={itemAtivo}
        setItemAtivo={setItemAtivo}
        setPetSelecionado={setPetSelecionado}
      />

      <main className="main-content perfil-page">
        <header className="perfil-header">
          <div className="perfil-icon">
            <UserRound size={30} />
          </div>

          <div>
            <h1>Meu Perfil</h1>
            <p>Preencha seus dados para personalizar seu perfil.</p>
          </div>
        </header>

        <form className="perfil-form" onSubmit={salvarPerfil}>
          <div className="perfil-campos">
            <label>
              Nome completo
              <input
                name="nome"
                value={perfil.nome}
                onChange={atualizarCampo}
                placeholder="Digite seu nome"
                required
              />
            </label>

            <label>
              E-mail
              <input
                name="email"
                type="email"
                value={perfil.email}
                onChange={atualizarCampo}
                placeholder="seuemail@exemplo.com"
                required
              />
            </label>

            <label>
              Telefone
              <input
                name="telefone"
                type="tel"
                value={perfil.telefone}
                onChange={atualizarCampo}
                placeholder="(00) 00000-0000"
              />
            </label>

            <label>
              Cidade
              <input
                name="cidade"
                value={perfil.cidade}
                onChange={atualizarCampo}
                placeholder="Sua cidade"
              />
            </label>

            <label className="perfil-sobre">
              Sobre você
              <textarea
                name="sobre"
                value={perfil.sobre}
                onChange={atualizarCampo}
                placeholder="Conte um pouco sobre você e sua relação com os animais..."
                rows={4}
              />
            </label>
          </div>

          <button className="perfil-salvar" type="submit">
            <Save size={18} />
            Salvar alterações
          </button>

          {mensagem && (
            <p className="perfil-mensagem">{mensagem}</p>
          )}
        </form>
      </main>
    </div>
  );
}

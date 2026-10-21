
import React, { useState } from "react";
import axios from "axios";
import { UserRound, Save, Search } from "lucide-react";
import { Menu } from "../menu/menuprincipal";
import "./meuperfil.scss";

export default function MeuPerfil() {
  const [itemAtivo, setItemAtivo] = useState("meu-perfil");
  const [petSelecionado, setPetSelecionado] = useState(null);

  const [cep, setCep] = useState("");
  const [buscandoCep, setBuscandoCep] = useState(false);
  const [mensagemCep, setMensagemCep] = useState("");

  const [perfil, setPerfil] = useState({
    nome: "",
    email: "",
    telefone: "",
    cep: "",
    rua: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    estado: "",
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

  async function buscarCep() {
    const cepLimpo = cep.replace(/\D/g, "");

    if (cepLimpo.length !== 8) {
      setMensagemCep("Digite um CEP válido com 8 números.");
      return;
    }

    try {
      setBuscandoCep(true);
      setMensagemCep("");

      const resposta = await axios.get(
        `https://viacep.com.br/ws/${cepLimpo}/json/`
      );

      const dados = resposta.data;

      if (dados.erro) {
        setMensagemCep("CEP não encontrado.");
        return;
      }

      setPerfil((perfilAtual) => ({
        ...perfilAtual,
        cep: cepLimpo,
        rua: dados.logradouro || "",
        bairro: dados.bairro || "",
        cidade: dados.localidade || "",
        estado: dados.uf || "",
      }));

      setMensagemCep("Endereço encontrado!");
    } catch (erro) {
      setMensagemCep("Não foi possível consultar o CEP. Tente novamente.");
    } finally {
      setBuscandoCep(false);
    }
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

            <div className="perfil-cep">
              <label htmlFor="cep">CEP</label>

              <div className="perfil-cep-busca">
                <input
                  id="cep"
                  value={cep}
                  onChange={(e) => {
                    setCep(e.target.value);
                    setMensagemCep("");
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      buscarCep();
                    }
                  }}
                  placeholder="00000-000"
                  inputMode="numeric"
                  maxLength={9}
                />

                <button
                  className="perfil-cep-botao"
                  type="button"
                  onClick={buscarCep}
                  disabled={buscandoCep}
                >
                  <Search size={17} />
                  {buscandoCep ? "Buscando..." : "Buscar"}
                </button>
              </div>

              {mensagemCep && (
                <p
                  className={
                    mensagemCep === "Endereço encontrado!"
                      ? "perfil-cep-sucesso"
                      : "perfil-cep-erro"
                  }
                >
                  {mensagemCep}
                </p>
              )}
            </div>

            <label>
              Rua
              <input
                name="rua"
                value={perfil.rua}
                onChange={atualizarCampo}
                placeholder="Nome da rua"
              />
            </label>

            <label>
              Número
              <input
                name="numero"
                value={perfil.numero}
                onChange={atualizarCampo}
                placeholder="Número da residência"
              />
            </label>

            <label>
              Complemento
              <input
                name="complemento"
                value={perfil.complemento}
                onChange={atualizarCampo}
                placeholder="Apartamento, casa..."
              />
            </label>

            <label>
              Bairro
              <input
                name="bairro"
                value={perfil.bairro}
                onChange={atualizarCampo}
                placeholder="Seu bairro"
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

            <label>
              Estado
              <input
                name="estado"
                value={perfil.estado}
                onChange={atualizarCampo}
                placeholder="UF"
                maxLength={2}
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

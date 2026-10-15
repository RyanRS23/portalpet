import "./Desaparecidos.scss"

const animais = [
  {
    id: 1,
    nome: 'Léo',
    idade: '4 anos',
    porte: 'Porte médio',
    foto: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=500&q=85',
  },
  {
    id: 2,
    nome: 'Frajola',
    idade: '5 anos',
    porte: 'Porte pequeno',
    foto: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=500&q=85',
  },
  {
    id: 3,
    nome: 'Pipoca',
    idade: '2 anos',
    porte: 'Porte pequeno',
    foto: 'https://images.unsplash.com/photo-1511044568932-338cba0ad803?auto=format&fit=crop&w=500&q=85',
  },
]

function Topo() {
  return (
    <header className="topo">
      <div className="container">
        <img className="logo" src="/img/logo.png" alt="Portal Pet" />
      </div>
    </header>
  )
}

function Busca() {
  return (
    <section className="busca">
      <div className="campos">
        <input type="search" placeholder="Buscar animal..." aria-label="Buscar animal" />
        <input type="text" placeholder="Cidade" aria-label="Cidade" />
        <input type="text" placeholder="Raça" aria-label="Raça" />

        <select aria-label="Sexo" defaultValue="">
          <option value="">Sexo</option>
          <option>Fêmea</option>
          <option>Macho</option>
        </select>

        <button type="button">Filtrar</button>
      </div>
    </section>
  )
}

function CardAnimal({ nome, idade, porte, foto }) {
  return (
    <div className="card">
      <div className="moldura">
        <img className="foto" src={foto} alt={nome} />
        <span className="selo">Desaparecido</span>
      </div>
      <div className="info">
        <div className="titulo">
          <h2>{nome}</h2>
          <span>{idade}</span>
        </div>
        <p className="porte">{porte}</p>
        <a href="#" className="detalhes">Ver detalhes</a>
      </div>
    </div>
  )
}

export default function Desaparecidos() {
  return (
    <>
      <Topo />

      <main className="filho">
        <div className="container">
          <div className="cabecalho">
            <h1>Animais desaparecidos </h1>
            <p>Viu algum deles? Ajude a levar o pet de volta para casa.</p>
          </div>

          <Busca />

          <section className="animais">
            {animais.map((animal) => (
              <CardAnimal key={animal.id} {...animal} />
            ))}
          </section>

          <section className="rodape-acoes">
            <div className="dicas">
              <h3>Dica do dia</h3>
              <p>Cadastre seus animais para que mais pessoas possam encontrá-los.</p>
            </div>

            <div className="adicionar">
              <a href="#">+ Adicionar seu pet desaparecido</a>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
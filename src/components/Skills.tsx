import { useState, type CSSProperties } from 'react';

type GrupoDeHabilidades = {
  titulo: string;
  descricao: string;
  tecnologias: string[];
};

const gruposDeHabilidades: GrupoDeHabilidades[] = [
  {
    titulo: 'Fundamentos da web',
    descricao: 'Tecnologias usadas para estruturar e construir páginas web.',
    tecnologias: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    titulo: 'Desenvolvimento de interfaces',
    descricao: 'Ferramentas usadas na interface deste portfólio.',
    tecnologias: ['React', 'TypeScript', 'Vite'],
  },
  {
    
    titulo: 'Back-end e banco de dados',
    descricao: 'Linguagens e banco de dados presentes nos seus estudos e projetos.',
    tecnologias: ['PHP', 'Python', 'MySQL', 'Firebase Firestore'],
  },
  {
    titulo: 'Ferramentas e versionamento',
    descricao: 'Ferramentas para editar código e acompanhar as mudanças nos projetos.',
    tecnologias: ['Git', 'GitHub', 'Visual Studio Code'],
  },
  {
    titulo: 'Manutenção e formatação',
    descricao: 'Experiência com formatação e montagem de computadores e manutenção de equipamentos.',
    tecnologias: ['Notebooks', 'Desktops'],
  },
];

// Cada categoria mantém sua cor para que o painel de detalhes acompanhe o card escolhido.
const coresDasHabilidades = ['#36e8ff', '#ff4fc8', '#ffc84a', '#68ef82', '#b57aff'];

function Skills() {
  // O carrossel começa sem uma categoria aberta para manter a tela limpa.
  const [indiceCentral, setIndiceCentral] = useState(0);
  const [indiceSelecionado, setIndiceSelecionado] = useState<number | null>(null);

  // Exibe a categoria atual e suas vizinhas em um ciclo contínuo, sem cartões vazios.
  const cartasVisiveis = [-1, 0, 1].map((deslocamento) => {
    const indice = (indiceCentral + deslocamento + gruposDeHabilidades.length) % gruposDeHabilidades.length;
    return {
      grupo: gruposDeHabilidades[indice],
      indice,
      posicao: deslocamento,
    };
  });

  function selecionarGrupo(indice: number) {
    setIndiceCentral(indice);
    setIndiceSelecionado(indice);
  }

  function navegarCarrossel(direcao: number) {
    const proximo = (indiceCentral + direcao + gruposDeHabilidades.length) % gruposDeHabilidades.length;
    setIndiceCentral(proximo);
    // Se já havia uma janela aberta, a seta troca seu conteúdo junto com o card.
    if (indiceSelecionado !== null) setIndiceSelecionado(proximo);
  }

  return (
    <section aria-labelledby="titulo-habilidades">
      <h2 id="titulo-habilidades">Habilidades e tecnologias</h2>

      <p>
        Estas são algumas das tecnologias que estudo e pratico nos meus projetos.
      </p>

      <div className="skills-carousel" aria-label="Carrossel de habilidades">
        <button
          className="skills-carousel-arrow skills-carousel-arrow--previous"
          type="button"
          aria-label="Habilidade anterior"
          onClick={() => navegarCarrossel(-1)}
        >
          ←
        </button>

        <div className="skill-groups" aria-live="polite">
          {cartasVisiveis.map(({ grupo, indice, posicao }) => (
            <button
              key={grupo.titulo}
              className={`skill-ticket skill-ticket--${posicao === 0 ? 'center' : posicao < 0 ? 'previous' : 'next'} ${indiceSelecionado === indice ? 'skill-ticket--selected' : ''}`}
              type="button"
              aria-pressed={indiceSelecionado === indice}
              style={{ '--skill-neon': coresDasHabilidades[indice] } as CSSProperties}
              onClick={() => selecionarGrupo(indice)}
            >
              <span className="skill-ticket-title">{grupo.titulo}</span>
              <span className="skill-ticket-prompt">
                {indiceSelecionado === indice ? 'Detalhes abertos' : 'Selecionar'}
              </span>
            </button>
          ))}
        </div>

        <button
          className="skills-carousel-arrow skills-carousel-arrow--next"
          type="button"
          aria-label="Próxima habilidade"
          onClick={() => navegarCarrossel(1)}
        >
          →
        </button>
      </div>

      {indiceSelecionado !== null && (
        <article
          className="skill-details"
          aria-live="polite"
          style={{ '--skill-neon': coresDasHabilidades[indiceSelecionado] } as CSSProperties}
        >
          <div className="skill-details-heading">
            <h3>{gruposDeHabilidades[indiceSelecionado].titulo}</h3>
            <button
              className="skill-details-close"
              type="button"
              aria-label="Fechar detalhes da habilidade"
              onClick={() => setIndiceSelecionado(null)}
            >
              ×
            </button>
          </div>
          <p>{gruposDeHabilidades[indiceSelecionado].descricao}</p>
          <ul>
            {gruposDeHabilidades[indiceSelecionado].tecnologias.map((tecnologia) => (
              <li key={tecnologia}>{tecnologia}</li>
            ))}
          </ul>
        </article>
      )}
    </section>
  );
}

export default Skills;

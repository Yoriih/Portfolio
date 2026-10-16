import { useState } from 'react';

type Projeto = { // Define a estrutura do projeto.
  nome: string;
  descricao: string;
  status: string;
  link: string;
  repositorio: string; 
  tecnologias: string[];
  funcionalidades: string[];
};

const projetos: Projeto[] = [

    { //CHARME PET IN FASHION
        nome: 'Charme Pet in Fashion',
        descricao: 'Projeto de e-commerce de moda pet, com coleções, peças sob medida e proposta de apoio à causa animal.',
        status: 'Em desenvolvimento',
        link: 'https://yoriih.github.io/Projeto-Charme-Pet-in-Fashion/',
        repositorio: 'https://github.com/Yoriih/Projeto-Charme-Pet-in-Fashion',
        tecnologias: ['HTML','CSS','JavaScript','Firebase Firestore',],
        funcionalidades: ['Vitrine de produtos e coleções','Carrinho de compras salvo no navegador','Formulário para solicitar peças sob medida','Seção sobre a causa de proteção animal',],
    },
    
];

function Projects() { // Componente que exibe a lista de projetos.
  const [indiceSelecionado, setIndiceSelecionado] = useState(0);
  // Mantém os projetos em ordem e deixa espaços livres como cartões de próximos projetos.
  const projetoSelecionado = projetos[indiceSelecionado];
  const cartasVisiveis = [-1, 0, 1].map((posicao) => {
    const indice = indiceSelecionado + posicao;
    return { projeto: projetos[indice] ?? null, indice, posicao };
  });

  function navegarCarrossel(direcao: number) {
    setIndiceSelecionado((atual) => Math.max(0, Math.min(projetos.length - 1, atual + direcao)));
  }

  return (
    <section className="projects-section" aria-label="Projetos do portfólio">
      <div className="project-carousel" aria-label="Carrossel de projetos">
        <button
          className="carousel-arrow carousel-arrow--previous"
          type="button"
          aria-label="Projeto anterior"
          disabled={indiceSelecionado === 0}
          onClick={() => navegarCarrossel(-1)}
        >
          ←
        </button>

        <div className="project-card-rail" aria-live="polite">
          {cartasVisiveis.map(({ projeto, indice, posicao }) => projeto ? (
            <button
              key={`${projeto.nome}-${indice}`}
              className={`project-ticket ${posicao === 0 ? 'project-ticket--active' : 'project-ticket--side'} project-ticket--${posicao < 0 ? 'previous' : posicao > 0 ? 'next' : 'selected'}`}
              type="button"
              aria-pressed={posicao === 0}
              onClick={() => setIndiceSelecionado(indice)}
            >
              <span className="project-ticket-label">{projeto.nome}</span>
              <span className="project-ticket-status">{projeto.status}</span>
              <span className="project-ticket-prompt">
                {posicao === 0 ? 'Em foco' : 'Selecionar projeto'}
              </span>
            </button>
          ) : (
            <div
              key={`coming-${posicao}`}
              className={`project-ticket project-ticket--side project-ticket--coming project-ticket--${posicao < 0 ? 'previous' : 'next'}`}
              aria-label="Novo projeto em breve"
            >
              <span className="project-ticket-label">IS COMING</span>
              <span className="project-ticket-status">?????</span>
              <span className="project-ticket-prompt">??? / ??? / ???</span>
            </div>
          ))}
        </div>

        <button
          className="carousel-arrow carousel-arrow--next"
          type="button"
          aria-label="Próximo projeto"
          disabled={indiceSelecionado === projetos.length - 1}
          onClick={() => navegarCarrossel(1)}
        >
          →
        </button>
      </div>

      <article className="project-card project-detail" aria-live="polite">
        <h3>{projetoSelecionado.nome}</h3>
        <p>{projetoSelecionado.descricao}</p>
        <p><strong>Status:</strong> {projetoSelecionado.status}</p>

        <div className="project-detail-columns">
          <section>
            <h4>Tecnologias</h4>
            <ul>
              {projetoSelecionado.tecnologias.map((tecnologia) => (
                <li key={tecnologia}>{tecnologia}</li>
              ))}
            </ul>
          </section>

          <section>
            <h4>Funcionalidades</h4>
            <ul>
              {projetoSelecionado.funcionalidades.map((funcionalidade) => (
                <li key={funcionalidade}>{funcionalidade}</li>
              ))}
            </ul>
          </section>
        </div>

        <div className="project-links">
          <a
            className="project-link project-link--source"
            href={projetoSelecionado.repositorio}
            target="_blank"
            rel="noreferrer"
          >
            Ver código-fonte ↗
          </a>

          <a
            className="project-link project-link--live"
            href={projetoSelecionado.link}
            target="_blank"
            rel="noreferrer"
          >
            Ver projeto ↗
          </a>
        </div>
      </article>
    </section>
  );
}

export default Projects;

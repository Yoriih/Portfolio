import { useState } from 'react';
import type { Textos } from '../i18n';

type ProjectsProps = {
  textos: Textos['projects'];
};

function Projects({ textos }: ProjectsProps) { // Componente que exibe a lista de projetos.
  const [indiceSelecionado, setIndiceSelecionado] = useState(0);
  // Mantém os projetos em ordem e deixa espaços livres como cartões de próximos projetos.
  const projetoSelecionado = textos.items[indiceSelecionado];
  const cartasVisiveis = [-1, 0, 1].map((posicao) => {
    const indice = indiceSelecionado + posicao;
    return { projeto: textos.items[indice] ?? null, indice, posicao };
  });

  function navegarCarrossel(direcao: number) {
    setIndiceSelecionado((atual) => Math.max(0, Math.min(textos.items.length - 1, atual + direcao)));
  }

  return (
    <section className="projects-section" aria-label={textos.sectionAria}>
      <div className="project-carousel" aria-label={textos.carouselAria}>
        <button
          className="carousel-arrow carousel-arrow--previous"
          type="button"
          aria-label={textos.previous}
          disabled={indiceSelecionado === 0}
          onClick={() => navegarCarrossel(-1)}
        >
          ←
        </button>

        <div className="project-card-rail" aria-live="polite">
          {cartasVisiveis.map(({ projeto, indice, posicao }) => projeto ? (
            <button
              key={`${projeto.name}-${indice}`}
              className={`project-ticket ${posicao === 0 ? 'project-ticket--active' : 'project-ticket--side'} project-ticket--${posicao < 0 ? 'previous' : posicao > 0 ? 'next' : 'selected'}`}
              type="button"
              aria-pressed={posicao === 0}
              onClick={() => setIndiceSelecionado(indice)}
            >
              <span className="project-ticket-label">{projeto.name}</span>
              <span className="project-ticket-status">{projeto.status}</span>
              <span className="project-ticket-prompt">
                {posicao === 0 ? textos.focus : textos.select}
              </span>
            </button>
          ) : (
            <div
              key={`coming-${posicao}`}
              className={`project-ticket project-ticket--side project-ticket--coming project-ticket--${posicao < 0 ? 'previous' : 'next'}`}
              aria-label={textos.comingAria}
            >
              <span className="project-ticket-label">{textos.comingTitle}</span>
              <span className="project-ticket-status">{textos.comingStatus}</span>
              <span className="project-ticket-prompt">{textos.comingPrompt}</span>
            </div>
          ))}
        </div>

        <button
          className="carousel-arrow carousel-arrow--next"
          type="button"
          aria-label={textos.next}
          disabled={indiceSelecionado === textos.items.length - 1}
          onClick={() => navegarCarrossel(1)}
        >
          →
        </button>
      </div>

      <article className="project-card project-detail" aria-live="polite">
        <h3>{projetoSelecionado.name}</h3>
        <p>{projetoSelecionado.description}</p>
        <p><strong>{textos.statusLabel}</strong> {projetoSelecionado.status}</p>

        <div className="project-detail-columns">
          <section>
            <h4>{textos.technologies}</h4>
            <ul>
              {projetoSelecionado.technologies.map((tecnologia) => (
                <li key={tecnologia}>{tecnologia}</li>
              ))}
            </ul>
          </section>

          <section>
            <h4>{textos.features}</h4>
            <ul>
              {projetoSelecionado.features.map((funcionalidade) => (
                <li key={funcionalidade}>{funcionalidade}</li>
              ))}
            </ul>
          </section>
        </div>

        <div className="project-links">
          <a
            className="project-link project-link--source"
            href={projetoSelecionado.repository}
            target="_blank"
            rel="noreferrer"
          >
            {textos.source}
          </a>

          <a
            className="project-link project-link--live"
            href={projetoSelecionado.link}
            target="_blank"
            rel="noreferrer"
          >
            {textos.live}
          </a>
        </div>
      </article>
    </section>
  );
}

export default Projects;

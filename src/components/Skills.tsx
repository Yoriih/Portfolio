import { useState, type CSSProperties } from 'react';
import type { Textos } from '../i18n';

// Cada categoria mantém sua cor para que o painel de detalhes acompanhe o card escolhido.
const coresDasHabilidades = ['#36e8ff', '#ff4fc8', '#ffc84a', '#68ef82', '#b57aff'];

function Skills({ textos }: { textos: Textos['skills'] }) {
  const gruposDeHabilidades = textos.items;
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
    <section aria-label={textos.sectionAria} aria-labelledby="titulo-habilidades">
      <h2 id="titulo-habilidades">{textos.title}</h2>

      <p>{textos.description}</p>

      <div className="skills-carousel" aria-label={textos.carouselAria}>
        <button
          className="skills-carousel-arrow skills-carousel-arrow--previous"
          type="button"
          aria-label={textos.previous}
          onClick={() => navegarCarrossel(-1)}
        >
          ←
        </button>

        <div className="skill-groups" aria-live="polite">
          {cartasVisiveis.map(({ grupo, indice, posicao }) => (
            <button
              key={grupo.title}
              className={`skill-ticket skill-ticket--${posicao === 0 ? 'center' : posicao < 0 ? 'previous' : 'next'} ${indiceSelecionado === indice ? 'skill-ticket--selected' : ''}`}
              type="button"
              aria-pressed={indiceSelecionado === indice}
              style={{ '--skill-neon': coresDasHabilidades[indice] } as CSSProperties}
              onClick={() => selecionarGrupo(indice)}
            >
              <span className="skill-ticket-title">{grupo.title}</span>
              <span className="skill-ticket-prompt">
                {indiceSelecionado === indice ? textos.detailsOpen : textos.select}
              </span>
            </button>
          ))}
        </div>

        <button
          className="skills-carousel-arrow skills-carousel-arrow--next"
          type="button"
          aria-label={textos.next}
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
            <h3>{gruposDeHabilidades[indiceSelecionado].title}</h3>
            <button
              className="skill-details-close"
              type="button"
              aria-label={textos.close}
              onClick={() => setIndiceSelecionado(null)}
            >
              ×
            </button>
          </div>
          <p>{gruposDeHabilidades[indiceSelecionado].description}</p>
          <ul>
            {gruposDeHabilidades[indiceSelecionado].technologies.map((tecnologia) => (
              <li key={tecnologia}>{tecnologia}</li>
            ))}
          </ul>
        </article>
      )}
    </section>
  );
}

export default Skills;

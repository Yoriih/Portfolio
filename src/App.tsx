import { useEffect, useState, type PointerEvent } from 'react';
import About from './components/About';
import Projects from './components/Projects';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import SocialLinks from './components/SocialLinks';
import { traducoes, type Idioma } from './i18n';

type Tela = 'menu' | 'sobre' | 'projetos' | 'redes' | 'skills';

function App() {
  const [tela, setTela] = useState<Tela>('menu');
  // Guarda a preferência no navegador para manter o idioma escolhido entre visitas.
  const [idioma, setIdioma] = useState<Idioma>(() => (
    window.localStorage.getItem('portfolio-idioma') === 'en' ? 'en' : 'pt'
  ));
  const textos = traducoes[idioma];

  useEffect(() => {
    window.localStorage.setItem('portfolio-idioma', idioma);
    document.documentElement.lang = idioma === 'en' ? 'en' : 'pt-BR';
    document.title = textos.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', textos.meta.description);
  }, [idioma, textos]);

  // Atualiza o ponto da distorção orgânica sem ativá-la sobre o conteúdo.
  function acompanharPonteiro(event: PointerEvent<HTMLElement>) {
    if ((event.target as HTMLElement).closest('.home-content, .contact-window, .content-panel:not(.content-panel--social):not(.content-panel--skills), .content-panel--skills :is(h1, h2, p, article, button, li)')) return;

    const limites = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - limites.left) / limites.width) * 100;
    const y = ((event.clientY - limites.top) / limites.height) * 100;

    event.currentTarget.style.setProperty('--distorcao-x', `${x}%`);
    event.currentTarget.style.setProperty('--distorcao-y', `${y}%`);
  }

  return (
    <main
        className={tela === 'menu' ? 'home-screen' : 'content-screen'}
      onPointerMove={acompanharPonteiro}
    >
      {/* Deixa PT e EN sempre acessíveis, inclusive durante a navegação entre telas. */}
      <div className="language-switcher" role="group" aria-label={textos.language.aria}>
        <button
          type="button"
          className={idioma === 'pt' ? 'language-option language-option--active' : 'language-option'}
          aria-pressed={idioma === 'pt'}
          onClick={() => setIdioma('pt')}
        >
          {textos.language.portuguese}
        </button>
        <span aria-hidden="true">/</span>
        <button
          type="button"
          className={idioma === 'en' ? 'language-option language-option--active' : 'language-option'}
          aria-pressed={idioma === 'en'}
          onClick={() => setIdioma('en')}
        >
          {textos.language.english}
        </button>
      </div>

      {/* Noise invisível ao usuário serve como mapa para a distorção orgânica do fundo. */}
      <svg className="visual-filters" aria-hidden="true" focusable="false">
        <defs>
          <filter id="distorcao-organica" x="-10%" y="-10%" width="120%" height="120%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.012 0.018"
              numOctaves="2"
              seed="8"
              result="textura"
            >
              <animate
                attributeName="baseFrequency"
                values="0.010 0.016; 0.014 0.021; 0.010 0.016"
                dur="7s"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap
              in="SourceGraphic"
              in2="textura"
              scale="48"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>
      <section
        key={tela}
        className={
          tela === 'menu'
            ? 'home-content'
            : tela === 'redes'
              ? 'content-panel content-panel--social'
              : tela === 'skills'
                ? 'content-panel content-panel--skills'
                : tela === 'sobre'
                  ? 'content-panel content-panel--about'
                  : tela === 'projetos'
                    ? 'content-panel content-panel--projects'
                    : 'content-panel'
        }
        aria-labelledby="titulo-pagina"
      >
        {tela === 'menu' ? (
          <>
            <Header />
            <Hero quote={textos.hero.quote} attribution={textos.hero.attribution} />

            <nav className="main-nav" aria-label={textos.nav.aria}>

              <button
                className="menu-button"
                type="button"
                onClick={() => setTela('sobre')}
              >
                {textos.nav.about}
              </button>

              <button
                className="menu-button"
                type="button"
                onClick={() => setTela('projetos')}
              >
                {textos.nav.projects}
              </button>

              <button
                className="menu-button"
                type="button"
                onClick={() => setTela('redes')}
              >
                {textos.nav.social}
              </button>

              <button
                className="menu-button"
                type="button"
                onClick={() => setTela('skills')}
              >
                {textos.nav.skills}
              </button>

            </nav>
          </>
        ) : (
          <>
            {tela === 'sobre' && <h1 id="titulo-pagina">{textos.pageTitles.sobre}</h1>}
            {tela === 'projetos' && <h1 id="titulo-pagina">{textos.pageTitles.projetos}</h1>}

            {tela === 'sobre' && (
              <About
                textos={textos.about}
                onVoltar={() => setTela('menu')}
              />
            )}
            {tela === 'projetos' && <Projects textos={textos.projects} />}
            {tela === 'skills' && <Skills textos={textos.skills} />}
            {tela === 'redes' && <SocialLinks textos={textos.social} onVoltar={() => setTela('menu')} />}

            {tela !== 'redes' && tela !== 'sobre' && (
              <button
                className={`content-back-button content-back-button--${tela}`}
                type="button"
                onClick={() => setTela('menu')}
              >
                {textos.common.back}
              </button>
            )}
          </>
        )}
      </section>
    </main>
  );
}

export default App;

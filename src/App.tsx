import { useState, type PointerEvent } from 'react';
import About from './components/About';
import Projects from './components/Projects';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import SocialLinks from './components/SocialLinks';

type Tela = 'menu' | 'sobre' | 'projetos' | 'redes' | 'skills';

const titulos: Record<Tela, string> = {
  menu: 'Portfólio',
  sobre: 'Sobre mim',
  projetos: 'Projetos',
  redes: 'Redes sociais',
  skills: 'Habilidades',
};

const descricoes: Record<Tela, string> = {
  menu: 'Conheça um pouco sobre mim e o que estou aprendendo.',
  sobre: 'Conheça minha história.',
  projetos: 'Aqui vamos apresentar seus projetos.',
  redes: 'Aqui vamos reunir seus perfis profissionais.',
  skills: 'Aqui vamos mostrar suas habilidades e tecnologias.',
};

function App() {
  const [tela, setTela] = useState<Tela>('menu');

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
        className={
          tela === 'menu'
            ? 'home-content'
            : tela === 'redes'
              ? 'content-panel content-panel--social'
              : tela === 'skills'
                ? 'content-panel content-panel--skills'
              : 'content-panel'
        }
        aria-labelledby="titulo-pagina"
      >
        {tela === 'menu' ? (
          <>
            <Header />
            <Hero />

            <nav className="main-nav" aria-label="Seções do portfólio"> 

              <button //Sobre
                className="menu-button"
                type="button"
                onClick={() => setTela('sobre')}
              >
                Sobre
              </button>

              <button //Projetos
                className="menu-button"
                type="button"
                onClick={() => setTela('projetos')}
              >
                Projetos
              </button>

              <button //Redes sociais
                className="menu-button"
                type="button"
                onClick={() => setTela('redes')}
              >
                Redes sociais
              </button>

              <button //Skills
                className="menu-button"
                type="button"
                onClick={() => setTela('skills')}
              >
                Habilidades
              </button>

            </nav>
          </>
        ) : (
          <>
            {tela !== 'redes' && <h1 id="titulo-pagina">{titulos[tela]}</h1>}

            {tela === 'sobre' && <About />}
            {tela === 'projetos' && <Projects />}
            {tela === 'skills' && <Skills />}
            {tela === 'redes' && <SocialLinks onVoltar={() => setTela('menu')} />}

            {tela !== 'redes' && (
              <button type="button" onClick={() => setTela('menu')}>
                ← Voltar ao menu
              </button>
            )}
          </>
        )}
      </section>
    </main>
  );
}

export default App;

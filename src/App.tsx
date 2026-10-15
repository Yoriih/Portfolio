import { useState } from 'react';
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

  return (
    <main className={tela === 'menu' ? 'home-screen' : 'content-screen'}>
      <section
        className={tela === 'menu' ? 'home-content' : 'content-panel'}
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
            <h1 id="titulo-pagina">{titulos[tela]}</h1>

            {tela === 'sobre' && <About />}
            {tela === 'projetos' && <Projects />}
            {tela === 'skills' && <Skills />}
            {tela === 'redes' && <SocialLinks />}

            <button type="button" onClick={() => setTela('menu')}>
              ← Voltar ao menu
            </button>
          </>
        )}
      </section>
    </main>
  );
}

export default App;
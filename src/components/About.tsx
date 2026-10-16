type AboutProps = {
  onVoltar: () => void;
};

function About({ onVoltar }: AboutProps) {
  return (

    <section className="about-copy" aria-label="Sobre mim">
      <p>
        Olá! Sou Nicolas Gonçalves de Souza, mas muitos me conhecem como Yorih.
        Sou estudante de Análise e Desenvolvimento de Sistemas na UNIUBE e estou
        dando os primeiros passos para transformar em profissão uma paixão que me
        acompanha desde a infância: a tecnologia.
      </p>

      <p>
        Sempre fui fascinado pelo que podemos criar com ela. Hoje, busco transformar
        minha adaptabilidade tecnológica e curiosidade em aprendizado e projetos,
        explorando áreas como desenvolvimento, inteligência artificial, automação
        e muito mais.
      </p>

      <p>
        Cada novo desafio é uma oportunidade de chegar mais perto daquele sonho de
        criança e de descobrir até onde minha paixão por tecnologia pode me levar.
      </p>

      <nav className="about-actions" aria-label="Links sobre mim">
        <a
          className="about-action about-action--resume"
          href="./Nicolas-Goncalves-de-Souza-Curriculo.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver currículo
        </a>
        <button
          className="about-action about-action--back"
          type="button"
          onClick={onVoltar}
        >
          ← Voltar ao menu
        </button>
      </nav>
    </section>

  );
}

export default About;

import type { Textos } from '../i18n';

type AboutProps = {
  onVoltar: () => void;
  textos: Textos['about'];
};

function About({ onVoltar, textos }: AboutProps) {
  return (

    <section className="about-copy" aria-label={textos.aria}>
      {textos.paragraphs.map((paragrafo) => <p key={paragrafo}>{paragrafo}</p>)}

      <nav className="about-actions" aria-label={textos.actionsAria}>
        <a
          className="about-action about-action--resume"
          href="./Nicolas-Goncalves-de-Souza-Curriculo.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          {textos.resume}
        </a>
        <button
          className="about-action about-action--back"
          type="button"
          onClick={onVoltar}
        >
          {textos.back}
        </button>
      </nav>
    </section>

  );
}

export default About;

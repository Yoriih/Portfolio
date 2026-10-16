import { useEffect, useState } from 'react';

type HeroProps = {
  quote: string;
  attribution: string;
};

function Hero({ quote, attribution }: HeroProps) {
  const [textoVisivel, setTextoVisivel] = useState('');
  const textoCompleto = `${quote}${attribution}`;

  // Revela a frase em intervalos curtos para simular texto digitado em um jogo.
  useEffect(() => {
    setTextoVisivel('');

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTextoVisivel(textoCompleto);
      return;
    }

    let caractereAtual = 0;
    const intervalo = window.setInterval(() => {
      caractereAtual += 1;
      setTextoVisivel(textoCompleto.slice(0, caractereAtual));

      if (caractereAtual >= textoCompleto.length) {
        window.clearInterval(intervalo);
      }
    }, 38);

    return () => window.clearInterval(intervalo);
  }, [textoCompleto]);

  return (
    <section className="hero-quote">
      <blockquote>
        <p
          className={textoVisivel.length <= quote.length ? 'quote-cursor' : undefined}
          aria-label={quote}
          aria-live="off"
        >
          {textoVisivel.slice(0, quote.length)}
        </p>
        <cite className={textoVisivel.length > quote.length ? 'quote-cursor' : undefined}>
          {textoVisivel.slice(quote.length)}
        </cite>
      </blockquote>
    </section>
  );
}

export default Hero;

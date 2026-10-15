import { useEffect, useState } from 'react';

const citacao = '“Qualquer tecnologia suficientemente avançada é indistinguível da mágica.”';
const assinatura = '— Arthur C. Clarke';
const textoCompleto = `${citacao}${assinatura}`;

function Hero() {
  const [textoVisivel, setTextoVisivel] = useState('');

  // Revela a frase em intervalos curtos para simular texto digitado em um jogo.
  useEffect(() => {
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
  }, []);

  return (
    <section className="hero-quote">
      <blockquote>
        <p
          className={textoVisivel.length <= citacao.length ? 'quote-cursor' : undefined}
          aria-label={citacao}
          aria-live="off"
        >
          {textoVisivel.slice(0, citacao.length)}
        </p>
        <cite className={textoVisivel.length > citacao.length ? 'quote-cursor' : undefined}>
          {textoVisivel.slice(citacao.length)}
        </cite>
      </blockquote>
    </section>
  );
}

export default Hero;

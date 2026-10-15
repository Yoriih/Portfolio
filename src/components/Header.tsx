function Header() {
  const linhasDoNome = [
    ["Nicolas", "Gonçalves"],
    ["de", "Souza"],
  ];

  return (
    <header className="hero-header">
      <h1
        id="titulo-pagina"
        className="hero-name"
        aria-label="Nicolas Gonçalves de Souza"
      >
        {linhasDoNome.map((palavras, indiceLinha) => (
          <span className="hero-name-line" aria-hidden="true" key={indiceLinha}>
            {palavras.map((palavra, indicePalavra) => (
              <span className="hero-name-word" key={palavra}>
                {Array.from(palavra).map((letra, indiceLetra) => (
                  <span
                    className="hero-name-letter"
                    key={`${letra}-${indiceLetra}`}
                  >
                    {letra}
                  </span>
                ))}
                {indicePalavra < palavras.length - 1 ? "\u00a0" : null}
              </span>
            ))}
          </span>
        ))}
      </h1>
    </header>
  );
}

export default Header;

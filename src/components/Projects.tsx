type Projeto = { // Define a estrutura de um projeto.
  nome: string;
  descricao: string;
  status: string;
  link: string;
};

const projetos: Projeto[] = [
    { //CHARME PET IN FASHION
        nome: 'Charme Pet in Fashion',
        descricao: 'Plataforma de e-commerce em desenvolvimento.',
        status: 'Em desenvolvimento',
        link: 'https://yoriih.github.io/Projeto-Charme-Pet-in-Fashion/',
    },
    { //PENDENTE
        nome: 'Pendente', 
        descricao: 'Projeto pendente de desenvolvimento.', 
        status: 'Pendente', 
        link: '#' 
    },
];

function Projects() { // Componente que exibe a lista de projetos.
  return (
    <section aria-labelledby="titulo-projetos">
      <h2 id="titulo-projetos">Projetos</h2>

      <ul>
        {projetos.map((projeto) => (
          <li key={projeto.nome}>
            <article>
              <h3>{projeto.nome}</h3>
              <p>{projeto.descricao}</p>
              <p>
                <strong>Status:</strong> {projeto.status}
              </p>

              <a href={projeto.link} target="_blank" rel="noreferrer">
                Ver projeto ↗
              </a>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
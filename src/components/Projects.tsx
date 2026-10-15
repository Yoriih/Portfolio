type Projeto = { // Define a estrutura do projeto.
  nome: string;
  descricao: string;
  status: string;
  link: string;
  repositorio: string; 
  tecnologias: string[];
  funcionalidades: string[];
};

const projetos: Projeto[] = [

    { //CHARME PET IN FASHION
        nome: 'Charme Pet in Fashion',
        descricao: 'Projeto de e-commerce de moda pet, com coleções, peças sob medida e proposta de apoio à causa animal.',
        status: 'Em desenvolvimento',
        link: 'https://yoriih.github.io/Projeto-Charme-Pet-in-Fashion/',
        repositorio: 'https://github.com/Yoriih/Projeto-Charme-Pet-in-Fashion',
        tecnologias: ['HTML','CSS','JavaScript','Firebase Firestore',],
        funcionalidades: ['Vitrine de produtos e coleções','Carrinho de compras salvo no navegador','Formulário para solicitar peças sob medida','Seção sobre a causa de proteção animal',],
    },
    
];

function Projects() { // Componente que exibe a lista de projetos.
  return (
    <section aria-labelledby="titulo-projetos">
      <h2 id="titulo-projetos">Projetos</h2>

      <ul className="project-list">
        {projetos.map((projeto) => (
          <li key={projeto.nome}>
            <article className="project-card">

              <h3>{projeto.nome}</h3>
              <p>{projeto.descricao}</p>
              <p>
                <strong>Status:</strong> {projeto.status}
              </p>

              <h4>Tecnologias</h4>
              <ul>
                {projeto.tecnologias.map((tecnologia) => (
                  <li key={tecnologia}>{tecnologia}</li>
                ))}
              </ul>

              <h4>Funcionalidades</h4>
              <ul>
                {projeto.funcionalidades.map((funcionalidade) => (
                  <li key={funcionalidade}>{funcionalidade}</li>
                ))}
              </ul>

              <div className="project-links">
                <a
                  className="project-link"
                  href={projeto.repositorio}
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver código-fonte ↗
                </a>

                <a
                  className="project-link"
                  href={projeto.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver projeto ↗
                </a>
              </div>

            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
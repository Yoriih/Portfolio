// Cada grupo reúne tecnologias relacionadas a uma área.
type GrupoDeHabilidades = {
  titulo: string;
  descricao: string;
  tecnologias: string[];
};

// Tecnologias que estou estudando e praticando nos meus projetos.
const gruposDeHabilidades: GrupoDeHabilidades[] = [
  {
    titulo: 'Fundamentos da web',
    descricao: 'A base usada para estruturar e apresentar páginas na internet.',
    tecnologias: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    titulo: 'Desenvolvimento de interfaces',
    descricao: 'Ferramentas usadas para criar a interface deste portfólio.',
    tecnologias: ['React', 'TypeScript', 'Vite'],
  },
  {
    titulo: 'Versionamento',
    descricao: 'Ferramentas para acompanhar e compartilhar as mudanças nos projetos.',
    tecnologias: ['Git', 'GitHub'],
  },
];

function Skills() {
  return (
    <section aria-labelledby="titulo-habilidades">
      <h2 id="titulo-habilidades">Habilidades e tecnologias</h2>

      <p>
        Estas são algumas das tecnologias que estou estudando e praticando
        enquanto desenvolvo meus projetos.
      </p>

      <div className="skill-groups">
        {gruposDeHabilidades.map((grupo) => (
          <article key={grupo.titulo}>
            <h3>{grupo.titulo}</h3>
            <p>{grupo.descricao}</p>

            <ul>
              {grupo.tecnologias.map((tecnologia) => (
                <li key={tecnologia}>{tecnologia}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;

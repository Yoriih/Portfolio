type GrupoDeHabilidades = {
  titulo: string;
  descricao: string;
  tecnologias: string[];
};

const gruposDeHabilidades: GrupoDeHabilidades[] = [
  {
    titulo: 'Fundamentos da web',
    descricao: 'Tecnologias usadas para estruturar e construir páginas web.',
    tecnologias: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    titulo: 'Desenvolvimento de interfaces',
    descricao: 'Ferramentas usadas na interface deste portfólio.',
    tecnologias: ['React', 'TypeScript', 'Vite'],
  },
  {
    
    titulo: 'Back-end e banco de dados',
    descricao: 'Linguagens e banco de dados presentes nos seus estudos e projetos.',
    tecnologias: ['PHP', 'Python', 'MySQL', 'Firebase Firestore'],
  },
  {
    titulo: 'Ferramentas e versionamento',
    descricao: 'Ferramentas para editar código e acompanhar as mudanças nos projetos.',
    tecnologias: ['Git', 'GitHub', 'Visual Studio Code'],
  },
  {
    titulo: 'Manutenção e formatação',
    descricao: 'Experiência com formatação e montagem de computadores e manutenção de equipamentos.',
    tecnologias: ['Notebooks', 'Desktops'],
  },
];

function Skills() {
  return (
    <section aria-labelledby="titulo-habilidades">
      <h2 id="titulo-habilidades">Habilidades e tecnologias</h2>

      <p>
        Estas são algumas das tecnologias que estudo e pratico nos meus projetos.
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

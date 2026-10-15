// Estrutura do perfil ou contato.
type PerfilSocial = {
  nome: string;
  identificador: string;
  descricao: string;
  url: string;
};

const perfisSociais: PerfilSocial[] = [

  {//GitHub
    nome: 'GitHub',
    identificador: '@Yoriih',
    descricao: 'Meus projetos, estudos e experimentos com programação.',
    url: 'https://github.com/Yoriih',
  },
  {//LinkedIn
    nome: 'LinkedIn',
    identificador: '/in/yoriih',
    descricao: 'Meu perfil profissional e minha trajetória.',
    url: 'https://www.linkedin.com/in/yoriih/',
  },
  {//Instagram
    nome: 'Instagram',
    identificador: '@ynick_dev',
    descricao: 'Meu perfil no Instagram.',
    url: 'https://www.instagram.com/ynick_dev/',
  },
  {//E-mail
    nome: 'E-mail',
    identificador: 'contato.nicolasgoncalves@gmail.com',
    descricao: 'Entre em contato comigo pelo Gmail.',
    url: 'https://mail.google.com/mail/?view=cm&fs=1&to=contato.nicolasgoncalves@gmail.com',
  },

];

function SocialLinks() {
  return (
    <section aria-labelledby="titulo-redes">
      <h2 id="titulo-redes">Me encontre</h2>

      <p>
        Aqui estão meus perfis e contatos.
      </p>

      <ul className="social-list">
        {perfisSociais.map((perfil) => (
          <li key={perfil.nome}>
            <article className="social-card">
              <h3>{perfil.nome}</h3>
              <p>{perfil.descricao}</p>

              <a
                href={perfil.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {perfil.identificador} · Acessar ↗
              </a>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default SocialLinks;
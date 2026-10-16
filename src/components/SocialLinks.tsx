import type { ReactNode } from 'react';
import type { Textos } from '../i18n';

// Estrutura do perfil ou contato.
type PerfilSocial = {
  nome: string;
  icone: 'github' | 'linkedin' | 'instagram' | 'email';
  identificador: string;
  url: string;
};

const perfisSociais: PerfilSocial[] = [

  {//GitHub
    nome: 'GitHub',
    icone: 'github',
    identificador: '@Yoriih',
    url: 'https://github.com/Yoriih',
  },
  {//LinkedIn
    nome: 'LinkedIn',
    icone: 'linkedin',
    identificador: '/in/yoriih',
    url: 'https://www.linkedin.com/in/yoriih/',
  },
  {//Instagram
    nome: 'Instagram',
    icone: 'instagram',
    identificador: '@ynick_dev',
    url: 'https://www.instagram.com/ynick_dev/',
  },
  {//E-mail
    nome: 'E-mail',
    icone: 'email',
    identificador: 'contato.nicolasgoncalves@gmail.com',
    url: 'https://mail.google.com/mail/?view=cm&fs=1&to=contato.nicolasgoncalves@gmail.com',
  },

];

function IconeRede({ tipo }: { tipo: PerfilSocial['icone'] }) {
  const caminhos: Record<PerfilSocial['icone'], ReactNode> = {
    github: <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 6.98c.85 0 1.71.11 2.51.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.33 4.69-4.56 4.94.36.31.68.92.68 1.86v2.58c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />,
    linkedin: <><path d="M5 8.5H2.2V21H5V8.5ZM3.6 2a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4ZM21.8 13.8c0-3.76-2.01-5.51-4.7-5.51a4.06 4.06 0 0 0-3.66 2.02V8.5h-2.8V21h2.8v-6.2c0-1.64.31-3.23 2.35-3.23 2.01 0 2.04 1.88 2.04 3.34V21h2.81l1.16-7.2Z" /></>,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2.4" /><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2.4" /><circle cx="17.7" cy="6.5" r="1.3" /></>,
    email: <><rect x="2" y="5" width="20" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="2" /><path d="m3 7 9 7 9-7" fill="none" stroke="currentColor" strokeWidth="2" /></>,
  };

  return (
    <svg className="social-icon-svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      {caminhos[tipo]}
    </svg>
  );
}

function SocialLinks({ onVoltar, textos }: { onVoltar: () => void; textos: Textos['social'] }) {
  return (
    <section aria-label={textos.sectionAria} aria-labelledby="titulo-pagina">
      <article className="contact-window" aria-label={textos.panelAria}>
        <header className="contact-window-bar">
          <h1 className="contact-window-bar-title" id="titulo-pagina">
            {textos.windowTitle}
          </h1>
          <span className="contact-window-controls" aria-hidden="true">■ □ ×</span>
        </header>

        <div className="contact-window-body">
          <div className="contact-avatar" aria-hidden="true">
            <svg viewBox="0 0 96 96" focusable="false">
              <path className="avatar-hood" d="M48 7C25 7 13 25 13 49v36h70V49C83 25 71 7 48 7Z" />
              <path className="avatar-shadow" d="M48 20c-15 0-23 13-23 30v24h46V50c0-17-8-30-23-30Z" />
              <path className="avatar-cloak" d="M13 85c2-19 14-28 25-32h20c11 4 23 13 25 32H13Z" />
              <path className="avatar-eyes" d="M34 51h9v4h-9zm19 0h9v4h-9z" />
            </svg>
          </div>
          <p className="contact-window-intro">{textos.intro}</p>

          <ul className="social-list">
            {perfisSociais.map((perfil) => (
              <li key={perfil.nome}>
                <article className="social-card">
                  <span className="social-icon"><IconeRede tipo={perfil.icone} /></span>
                  <div className="social-info">
                    <h4>{perfil.nome}</h4>
                    <p className="social-identifier">{perfil.identificador}</p>
                  </div>
                  <a
                    href={perfil.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${textos.open} ${perfil.nome}: ${perfil.identificador}`}
                  >
                    {textos.open} <span aria-hidden="true">↗</span>
                  </a>
                </article>
              </li>
            ))}
          </ul>
          <p className="contact-window-hint">{textos.hint}</p>
          <button className="contact-back-button" type="button" onClick={onVoltar}>
            {textos.back}
          </button>
        </div>
      </article>
    </section>
  );
}

export default SocialLinks;

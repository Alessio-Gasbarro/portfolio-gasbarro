import './index.css';
import bgVideo from './assets/background_video.mp4';
import curriculum from './assets/curriculum_1.png';
import master from './assets/master_2.png';
import { projects } from './data/projects.js';
import { useState, useCallback, useEffect } from 'react';

function App() {
  const [lightbox, setLightbox] = useState({ open: false, src: '', alt: '' });

  const openLightbox = useCallback((src, alt) => {
    setLightbox({ open: true, src, alt });
  }, []);

  const closeLightbox = useCallback(() => {
    setLightbox({ open: false, src: '', alt: '' });
  }, []);

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape' && lightbox.open) closeLightbox();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox.open, closeLightbox]);

  // Animated headline phrases
  const phrases = ['nuove realtà', 'nuove idee', 'nuovi progetti', 'nuovi sogni'];
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIdx((i) => (i + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="app">
      <video
        className="bg-video"
        src={bgVideo}
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="overlay">
        {/* HERO - Prima Sezione */}
        <section className="section" role="region" aria-labelledby="hero-title">
          <div className="section-inner hero-content">
            <h1 id="hero-title" className="hero-title">
              <span className="fixed-word">Costruendo</span>
              <span className="animated-wrap" aria-hidden="false">
                <span
                  key={idx}
                  className={`animated-phrase phrase-${idx}`}
                >
                  {phrases[idx]}
                </span>
              </span>
            </h1>

            <div className="blur">
              <p className="hero-desc">
                Sono un ragazzo appassionato di 28 anni che risiede a Ludwigsburg, in Germania, con un fortissimo desiderio di conoscere nuove tecnologie e imparare sempre di più. Ho recentemente completato un corso intensivo di 6 mesi come Full-Stack Web Developer, dove ho acquisito le necessarie competenze per creare applicazioni web moderne ed efficienti sia in Front-end, sia in Back-end.
              </p>
              <p className='hero-desc'>
                Italiano di madrelingua, sono fluente in inglese e tedesco a livello Niveau C1. Ma nel tempo libero mi piace spesso imparare il giapponese.
              </p>
              <p className='hero-desc'>
                Essere curioso, appassionato e determinato fa di me la persona che sono oggi, oltre alla mia personale soddisfazione nel completare con successo ogni progetto.
              </p>
            </div>

            <div className="btn-group" role="navigation" aria-label="Azioni principali">
              <a className="btn" href="#projects">Progetti</a>
              <a className="btn" href="#skills">Competenze</a>
            </div>
          </div>
        </section>

        {/* SKILLS - Seconda Sezione */}
        <section id="skills" className="section" aria-labelledby="skills-title" role="region">
          <div className="section-inner skills-inner">
            <h2 id="skills-title" className="skills-heading">Competenze</h2>

            <div className="skills-grid" role="list">
              <div className="skills-column" role="listitem" aria-label="Front-end">
                <h3 className="skills-subheading">FRONT-END</h3>
                <div className="skill-row">
                  <img className="skill-icon" loading="lazy" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" width="80" height="80" />
                  <img className="skill-icon" loading="lazy" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" width="80" height="80" />
                  <img className="skill-icon" loading="lazy" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" width="80" height="80" />
                  <img className="skill-icon" loading="lazy" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" width="80" height="80" />
                  <img className="skill-icon" loading="lazy" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" width="80" height="80" />
                  <img className="skill-icon" loading="lazy" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" width="80" height="80" />
                </div>
              </div>

              <div className="skills-column" role="listitem" aria-label="Back-end">
                <h3 className="skills-subheading">BACKEND</h3>
                <div className="skill-row">
                  <img className="skill-icon" loading="lazy" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" width="80" height="80" />
                  <img className="skill-icon" loading="lazy" src="https://skillicons.dev/icons?i=express" alt="Express.js" width="80" height="80" />
                  <img className="skill-icon" loading="lazy" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" width="80" height="80" />
                </div>
              </div>

              <div className="skills-column" role="listitem" aria-label="Altri strumenti">
                <h3 className="skills-subheading">ALTRI TOOLS</h3>
                <div className="skill-row">
                  <img className="skill-icon" loading="lazy" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" width="80" height="80" />
                  <img className="skill-icon" loading="lazy" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" alt="Jest" width="80" height="80" />
                  <img className="skill-icon" loading="lazy" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" alt="Postman" width="80" height="80" />
                  <img className="skill-icon" loading="lazy" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg" alt="Vite" width="80" height="80" />
                  <img className="skill-icon" loading="lazy" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt="NPM" width="80" height="80" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROGETTI - Terza Sezione */}
        <section id="projects" className="section projects-section" aria-labelledby="projects-title" role="region">
          <div className="section-inner">
            <h2 id="projects-title" className="skills-heading">Progetti</h2>

            <div className="projects-grid" role="list">
              {projects.map(p => (
                <a
                  key={p.id}
                  className="project-card"
                  href={p.href}
                  aria-label={p.title}
                >
                  <div className="project-thumb">
                    <img src={p.image} alt={p.title} />
                  </div>
                  <div className="project-meta">
                    <h3 className="project-title">{p.title}</h3>
                    <p className="project-desc">{p.desc}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* REFERENZE - Quarta Sezione */}
        <section id="references" className="section" aria-labelledby="references-title" role="region">
          <div className="section-inner">
            <h2 id="references-title" className="skills-heading">Referenze</h2>

            <div className="ref-grid">
              <button
                type="button"
                className="ref-card"
                onClick={() => openLightbox(curriculum, 'Curriculum')}
                aria-label="Apri Curriculum"
              >
                <img src={curriculum} alt="Curriculum" />
              </button>

              <button
                type="button"
                className="ref-card"
                onClick={() => openLightbox(master, 'Master')}
                aria-label="Apri Master"
              >
                <img src={master} alt="Master" />
              </button>
            </div>
          </div>
        </section>
      </div>

      {lightbox.open && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.alt}
          onClick={closeLightbox}
        >
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox} aria-label="Chiudi">×</button>
            <img src={lightbox.src} alt={lightbox.alt} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
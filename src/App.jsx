import './index.css'
import bgVideo from './assets/background_video.mp4'

function App() {
  const projects = [
    { id: 1, title: 'VideoGames E-Commerce', desc: 'E-Commerce videoludica, lavoro di gruppo. Sistema gestionale di videogames, da aggiungere al carrello e tantissimo altro.', href: 'https://github.com/Alessio-Gasbarro/ecommerce_boolstop' },
    { id: 2, title: 'Javascript Clock', desc: 'Orologio in tempo reale, con il design di una variabile JavaScript.', href: 'https://github.com/Alessio-Gasbarro/realTimeClock_react' },
    { id: 3, title: 'Nasa API', desc: 'Applicazione che utilizza le API della NASA, mostra immagini giornaliere e informazioni di pianeti, asteroidi e altro.', href: 'https://github.com/Alessio-Gasbarro/nasa_api' },
    { id: 4, title: 'Pluvia24', desc: 'Piattaforma meteo in tempo reale che utilizza le API di OpenWeather. Mostra le condizioni meteorologiche attuali di ben 20 Capitali.', href: 'https://github.com/Alessio-Gasbarro/weather-api' },
    { id: 5, title: 'Musicando', desc: 'Applicazione per comparare strumenti e/o aggiungere strumenti ai preferiti. Ottimizzato con ricerca avanzata, debounce e LocalStorage.', href: 'https://github.com/Alessio-Gasbarro/progetto-finale-spec-frontend-front' }
  ]

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
        <section className="section hero" role="region" aria-labelledby="hero-title">
          <div className="section-inner hero-content">
            <h1 id="hero-title" className="hero-title">Costruendo nuove realtà</h1>

            <p className="hero-desc">
              Sono un Full-Stack Developer specializzato in Front-End. Il mio focus va
              all'ottimizzazione e alle funzionalità del sito, mantenendo un design
              moderno ma performante.
            </p>

            <div className="btn-group" role="navigation" aria-label="Azioni principali">
              <a className="btn btn-primary" href="#projects">Progetti</a>
              <a className="btn" href="#contact">Contattami</a>
            </div>
          </div>
        </section>

        {/* SKILLS - Seconda Sezione */}
        <section className="section" aria-labelledby="skills-title" role="region">
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
                    {/* Sostituisci con <img src={require('./assets/project1.jpg')} alt="..." /> oppure importa in cima */}
                    <span className="project-placeholder">Immagine</span>
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
      </div>
    </div>
  )
}

export default App
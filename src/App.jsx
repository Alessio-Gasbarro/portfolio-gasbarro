import './index.css'
import bgVideo from './assets/background_video.mp4'

function App() {
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
          <div className="hero-content">
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
          <div className="skills-inner">
            <h2 className="skills-heading">Competenze</h2>

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
        <section className='section'>
          <h1>Ciao</h1>
        </section>
      </div>
    </div>
  )
}

export default App
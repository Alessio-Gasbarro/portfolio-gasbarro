import "./index.css";
import bgVideo from "./assets/background_video.mp4";
import curriculum from "./assets/curriculum_1.png";
import master from "./assets/master_2.png";
import { projects } from "./data/projects.js";
import { useState, useCallback, useEffect } from "react";

function App() {
  const [lightbox, setLightbox] = useState({ open: false, src: "", alt: "" });

  const openLightbox = useCallback((src, alt) => {
    setLightbox({ open: true, src, alt });
  }, []);

  const closeLightbox = useCallback(() => {
    setLightbox({ open: false, src: "", alt: "" });
  }, []);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape" && lightbox.open) closeLightbox();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightbox.open, closeLightbox]);

  const phrases = ["new realities", "new ideas", "new projects", "new dreams"];
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIdx((i) => (i + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="app">
      {/* Background video */}
      <video
        className="bg-video"
        src={bgVideo}
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="overlay">
        {/* HERO */}
        <section className="section" aria-labelledby="hero-title">
          <div className="section-inner hero-content">
            <h1 id="hero-title" className="hero-title">
              <span className="fixed-word">Developing</span>
              <span className="animated-wrap">
                <span key={idx} className={`animated-phrase phrase-${idx}`}>
                  {phrases[idx]}
                </span>
              </span>
            </h1>

            <div className="blur">
              <p className="hero-desc">
                I'm a passionate 28-year-old living in Ludwigsburg, Germany, with a strong desire to learn new technologies and continue to improve. I recently completed an intensive 6-month course as a Full-Stack Web Developer, where I acquired the necessary skills to create modern and efficient web applications for both front-end and back-end.
              </p>
              <p className="hero-desc">
                A native Italian speaker, I'm fluent in English and German at level C1. In my spare time, I often enjoy learning Japanese.
              </p>
              <p className="hero-desc">
                Being curious, passionate, and determined makes me the person I am today, in addition to my personal satisfaction in successfully completing every project.
              </p>

              <nav className="btn-group" aria-label="Azioni principali">
                <a className="btn" href="#projects">Projects</a>
                <a className="btn" href="#skills">Skills</a>
              </nav>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section" aria-labelledby="skills-title">
          <div className="section-inner skills-inner">
            <h2 id="skills-title" className="skills-heading">Skills</h2>

            <div className="skills-grid">
              {/* FRONTEND */}
              <div className="skills-column" aria-label="Front-end">
                <h3 className="skills-subheading">FRONT-END</h3>
                <div className="skill-row">
                  {[
                    ["html5", "HTML5"],
                    ["css3", "CSS3"],
                    ["javascript", "JavaScript"],
                    ["react", "React"],
                    ["typescript", "TypeScript"],
                    ["bootstrap", "Bootstrap"]
                  ].map(([name, alt]) => (
                    <img
                      key={name}
                      className="skill-icon"
                      loading="lazy"
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-original.svg`}
                      alt={alt}
                      width="80"
                      height="80"
                    />
                  ))}
                </div>
              </div>

              {/* BACKEND */}
              <div className="skills-column" aria-label="Back-end">
                <h3 className="skills-subheading">BACKEND</h3>
                <div className="skill-row">
                  <img
                    className="skill-icon"
                    loading="lazy"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                    alt="Node.js"
                    width="80"
                    height="80"
                  />
                  <img
                    className="skill-icon"
                    loading="lazy"
                    src="https://skillicons.dev/icons?i=express"
                    alt="Express.js"
                    width="80"
                    height="80"
                  />
                  <img
                    className="skill-icon"
                    loading="lazy"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                    alt="MySQL"
                    width="80"
                    height="80"
                  />
                </div>
              </div>

              {/* TOOLS */}
              <div className="skills-column" aria-label="Other tools">
                <h3 className="skills-subheading">OTHER TOOLS</h3>
                <div className="skill-row">
                  {[
                    ["git", "Git"],
                    ["jest", "Jest", "plain"],
                    ["postman", "Postman"],
                    ["vite", "Vite"],
                    ["npm", "NPM", "original-wordmark"]
                  ].map(([name, alt, variant = "original"]) => (
                    <img
                      key={name}
                      className="skill-icon"
                      loading="lazy"
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-${variant}.svg`}
                      alt={alt}
                      width="80"
                      height="80"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section projects-section" aria-labelledby="projects-title">
          <div className="section-inner">
            <h2 id="projects-title" className="skills-heading">My Personal Projects</h2>

            <div className="projects-grid">
              {projects.map((p) => (
                <a key={p.id} className="project-card" href={p.href} aria-label={p.title}>
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

        {/* REFERENCES */}
        <section id="references" className="section" aria-labelledby="references-title">
          <div className="section-inner">
            <h2 id="references-title" className="skills-heading">References</h2>

            <div className="ref-grid">
              {[
                { src: curriculum, alt: "Curriculum" },
                { src: master, alt: "Master" }
              ].map(({ src, alt }) => (
                <button
                  key={alt}
                  type="button"
                  className="ref-card"
                  onClick={() => openLightbox(src, alt)}
                  aria-label={`Apri ${alt}`}
                >
                  <img src={src} alt={alt} />
                </button>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* LIGHTBOX */}
      {lightbox.open && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.alt}
          onClick={closeLightbox}
        >
          <div
            className="lightbox-inner"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="lightbox-close"
              onClick={closeLightbox}
              aria-label="Chiudi"
            >
              ×
            </button>
            <img src={lightbox.src} alt={lightbox.alt} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

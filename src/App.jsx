import { useEffect, useState } from "react";
import "./App.css";
import neowbLogo from "./assets/neowb-logo-transparent.png";

const projects = [
  {
    title: "Swingfall",
    type: "Personal Game Project",
    description:
      "A 2D action platformer focused on physics-based web-swinging. The development is still ongoing and the completion is still unknown.",
    tools: ["Unity", "Visual Studio", "Spine", "Adobe Photoshop"],
    link: "https://neowb.itch.io/swingfall",
    image: "/swingfall-image.jpg",
  },
  {
    title: "Angler’s Journey",
    type: "OJT Game Project",
    description:
      "A game project developed during OJT, featuring different maps that you can unlock by collecting specific rare fishes.",
    tools: ["Unity", "Visual Studio", "Blender", "Adobe Photoshop"],
    link: "https://neowb.itch.io/anglers-journey",
    image: "/anglers-journey-image.png",
  },
  {
    title: "Take Me To Elysium",
    type: "Capstone Game Project",
    description:
      "A capstone game project set in a Greek timeline where you complete all of the levels and face the boss to save the city.",
    tools: ["Unity", "Visual Studio Code", "Aseprite", "Adobe Photoshop"],
    link: "https://neowb.itch.io/take-me-to-elysium",
    image: "/take-me-to-elysium-image.png",
  },
  {
    title: "Cattu Shooter",
    type: "Personal Game Project",
    description:
      "A personal game project focused on shooter mechanics, similar to Chicken Invaders. It is an endless shooting game where you accumulate points as you destroy meteors.",
    tools: ["Unity", "Visual Studio Code", "Photoshop"],
    link: "https://neowb.itch.io/cattu-shooter",
    image: "/cattu-shooter-image.jpg",
  },
];

const skills = [
  "C#",
  "Java",
  "Python",
  "Unreal Engine",
  "Unity Engine",
  "Aseprite",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Adobe Premiere Pro",
  "Audacity",
  "Spine 2D",
  "Git",
];

const artworks = [
  {
    title: "Digital Art and Compositions",
    image: "/digital-art-and-composition-image.jpg",
    link: "https://www.artstation.com/neowb_illustrations",
  },
  {
    title: "Digital Designs",
    image: "/digital-designs-image.webp",
    link: "https://www.behance.net/neowbillustrations",
  },
  {
    title: "Game Creations",
    image: "/game-creations-image.png",
    link: "https://neowb.itch.io",
  },
];

function ScrambleText() {
  const phrases = [
    "games.",
    "systems.",
    "visual experiences.",
    "creative projects.",
  ];

  const characters = "!<>-_\\/[]{}—=+*^?#________";
  const [text, setText] = useState(phrases[0]);

  useEffect(() => {
    let phraseIndex = 0;
    let frame = 0;
    let scrambleInterval = null;
    let loopTimeout = null;

    const clearTimers = () => {
      if (scrambleInterval) clearInterval(scrambleInterval);
      if (loopTimeout) clearTimeout(loopTimeout);
      scrambleInterval = null;
      loopTimeout = null;
    };

    const scrambleToNextPhrase = () => {
      clearTimers();

      const nextPhrase = phrases[(phraseIndex + 1) % phrases.length];
      const maxLength = nextPhrase.length;
      frame = 0;

      scrambleInterval = setInterval(() => {
        let output = "";

        for (let i = 0; i < maxLength; i++) {
          if (i < frame) {
            output += nextPhrase[i] || "";
          } else {
            output += characters[Math.floor(Math.random() * characters.length)];
          }
        }

        setText(output);
        frame++;

        if (frame > maxLength) {
          clearInterval(scrambleInterval);
          scrambleInterval = null;

          phraseIndex = (phraseIndex + 1) % phrases.length;
          setText(nextPhrase);

          loopTimeout = setTimeout(scrambleToNextPhrase, 2200);
        }
      }, 45);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        clearTimers();
      } else {
        setText(phrases[phraseIndex]);
        loopTimeout = setTimeout(scrambleToNextPhrase, 800);
      }
    };

    loopTimeout = setTimeout(scrambleToNextPhrase, 2200);

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      clearTimers();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <p className="tagline scramble-text">
      <span className="fixed-text">I build </span>
      <span className="changing-text">{text}</span>
      <span className="cursor">|</span>
    </p>
  );
}

function App() {
  return (
    <main className="site">
      <div className="animated-background">
        <span className="orb orb-1"></span>
        <span className="orb orb-2"></span>
        <span className="orb orb-3"></span>
      </div>
      <nav className="navbar">
        <div className="logo">
          <img src={neowbLogo} alt="Stephen John Gavaran Logo" />
        </div>
        <div className="nav-links">
          <a href="#skills" aria-label="Skills" title="Skills">
            <i className="fi fi-sr-laptop-code nav-icon" aria-hidden="true"></i>
            <span className="sr-only">Skills</span>
          </a>
          <a href="#portfolio" aria-label="Portfolio" title="Portfolio">
            <i className="fi fi-sr-palette nav-icon" aria-hidden="true"></i>
            <span className="sr-only">Portfolio</span>
          </a>
          <a href="#about" aria-label="About" title="About">
            <i className="fi fi-sr-user nav-icon" aria-hidden="true"></i>
            <span className="sr-only">About</span>
          </a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">Game Programmer & Digital Artist</p>

          <h1>Stephen John Gavaran</h1>

          <ScrambleText />

          <p className="hero-description">
            Game Developer | Artist | VFX Artist
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary">
              View My Work
            </a>
            <a href="#contact" className="btn secondary">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="preview-window">
            <div className="window-bar">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="preview-content">
              <p>Featured Project</p>
              <h2>SWINGFALL</h2>
              <p>Web-Swinging • Enemy AI • Unity</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="section-heading">
          <p className="eyebrow">Featured Work</p>
          <h2>Game Development Projects</h2>
          <p>
            A selection of my game projects, systems, mechanics, and technical
            work.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project) => {
            const ProjectCard = project.link ? "a" : "article";

            return (
              <ProjectCard
                className={`project-card${project.link ? " linked-card" : ""}`}
                href={project.link}
                target={project.link ? "_blank" : undefined}
                rel={project.link ? "noreferrer" : undefined}
                key={project.title}
                aria-label={
                  project.link ? `Open ${project.title} on itch.io` : undefined
                }
              >
                <div
                  className={`project-image${project.image ? " has-image" : ""}`}
                  style={
                    project.image
                      ? { "--project-image": `url(${project.image})` }
                      : undefined
                  }
                >
                  <span>{project.title}</span>
                </div>

                <div className="project-body">
                  <p className="project-type">{project.type}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <p className="tools-heading">Tools used:</p>
                  <div className="tool-list">
                    {project.tools.map((tool) => (
                      <span key={tool}>{tool}</span>
                    ))}
                  </div>
                </div>
              </ProjectCard>
            );
          })}
        </div>
      </section>

      <section className="section" id="skills">
        <div className="section-heading">
          <p className="eyebrow">What I Do</p>
          <h2>Skills</h2>
          <p>
            I combine programming and visual design to create complete game
            experiences.
          </p>
        </div>

        <div className="skill-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill}>
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="portfolio">
        <div className="section-heading">
          <p className="eyebrow">Creative Work</p>
          <h2>Portfolio</h2>
          <p>
            Digital art, visual design, logo work, branding, and creative
            works.
          </p>
        </div>

        <div className="art-grid">
          {artworks.map((art) => (
            <div
              className={`art-card${art.image ? " has-image" : ""}`}
              key={art.title}
              style={
                art.image
                  ? { "--portfolio-image": `url(${art.image})` }
                  : undefined
              }
            >
              <span>{art.title}</span>
              <a
                href={art.link || "https://github.com/Neowb-is-here"}
                target="_blank"
                rel="noreferrer"
                className="portfolio-card-link"
                aria-label={`View more ${art.title}`}
              >
                View More
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <div>
          <p className="eyebrow">About Me</p>
          <h2>Game Programmer. Digital Artist. System Builder.</h2>
        </div>

        <p>
          Hi, I’m Stephen John Gavaran, a game programmer and digital artist. I
          specialize in Unity game development, gameplay systems, enemy AI, UI
          implementation, and creative visual design. My work combines technical
          systems with visual creativity to build engaging interactive
          experiences.
        </p>
      </section>

      <section className="contact-section" id="contact">
        <p className="eyebrow">Contact</p>
        <h2>Let’s build something creative.</h2>
        <p>
          Interested in working together or viewing more of my projects? Reach
          out through email, GitHub, or LinkedIn.
        </p>

        <div className="contact-links icon-links">
          <a
            href="mailto:stephenjohngavaran22@gmail.com"
            aria-label="Email"
            title="Email"
          >
            <i className="fi fi-sr-envelope"></i>
          </a>

          <a
            href="https://github.com/Neowb-is-here"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <i className="fi fi-brands-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/stephen-john-gavaran-9342681b0/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <i className="fi fi-brands-linkedin"></i>
          </a>
        </div>
      </section>
    </main>
  );
}

export default App;

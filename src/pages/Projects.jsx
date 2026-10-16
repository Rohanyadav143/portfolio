import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import P1 from "../assets/images/projects-image/Project9.webp";
import P2 from "../assets/images/projects-image/Project8.webp";
import P3 from "../assets/images/projects-image/Project7.webp";
import P4 from "../assets/images/projects-image/Project6.webp";
import P5 from "../assets/images/projects-image/Project5.webp";
import P6 from "../assets/images/projects-image/Project4.webp";
import P7 from "../assets/images/projects-image/Project3.webp";
import P8 from "../assets/images/projects-image/Project2.webp";
import P9 from "../assets/images/projects-image/Project1.webp";
import P10 from "../assets/images/projects-image/Project10.png";
import PageHeading from "../components/PageHeading";
import Reveal from "../components/Reveal";

const projects = [
  {
    title: "Task-List",
    year: "2026",
    tech: "React, Node, Context API",
    image: P10,
    deployed: "https://task-list-green-gamma.vercel.app/",
    source: "https://github.com/Rohanyadav143/Task-List",
  },
  {
    title: "Velora",
    year: "2025",
    tech: "React, Node, Express, MongoDB",
    image: P1,
    deployed: "https://velora-client-ten.vercel.app/",
    source: "https://github.com/Rohanyadav143/Velora",
  },
  {
    title: "SentraVA",
    year: "2025",
    tech: "MERN Stack + APIs",
    image: P2,
    deployed: "https://sentrava.onrender.com/",
    source: "https://github.com/Rohanyadav143/SentraVA",
  },
  {
    title: "Type Improver",
    year: "2025",
    tech: "React + JS",
    image: P3,
    deployed: "https://rohanyadav143.github.io/type-Improver/",
    source: "https://github.com/Rohanyadav143/type-Improver",
  },
  {
    title: "Weather App",
    year: "2025",
    tech: "React + API",
    image: P4,
    deployed: "https://rohanyadav143.github.io/weather-app/",
    source: "https://github.com/Rohanyadav143/weather-app",
  },
  {
    title: "Calculator",
    year: "2024",
    tech: "HTML, CSS, JS",
    image: P5,
    deployed: "https://rohanyadav143.github.io/Basic-Calculator/",
    source: "https://github.com/Rohanyadav143/Basic-Calculator",
  },
  {
    title: "Type Master",
    year: "2024",
    tech: "HTML, CSS, JS",
    image: P6,
    deployed: "https://rohanyadav143.github.io/Typing-Master/",
    source: "https://github.com/Rohanyadav143/Typing-Master",
  },
  {
    title: "Attendance Manager",
    year: "2024",
    tech: "Java + JDBC + MySQL",
    image: P7,
    deployed: "#",
    source: "https://github.com/Rohanyadav143/Attendance.git",
  },
  {
    title: "Move Forward",
    year: "2023",
    tech: "HTML, CSS, JS",
    image: P8,
    deployed: "https://rohanyadav143.github.io/Move-Forward-/",
    source: "https://github.com/Rohanyadav143/Move-Forward-",
  },
  {
    title: "Tic Tac Toe",
    year: "2023",
    tech: "HTML, CSS, JS",
    image: P9,
    deployed: "https://rohanyadav143.github.io/Tic-Tac-Toe-Game/",
    source: "https://github.com/Rohanyadav143/Tic-Tac-Toe-Game",
  },
];

export default function Projects() {
  return (
    <section className="page-shell projects-page">
      <PageHeading
        eyebrow="Selected work"
        title="Projects built to solve."
        description="A selection of projects built with the tools and technologies I work with. Explore a live version or browse the source."
      />

      <div className="project-grid">
        {projects.map((project, index) => (
          <Reveal
            key={`${project.title}-${project.year}`}
            as="article"
            className={`project-card${index % 2 === 1 ? " project-card--reversed" : ""}`}
          >
            <div className="project-preview">
              <img
                src={project.image}
                alt={`${project.title} project preview`}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="project-content">
              <div className="project-meta">
                <span>PROJECT / {String(index + 1).padStart(2, "0")}</span>
                <span>{project.year}</span>
              </div>
              <h2>{project.title}</h2>
              <p className="project-tech">{project.tech}</p>
              <div className="project-actions">
                {project.deployed !== "#" && (
                  <a
                    className="project-action-link project-action-link--primary"
                    href={project.deployed}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title} live demo`}
                  >
                    Live demo <FaArrowUpRightFromSquare aria-hidden="true" />
                  </a>
                )}
                <a
                  className="project-action-link"
                  href={project.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} source code on GitHub`}
                >
                  <FaGithub aria-hidden="true" /> Source
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

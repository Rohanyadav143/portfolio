import java from "../assets/images/skill-Image/java.webp";
import c from "../assets/images/skill-Image/C.webp";
import html from "../assets/images/skill-Image/HTML.webp";
import css from "../assets/images/skill-Image/CSS.webp";
import js from "../assets/images/skill-Image/JS.webp";
import react from "../assets/images/skill-Image/React.webp";
import bootstrap from "../assets/images/skill-Image/Bootstrap.webp";
import tailwind from "../assets/images/skill-Image/Tailwind.webp";
import node from "../assets/images/skill-Image/Node.webp";
import express from "../assets/images/skill-Image/Express.webp";
import mySql from "../assets/images/skill-Image/MySQL.webp";
import mongoDb from "../assets/images/skill-Image/MongoDB.webp";
import aws from "../assets/images/skill-Image/AWS.webp";
import kub from "../assets/images/skill-Image/Kubernetes.webp";
import docker from "../assets/images/skill-Image/Docker.webp";
import git from "../assets/images/skill-Image/Git.webp";
import gitHub from "../assets/images/skill-Image/GitHub.webp";
import vsCode from "../assets/images/skill-Image/VsCode.webp";
import intellij from "../assets/images/skill-Image/Intellij.webp";
import eclipse from "../assets/images/skill-Image/Eclipse.webp";
import PageHeading from "../components/PageHeading";
import Reveal from "../components/Reveal";

const skillsData = [
  {
    category: "💻 Programming Languages",
    skills: [
      { name: "Java", src: java },
      { name: "C", src: c },
    ],
  },
  {
    category: "🎨 Frontend",
    skills: [
      { name: "HTML", src: html },
      { name: "CSS", src: css },
      { name: "JavaScript", src: js },
      { name: "React", src: react },
      { name: "Bootstrap", src: bootstrap },
      { name: "Tailwind", src: tailwind },
    ],
  },
  {
    category: "⚙️ Backend & APIs",
    skills: [
      { name: "Node.js", src: node },
      { name: "Express", src: express },
      { name: "MySQL", src: mySql },
      { name: "MongoDB", src: mongoDb },
    ],
  },
  {
    category: "☁️ DevOps & Cloud",
    skills: [
      { name: "Kubernetes", src: kub },
      { name: "AWS", src: aws },
      { name: "Docker", src: docker },
    ],
  },
  {
    category: "🧰 Tools",
    skills: [
      { name: "Git", src: git },
      { name: "GitHub", src: gitHub },
      { name: "VS Code", src: vsCode },
      { name: "Eclipse", src: eclipse },
      { name: "IntelliJ IDEA", src: intellij },
    ],
  },
];

export default function Skills() {
  return (
    <section className="page-shell">
      <PageHeading
        eyebrow="What I work with"
        title="Tools of the trade."
        description="Languages, frameworks, platforms, and tools represented in my current skill set."
      />

      <div className="skills-groups">
        {skillsData.map((category) => (
          <Reveal key={category.category} className="surface-card skill-category">
            <h2>{category.category}</h2>
            <div className="skills-grid">
              {category.skills.map((skill) => (
                <div className="skill-item" key={skill.name} title={skill.name}>
                  <img src={skill.src} alt="" loading="lazy" decoding="async" />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

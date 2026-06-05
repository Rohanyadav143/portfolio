import { useMemo } from "react";
import { useTheme } from "../context/ThemeContext";

// Images
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

export default function Skills() {
  const { darkMode } = useTheme();

  const skillsData = useMemo(
    () => [
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
    ],
    [],
  );

  return (
    <section
      aria-label="Skills Section"
      className="min-h-screen py-12 px-5"
      style={{
        background: darkMode ? "#000814" : "#f3f4f6",
        color: darkMode ? "#e5e7eb" : "#111827",
      }}
    >
      {/* SEO FRIENDLY HEADER */}
      <header className="max-w-[1200px] mx-auto mb-10">
        <h1 className="text-2xl font-bold border-l-4 border-purple-600 text-purple-500 pl-3">
          Technical Skills
        </h1>
        <p className="text-sm opacity-70 mt-2 hidden">
          Programming, Frontend, Backend, DevOps and Tools
        </p>
      </header>

      <div className="max-w-[1200px] mx-auto space-y-10">
        {skillsData.map((cat) => (
          <div
            key={cat.category}
            className="rounded-xl p-6 border border-white/10 transition hover:-translate-y-1"
            style={{
              background: darkMode ? "#0f172a" : "#ffffff",
              boxShadow: darkMode
                ? "0 0 20px rgba(0,255,255,0.06)"
                : "0 2px 10px rgba(0,0,0,0.06)",
            }}
          >
            {/* CATEGORY TITLE */}
            <h2 className="text-blue-600 font-semibold text-lg mb-6">
              {cat.category}
            </h2>

            {/* SKILLS GRID */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 place-items-center">
              {cat.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center group"
                  title={skill.name}
                  aria-label={skill.name}
                >
                  <img
                    src={skill.src}
                    alt={skill.name}
                    loading="lazy"
                    decoding="async"
                    className="
                      w-20 h-20 md:w-24 md:h-24
                      object-contain
                      transition-all duration-300
                      group-hover:scale-110
                      group-hover:drop-shadow-lg
                      dark:brightness-125 dark:contrast-125
                    "
                    style={{
                      filter: darkMode
                        ? "brightness(1.2) contrast(1.2)"
                        : "brightness(1)",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import { useMemo } from "react";
import { useTheme } from "../context/ThemeContext";

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

export default function Projects() {
  const { darkMode } = useTheme();

  const projects = useMemo(
    () => [
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
    ],
    [],
  );

  return (
    <section
      className="min-h-screen py-10 transition-all duration-300"
      style={{
        background: darkMode ? "#00091a" : "#e7eaee",
        color: darkMode ? "#d6dae1" : "#1f2937",
      }}
    >
      <div className="max-w-[210mm] mx-auto px-4">
        {/* HEADING */}
        <h2 className="border-l-4 border-orange-400 pl-3 mb-8 font-bold text-orange-400">
          Projects
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((proj) => (
            <div
              key={`${proj.title}-${proj.year}`}
              className="rounded-xl overflow-hidden border transition duration-300 hover:-translate-y-1"
              style={{
                background: darkMode ? "#0f172a" : "#ffffff",
                borderColor: darkMode ? "#334155" : "#cbd5e1",
              }}
            >
              {/* IMAGE */}
              <img
                src={proj.image}
                alt={proj.title}
                loading="lazy"
                className="w-full h-35 object-cover"
              />

              <div className="p-5">
                <h3 className="font-bold text-lg text-yellow-400">
                  {proj.title}
                </h3>

                <p className="text-sm mt-1">Year: {proj.year}</p>
                <p className="text-sm">Tech: {proj.tech}</p>

                {/* BUTTONS */}
                <div className="flex gap-2 mt-4 flex-wrap">
                  <a
                    href={proj.deployed}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1 text-sm rounded bg-cyan-500 text-black hover:bg-yellow-400 transition"
                  >
                    Live
                  </a>

                  <a
                    href={proj.source}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1 text-sm rounded bg-gray-700 text-white hover:bg-yellow-400 hover:text-black transition"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

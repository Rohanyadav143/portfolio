import { useMemo } from "react";
import { useTheme } from "../context/ThemeContext";

import RRImage from "../assets/images/RR.webp";
import PGSSImage from "../assets/images/PGSS.webp";

export default function Education() {
  const { darkMode } = useTheme();

  const educationData = useMemo(
    () => [
      {
        title: "B.Tech in Computer Science",
        institute: "R.R. Group Of Institution",
        duration: "August 2022 - June 2026",
        percentage: "82%",
        img: RRImage,
        website: "https://rrimt.ac.in/",
      },
      {
        title: "Intermediate",
        institute: "P.G. Senior Secondary School",
        duration: "March 2021 - April 2022",
        percentage: "63.67%",
        img: PGSSImage,
        website: "https://pgssschool.in/",
      },
      {
        title: "High School",
        institute: "P.G. Senior Secondary School",
        duration: "March 2019 - April 2020",
        percentage: "75.67%",
        img: PGSSImage,
        website: "https://pgssschool.in/",
      },
    ],
    [],
  );

  const achievements = useMemo(
    () => [
      "Solved 800+ coding problems on LeetCode, HackerRank, GeeksforGeeks.",
      "Ranked 195/30,880 in national coding contest.",
      "Ranked 427/36,305 in LeetCode Weekly Contest.",
      "Participated in hackathons and workshops.",
      "Built 7+ full-stack projects.",
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
        <h6 className="font-bold text-orange-400 border-l-4 border-orange-400 pl-3 mb-6">
          Education
        </h6>

        {/* EDUCATION CARDS */}
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
          {educationData.map((edu) => (
            <div
              key={edu.title}
              className="w-full rounded-xl overflow-hidden border border-black/20
                         shadow-md hover:shadow-xl hover:-translate-y-2
                         transition duration-300"
              style={{
                background: darkMode ? "#0f172a" : "#ffffff",
              }}
            >
              {/* IMAGE (bigger) */}
              <img
                src={edu.img}
                alt={edu.institute}
                className="w-full h-56 object-cover"
              />

              {/* CONTENT (bigger padding) */}
              <div className="p-6">
                <h6 className="font-semibold underline text-base md:text-lg">
                  {edu.title}
                </h6>

                <h5 className="text-purple-400 font-bold mt-2 text-lg">
                  {edu.institute}
                </h5>

                <p className="text-sm mt-2">Duration: {edu.duration}</p>

                <p className="text-sm mt-1">
                  Percentage:{" "}
                  <span className="font-semibold">{edu.percentage}</span>
                </p>

                <a
                  href={edu.website}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-5 px-5 py-2 rounded-md
                             bg-blue-600 hover:bg-blue-700 text-white text-sm"
                >
                  Visit Website
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ACHIEVEMENTS */}
        <h6 className="font-bold text-orange-400 border-l-4 border-orange-400 pl-3 mt-12 mb-6">
          Key Achievements
        </h6>

        <ul className="space-y-4">
          {achievements.map((ach) => (
            <li
              key={ach}
              className="p-4 rounded-lg border border-black/20 hover:scale-[1.01] transition"
              style={{
                background: darkMode
                  ? "linear-gradient(135deg,#1b1f2a,#0f172a)"
                  : "#ffffff",
              }}
            >
              {ach}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

import React from "react";

import P1 from "../assets/projects/Project9.png"; // Velora
import P2 from "../assets/projects/Project8.png"; // SentraVA
import P3 from "../assets/projects/Project7.png"; // Type - Improver
import P4 from "../assets/projects/Project6.png"; // Weather - App
import P5 from "../assets/projects/Project5.png"; // Basic - Calculator
import P6 from "../assets/projects/Project4.png"; // Type - Master
import P7 from "../assets/projects/Project3.png"; // Attendance - Manager
import P8 from "../assets/projects/Project2.png"; // Move - Forward
import P9 from "../assets/projects/Project1.png"; // TIC - TAC - TOE

export default function Projects() {
  const projects = [
    {
      title: "Velora",
      year: "November 2025",
      tech: "React.js, Node.js, Express.js, MongoDB, JavaScript, CSS, Bootstrap",
      image: P1,
      deployed: "https://velora-client-ten.vercel.app/",
      source: "https://github.com/Rohanyadav143/Velora",
    },
    {
      title: "SentraVA",
      year: "September 2025",
      tech: "React.js, Node.js, Express.js, MongoDB, JavaScript, CSS, Bootstrap, APIs",
      image: P2,
      deployed: "https://sentrava.onrender.com/",
      source: "https://github.com/Rohanyadav143/SentraVA",
    },
    {
      title: "Type - Improver",
      year: "January 2025",
      tech: "HTML, CSS, JavaScript, Bootstrap, React.js, APIs",
      image: P3,
      deployed: "https://rohanyadav143.github.io/type-Improver/",
      source: "https://github.com/Rohanyadav143/type-Improver",
    },
    {
      title: "Weather - App",
      year: "January 2025",
      tech: "HTML, CSS, JavaScript, Bootstrap, React.js, API",
      image: P4,
      deployed: "https://rohanyadav143.github.io/weather-app/",
      source: "https://github.com/Rohanyadav143/weather-app",
    },
    {
      title: "Basic - Calculator",
      year: "October 2024",
      tech: "HTML, CSS, JavaScript, Bootstrap, React.js",
      image: P5,
      deployed: "https://rohanyadav143.github.io/Basic-Calculator/",
      source: "https://github.com/Rohanyadav143/Basic-Calculator.git",
    },
    {
      title: "Type - Master",
      year: "May 2024",
      tech: "HTML, CSS, JavaScript, Bootstrap",
      image: P6,
      deployed: "https://rohanyadav143.github.io/Typing-Master/",
      source: "https://github.com/Rohanyadav143/Typing-Master.git",
    },
    {
      title: "Attendance - Manager",
      year: "January 2024",
      tech: "Java, JDBC, MySQL",
      image: P7,
      deployed: "https://www.linkedin.com/posts/rohan-yadav-20b064255_java-jdbc-sql-activity-7299331709852913664-E9o8",
      source: "https://github.com/Rohanyadav143/Attendance.git",
    },
    {
      title: "Move - Forward",
      year: "September 2023",
      tech: "HTML, CSS, JavaScript",
      image: P8,
      deployed: "https://rohanyadav143.github.io/Move-Forward-/",
      source: "https://github.com/Rohanyadav143/Move-Forward-",
    },
    {
      title: "TIC - TAC - TOE",
      year: "June 2023",
      tech: "HTML, CSS, JavaScript",
      image: P9,
      deployed: "https://rohanyadav143.github.io/Tic-Tac-Toe-Game/",
      source: "https://github.com/Rohanyadav143/Tic-Tac-Toe-Game",
    },
  ];

  return (
    <section className="bg-[#00091a] text-white min-h-screen pb-6">
      <h6 className="ml-[8%] mt-2 font-bold text-orange-400">Projects ---------</h6>
      <div className="max-w-6xl mx-auto px-0 mt-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((proj, i) => (
          <div
            key={i}
            className="bg-[#160000] p-4 rounded-1xl flex flex-col justify-start items-start transition-transform duration-300 hover:bg-gray-900"
          >
            <img
              src={proj.image}
              alt={proj.title}
              className="w-full h-44 rounded-lg mb-4 object-cover"
            />
            <h6 className="underline font-semibold text-lg pt-4 mb-2 transition-colors duration-300 hover:text-yellow-400">
              {proj.title}
            </h6>
            <h6 className="text-md mb-2">
              Project Year: <b>{proj.year}</b>
            </h6>
            <h6 className="text-md">Technology Used: <b>{proj.tech}</b></h6>

            <div className="mt-4 flex gap-2">
              <a
                href={proj.deployed}
                target="_blank"
                rel="noreferrer"
                className="bg-cyan-500 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded transition-colors duration-300 text-sm"
              >
                View Deployment
              </a>
              <a
                href={proj.source}
                target="_blank"
                rel="noreferrer"
                className="bg-cyan-500 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded transition-colors duration-300 text-sm"
              >
                View Source
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import React from "react";
import RRImage from "../assets/images/RR.jpeg";
import PGSSImage from "../assets/images/PGSS.jpeg";

export default function Education() {
  const educationData = [
    {
      title: "B.Tech in Computer Science and Engineering",
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
  ];

  const achievements = [
    "Solved 800+ coding problems on platforms like LeetCode, HackerRank, GeeksforGeeks.",
    "Ranked 195/30,880 in national-level Sarkari Naukri Coding Contest.",
    "Ranked 427/36,305 in a LeetCode Weekly Contest.",
    "Participated in competitive hackathons and workshops, enhancing problem-solving and collaborative skills.",
    "Designed and deployed 7+ personal projects showcasing full-stack development skills.",
  ];

  return (
    <section className="bg-[#00091a] text-white min-h-screen pb-16">
      {/* Page Heading */}
      <h6 className="ml-[5%] mt-0 font-bold text-orange-400">Education ---------</h6>

      {/* Education Cards */}
      <div className="max-w-6xl mx-auto px-6 mt-4 grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        {educationData.map((edu, i) => (
          <div
            key={i}
            className="bg-[#160000] rounded-xl p-4 flex flex-col items-start transition-transform duration-300 hover:scale-105 hover:bg-gray-800"
          >
            <img
              src={edu.img}
              alt={edu.institute}
              className="w-full h-48 object-cover rounded-md mb-3"
            />
            <h6 className="underline">{edu.title}</h6>
            <h5 className="text-purple-500 font-bold mt-1">{edu.institute}</h5>
            <h6>{edu.duration}</h6>
            <h6>Percentage : {edu.percentage}</h6>
            <a
              href={edu.website}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition-colors"
            >
              Visit Website
            </a>
          </div>
        ))}
      </div>

      {/* Achievements */}
      <h6 className="ml-[5%] mt-12 font-bold text-orange-400">Key Achievements ---------</h6>
      <ul className="max-w-6xl mx-auto px-6 mt-4 space-y-4">
        {achievements.map((ach, i) => (
          <li
            key={i}
            className="bg-gradient-to-r from-gray-400 to-purple-700 rounded-lg p-4 transition-transform duration-300 hover:scale-102 hover:bg-blue-900"
          >
            {ach}
          </li>
        ))}
      </ul>
    </section>
  );
}

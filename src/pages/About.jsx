import { useMemo, useEffect, useState } from "react";
import {
  FaBirthdayCake,
  FaCity,
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaCode,
  FaDatabase,
  FaLaptopCode,
  FaBrain,
  FaDesktop,
} from "react-icons/fa";
import aboutImg from "../assets/images/Hero.webp";
import { useTheme } from "../context/ThemeContext";

export default function About() {
  const { darkMode } = useTheme();

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const interests = useMemo(
    () => [
      { name: "Software Development", icon: <FaGlobe /> },
      { name: "Full-Stack Development", icon: <FaLaptopCode /> },
      { name: "Algorithms", icon: <FaBrain /> },
      { name: "Database Management", icon: <FaDatabase /> },
      { name: "Competitive Programming", icon: <FaCode /> },
      { name: "Computer Vision", icon: <FaDesktop /> },
    ],
    [],
  );

  return (
    <section
      className={`py-10 min-h-screen transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{
        background: darkMode ? "#00091a" : "#e7eaee",
        color: darkMode ? "#d6dae1" : "#1f2937",
      }}
    >
      <div className="max-w-[210mm] mx-auto px-4">
        {/* ABOUT HEADING */}
        <h6 className="font-bold text-orange-400 mb-6 border-l-4 border-orange-400 pl-3">
          About Me
        </h6>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT */}
          <div className="transition-all duration-700 delay-100">
            <p className="mb-3 leading-relaxed">
              Hi, I’m{" "}
              <span className="text-indigo-400 font-semibold">Rohan Yadav</span>
              , a Computer Science Engineering student and Full-Stack MERN
              Developer.
            </p>

            <p className="mb-3 leading-relaxed">
              I build dynamic and responsive web applications using MERN
              Technology. I also have strong coding skills in Java and Data
              Structures & Algorithms.
            </p>

            <p className="mb-6 leading-relaxed">
              I have solved 800+ coding problems across LeetCode, GFG, and
              HackerRank.
            </p>

            {/* PERSONAL INFO */}
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <FaBirthdayCake className="text-orange-400" />
                DOB: 20 October 2004
              </div>

              <div className="flex items-center gap-2">
                <FaCity className="text-orange-400" />
                Lucknow, U.P
              </div>

              <div className="flex items-center gap-2">
                <FaPhone className="text-orange-400" />
                +91-8423712322
              </div>

              <div className="flex items-center gap-2">
                <FaEnvelope className="text-orange-400" />
                rohn1895@gmail.com
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center transition-all duration-700 delay-200">
            <div className="relative group">
              <img
                src={aboutImg}
                alt="About Rohan Yadav Developer"
                loading="lazy"
                className="w-[260px] sm:w-[300px] md:w-[340px] rounded-xl shadow-lg border border-black/20
                transition duration-500"
              />

              {/* OPEN TO WORK BADGE (ANIMATED) */}
              <div
                className="absolute bottom-3 right-3 px-3 py-1 text-[11px] font-semibold rounded-full"
                style={{
                  background: "#064e3b",
                  color: "#d1fae5",
                  border: "1px solid #10b981",
                  boxShadow: "0 0 12px rgba(16,185,129,0.5)",
                  animation: "pulse 2s infinite",
                }}
              >
                🟢 Open to Work
              </div>
            </div>
          </div>
        </div>

        {/* INTEREST HEADING */}
        <h6 className="font-bold text-orange-400 mt-14 mb-6 border-l-4 border-orange-400 pl-3">
          Interests
        </h6>

        {/* INTEREST GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {interests.map((item, index) => (
            <div
              key={item.name}
              className="rounded-xl border border-black/20 p-6 text-center
              transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              style={{
                background: darkMode
                  ? "linear-gradient(135deg,#1b1f2a,#0f172a)"
                  : "#ffffff",
                animation: `fadeUp 0.6s ease ${index * 0.1}s both`,
              }}
            >
              <div className="text-2xl text-cyan-400 mb-3 flex justify-center">
                {item.icon}
              </div>

              <h5 className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-green-400">
                {item.name}
              </h5>
            </div>
          ))}
        </div>
      </div>

      {/* ANIMATIONS */}
      <style>
        {`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes pulse {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.08); opacity: 0.7; }
            100% { transform: scale(1); opacity: 1; }
          }
        `}
      </style>
    </section>
  );
}

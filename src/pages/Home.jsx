import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaLink, FaBook } from "react-icons/fa";
import heroImg from "../assets/images/Hero.webp";
import { useTheme } from "../context/ThemeContext";

const words = [
  "Dedicated",
  "Focused",
  "Adaptive",
  "Creative",
  "Curious",
  "Coder",
  "Software Developer",
  "Full-Stack Developer",
];

export default function Home() {
  const { darkMode } = useTheme();

  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");

  const charIndexRef = useRef(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const currentWord = words[wordIndex];

    // reset properly for each word
    setText("");
    charIndexRef.current = 0;

    const type = () => {
      if (charIndexRef.current < currentWord.length) {
        const nextIndex = charIndexRef.current + 1;

        setText(currentWord.slice(0, nextIndex)); // ✅ FIX (no skip issue)

        charIndexRef.current = nextIndex;

        timeoutRef.current = setTimeout(type, 90);
      } else {
        timeoutRef.current = setTimeout(() => {
          setWordIndex((prev) => (prev + 1) % words.length);
        }, 800);
      }
    };

    timeoutRef.current = setTimeout(type, 100);

    return () => clearTimeout(timeoutRef.current);
  }, [wordIndex]);

  return (
    <section
      style={{
        background: darkMode ? "#000814" : "#e7eaee",
        color: darkMode ? "#e5e7eb" : "#1f2937",
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        padding: "40px 16px",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "auto", width: "100%" }}>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* IMAGE */}
          <div className="relative">
            <img
              src={heroImg}
              alt="Rohan Yadav Full Stack Developer"
              style={{
                width: "280px",
                borderRadius: "16px",
                border: "2px solid #a855f7",
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
              }}
            />

            <span
              className="absolute top-2 right-2 px-3 py-1 text-xs font-bold rounded-full"
              style={{
                background: "#22c55e",
                color: "black",
                animation: "pulse 1.5s infinite",
              }}
            >
              🟢 Open to Work
            </span>
          </div>

          {/* CONTENT */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-extrabold">
              <span style={{ color: "#22d3ee" }}>Rohan</span>{" "}
              <span style={{ color: "#facc15" }}>Yadav</span>
            </h1>

            <h3 className="mt-4 text-2xl">
              I'm{" "}
              <span style={{ color: "#22c55e", textDecoration: "underline" }}>
                {text}
              </span>
            </h3>

            {/* SOCIAL */}
            <div className="flex gap-6 mt-6 text-2xl justify-center lg:justify-start">
              <a
                href="https://github.com/Rohanyadav143"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/rohan-yadav-20b064255/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://leetcode.com/u/rohn1895/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLink />
              </a>
            </div>

            {/* BUTTONS */}
            <div className="flex gap-5 mt-7 justify-center lg:justify-start flex-wrap">
              <a
                href="#"
                target="_blank"
                className="px-5 py-2 border border-yellow-400 rounded-md
                hover:bg-yellow-400 hover:text-black transition"
              >
                Resume
              </a>

              <Link
                to="/contact"
                className="px-5 py-2 border border-green-400 rounded-md
                hover:bg-green-400 hover:text-black transition"
              >
                Hire Me
              </Link>
            </div>
          </div>
        </div>

        {/* FLOAT BUTTON */}
        <a
          href="https://www.notion.so"
          target="_blank"
          className="fixed bottom-5 right-5 w-12 h-12 flex items-center justify-center
          rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 text-black"
        >
          <FaBook />
        </a>
      </div>

      {/* ANIMATION */}
      <style>
        {`
          @keyframes pulse {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.1); opacity: 0.7; }
            100% { transform: scale(1); opacity: 1; }
          }
        `}
      </style>
    </section>
  );
}

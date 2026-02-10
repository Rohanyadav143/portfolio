import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // ✅ Import Link for internal routing
import { FaGithub, FaLinkedin, FaLink, FaBook } from "react-icons/fa";
import heroImg from "../assets/images/hero.jpeg";

const words = [
  "Dedicated",
  "Focused",
  "Adaptive",
  "Creative",
  "Curious",
  "Student",
  "Coder",
  "Full-Stack Developer",
];

export default function Home() {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (charIndex < words[wordIndex].length) {
        setText((prev) => prev + words[wordIndex][charIndex]);
        setCharIndex(charIndex + 1);
      } else {
        // Wait before switching to next word
        setTimeout(() => {
          setText("");
          setCharIndex(0);
          setWordIndex((wordIndex + 1) % words.length);
        }, 900);
      }
    }, 120);

    return () => clearTimeout(timeout);
  }, [charIndex, wordIndex]);

  return (
    <section className="bg-[#00091a] text-white px-0 pt-16 pb-2">
      <div className="max-w-6xl mx-auto">
        {/* MAIN FLEX */}
        <div className="flex flex-col lg:flex-row items-center gap-1 -translate-y-6">
          {/* IMAGE */}
          <div className="flex justify-center lg:justify-start w-full lg:w-1/2">
            <img
              src={heroImg}
              alt="Rohan Yadav"
              className="
                w-[280px] sm:w-[320px] md:w-[350px]
                border-[3px] border-fuchsia-500
                rounded-2xl
                transition-all duration-300
                hover:-translate-y-2
                hover:border-yellow-400
                shadow-[0_0_28px_rgba(238,0,255,0.35)]
              "
            />
          </div>

          {/* CONTENT */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1
              className="text-5xl mt-8 sm:text-6xl lg:text-7xl font-extrabold
              bg-gradient-to-r from-cyan-400 to-blue-600
              bg-clip-text text-transparent"
            >
              Rohan Yadav
            </h1>

            <h3 className="mt-3 text-2xl sm:text-3xl font-semibold">
              I'm{" "}
              <span
                className="bg-gradient-to-r from-yellow-400 to-pink-500
                bg-clip-text text-transparent underline"
              >
                {text}
              </span>
            </h3>

            {/* SOCIAL */}
            <div className="flex gap-8 mt-5 text-3xl text-gray-300 justify-center lg:justify-start">
              <a
                href="https://github.com/Rohanyadav143"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/rohan-yadav-20b064255"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://leetcode.com/rohn1895"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition"
              >
                <FaLink />
              </a>
            </div>

            {/* BUTTONS */}
            <div className="flex gap-6 mt-6 mb-6 flex-wrap justify-center lg:justify-start">
              {/* Resume Button */}
              <a
                href="/resume/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 border-2 border-yellow-400 rounded-md
                text-lg font-semibold bg-gradient-to-r from-purple-500 to-blue-600
                bg-clip-text text-transparent hover:scale-110 transition"
              >
                Resume
              </a>

              {/* Hire Me Button (React Router) */}
              <Link
                to="/contact"
                className="px-6 py-2.5 border-2 border-green-400 rounded-md
                text-lg font-semibold bg-gradient-to-r from-green-400 to-blue-500
                bg-clip-text text-transparent hover:scale-110 transition"
              >
                Hire Me
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Notes Button */}
        <a
          href="https://www.notion.so/Notes-85a4ec06d7304aceac7a099359da2eaf"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 w-14 h-14 flex items-center justify-center
          rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 text-black text-2xl
          shadow-lg hover:scale-110 transition"
          title="My Notes"
        >
          <FaBook />
        </a>
      </div>
    </section>
  );
}

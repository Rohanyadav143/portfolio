import React from "react";
import { FaBirthdayCake, FaCity, FaPhone, FaEnvelope } from "react-icons/fa";
import { FaGlobe, FaCode, FaDatabase, FaLaptopCode, FaBrain, FaDesktop } from "react-icons/fa";
import aboutImg from "../assets/images/hero.jpeg";

export default function About() {
  const interests = [
    { name: "Software Development", icon: <FaGlobe className="mx-auto mb-2 text-white text-2xl" /> },
    { name: "Full-Stack Development", icon: <FaLaptopCode className="mx-auto mb-2 text-white text-2xl" /> },
    { name: "Algorithms", icon: <FaBrain className="mx-auto mb-2 text-white text-2xl" /> },
    { name: "Database Management", icon: <FaDatabase className="mx-auto mb-2 text-white text-2xl" /> },
    { name: "Competitive Programming", icon: <FaCode className="mx-auto mb-2 text-white text-2xl" /> },
    { name: "Computer Vision", icon: <FaDesktop className="mx-auto mb-2 text-white text-2xl" /> },
  ];

  return (
    <section className="text-white py-0 bg-[#00091a]">
      {/* ABOUT HEADING */}
      <h6 className="ml-[10%] mt-0 mb-8 font-bold text-orange-400">
        About Me ---------
      </h6>

      {/* ABOUT CONTENT */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* LEFT CONTENT */}
          <div>
            <p className="text-gray-300 leading-relaxed mb-3">
              Hi, I’m{" "}
              <span className="text-indigo-400 font-semibold">Rohan Yadav</span>, 
              a Computer Science Engineering student and Full-Stack MERN Developer.
            </p>

            <p className="text-gray-300 leading-relaxed mb-4">
              I build dynamic and responsive web applications using HTML, CSS, JavaScript, Bootstrap, React.js, Node.js, Express.js, and MongoDB. 
              I also have strong coding skills in Java, with a solid foundation in Data Structures and Algorithms.
            </p>

            <p className="text-gray-300 leading-relaxed mb-6">
              I have solved 800+ coding problems across platforms like LeetCode, GeeksforGeeks, and HackerRank. 
              I enjoy developing real-world applications, exploring new technologies, and applying my skills to impactful projects.
            </p>

            {/* PERSONAL INFO WITH ICONS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="flex items-center gap-3 text-gray-300">
                <FaBirthdayCake className="text-orange-400" />
                <span>DOB: 20 October 2004</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <FaCity className="text-orange-400" />
                <span>City: Lucknow, Uttar Pradesh, India</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <FaPhone className="text-orange-400" />
                <span>Phone: +91-8423712322</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <FaEnvelope className="text-orange-400" />
                <span>Email: rohn1895@gmail.com</span>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center md:justify-end">
            <img
              src={aboutImg}
              alt="About"
              className="w-72 md:w-80 rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* INTEREST HEADING */}
      <h6 className="ml-[10%] mt-12 mb-10 font-bold text-orange-400">
        Interest ---------
      </h6>

      {/* INTEREST SECTION */}
      <div className="max-w-6xl mx-auto mt-6 pb-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
        {interests.map((item, i) => (
          <div
            key={i}
            className="rounded-xl border-2 border-cyan-400
                       bg-gradient-to-br from-purple-900 to-teal-700
                       py-6 transition-all duration-300 hover:-translate-y-2"
          >
            {item.icon}
            <h5 className="text-lg font-semibold bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">
              {item.name}
            </h5>
          </div>
        ))}
      </div>
    </section>
  );
}

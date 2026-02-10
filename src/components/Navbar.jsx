import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaDownload } from "react-icons/fa"; // Download icon

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Education", path: "/education" },
  { name: "Certificates", path: "/certifications" },
  { name: "Projects", path: "/projects" },
  { name: "Skills", path: "/skills" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative w-full z-10 bg-gradient-to-r from-[#020617] to-[#020d2d] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Name */}
          <NavLink
            to="/"
            className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-purple-600 bg-clip-text text-transparent"
          >
            Rohan Yadav
          </NavLink>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-gray-300">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `transition transform hover:scale-110 hover:text-yellow-400 ${
                      isActive ? "text-green-400 font-semibold" : ""
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}

            {/* Resume with Download Icon */}
            <li>
              <a
                href="/resume/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 transition transform hover:scale-110 hover:text-yellow-400"
              >
                Resume <FaDownload />
              </a>
            </li>
          </ul>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-green-400 text-3xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } bg-[#00091a]`}
      >
        <ul className="flex flex-col items-center space-y-5 py-6 text-gray-300">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-lg transition hover:text-yellow-400 ${
                  isActive ? "text-green-400 font-semibold" : ""
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          <a
            href="/resume/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg flex items-center gap-1 hover:text-yellow-400"
            onClick={() => setOpen(false)}
          >
            Resume <FaDownload />
          </a>
        </ul>
      </div>
    </nav>
  );
}

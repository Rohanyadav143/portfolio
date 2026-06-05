import { useState, useMemo, useCallback } from "react";
import { NavLink } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { darkMode, toggleTheme } = useTheme();

  const navItems = useMemo(
    () => [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      { name: "Education", path: "/education" },
      { name: "Certificates", path: "/certifications" },
      { name: "Projects", path: "/projects" },
      { name: "Skills", path: "/skills" },
      { name: "Contact", path: "/contact" },
    ],
    [],
  );

  const toggleMenu = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <nav
      className="w-full sticky top-0 z-50 border-b border-black/10"
      style={{
        background: darkMode ? "#00091a" : "#e7eaee",
        color: darkMode ? "#d6dae1" : "#1f2937",
      }}
    >
      {/* INNER WRAPPER (IMPORTANT FIX) */}
      <div className="max-w-[1200px] mx-auto px-4 flex justify-between items-center h-16">
        {/* LOGO */}
        <NavLink to="/" className="text-xl font-bold">
          <span className="bg-gradient-to-r from-yellow-400 to-purple-600 bg-clip-text text-transparent">
            Rohan
          </span>{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Yadav
          </span>
        </NavLink>

        {/* DESKTOP */}
        <ul className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `transition ${
                    isActive
                      ? "text-green-400 font-bold"
                      : "hover:text-yellow-400"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}

          <button onClick={toggleTheme} className="ml-4 text-xl">
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </ul>

        {/* MOBILE BUTTON */}
        <button onClick={toggleMenu} className="md:hidden text-2xl">
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div
          className="fixed inset-0 z-50"
          style={{
            background: darkMode ? "#00091a" : "#f4f6f8",
          }}
        >
          <div className="flex justify-between p-5">
            <button onClick={toggleTheme}>{darkMode ? "☀️" : "🌙"}</button>

            <button onClick={closeMenu} className="text-2xl">
              ✕
            </button>
          </div>

          <div className="flex flex-col items-center gap-6 mt-10 text-xl">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive
                    ? "text-green-400 font-bold"
                    : "hover:text-yellow-400"
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

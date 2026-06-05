import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { useMemo } from "react";

export default function Footer() {
  const { darkMode } = useTheme();

  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer
      style={{
        background: darkMode ? "#00091a" : "#e7eaee",
        color: darkMode ? "#e5e7eb" : "#1f2937",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="font-semibold mb-4">About Me</h3>
            <p className="text-sm">
              I’m a passionate Full Stack Developer focused on building clean,
              responsive, and user-friendly web applications using modern
              technologies.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                ["Home", "/"],
                ["About", "/about"],
                ["Education", "/education"],
                ["Certificates", "/certifications"],
                ["Projects", "/projects"],
                ["Skills", "/skills"],
                ["Contact", "/contact"],
              ].map(([name, path]) => (
                <li key={name}>
                  <NavLink to={path} className="hover:text-yellow-600">
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>

            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt />
                Lucknow, Uttar Pradesh, India
              </li>

              <li className="flex items-center gap-2">
                <FaPhone />
                +91 - 8423712322
              </li>

              <li className="flex items-center gap-2">
                <FaEnvelope />
                rohn1895@gmail.com
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-black/10 mt-12 pt-8 text-center text-sm">
          © {year} Built by :- Rohan Yadav
        </div>
      </div>
    </footer>
  );
}
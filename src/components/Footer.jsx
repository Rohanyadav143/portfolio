import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#020617] to-[#020d2d] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14">

        {/* Top Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">

          {/* About */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              About Rohan
            </h3>
            <p className="text-sm leading-relaxed text-gray-400">
              I’m a passionate Full Stack Developer focused on building clean,
              responsive, and user-friendly web applications using modern
              technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <NavLink to="/" className="hover:text-yellow-400 transition">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="hover:text-yellow-400 transition">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/projects" className="hover:text-yellow-400 transition">
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink to="/skills" className="hover:text-yellow-400 transition">
                  Skills
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="hover:text-yellow-400 transition">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>📍 Lucknow, Uttar Pradesh, India</li>
              <li>📞 +91 8423712322</li>
              <li>✉️ rohn1895@gmail.com</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Rohan Yadav — Built with ❤️ and support.
        </div>

      </div>
    </footer>
  );
}

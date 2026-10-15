import { useCallback, useEffect, useMemo, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";
import useTheme from "../context/useTheme";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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

  const closeMenu = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const updateScroll = () => setScrolled(window.scrollY > 12);
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    document.body.classList.add("menu-open");
    const onKeyDown = (event) => {
      if (event.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, closeMenu]);

  const navLinkClass = ({ isActive }) => `nav-link${isActive ? " active" : ""}`;

  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}`} aria-label="Main navigation">
      <div className="navbar-inner">
        <Link to="/" className="brand" aria-label="Rohan Yadav home">
          <span className="brand-mark" aria-hidden="true">RY</span>
          <span className="brand-name">Rohan <span>Yadav</span></span>
        </Link>

        <div className="desktop-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={navLinkClass}
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        <div className="nav-actions">
          <Link className="button button-primary nav-cta" to="/contact">Let&apos;s talk</Link>
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${darkMode ? "light" : "dark"} theme`}
            title={`Switch to ${darkMode ? "light" : "dark"} theme`}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          <button
            type="button"
            className="menu-toggle"
            onClick={() => setOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            <FaBars />
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-panel" id="mobile-navigation">
          <div className="mobile-panel-header">
            <Link to="/" className="brand" onClick={closeMenu}>
              <span className="brand-mark" aria-hidden="true">RY</span>
              <span className="brand-name">Rohan <span>Yadav</span></span>
            </Link>
            <div className="nav-actions">
              <button
                type="button"
                className="theme-toggle"
                onClick={toggleTheme}
                aria-label={`Switch to ${darkMode ? "light" : "dark"} theme`}
              >
                {darkMode ? <FaSun /> : <FaMoon />}
              </button>
              <button
                type="button"
                className="menu-close"
                onClick={closeMenu}
                aria-label="Close navigation menu"
              >
                <FaTimes />
              </button>
            </div>
          </div>
          <div className="mobile-nav-links">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                onClick={closeMenu}
                className={navLinkClass}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
          <p className="mobile-nav-footer">Full Stack Developer · Lucknow, India</p>
        </div>
      )}
    </nav>
  );
}

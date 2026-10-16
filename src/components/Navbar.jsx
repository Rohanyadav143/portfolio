import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";
import { createPortal } from "react-dom";
import useTheme from "../context/useTheme";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  const menuToggleRef = useRef(null);
  const { darkMode, toggleTheme } = useTheme();
  const navItems = useMemo(
    () => [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      { name: "Experience", path: "/experience" },
      { name: "Education", path: "/education" },
      { name: "Certificates", path: "/certifications" },
      { name: "Projects", path: "/projects" },
      { name: "Skills", path: "/skills" },
      { name: "Contact", path: "/contact" },
    ],
    [],
  );

  const closeMenu = useCallback((restoreFocus = false) => {
    setOpen(false);
    if (restoreFocus) {
      window.requestAnimationFrame(() => menuToggleRef.current?.focus({ preventScroll: true }));
    }
  }, []);

  const toggleMenu = useCallback(() => setOpen((isOpen) => !isOpen), []);

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
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu(true);
        return;
      }

      if (event.key !== "Tab") return;
      const focusable = menuRef.current?.querySelectorAll("a[href], button:not([disabled])");
      if (!focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const onResize = () => {
      if (window.innerWidth > 1080) closeMenu();
    };

    const focusFrame = window.requestAnimationFrame(() => {
      menuRef.current?.querySelector("a[href]")?.focus({ preventScroll: true });
    });
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
      window.cancelAnimationFrame(focusFrame);
    };
  }, [open, closeMenu]);

  const navLinkClass = ({ isActive }) => `nav-link${isActive ? " active" : ""}`;

  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}${open ? " menu-is-open" : ""}`} aria-label="Main navigation">
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
            ref={menuToggleRef}
            onClick={toggleMenu}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-haspopup="dialog"
          >
            {open ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open && createPortal(
        <div
          className="mobile-menu-backdrop"
          onPointerDown={(event) => {
            if (event.target === event.currentTarget) closeMenu(true);
          }}
        >
          <section
            className="mobile-panel"
            id="mobile-navigation"
            ref={menuRef}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="mobile-panel-header">
              <span className="mobile-menu-title">Explore</span>
              <div className="nav-actions">
                <button
                  type="button"
                  className="theme-toggle mobile-theme-toggle"
                  onClick={toggleTheme}
                  aria-label={`Switch to ${darkMode ? "light" : "dark"} theme`}
                  title={`Switch to ${darkMode ? "light" : "dark"} theme`}
                >
                  {darkMode ? <FaSun aria-hidden="true" /> : <FaMoon aria-hidden="true" />}
                </button>
                <button type="button" className="menu-close" onClick={() => closeMenu(true)} aria-label="Close menu">
                  <FaTimes aria-hidden="true" />
                </button>
              </div>
            </div>
            <nav className="mobile-nav-links" aria-label="Mobile navigation links">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  onClick={() => closeMenu()}
                  className={navLinkClass}
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>
            <Link className="button button-primary mobile-nav-cta" to="/contact" onClick={() => closeMenu()}>
              Let&apos;s talk
            </Link>
            <p className="mobile-nav-footer">Full Stack Developer · Noida, Uttar Pradesh, India</p>
          </section>
        </div>,
        document.body,
      )}
    </nav>
  );
}

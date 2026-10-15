import { Link } from "react-router-dom";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import VisitorCount from "./VisitorCount";

const footerLinks = [
  ["Home", "/"],
  ["About", "/about"],
  ["Education", "/education"],
  ["Certificates", "/certifications"],
  ["Projects", "/projects"],
  ["Skills", "/skills"],
  ["Contact", "/contact"],
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-about">
          <Link to="/" className="brand">
            <span className="brand-mark" aria-hidden="true">RY</span>
            <span className="brand-name">Rohan <span>Yadav</span></span>
          </Link>
          <p>
            I’m a passionate Full Stack Developer focused on building clean,
            responsive, and user-friendly web applications using modern technologies.
          </p>
        </div>

        <div>
          <h2 className="footer-heading">Explore</h2>
          <nav className="footer-links" aria-label="Footer navigation">
            {footerLinks.map(([name, path]) => (
              <Link key={path} to={path}>{name}</Link>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="footer-heading">Contact</h2>
          <div className="footer-links">
            <span className="footer-contact-row">
              <FaMapMarkerAlt aria-hidden="true" /> Lucknow, Uttar Pradesh, India
            </span>
            <a className="footer-contact-row" href="tel:+918423712322">
              <FaPhone aria-hidden="true" /> +91 - 8423712322
            </a>
            <a className="footer-contact-row" href="mailto:rohn1895@gmail.com">
              <FaEnvelope aria-hidden="true" /> rohn1895@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Built by :- Rohan Yadav</span>
        <VisitorCount />
      </div>
    </footer>
  );
}

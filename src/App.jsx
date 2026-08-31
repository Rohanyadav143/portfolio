import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
// import Education from "./pages/Education";
import Certifications from "./pages/Certifications";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import { useTheme } from "./context/ThemeContext";

export default function App() {
  const { darkMode } = useTheme();

  const borderColor = darkMode ? "#d2cdcd" : "#000000";

  return (
    <Router>
      <div
        style={{
          maxWidth: "210mm",
          margin: "auto",
          minHeight: "100vh",
          display: "flex",
          background: darkMode ? "#222323" : "#f4f6f8",
        }}
      >
        {/* Left Border */}
        <div
          style={{
            width: "2px",
            background: borderColor,
          }}
        />

        <div style={{ flex: 1, padding: "0 16px" }}>
          <ScrollToTop />
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/education" element={<Education />} /> */}
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

          <Footer />
        </div>

        {/* Right Border */}
        <div
          style={{
            width: "2px",
            background: borderColor,
          }}
        />
      </div>
    </Router>
  );
}

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import Certifications from "./pages/Certifications";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Reveal from "./components/Reveal";

export default function App() {
  return (
    <Router>
      <div className="app-shell">
        <ScrollToTop />
        <Navbar />
        <main className="site-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/education" element={<Education />} /> */}
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            {/* <Route path="/experience" element={<Experience />} /> */}
            <Route path="/contact" element={<Contact />} />
            <Route
              path="*"
              element={
                <section className="page-shell not-found">
                  <div>
                    <h1>404</h1>
                    <p>This page could not be found.</p>
                    <Link className="button button-primary" to="/">Back to home</Link>
                  </div>
                </section>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

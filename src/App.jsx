import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import Certifications from "./pages/Certifications";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

import ScrollToTop from "./ScrollToTop";

import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />

      {/* Page Content */}
      <div className="pt-16 bg-[#00091a] min-h-screen">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer/>
    </Router>
  );
}

export default App;

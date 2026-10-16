import {
  FaBirthdayCake,
  FaCity,
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaCode,
  FaDatabase,
  FaLaptopCode,
  FaBrain,
  FaDesktop,
} from "react-icons/fa";
import aboutImg from "../assets/images/Hero.webp";
import PageHeading from "../components/PageHeading";
import Reveal from "../components/Reveal";

const interests = [
  { name: "Software Development", icon: <FaGlobe /> },
  { name: "Full-Stack Development", icon: <FaLaptopCode /> },
  { name: "Algorithms", icon: <FaBrain /> },
  { name: "Database Management", icon: <FaDatabase /> },
  { name: "Competitive Programming", icon: <FaCode /> },
  { name: "Computer Vision", icon: <FaDesktop /> },
];

export default function About() {
  return (
    <section className="page-shell about-page">
      <PageHeading
        eyebrow="A little about me"
        title="Curiosity into code."
        description="Computer Science Engineering student, Full-Stack MERN Developer, and lifelong learner."
      />

      <Reveal className="about-layout">
        <div>
          <div className="about-prose">
            <p>
              Hi, I’m <strong className="accent-text">Rohan Yadav</strong>, a
              Computer Science Engineering student and Full-Stack MERN Developer.
            </p>
            <p>
              I build dynamic and responsive web applications using MERN
              Technology. I also have strong coding skills in Java and Data
              Structures &amp; Algorithms.
            </p>
            <p>
              I have solved <strong>800+ coding problems</strong> across
              LeetCode, GFG, and HackerRank.
            </p>
          </div>

          <div className="personal-info" aria-label="Personal information">
            <div className="info-item"><FaBirthdayCake aria-hidden="true" /> DOB: 20 October 2004</div>
            <div className="info-item"><FaCity aria-hidden="true" /> Noida, Uttar Pradesh, India</div>
            <a className="info-item" href="tel:+918423712322"><FaPhone aria-hidden="true" /> +91-8423712322</a>
            <a className="info-item" href="mailto:rohn1895@gmail.com"><FaEnvelope aria-hidden="true" /> rohn1895@gmail.com</a>
          </div>
        </div>

        <div>
          <div className="hero-portrait-wrap">
            <img
              className="about-image"
              src={aboutImg}
              alt="Rohan Yadav, Full Stack Developer"
              loading="lazy"
              decoding="async"
            />
          </div>
          <p className="availability about-availability">
            Open to Work
          </p>
        </div>
      </Reveal>

      <section aria-labelledby="interests-heading" style={{ marginTop: "4rem" }}>
        <h2 className="section-label" id="interests-heading">Interests</h2>
        <div className="grid-layout interest-grid reveal-stagger">
          {interests.map((item) => (
            <Reveal key={item.name} className="surface-card interest-card">
              <div className="interest-icon" aria-hidden="true">{item.icon}</div>
              <h3>{item.name}</h3>
            </Reveal>
          ))}
        </div>
      </section>
    </section>
  );
}

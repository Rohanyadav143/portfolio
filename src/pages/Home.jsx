import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowDown,
  FaArrowRight,
  FaBook,
  FaGithub,
  FaLinkedin,
  FaLink,
} from "react-icons/fa";
import heroImg from "../assets/images/Hero.webp";
import Reveal from "../components/Reveal";

const words = [
  "Dedicated",
  "Focused",
  "Adaptive",
  "Creative",
  "Curious",
  "Coder",
  "Software Developer",
  "Full-Stack Developer",
];

export default function Home() {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState(() =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "Full-Stack Developer"
      : "",
  );
  const charIndexRef = useRef(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return undefined;

    const currentWord = words[wordIndex];
    charIndexRef.current = 0;

    const type = () => {
      const nextIndex = charIndexRef.current + 1;
      setText(currentWord.slice(0, nextIndex));
      charIndexRef.current = nextIndex;

      if (nextIndex < currentWord.length) {
        timeoutRef.current = window.setTimeout(type, 75);
      } else {
        timeoutRef.current = window.setTimeout(
          () => setWordIndex((previous) => (previous + 1) % words.length),
          1100,
        );
      }
    };

    timeoutRef.current = window.setTimeout(type, 180);
    return () => window.clearTimeout(timeoutRef.current);
  }, [wordIndex]);

  return (
    <>
      <section className="home-hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <p className="availability">Open to Work</p>
          <p className="eyebrow">Full Stack Developer · Lucknow, India</p>
          <h1 className="hero-title">Rohan <span>Yadav.</span></h1>
          <p className="hero-role">
            I&apos;m <span>{text}</span><span className="typing-caret" aria-hidden="true" />
          </p>
          <p className="hero-intro">
            A Computer Science Engineering student and Full-Stack MERN Developer.
            I build dynamic, responsive web applications and bring a strong
            foundation in Java and Data Structures &amp; Algorithms.
          </p>

          <div className="hero-actions">
            <Link className="button button-primary" to="/projects">
              Explore My Work <FaArrowRight aria-hidden="true" />
            </Link>
            <Link className="button" to="/contact">Let&apos;s connect</Link>
            <a
              className="button"
              href="https://www.notion.so"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Notion"
            >
              <FaBook aria-hidden="true" /> Notion
            </a>
          </div>

          <div className="hero-socials" aria-label="Social profiles">
            <a
              className="icon-link"
              href="https://github.com/Rohanyadav143"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Rohan Yadav on GitHub"
            >
              <FaGithub />
            </a>
            <a
              className="icon-link"
              href="https://www.linkedin.com/in/rohan-yadav-20b064255/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Rohan Yadav on LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              className="icon-link"
              href="https://leetcode.com/u/rohn1895/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Rohan Yadav on LeetCode"
            >
              <FaLink />
            </a>
          </div>
        </div>

        <div className="hero-portrait-wrap">
          <img
            className="hero-portrait"
            src={heroImg}
            alt="Rohan Yadav, Full Stack Developer"
            fetchPriority="high"
          />
          <div className="hero-image-caption">
            <strong>Rohan Yadav</strong>
            <span>Computer Science Engineering · Full Stack Developer</span>
          </div>
        </div>

        <a className="scroll-cue" href="#highlights" aria-label="Scroll to highlights">
          <span>Scroll to explore</span>
          <FaArrowDown aria-hidden="true" />
          <span />
        </a>
      </section>

      <Reveal
        as="section"
        className="intro-strip reveal-stagger"
        id="highlights"
        aria-label="Portfolio highlights"
      >
        <div className="intro-stat">
          <strong>800+ coding problems</strong>
          <span>Solved across LeetCode, GFG, and HackerRank</span>
        </div>
        <div className="intro-stat">
          <strong>Full-Stack MERN</strong>
          <span>Responsive web applications and projects</span>
        </div>
        <div className="intro-stat">
          <strong>Computer Science</strong>
          <span>B.Tech, R.R. Group Of Institution · 2022–2026</span>
        </div>
      </Reveal>
    </>
  );
}

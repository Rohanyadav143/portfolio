import { FaArrowUpRightFromSquare, FaCheck } from "react-icons/fa6";
import RRImage from "../assets/images/RR.webp";
import PGSSImage from "../assets/images/PGSS.webp";
import PageHeading from "../components/PageHeading";
import Reveal from "../components/Reveal";

const educationData = [
  {
    title: "B.Tech in Computer Science",
    institute: "R.R. Group Of Institution",
    duration: "August 2022 - June 2026",
    percentage: "82%",
    img: RRImage,
    website: "https://rrimt.ac.in/",
  },
  {
    title: "Intermediate",
    institute: "P.G. Senior Secondary School",
    duration: "March 2021 - April 2022",
    percentage: "63.67%",
    img: PGSSImage,
    website: "https://pgssschool.in/",
  },
  {
    title: "High School",
    institute: "P.G. Senior Secondary School",
    duration: "March 2019 - April 2020",
    percentage: "75.67%",
    img: PGSSImage,
    website: "https://pgssschool.in/",
  },
];

const achievements = [
  "Solved 800+ coding problems on LeetCode, HackerRank, GeeksforGeeks.",
  "Ranked 195/30,880 in national coding contest.",
  "Ranked 427/36,305 in LeetCode Weekly Contest.",
  "Participated in hackathons and workshops.",
  "Built 7+ full-stack projects.",
];

export default function Education() {
  return (
    <section className="page-shell education-page">
      <PageHeading
        eyebrow="Education & milestones"
        title="Learning by building."
        description="Academic background and milestones from my coding journey."
      />

      <section aria-label="Education history">
        <div className="timeline">
          {educationData.map((education) => (
            <Reveal
              key={education.title}
              as="article"
              className="surface-card education-card"
            >
              <img
                src={education.img}
                alt={education.institute}
                loading="lazy"
                decoding="async"
              />
              <div className="education-content">
                <h2>{education.title}</h2>
                <h3>{education.institute}</h3>
                <div className="education-meta">
                  <span>{education.duration}</span>
                  <span>Percentage: <strong>{education.percentage}</strong></span>
                </div>
                <a
                  className="text-link"
                  href={education.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website <FaArrowUpRightFromSquare aria-hidden="true" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="page-subsection" aria-labelledby="achievements-heading">
        <h2 className="section-label" id="achievements-heading">Key Achievements</h2>
        <div className="grid-layout achievement-grid">
          {achievements.map((achievement) => (
            <Reveal key={achievement} className="surface-card achievement-card">
              <FaCheck aria-hidden="true" />
              <span>{achievement}</span>
            </Reveal>
          ))}
        </div>
      </section>
    </section>
  );
}

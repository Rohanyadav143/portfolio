import { FaArrowRight, FaCheck } from "react-icons/fa6";
import PageHeading from "../components/PageHeading";
import Reveal from "../components/Reveal";

const responsibilities = [
  "Teaching MERN Stack development concepts and practical web development workflows.",
  "Explaining DSA fundamentals and problem-solving using Java.",
  "Guiding students through structured learning roadmaps and coding exercises.",
  "Helping learners understand programming concepts through practical demonstrations.",
];

export default function Experience() {
  return (
    <section className="page-shell experience-page">
      <PageHeading
        eyebrow="Work & teaching"
        title="Experience."
        description="Teaching software development and problem-solving through structured lessons and practical examples."
      />

      <div className="experience-timeline">
        <Reveal as="article" className="surface-card experience-card" aria-labelledby="trainx-role">
          <div className="experience-card-header">
            <div className="experience-identity">
              <span className="experience-mark" aria-hidden="true">TX</span>
              <div>
                <p className="experience-company">TrainX</p>
                <h2 id="trainx-role">MERN Stack &amp; DSA Instructor</h2>
              </div>
            </div>
            <div className="experience-meta">
              <p className="experience-dates">
                <time dateTime="2026-08">Aug 2026</time>
                <span aria-hidden="true"> – </span>
                <span>Present</span>
              </p>
              <span className="experience-current"><span aria-hidden="true" />Currently working</span>
            </div>
          </div>

          <div className="experience-card-body">
            <p className="experience-description">
              Working as a MERN Stack and Data Structures &amp; Algorithms instructor, helping
              students understand web development concepts and problem-solving fundamentals
              through structured lessons and practical examples.
            </p>
            <div className="experience-responsibilities">
              <h3>Teaching focus</h3>
              <ul>
                {responsibilities.map((responsibility) => (
                  <li key={responsibility}>
                    <FaCheck aria-hidden="true" />
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="experience-card-accent" aria-hidden="true">
            <FaArrowRight />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

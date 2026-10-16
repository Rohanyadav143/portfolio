import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import A1 from "../assets/certificates/A1-PythonWorkshop.pdf";
import A2 from "../assets/certificates/A2-Java.png";
import A3 from "../assets/certificates/A3-C.png";
import A4 from "../assets/certificates/A4-DSA with JAVA.pdf";
import A5 from "../assets/certificates/A5-java-basic-certificate.pdf";
import A6 from "../assets/certificates/A6-SpringCompletion.pdf";
import A7 from "../assets/certificates/A7-python-basic-certificate.pdf";
import A8 from "../assets/certificates/A8-EXCELBootCamp.pdf";
import A9 from "../assets/certificates/A9-Hackathon.pdf";
import A10 from "../assets/certificates/A10-Time Mangement.pdf";
import A11 from "../assets/certificates/A11-Agile.pdf";
import A12 from "../assets/certificates/A12-Naukri.pdf";
import A13 from "../assets/certificates/A13-Naukri.pdf";
import A14 from "../assets/certificates/A14-Naukri.pdf";
import PageHeading from "../components/PageHeading";
import Reveal from "../components/Reveal";

const certificates = [
  { title: "Coding Challenge", certifiedBy: "Naukri Campus", year: "September 2025", link: A14 },
  { title: "Coding Challenge", certifiedBy: "Naukri Campus", year: "August 2025", link: A13 },
  { title: "Coding Challenge", certifiedBy: "Naukri Campus", year: "July 2025", link: A12 },
  { title: "Agile Software Development", certifiedBy: "Infosys Springboard", year: "June 2025", link: A11 },
  { title: "Time Management", certifiedBy: "Infosys Springboard", year: "June 2025", link: A10 },
  { title: "International Hackathon", certifiedBy: "Galgotias College", year: "May 2025", link: A9 },
  { title: "Excel Bootcamp", certifiedBy: "Lets Upgrade", year: "Dec 2024", link: A8 },
  { title: "Python Basic", certifiedBy: "HackerRank", year: "Dec 2024", link: A7 },
  { title: "Spring Boot", certifiedBy: "Udemy", year: "Dec 2024", link: A6 },
  { title: "Java Basic", certifiedBy: "HackerRank", year: "Nov 2024", link: A5 },
  { title: "DSA with Java", certifiedBy: "Lets Upgrade", year: "Nov 2024", link: A4 },
  { title: "C Programming", certifiedBy: "Kg-Coding", year: "Nov 2024", link: A3 },
  { title: "Java Certification", certifiedBy: "Kg-Coding", year: "Oct 2024", link: A2 },
  { title: "Python Workshop", certifiedBy: "SoftPro India", year: "Feb 2024", link: A1 },
];

export default function Certifications() {
  return (
    <section className="page-shell certifications-page">
      <PageHeading
        eyebrow="Learning & credentials"
        title="Certifications."
        description="Courses, workshops, coding challenges, and achievements represented by the certificates below."
      />
      <div className="grid-layout certificate-grid">
        {certificates.map((certificate, index) => (
          <Reveal
            key={`${certificate.title}-${certificate.year}`}
            as="article"
            className="surface-card certificate-card"
          >
            <span className="mono-label">{String(index + 1).padStart(2, "0")} / {certificate.year}</span>
            <h2>{certificate.title}</h2>
            <p>Certified by: <strong>{certificate.certifiedBy}</strong></p>
            <a
              className="button"
              href={certificate.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Certificate <FaArrowUpRightFromSquare aria-hidden="true" />
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

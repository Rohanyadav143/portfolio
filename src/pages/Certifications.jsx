import { useMemo } from "react";
import { useTheme } from "../context/ThemeContext";

// certificates
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

export default function Certificates() {
  const { darkMode } = useTheme();

  const certificates = useMemo(
    () => [
      {
        title: "Coding Challenge",
        certifiedBy: "Naukri Campus",
        year: "September 2025",
        link: A14,
      },
      {
        title: "Coding Challenge",
        certifiedBy: "Naukri Campus",
        year: "August 2025",
        link: A13,
      },
      {
        title: "Coding Challenge",
        certifiedBy: "Naukri Campus",
        year: "July 2025",
        link: A12,
      },
      {
        title: "Agile Software Development",
        certifiedBy: "Infosys Springboard",
        year: "June 2025",
        link: A11,
      },
      {
        title: "Time Management",
        certifiedBy: "Infosys Springboard",
        year: "June 2025",
        link: A10,
      },
      {
        title: "International Hackathon",
        certifiedBy: "Galgotias College",
        year: "May 2025",
        link: A9,
      },
      {
        title: "Excel Bootcamp",
        certifiedBy: "Lets Upgrade",
        year: "Dec 2024",
        link: A8,
      },
      {
        title: "Python Basic",
        certifiedBy: "HackerRank",
        year: "Dec 2024",
        link: A7,
      },
      {
        title: "Spring Boot",
        certifiedBy: "Udemy",
        year: "Dec 2024",
        link: A6,
      },
      {
        title: "Java Basic",
        certifiedBy: "HackerRank",
        year: "Nov 2024",
        link: A5,
      },
      {
        title: "DSA with Java",
        certifiedBy: "Lets Upgrade",
        year: "Nov 2024",
        link: A4,
      },
      {
        title: "C Programming",
        certifiedBy: "Kg-Coding",
        year: "Nov 2024",
        link: A3,
      },
      {
        title: "Java Certification",
        certifiedBy: "Kg-Coding",
        year: "Oct 2024",
        link: A2,
      },
      {
        title: "Python Workshop",
        certifiedBy: "SoftPro India",
        year: "Feb 2024",
        link: A1,
      },
    ],
    [],
  );

  return (
    <section
      className="min-h-screen py-10 transition-all duration-300"
      style={{
        background: darkMode ? "#00091a" : "#e7eaee",
        color: darkMode ? "#d6dae1" : "#1f2937",
      }}
    >
      <div className="max-w-[210mm] mx-auto px-4">
        {/* HEADING */}
        <h2 className="border-l-4 border-yellow-400 pl-3 mb-8 font-bold text-yellow-400">
          Certificates
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {certificates.map((cert) => (
            <div
              key={`${cert.title}-${cert.year}`}
              className="rounded-xl p-7 pt-10 pb-10 border transition duration-300 hover:-translate-y-1"
              style={{
                background: darkMode ? "#0f172a" : "#ffffff",
                borderColor: darkMode ? "#334155" : "#cbd5e1",
              }}
            >
              <h3 className="font-semibold text-lg text-yellow-400">
                {cert.title}
              </h3>

              <p className="mt-2 text-sm">
                Certified by: <b>{cert.certifiedBy}</b>
              </p>

              <p className="text-sm">Year: {cert.year}</p>

              <a
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-4 px-4 py-1 rounded-md
                bg-blue-600 hover:bg-blue-700 text-white text-sm"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from "react";

// Import all certificate files from assets/certificates
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
  const certificates = [
    { title: "Coding Challenge", certifiedBy: "Naukri Campus", year: "September 2025", link: A14 },
    { title: "Coding Challenge", certifiedBy: "Naukri Campus", year: "August 2025", link: A13 },
    { title: "Coding Challenge", certifiedBy: "Naukri Campus", year: "July 2025", link: A12 },
    { title: "Agile Software Development", certifiedBy: "Infosys Springboard", year: "June 2025", link: A11 },
    { title: "Time Management", certifiedBy: "Infosys Springboard", year: "June 2025", link: A10 },
    { title: "International - Hackathon", certifiedBy: "Galgotias College of Engineering", year: "May 2025", link: A9 },
    { title: "Excel Bootcamp", certifiedBy: "Lets Upgrade", year: "December 2024", link: A8 },
    { title: "Python - Basic", certifiedBy: "HackerRank", year: "December 2024", link: A7 },
    { title: "Spring 5 and Spring-Boot 2", certifiedBy: "Udemy", year: "December 2024", link: A6 },
    { title: "Java - Basic", certifiedBy: "HackerRank", year: "November 2024", link: A5 },
    { title: "DSA with Java", certifiedBy: "Lets Upgrade", year: "November 2024", link: A4 },
    { title: "C Programming Certification", certifiedBy: "Kg-Coding", year: "November 2024", link: A3 },
    { title: "Java Certification", certifiedBy: "Kg-Coding", year: "October 2024", link: A2 },
    { title: "Python Programming Workshop", certifiedBy: "SoftPro India", year: "February 2024", link: A1 },
  ];

  return (
    <section className="bg-[#00091a] text-white min-h-screen pb-8">
      {/* Page Heading */}
      <h6 className="ml-[5%] mt-0 font-bold text-orange-400">Certificates ---------</h6>

      {/* Certificates Grid */}
      <div className="max-w-7xl mx-auto px-6 mt-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {certificates.map((cert, i) => (
          <div
            key={i}
            className="group bg-[#160000] p-10 rounded-2xl flex flex-col justify-start items-start
                       transition-transform duration-300 hover:scale-105 hover:bg-gray-900"
          >
            {/* Certificate Heading */}
            <h6 className="underline font-semibold text-lg mb-2 group-hover:text-yellow-400 transition-colors">
              {cert.title}
            </h6>
            <h6 className="text-md mb-2">Certified by: <b>{cert.certifiedBy}</b></h6>
            <h6 className="text-md">Certification Year: {cert.year}</h6>
            
            {/* Certificate Link */}
            <a
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block text-cyan-400 font-bold group-hover:text-yellow-400 transition-colors"
            >
              Link !
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

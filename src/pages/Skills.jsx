import React from "react";

const skillsData = [
  {
    category: "💻 Programming Languages",
    skills: [
      { name: "Java", src: "https://www.vectorlogo.zone/logos/java/java-ar21.svg" },
      { name: "C", src: "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png" },
    ],
  },
  {
    category: "🎨 Frontend",
    skills: [
      { name: "HTML", src: "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-ar21.svg" },
      { name: "CSS", src: "https://www.vectorlogo.zone/logos/w3_css/w3_css-ar21.svg" },
      { name: "JavaScript", src: "https://www.vectorlogo.zone/logos/javascript/javascript-ar21.svg" },
      { name: "React", src: "https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg" },
      { name: "Bootstrap", src: "https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-ar21.svg" },
      { name: "Tailwind CSS", src: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-ar21.svg" },
    ],
  },
  {
    category: "⚙️ Backend & APIs",
    skills: [
      { name: "Node.js", src: "https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21.svg" },
      { name: "Express.js", src: "https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg" },
      { name: "MySQL", src: "https://www.vectorlogo.zone/logos/mysql/mysql-ar21.svg" },
      { name: "MongoDB", src: "https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21.svg" },
    ],
  },
  {
    category: "☁️ DevOps & Cloud",
    skills: [
      { name: "Docker", src: "https://www.vectorlogo.zone/logos/docker/docker-ar21.svg" },
      { name: "Kubernetes", src: "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-ar21.svg" },
      { name: "AWS", src: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-ar21.svg" },
    ],
  },
  {
    category: "🧰 Tools & Platforms",
    skills: [
      { name: "Git", src: "https://www.vectorlogo.zone/logos/git-scm/git-scm-ar21.svg" },
      { name: "GitHub", src: "https://www.vectorlogo.zone/logos/github/github-ar21.svg" },
      { name: "VS Code", src: "https://www.vectorlogo.zone/logos/visualstudio_code/visualstudio_code-ar21.svg" },
      { name: "Eclipse", src: "https://www.vectorlogo.zone/logos/eclipse/eclipse-ar21.svg" },
      { name: "IntelliJ", src: "https://img.icons8.com/?size=100&id=61466&format=png&color=000000" },
    ],
  },
];

export default function Skills() {
  return (
    <section className="bg-[#00091a] min-h-screen py-0 pb-16">
      <h6 className="ml-[8%] mt-0 mb-10 font-bold text-orange-400">Skills ---------</h6>

      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-8">
        {skillsData.map((category, i) => (
          <div
            key={i}
            className="bg-gradient-to-r from-gray-600 to-gray-400 rounded-2xl p-6 transition-transform transform hover:-translate-y-2 hover:shadow-xl"
          >
            <h2 className="text-yellow-400 font-bold text-2xl mb-4 ">
              {category.category}
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-16 p-10">
              {category.skills.map((skill, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <img
                    src={skill.src}
                    alt={skill.name}
                    title={skill.name}
                    className="w-40 h-20 object-contain brightness-150"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

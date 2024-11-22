import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";

const Resume: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-gray-100 to-blue-200 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden border border-gray-200">
        {/* Header Section */}
        <header className="bg-gradient-to-r from-blue-700 to-blue-500 text-white text-center py-8 px-5">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide">Ahmed Ali</h1>
          <p className="text-lg md:text-xl mt-3 font-light">
            Software Engineer | Frontend Developer | Tech Enthusiast
          </p>
          <div className="flex justify-center gap-4 mt-4 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt />
              Karachi, Pakistan
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope />
              ahmed.ali@example.com
            </div>
            <div className="flex items-center gap-2">
              <FaPhone />
              +92 300 1234567
            </div>
          </div>
        </header>

        {/* About Section */}
        <section className="py-8 px-6 md:px-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 relative">
            <span className="underline decoration-blue-400">About Me</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            I am a passionate software engineer with expertise in building dynamic, responsive, and scalable web applications. My focus is on crafting seamless user experiences and solving challenging problems using modern web technologies.
          </p>
        </section>

        {/* Skills Section */}
        <section className="py-8 px-6 md:px-10 bg-gray-50">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 relative">
            <span className="underline decoration-blue-400">Skills</span>
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "TypeScript",
              "React",
              "Next.js",
              "Tailwind CSS",
              "C++",
              "MySQL",
              "Git & GitHub",
              "Node.js",
            ].map((skill, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-600 text-sm font-medium px-4 py-2 rounded-full shadow hover:bg-blue-200 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-8 px-6 md:px-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 relative">
            <span className="underline decoration-blue-400">Experience</span>
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-700">
                Frontend Developer
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                Tech Solutions | 2023 - Present
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Developed responsive and dynamic web applications using React and Tailwind CSS.</li>
                <li>Implemented optimized UI/UX for better user engagement.</li>
                <li>Collaborated in agile teams to improve software performance.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-700">
                Software Engineer Intern
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                Innovative Tech | 2022 - 2023
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Contributed to the development of a CRM platform using JavaScript and MySQL.</li>
                <li>Enhanced data visualization features using D3.js for real-time analytics.</li>
                <li>Collaborated with backend teams to integrate REST APIs.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-8 px-6 md:px-10 bg-gray-50">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 relative">
            <span className="underline decoration-blue-400">Projects</span>
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Resume Builder
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                Built a dynamic resume-building application using React, Tailwind CSS, and Node.js. Integrated features like real-time preview and PDF export.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                E-Commerce Platform
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                Developed a full-stack e-commerce application with Next.js and MySQL, including payment gateway integration and an admin panel for order management.
              </p>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-8 px-6 md:px-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 relative">
            <span className="underline decoration-blue-400">Certifications</span>
          </h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Certified Frontend Developer – Coursera (2023)</li>
            <li>Introduction to Machine Learning – Google (2022)</li>
            <li>Full-Stack Web Development – Udemy (2021)</li>
          </ul>
        </section>

        {/* Interests Section */}
        <section className="py-8 px-6 md:px-10 bg-gray-50">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 relative">
            <span className="underline decoration-blue-400">Interests</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Open-source contributions, exploring new web technologies, blogging about tech, and playing football.
          </p>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-blue-700 to-blue-500 text-white text-center py-4">
          <div className="flex justify-center gap-4 mb-2">
            <a
              href="https://github.com/ahmed-ali"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 transition"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/ahmed-ali"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 transition"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
          <p className="text-sm">Designed & Built by Ahmed Ali © {new Date().getFullYear()}</p>
        </footer>
      </div>
    </div>
  );
};

export default Resume;

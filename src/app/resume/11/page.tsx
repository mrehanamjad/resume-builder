import React from 'react';

const ProfessionalResumeTemplate = ({ data = sampleData }) => {
  return (
    <div className="w-full bg-white text-gray-800 p-8 shadow-sm">
      {/* Header Section */}
      <header className="border-b border-gray-300 pb-4 mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{data.name}</h1>
        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {data.email}
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {data.phone}
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {data.location}
          </span>
        </div>
      </header>

      {/* Professional Summary */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">Professional Summary</h2>
        <p className="text-gray-700 leading-relaxed">{data.summary}</p>
      </section>

      {/* Experience Section */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Professional Experience</h2>
        <div className="space-y-4">
          {data.experience.map((exp, index) => (
            <div key={index} className="border-l-2 border-gray-200 pl-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-gray-900">{exp.title}</h3>
                  <p className="text-gray-600">{exp.company}</p>
                </div>
                <span className="text-sm text-gray-500">{exp.period}</span>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-sm">{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Education</h2>
        <div className="space-y-3">
          {data.education.map((edu, index) => (
            <div key={index} className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                <p className="text-gray-600">{edu.school}</p>
              </div>
              <span className="text-sm text-gray-500">{edu.year}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-3">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {data.skills.map((skill, index) => (
            <span 
              key={index}
              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};

// Sample data structure
const sampleData = {
  name: "John Doe",
  email: "john.doe@email.com",
  phone: "(555) 123-4567",
  location: "New York, NY",
  summary: "Results-driven software engineer with 5+ years of experience developing scalable web applications. Specialized in React and Node.js with a strong focus on writing clean, maintainable code and implementing best practices.",
  experience: [
    {
      title: "Senior Software Engineer",
      company: "Tech Solutions Inc.",
      period: "2020 - Present",
      responsibilities: [
        "Led development of company's flagship product, improving performance by 40%",
        "Mentored junior developers and conducted code reviews",
        "Implemented CI/CD pipeline reducing deployment time by 60%"
      ]
    },
    {
      title: "Software Engineer",
      company: "Digital Innovations LLC",
      period: "2018 - 2020",
      responsibilities: [
        "Developed responsive web applications using React and TypeScript",
        "Collaborated with UX team to implement new features",
        "Reduced bug count by 30% through automated testing"
      ]
    }
  ],
  education: [
    {
      degree: "Master of Science in Computer Science",
      school: "Tech University",
      year: "2018"
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      school: "State University",
      year: "2016"
    }
  ],
  skills: [
    "React",
    "TypeScript",
    "Node.js",
    "Python",
    "AWS",
    "Docker",
    "Git",
    "CI/CD",
    "Agile",
    "System Design"
  ]
};

export default ProfessionalResumeTemplate;
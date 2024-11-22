import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Resume = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 bg-white text-gray-800">
      {/* Header Section */}
      <header className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">John Doe</h1>
        <h2 className="text-xl md:text-2xl text-gray-600 mb-4">Senior Software Engineer</h2>
        <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
          <div className="flex items-center gap-1">
            <Mail className="w-4 h-4" />
            <span>john.doe@email.com</span>
          </div>
          <div className="flex items-center gap-1">
            <Phone className="w-4 h-4" />
            <span>+1 234 567 8900</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span>New York, NY</span>
          </div>
          <div className="flex items-center gap-1">
            <Github className="w-4 h-4" />
            <span>github.com/johndoe</span>
          </div>
          <div className="flex items-center gap-1">
            <Linkedin className="w-4 h-4" />
            <span>linkedin.com/in/johndoe</span>
          </div>
        </div>
      </header>

      {/* Summary Section */}
      <section className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 border-b-2 border-gray-300 pb-1">Summary</h2>
        <p className="text-sm md:text-base">
          Experienced software engineer with 8+ years of expertise in full-stack development, 
          specializing in React, Node.js, and cloud technologies. Proven track record of delivering 
          scalable solutions and leading high-performing teams.
        </p>
      </section>

      {/* Skills Section */}
      <section className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 border-b-2 border-gray-300 pb-1">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold mb-2 text-sm md:text-base">Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              {['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'AWS', 'Docker', 'GraphQL', 'MongoDB', 'PostgreSQL'].map((skill) => (
                <span key={skill} className="bg-gray-100 px-3 py-1 rounded-full text-xs md:text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-sm md:text-base">Soft Skills</h3>
            <div className="flex flex-wrap gap-2">
              {['Team Leadership', 'Project Management', 'Communication', 'Problem Solving', 'Agile Methodology'].map((skill) => (
                <span key={skill} className="bg-gray-100 px-3 py-1 rounded-full text-xs md:text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 border-b-2 border-gray-300 pb-1">Experience</h2>
        <div className="space-y-6">
          <div>
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="font-semibold text-base md:text-lg">Senior Software Engineer - Tech Corp</h3>
              <span className="text-sm text-gray-600">2020 - Present</span>
            </div>
            <ul className="list-disc list-inside text-sm md:text-base space-y-1 text-gray-700">
              <li>Led development of cloud-native microservices architecture</li>
              <li>Managed team of 5 developers, improving sprint velocity by 40%</li>
              <li>Implemented CI/CD pipeline reducing deployment time by 60%</li>
            </ul>
          </div>
          <div>
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="font-semibold text-base md:text-lg">Software Engineer - Innovation Labs</h3>
              <span className="text-sm text-gray-600">2017 - 2020</span>
            </div>
            <ul className="list-disc list-inside text-sm md:text-base space-y-1 text-gray-700">
              <li>Developed and maintained multiple React-based applications</li>
              <li>Optimized database queries improving response time by 50%</li>
              <li>Mentored junior developers and led code reviews</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-3 border-b-2 border-gray-300 pb-1">Education</h2>
        <div className="flex justify-between items-baseline">
          <div>
            <h3 className="font-semibold text-base md:text-lg">Bachelor of Science in Computer Science</h3>
            <p className="text-sm md:text-base text-gray-600">University of Technology</p>
          </div>
          <span className="text-sm text-gray-600">2013 - 2017</span>
        </div>
      </section>
    </div>
  );
};

export default Resume;
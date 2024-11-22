import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Award, Calendar, Building } from 'lucide-react';

const Resume = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        {/* Header Section with gradient background */}
        <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-8 md:py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">John Doe</h1>
            <h2 className="text-xl md:text-2xl font-light mb-6">Senior Software Engineer</h2>
            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base max-w-2xl mx-auto">
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                <Mail className="w-4 h-4" />
                <span>john.doe@email.com</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                <Phone className="w-4 h-4" />
                <span>+1 234 567 8900</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                <MapPin className="w-4 h-4" />
                <span>New York, NY</span>
              </div>
            </div>
            <div className="flex justify-center gap-4 mt-6">
              <a href="#" className="hover:text-blue-200 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-blue-200 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </header>

        <div className="p-6 md:p-8">
          {/* Summary Section */}
          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 flex items-center gap-2">
              <Award className="w-6 h-6 text-blue-600" />
              Professional Summary
            </h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Innovative and deadline-driven Software Engineer with 8+ years of experience crafting 
              and optimizing high-performance applications. Demonstrated expertise in full-stack development
              with a strong focus on user experience and scalable architecture. Proven track record of
              leading technical teams and delivering impactful solutions that drive business growth.
            </p>
          </section>

          {/* Skills Section */}
          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 flex items-center gap-2">
              <Award className="w-6 h-6 text-blue-600" />
              Skills & Expertise
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3 text-lg text-gray-700">Technical Proficiency</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python',
                    'AWS', 'Docker', 'GraphQL', 'MongoDB', 'PostgreSQL'
                  ].map((skill) => (
                    <span key={skill} 
                          className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-xs md:text-sm
                                   hover:bg-blue-100 transition-colors duration-200 cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-lg text-gray-700">Professional Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Team Leadership', 'Project Management', 'Agile Methodology',
                    'Problem Solving', 'Technical Architecture', 'Mentoring'
                  ].map((skill) => (
                    <span key={skill} 
                          className="bg-gray-50 text-gray-700 px-4 py-2 rounded-lg text-xs md:text-sm
                                   hover:bg-gray-100 transition-colors duration-200 cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 flex items-center gap-2">
              <Building className="w-6 h-6 text-blue-600" />
              Professional Experience
            </h2>
            <div className="space-y-6">
              <div className="relative pl-8 pb-6 border-l-2 border-blue-600">
                <div className="absolute w-4 h-4 bg-blue-600 rounded-full left-[-9px] top-0"></div>
                <div className="space-y-2">
                  <div className="flex justify-between items-baseline flex-wrap">
                    <h3 className="font-bold text-lg md:text-xl text-gray-800">Senior Software Engineer</h3>
                    <div className="flex items-center gap-2 text-blue-600">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">2020 - Present</span>
                    </div>
                  </div>
                  <p className="text-blue-600 font-medium">Tech Corp, New York</p>
                  <ul className="list-disc list-inside text-sm md:text-base space-y-2 text-gray-600">
                    <li>Architected and implemented cloud-native microservices, improving system scalability by 200%</li>
                    <li>Led and mentored a team of 5 developers, achieving 40% improvement in sprint velocity</li>
                    <li>Established CI/CD pipelines reducing deployment time from 2 hours to 20 minutes</li>
                  </ul>
                </div>
              </div>

              <div className="relative pl-8 border-l-2 border-gray-300">
                <div className="absolute w-4 h-4 bg-gray-300 rounded-full left-[-9px] top-0"></div>
                <div className="space-y-2">
                  <div className="flex justify-between items-baseline flex-wrap">
                    <h3 className="font-bold text-lg md:text-xl text-gray-800">Software Engineer</h3>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">2017 - 2020</span>
                    </div>
                  </div>
                  <p className="text-gray-600 font-medium">Innovation Labs, Boston</p>
                  <ul className="list-disc list-inside text-sm md:text-base space-y-2 text-gray-600">
                    <li>Developed high-performance React applications serving 1M+ monthly active users</li>
                    <li>Optimized database architecture reducing query response time by 50%</li>
                    <li>Implemented automated testing strategies achieving 90% code coverage</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 flex items-center gap-2">
              <Award className="w-6 h-6 text-blue-600" />
              Education
            </h2>
            <div className="bg-gray-50 rounded-lg p-4 md:p-6">
              <div className="flex justify-between items-start flex-wrap gap-2">
                <div>
                  <h3 className="font-bold text-lg text-gray-800">Bachelor of Science in Computer Science</h3>
                  <p className="text-blue-600">University of Technology</p>
                  <p className="text-sm text-gray-600 mt-2">
                    Major in Software Engineering | Minor in Data Science
                  </p>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">2013 - 2017</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume;
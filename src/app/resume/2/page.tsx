import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Award, Book, Briefcase } from 'lucide-react';
import Container from '@/components/Container';
import { useSelector } from 'react-redux';
const ModernResume = () => {
  return (
    <div className='w-full py-6 px-2 md:py-12 bg-[cadetblue]'>
      <Container>
    <div className="w-full m-auto max-w-5xl bg-white min-h-screen">
      {/* Header with gradient background */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 sm:p-6 lg:p-8">
        <div className="flex gap-4 sm:gap-6 lg:gap-8">
          <div className="w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-lg overflow-hidden border-4 border-white/30">
            <div className="w-full h-full bg-white/20"></div>
          </div>
          <div className="flex-1">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">John Anderson</h1>
            <p className="text-sm sm:text-base lg:text-lg text-white/90 mt-1">Senior Software Engineer</p>
            <div className="mt-3 sm:mt-4 flex flex-wrap gap-2 sm:gap-4">
              <div className="flex items-center gap-1 text-xs sm:text-sm">
                <Mail size={12} className="sm:w-4 lg:w-4" />
                <span>john@example.com</span>
              </div>
              <div className="flex items-center gap-1 text-xs sm:text-sm">
                <Phone size={12} className="sm:w-4 lg:w-4" />
                <span>+1 234 567 890</span>
              </div>
              <div className="flex items-center gap-1 text-xs sm:text-sm">
                <MapPin size={12} className="sm:w-4 lg:w-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex gap-2 sm:gap-4 lg:gap-8 p-4 sm:p-6 lg:p-8">
        {/* Left Column */}
        <div className="w-1/3 space-y-4 sm:space-y-6 lg:space-y-8">
          {/* Summary */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Award size={16} className="text-blue-600" />
              <h2 className="text-sm sm:text-base lg:text-lg font-semibold">Professional Summary</h2>
            </div>
            <p className="text-xs sm:text-sm lg:text-base text-gray-600">
              Innovative software engineer with 8+ years of experience in full-stack development. 
              Passionate about building scalable applications and mentoring junior developers.
            </p>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Book size={16} className="text-blue-600" />
              <h2 className="text-sm sm:text-base lg:text-lg font-semibold">Education</h2>
            </div>
            <div className="space-y-3">
              <div className="border-l-2 border-blue-600 pl-3">
                <p className="text-xs sm:text-sm lg:text-base font-medium">Master in Computer Science</p>
                <p className="text-xs sm:text-sm text-gray-600">Stanford University</p>
                <p className="text-xs sm:text-sm text-gray-500">2016 - 2018</p>
              </div>
              <div className="border-l-2 border-purple-600 pl-3">
                <p className="text-xs sm:text-sm lg:text-base font-medium">Bachelor in Software Engineering</p>
                <p className="text-xs sm:text-sm text-gray-600">UC Berkeley</p>
                <p className="text-xs sm:text-sm text-gray-500">2012 - 2016</p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Award size={16} className="text-blue-600" />
              <h2 className="text-sm sm:text-base lg:text-lg font-semibold">Skills</h2>
            </div>
            <div className="flex flex-wrap gap-1 sm:gap-2">
              {[
                'React', 'TypeScript', 'Node.js', 'Python',
                'AWS', 'Docker', 'Kubernetes', 'GraphQL',
                'MongoDB', 'PostgreSQL', 'System Design'
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-2 sm:px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 
                           border border-blue-100 rounded text-xs sm:text-sm text-gray-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs sm:text-sm lg:text-base text-gray-600 hover:text-blue-600">
              <Github size={16} />
              <span>github.com/johnanderson</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm lg:text-base text-gray-600 hover:text-blue-600">
              <Linkedin size={16} />
              <span>linkedin.com/in/johnanderson</span>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-2/3 space-y-4 sm:space-y-6 lg:space-y-8">
          {/* Experience */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Briefcase size={16} className="text-blue-600" />
              <h2 className="text-sm sm:text-base lg:text-lg font-semibold">Professional Experience</h2>
            </div>
            <div className="space-y-4">
              <div className="relative pl-4 border-l-2 border-blue-600">
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 bg-white border-2 border-blue-600 rounded-full"></div>
                <h3 className="text-xs sm:text-sm lg:text-base font-semibold">Senior Software Engineer at TechCorp</h3>
                <p className="text-xs sm:text-sm text-gray-500 mb-2">2020 - Present</p>
                <ul className="list-disc list-inside text-xs sm:text-sm lg:text-base text-gray-600 space-y-1">
                  <li>Led development of microservices architecture serving 1M+ users</li>
                  <li>Implemented CI/CD pipeline reducing deployment time by 60%</li>
                  <li>Mentored team of 5 junior developers in best practices</li>
                </ul>
              </div>
              
              <div className="relative pl-4 border-l-2 border-purple-600">
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 bg-white border-2 border-purple-600 rounded-full"></div>
                <h3 className="text-xs sm:text-sm lg:text-base font-semibold">Full Stack Developer at StartupX</h3>
                <p className="text-xs sm:text-sm text-gray-500 mb-2">2018 - 2020</p>
                <ul className="list-disc list-inside text-xs sm:text-sm lg:text-base text-gray-600 space-y-1">
                  <li>Architected and built company's core product from scratch</li>
                  <li>Improved application performance by 40% through optimization</li>
                  <li>Integrated payment processing system handling $1M+ monthly</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Award size={16} className="text-blue-600" />
              <h2 className="text-sm sm:text-base lg:text-lg font-semibold">Featured Projects</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100">
                <h3 className="text-xs sm:text-sm lg:text-base font-semibold mb-1">Cloud Infrastructure Platform</h3>
                <p className="text-xs sm:text-sm text-gray-600">Developed scalable cloud infrastructure management system using AWS, Docker, and Kubernetes</p>
              </div>
              <div className="p-3 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100">
                <h3 className="text-xs sm:text-sm lg:text-base font-semibold mb-1">AI-Powered Analytics Tool</h3>
                <p className="text-xs sm:text-sm text-gray-600">Built machine learning pipeline for real-time data analysis and visualization</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Container>
    </div>
  );
};

export default ModernResume;
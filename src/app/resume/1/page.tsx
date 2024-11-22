import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import Container from '@/components/Container';

const Resume = () => {
  return (
    <div className='w-full py-6 px-2 md:py-12 bg-[cadetblue]'>
      <Container>
    <div className="w-full max-w-5xl mx-auto   min-h-screen bg-white text-gray-800">
      <div className="flex gap-2 sm:gap-4 lg:gap-8 p-2 sm:p-4 lg:p-8">
        {/* Left Column */}
        <div className="w-1/3 space-y-3 sm:space-y-4 lg:space-y-6">
          {/* Profile Section */}
          <div className="text-center">
            <div className="w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 mx-auto bg-gray-200 rounded-full mb-2 lg:mb-4"></div>
            <h1 className="text-base sm:text-xl lg:text-2xl font-bold">John Doe</h1>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600">Senior Developer</p>
          </div>

          {/* Contact Information */}
          <div className="space-y-2 sm:space-y-3">
            <h2 className="text-sm sm:text-base lg:text-lg font-semibold border-b border-gray-200 pb-1 lg:pb-2">Contact</h2>
            <div className="space-y-1 sm:space-y-2">
              <div className="flex items-center gap-1 sm:gap-2">
                <Mail size={12} className="sm:w-4 lg:w-5 sm:h-4 lg:h-5" />
                <span className="text-xs sm:text-sm lg:text-base">john.doe@email.com</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <Phone size={12} className="sm:w-4 lg:w-5 sm:h-4 lg:h-5" />
                <span className="text-xs sm:text-sm lg:text-base">+1 234 567 890</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <MapPin size={12} className="sm:w-4 lg:w-5 sm:h-4 lg:h-5" />
                <span className="text-xs sm:text-sm lg:text-base">New York, USA</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <Github size={12} className="sm:w-4 lg:w-5 sm:h-4 lg:h-5" />
                <span className="text-xs sm:text-sm lg:text-base">github.com/johndoe</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <Linkedin size={12} className="sm:w-4 lg:w-5 sm:h-4 lg:h-5" />
                <span className="text-xs sm:text-sm lg:text-base">linkedin.com/in/johndoe</span>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2 sm:space-y-3">
            <h2 className="text-sm sm:text-base lg:text-lg font-semibold border-b border-gray-200 pb-1 lg:pb-2">Education</h2>
            <div className="space-y-2 sm:space-y-4">
              <div>
                <p className="text-xs sm:text-sm lg:text-base font-medium">Master of Computer Science</p>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600">Stanford University</p>
                <p className="text-xs sm:text-sm text-gray-500">2018 - 2020</p>
              </div>
              <div>
                <p className="text-xs sm:text-sm lg:text-base font-medium">Bachelor of Engineering</p>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600">MIT</p>
                <p className="text-xs sm:text-sm text-gray-500">2014 - 2018</p>
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="space-y-2 sm:space-y-3">
            <h2 className="text-sm sm:text-base lg:text-lg font-semibold border-b border-gray-200 pb-1 lg:pb-2">Languages</h2>
            <div className="space-y-1 sm:space-y-2">
              <div className="flex justify-between text-xs sm:text-sm lg:text-base">
                <span>English</span>
                <span>Native</span>
              </div>
              <div className="flex justify-between text-xs sm:text-sm lg:text-base">
                <span>Spanish</span>
                <span>Fluent</span>
              </div>
              <div className="flex justify-between text-xs sm:text-sm lg:text-base">
                <span>French</span>
                <span>Intermediate</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-2/3 space-y-3 sm:space-y-4 lg:space-y-6">
          {/* About Me */}
          <div>
            <h2 className="text-sm sm:text-base lg:text-lg font-semibold border-b border-gray-200 pb-1 lg:pb-2">About Me</h2>
            <p className="mt-2 lg:mt-3 text-xs sm:text-sm lg:text-base text-gray-600">
              Passionate senior developer with 8+ years of experience in building scalable web applications.
              Specialized in React, Node.js, and cloud technologies. Strong advocate for clean code and best practices.
            </p>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-sm sm:text-base lg:text-lg font-semibold border-b border-gray-200 pb-1 lg:pb-2">Experience</h2>
            <div className="mt-2 lg:mt-4 space-y-3 sm:space-y-4 lg:space-y-6">
              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-xs sm:text-sm lg:text-base font-medium">Senior Frontend Developer - Tech Corp</h3>
                  <span className="text-xs sm:text-sm text-gray-500">2020 - Present</span>
                </div>
                <ul className="mt-1 lg:mt-2 list-disc list-inside text-xs sm:text-sm lg:text-base text-gray-600">
                  <li>Led a team of 5 developers in rebuilding the company's main product</li>
                  <li>Implemented CI/CD pipeline reducing deployment time by 60%</li>
                  <li>Mentored junior developers and conducted code reviews</li>
                </ul>
              </div>
              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-xs sm:text-sm lg:text-base font-medium">Full Stack Developer - StartUp Inc</h3>
                  <span className="text-xs sm:text-sm text-gray-500">2018 - 2020</span>
                </div>
                <ul className="mt-1 lg:mt-2 list-disc list-inside text-xs sm:text-sm lg:text-base text-gray-600">
                  <li>Developed and maintained multiple client projects</li>
                  <li>Reduced loading time by 40% through optimization</li>
                  <li>Implemented responsive designs for mobile-first approach</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-sm sm:text-base lg:text-lg font-semibold border-b border-gray-200 pb-1 lg:pb-2">Skills</h2>
            <div className="mt-2 lg:mt-4 flex flex-wrap gap-1 sm:gap-2">
              {[
                'React', 'TypeScript', 'Node.js', 'Next.js',
                'Python', 'AWS', 'Docker', 'GraphQL',
                'MongoDB', 'PostgreSQL', 'Redis', 'Git',
                'CI/CD', 'Agile', 'Team Leadership'
              ].map((skill) => (
                <span 
                  key={skill}
                  className="px-2 sm:px-3 py-0.5 sm:py-1 bg-gray-100 text-gray-700 rounded-full text-xs sm:text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-sm sm:text-base lg:text-lg font-semibold border-b border-gray-200 pb-1 lg:pb-2">Projects</h2>
            <div className="mt-2 lg:mt-4 space-y-2 sm:space-y-4">
              <div>
                <h3 className="text-xs sm:text-sm lg:text-base font-medium">E-commerce Platform</h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600">Built a full-stack e-commerce platform using Next.js, TypeScript, and Stripe</p>
              </div>
              <div>
                <h3 className="text-xs sm:text-sm lg:text-base font-medium">Task Management System</h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600">Developed a real-time task management system using React and Firebase</p>
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

export default Resume;
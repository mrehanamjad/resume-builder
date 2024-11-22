import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Star, Code, Bookmark, Award, Box } from 'lucide-react';
import Container from '@/components/Container';

const CreativeResume = () => {
  return (
    <div className='w-full py-6 px-2 md:py-12 bg-[cadetblue]'>
      <Container>
    <div className="w-full min-h-screen bg-gray-50">
      {/* Decorative Header */}
      <div className="h-16 bg-black"></div>

      {/* Main Content Container */}
      <div className="max-w-full px-4 sm:px-6 lg:px-8 -mt-8">
        {/* Profile Card */}
        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 mb-6 border-t-4 border-emerald-500">
          <div className="flex flex-wrap gap-4">
            {/* Profile Picture */}
            <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-gray-200 rounded-lg shadow-inner"></div>
            
            {/* Profile Info */}
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">Sarah Parker</h1>
              <p className="text-sm sm:text-base lg:text-lg text-emerald-600 font-medium mt-1">UX Engineer & Product Designer</p>
              
              {/* Contact Grid */}
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                  <Mail size={14} className="text-emerald-500" />
                  <span>sarah.parker@design.co</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                  <Phone size={14} className="text-emerald-500" />
                  <span>+1 (555) 234-5678</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                  <MapPin size={14} className="text-emerald-500" />
                  <span>Portland, Oregon</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                  <Github size={14} className="text-emerald-500" />
                  <span>github.com/sarahparker</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="flex gap-4 sm:gap-6 lg:gap-8">
          {/* Left Column */}
          <div className="w-1/3 space-y-6">
            {/* About Section */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
              <div className="flex items-center gap-2 mb-3">
                <Star size={18} className="text-emerald-500" />
                <h2 className="text-sm sm:text-base lg:text-lg font-semibold">About Me</h2>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Passionate UX Engineer with 6+ years of experience bridging the gap between design and development. 
                Specialized in creating intuitive, accessible, and performant user interfaces.
              </p>
            </div>

            {/* Skills Section */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
              <div className="flex items-center gap-2 mb-3">
                <Code size={18} className="text-emerald-500" />
                <h2 className="text-sm sm:text-base lg:text-lg font-semibold">Skills</h2>
              </div>
              {/* Skill Bars */}
              {[
                { name: 'UI/UX Design', level: 90 },
                { name: 'React/Next.js', level: 85 },
                { name: 'TypeScript', level: 80 },
                { name: 'Figma', level: 95 },
                { name: 'CSS/Tailwind', level: 90 }
              ].map((skill) => (
                <div key={skill.name} className="mb-2">
                  <div className="flex justify-between text-xs sm:text-sm mb-1">
                    <span>{skill.name}</span>
                    <span className="text-emerald-500">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div 
                      className="h-full bg-emerald-500 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Education Section */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
              <div className="flex items-center gap-2 mb-3">
                <Bookmark size={18} className="text-emerald-500" />
                <h2 className="text-sm sm:text-base lg:text-lg font-semibold">Education</h2>
              </div>
              <div className="space-y-3">
                <div className="border-l-2 border-emerald-500 pl-3">
                  <p className="text-xs sm:text-sm font-medium">Master in Human-Computer Interaction</p>
                  <p className="text-xs sm:text-sm text-gray-600">Carnegie Mellon University</p>
                  <p className="text-xs text-gray-500">2015 - 2017</p>
                </div>
                <div className="border-l-2 border-emerald-500 pl-3">
                  <p className="text-xs sm:text-sm font-medium">BS in Computer Science</p>
                  <p className="text-xs sm:text-sm text-gray-600">University of Washington</p>
                  <p className="text-xs text-gray-500">2011 - 2015</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-2/3 space-y-6">
            {/* Experience Section */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
              <div className="flex items-center gap-2 mb-4">
                <Award size={18} className="text-emerald-500" />
                <h2 className="text-sm sm:text-base lg:text-lg font-semibold">Experience</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-sm sm:text-base font-semibold">Senior UX Engineer - DesignTech</h3>
                      <p className="text-xs sm:text-sm text-emerald-600">2020 - Present</p>
                    </div>
                    <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs rounded">Current</span>
                  </div>
                  <ul className="list-disc list-inside text-xs sm:text-sm text-gray-600 space-y-1">
                    <li>Led the redesign of core product features, increasing user engagement by 45%</li>
                    <li>Established design system used across 5 product teams</li>
                    <li>Mentored junior designers and developers in UX best practices</li>
                  </ul>
                </div>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-sm sm:text-base font-semibold">UI Developer - CreativeStack</h3>
                      <p className="text-xs sm:text-sm text-emerald-600">2017 - 2020</p>
                    </div>
                  </div>
                  <ul className="list-disc list-inside text-xs sm:text-sm text-gray-600 space-y-1">
                    <li>Developed responsive web applications using React and TypeScript</li>
                    <li>Improved website accessibility to meet WCAG 2.1 standards</li>
                    <li>Reduced page load times by 60% through optimization</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Projects Section */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
              <div className="flex items-center gap-2 mb-4">
                <Box size={18} className="text-emerald-500" />
                <h2 className="text-sm sm:text-base lg:text-lg font-semibold">Featured Projects</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: 'Design System Framework',
                    desc: 'Created a comprehensive design system with 100+ components',
                    tech: ['React', 'TypeScript', 'Storybook']
                  },
                  {
                    title: 'E-commerce Platform',
                    desc: 'Led UX design and development for marketplace platform',
                    tech: ['Next.js', 'Tailwind', 'GraphQL']
                  },
                  {
                    title: 'Analytics Dashboard',
                    desc: 'Designed and built real-time analytics interface',
                    tech: ['React', 'D3.js', 'WebSocket']
                  },
                  {
                    title: 'Mobile App Design',
                    desc: 'Created UI/UX design for iOS and Android platforms',
                    tech: ['Figma', 'Protopie', 'React Native']
                  }
                ].map((project) => (
                  <div key={project.title} className="border border-gray-200 rounded-lg p-3 hover:border-emerald-500 transition-colors">
                    <h3 className="text-sm sm:text-base font-medium mb-1">{project.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 mb-2">{project.desc}</p>
                    <div className="flex flex-wrap gap-1">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-2 py-0.5 bg-emerald-50 text-emerald-700 text-xs rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
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

export default CreativeResume;
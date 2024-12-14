'use client'
import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Award, Book, Briefcase } from 'lucide-react';
import Container from '@/components/Container';
import { useAppSelector } from '@/lib/store/hooks';
import Image from 'next/image';

const ModernResume = () => {

  const resumeData = useAppSelector(state => state.resume.resumeData)
  
  return (
    <div className='w-full py-6 px-2 md:py-12 bg-[cadetblue]'>
      <Container>
    <div className="w-full m-auto max-w-5xl bg-white min-h-screen  shadow-2xl">
      
      {/* Header with gradient background */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 sm:p-6 lg:p-8">
        <div className="flex gap-4 sm:gap-6 lg:gap-8">
          <div className="w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-lg overflow-hidden border-4 border-white/30">
            <div className="w-full h-full bg-white/20">
              <Image src={resumeData.personalInfo.image as string || '/image.png'} alt='profile image' height={1000} width={1000} className='h-full w-full' />
            </div>
          </div>
          <div className="flex-1">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">{resumeData.personalInfo.firstName+" "+resumeData.personalInfo.lastName}</h1>
            <p className="text-sm sm:text-base lg:text-lg text-white/90 mt-1">{resumeData.personalInfo.jobTitleApplyFor}</p>
            <div className="mt-3 sm:mt-4 flex flex-wrap gap-2 sm:gap-4">
              <div className="flex items-center gap-1 text-xs sm:text-sm">
                <Mail size={12} className="sm:w-4 lg:w-4" />
                <span>{resumeData.personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-1 text-xs sm:text-sm">
                <Phone size={12} className="sm:w-4 lg:w-4" />
                <span>{resumeData.personalInfo.phone}</span>
              </div>
              <div className="flex items-center gap-1 text-xs sm:text-sm">
                <MapPin size={12} className="sm:w-4 lg:w-4" />
                <span>{resumeData.personalInfo.address}</span>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex gap-2 sm:gap-4 lg:gap-8 p-4 sm:p-6 lg:p-8">
        {/* Left Column */}
        <div className="w-1/3 space-y-4 sm:space-y-6 lg:space-y-8">
          {/* Education */}
        {resumeData.education.length > 0 &&  <div>
            <div className="flex items-center gap-2 mb-2">
              <Book size={16} className="text-blue-600" />
              <h2 className="text-sm sm:text-base lg:text-lg font-semibold">Education</h2>
            </div>
            <div className="space-y-3">
            {resumeData.education?.map((education)=>(
              <div key={education.id} className="border-l-2 border-blue-600 pl-3">
                <p className="text-xs sm:text-sm lg:text-base font-medium">{education.qualification}</p>
                <p className="text-xs sm:text-sm text-gray-600">{education.institutionName}</p>
                <p className="text-xs sm:text-sm text-gray-500">{education.educationStartAndEndDate}</p>
              </div>
                ))}
                </div>
          </div>}

          {/* Skills */}
        {resumeData.skills.length > 0 &&  <div>
            <div className="flex items-center gap-2 mb-2">
              <Award size={16} className="text-blue-600" />
              <h2 className="text-sm sm:text-base lg:text-lg font-semibold">Skills</h2>
            </div>
            <div className="flex flex-wrap gap-1 sm:gap-2">
              {resumeData.skills?.map((skill) => (
                <span
                  key={skill.id}
                  className="px-2 sm:px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 
                           border border-blue-100 rounded text-xs sm:text-sm text-gray-700"
                >
                  {skill.skillName}
                </span>
              ))}
            </div>
          </div>}

          {/* Links */}
          <div className="space-y-2">
          {resumeData.personalInfo.github &&  <div className="flex items-center gap-2 text-xs sm:text-sm lg:text-base text-gray-600 hover:text-blue-600">
              <Github size={16} />
              <span>github.com/johnanderson</span>
            </div>}
          {resumeData.personalInfo.personalWebsite &&  <div className="flex items-center gap-2 text-xs sm:text-sm lg:text-base text-gray-600 hover:text-blue-600">
              <Linkedin size={16} />
              <span>linkedin.com/in/johnanderson</span>
            </div>}
          </div>
        </div>

        {/* Right Column */}
        <div className="w-2/3 space-y-4 sm:space-y-6 lg:space-y-8">
                  {/* Summary */}
                  <div>
            <div className="flex items-center gap-2 mb-2">
              <Award size={16} className="text-blue-600" />
              <h2 className="text-sm sm:text-base lg:text-lg font-semibold">Professional Summary</h2>
            </div>
            <p className="text-xs sm:text-sm lg:text-base text-gray-600">
             {resumeData.aboutMe}
            </p>
          </div>
          {/* Experience */}
    {resumeData.workExperience.length > 0 &&      <div>
            <div className="flex items-center gap-2 mb-3">
              <Briefcase size={16} className="text-blue-600" />
              <h2 className="text-sm sm:text-base lg:text-lg font-semibold">Professional Experience</h2>
            </div>
            <div className="space-y-4">
             { resumeData.workExperience.map((work) => (
              <div className="relative pl-4 border-l-2 border-blue-600">
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 bg-white border-2 border-blue-600 rounded-full"></div>
                <h3 className="text-xs sm:text-sm lg:text-base font-semibold">{work.jobTitle}</h3>
                <p className="text-xs sm:text-sm text-gray-500 mb-2">{work.jobStartAndEndDate}</p>
                <p className="list-disc list-inside text-xs sm:text-sm lg:text-base text-gray-600 space-y-1">
                 {work.jobDescription}
                </p>
              </div>))}
            </div>
          </div>}

          {/* Projects */}
      {resumeData.projects.length > 0 && <div>
            <div className="flex items-center gap-2 mb-3">
              <Award size={16} className="text-blue-600" />
              <h2 className="text-sm sm:text-base lg:text-lg font-semibold">Featured Projects</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {resumeData.projects.map((project) => (
              <div className="p-3 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100">
                <h3 className="text-xs sm:text-sm lg:text-base font-semibold mb-0.5">{project.projectTitle}</h3>
                <p className="text-xs sm:text-sm text-gray-500 mb-1"><span className='text-gray-900 '>Tech:</span> {project.technologyUsed}</p>
                <a className='text-xs sm:text-sm  mb-1 text-blue-500 hover:underline' target='_blank' href={project.projectGithubLink}>Github</a>  <a className='text-xs sm:text-sm  mb-1 text-blue-500 hover:underline'  target='_blank' href={project.projectLink}>Poject Link</a>
                <p className="text-xs sm:text-sm text-gray-600">{project.projectDescription}</p>
              </div>))}
            </div>
          </div>}
        </div>
      </div>
    </div>
    </Container>
    </div>
  );
};

export default ModernResume;
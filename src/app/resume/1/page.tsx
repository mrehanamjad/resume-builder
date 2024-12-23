'use client'
import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Globe } from 'lucide-react';
import Container from '@/components/Container';
import { useAppSelector } from '@/lib/store/hooks';
import Image from 'next/image';


const Resume = () => {

  const resumeData = useAppSelector(state => state.resume)

  return (
    <div className='w-full   '>
      <Container>
    <div className="w-full max-w-5xl mx-auto   min-h-screen bg-white text-gray-800">
      <div className="flex gap-2 sm:gap-4 lg:gap-8 p-2 sm:p-4 lg:p-8">
        {/* Left Column */}
        <div className="w-1/3 space-y-3 sm:space-y-4 lg:space-y-6">
          {/* Profile Section */}
          <div className="text-center">
            <div className="w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 mx-auto bg-gray-200 rounded-full mb-2 lg:mb-4">
            <Image src={resumeData.image as string || '/image.png'} alt='profile image' height={1000} width={1000} className='h-full w-full' />
            </div>
            <h1 className="text-base sm:text-xl lg:text-2xl font-bold">{resumeData.firstName + ' ' + resumeData.lastName}</h1>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600">{resumeData.jobTitleApplyFor}</p>
          </div>

          {/* Contact Information */}
          <div className="space-y-2 sm:space-y-3">
            <h2 className="text-sm sm:text-base lg:text-lg font-semibold border-b border-gray-200 pb-1 lg:pb-2">Contact</h2>
            <div className="space-y-1 sm:space-y-2">
              <div className="flex items-center gap-1 sm:gap-2">
                <Mail size={12} className="sm:w-4 lg:w-5 sm:h-4 lg:h-5" />
                <span className="text-xs sm:text-sm lg:text-base">{resumeData.email}</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <Phone size={12} className="sm:w-4 lg:w-5 sm:h-4 lg:h-5" />
                <span className="text-xs sm:text-sm lg:text-base">{resumeData.phone}</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <MapPin size={12} className="sm:w-4 lg:w-5 sm:h-4 lg:h-5" />
                <span className="text-xs sm:text-sm lg:text-base">{resumeData.address}</span>
              </div>
              {resumeData.github && <div className="flex items-center gap-1 sm:gap-2">
                <Github size={12} className="sm:w-4 lg:w-5 sm:h-4 lg:h-5" />
                <span className="text-xs sm:text-sm lg:text-base">{resumeData.github}</span>
              </div>}
              {resumeData.linkedin && <div className="flex items-center gap-1 sm:gap-2">
                <Linkedin size={12} className="sm:w-4 lg:w-5 sm:h-4 lg:h-5" />
                <span className="text-xs sm:text-sm lg:text-base">{resumeData.linkedin}</span>
              </div>}
              {resumeData.personalWebsite && <div className="flex items-center gap-1 sm:gap-2">
                {/* <Linkedin size={12} className="sm:w-4 lg:w-5 sm:h-4 lg:h-5" /> */}
                <Globe size={12} className="sm:w-4 lg:w-5 sm:h-4 lg:h-5" />
                <span className="text-xs sm:text-sm lg:text-base">{resumeData.personalWebsite}</span>
              </div>}
            </div>
          </div>

          {/* Education */}
    {resumeData.education.length > 0 && <div className="space-y-2 sm:space-y-3">
            <h2 className="text-sm sm:text-base lg:text-lg font-semibold border-b border-gray-200 pb-1 lg:pb-2">Education</h2>
            <div className="space-y-2 sm:space-y-4">
            {resumeData.education?.map((education) => (<div>
                <p className="text-xs sm:text-sm lg:text-base font-medium">{education.qualification}</p>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600">{education.institutionName}</p>
                <p className="text-xs sm:text-sm text-gray-500">{education.educationStartAndEndDate}</p>
              </div>))  }
             
            </div>
          </div>}

          {/* Languages */}
          {/* <div className="space-y-2 sm:space-y-3">
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
          </div> */}
        </div>

        {/* Right Column */}
        <div className="w-2/3 space-y-3 sm:space-y-4 lg:space-y-6">
          {/* About Me */}
          <div>
            <h2 className="text-sm sm:text-base lg:text-lg font-semibold border-b border-gray-200 pb-1 lg:pb-2">About Me</h2>
            <p className="mt-2 lg:mt-3 text-xs sm:text-sm lg:text-base text-gray-600">{resumeData.aboutMe}</p>
          </div>

          {/* Experience */}
         {resumeData.workExperience.length > 0 && (<div>
            <h2 className="text-sm sm:text-base lg:text-lg font-semibold border-b border-gray-200 pb-1 lg:pb-2">Experience</h2>
            <div className="mt-2 lg:mt-4 space-y-3 sm:space-y-4 lg:space-y-6">
            {resumeData.workExperience.map(work => ( <div  key={work.jobTitle} >
                <div className="flex justify-between items-baseline">
                  <h3 className="text-xs sm:text-sm lg:text-base font-medium">{work.jobTitle} - {work.companyName}</h3>
                  <span className="text-xs sm:text-sm text-gray-500">{work.jobStartAndEndDate}</span>
                </div>
                <p className="mt-1 lg:mt-2 text-xs sm:text-sm lg:text-base text-gray-600">
                  {work.jobDescription}
                </p>
              </div>))}
            </div>
          </div>)}

          {/* Skills */}
          <div>
            <h2 className="text-sm sm:text-base lg:text-lg font-semibold border-b border-gray-200 pb-1 lg:pb-2">Skills</h2>
            <div className="mt-2 lg:mt-4 flex flex-wrap gap-1 sm:gap-2">
              {resumeData.skills?.map((skill) => (
                <span 
                  key={skill.skillName}
                  className="px-2 sm:px-3 py-0.5 sm:py-1 bg-gray-100 text-gray-700 rounded-full text-xs sm:text-sm"
                >
                  {skill.skillName}
                </span>
              ))}
            </div>
          </div>

          {/* Projects */}
     {resumeData.projects.length > 0 &&  <div>
            <h2 className="text-sm sm:text-base lg:text-lg font-semibold border-b border-gray-200 pb-1 lg:pb-2">Projects</h2>
            <div className="mt-2 lg:mt-4 space-y-2 sm:space-y-4">
              {resumeData.projects.map(project => ( <div>
                <h3 className="text-xs sm:text-sm lg:text-base font-medium">{project.projectTitle}</h3>
                <span className='text-xs sm:text-sm lg:text-base'>{project.technologyUsed}</span>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600">{project.projectDescription}</p>
                <p className='text-xs sm:text-sm lg:text-base text-blue-400'><a href={project.projectGithubLink}>Github</a> <a href={project.projectLink}>Project Link</a></p>
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

export default Resume;
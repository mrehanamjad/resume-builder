'use client'
import React from 'react';
import { 
  FaUser, 
  FaGraduationCap, 
  FaBriefcase, 
  FaFileAlt,
  FaAward,
  FaLaptopCode,
  FaLightbulb,
  FaChevronRight
} from 'react-icons/fa';

const ResumeSections = () => {
  const sections = [
    {
      id: 1,
      title: 'Personal Details',
      description: 'Contact information and basic details',
      icon: FaUser,
      tips: [
        'Use a professional email address',
        'Include LinkedIn profile',
        'Add location (city/state)',
        'Keep it concise and relevant'
      ]
    },
    {
      id: 2,
      title: 'Professional Summary',
      description: 'Brief overview of your career and expertise',
      icon: FaFileAlt,
      tips: [
        'Keep it under 4 sentences',
        'Highlight key achievements',
        'Use industry keywords',
        'Customize for each application'
      ]
    },
    {
      id: 3,
      title: 'Education',
      description: 'Academic qualifications and achievements',
      icon: FaGraduationCap,
      tips: [
        'List most recent first',
        'Include degree, institution, year',
        'Add relevant coursework',
        'Mention academic honors'
      ]
    },
    {
      id: 4,
      title: 'Work Experience',
      description: 'Professional work history and accomplishments',
      icon: FaBriefcase,
      tips: [
        'Use reverse chronological order',
        'Focus on achievements',
        'Include metrics when possible',
        'Use action verbs'
      ]
    },
    {
      id: 5,
      title: 'Skills',
      description: 'Technical and professional competencies',
      icon: FaLightbulb,
      tips: [
        'Organize by categories',
        'List most relevant first',
        'Include proficiency levels',
        'Match job requirements'
      ]
    },
    {
      id: 6,
      title: 'Courses & Certifications',
      description: 'Additional qualifications and training',
      icon: FaAward,
      tips: [
        'Include relevant certifications',
        'Add completion dates',
        'List recognized certifications first',
        'Show active credentials'
      ]
    },
    {
      id: 7,
      title: 'Projects',
      description: 'Notable personal and professional projects',
      icon: FaLaptopCode,
      tips: [
        'Highlight relevant projects',
        'Include technologies used',
        'Describe impact and results',
        'Add live project links'
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Resume Sections</h2>
      <div className="space-y-4">
        {sections.map((section) => (
          <div 
            key={section.id}
            className="bg-white rounded-lg   p-4 "
          >
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-blue-50 rounded-lg">
                <section.icon className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1 flex items-center">
                    {section.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  {section.description}
                </p>
                <div className="bg-gray-50 rounded-lg p-3">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">
                    Tips:
                  </h4>
                  <ul className="list-disc ml-4 space-y-1">
                    {section.tips.map((tip, index) => (
                      <li key={index} className="text-sm text-gray-600">
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumeSections;
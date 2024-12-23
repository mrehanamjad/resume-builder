// Interfaces

  
export interface EducationI {
    qualification: string;
    institutionName: string;
    educationStartAndEndDate: string;
    educationDescription: string;
  }
  
export  interface WorkExperienceI {
    jobTitle: string;
    companyName: string;
    jobStartAndEndDate: string;
    jobDescription: string;
  }
  
export  interface SkillI {
    skillName: string;
    skillLevel: string;
  }
  
export  interface CourseI {
    courseTitle: string;
    courseInstitutionName: string;
    courseStartAndEndDate: string;
    courseDescription: string;
  }
  
export  interface ProjectI {
    projectTitle: string;
    technologyUsed: string;
    projectGithubLink: string;
    projectLink: string;
    projectDescription: string;
  }
  
export  interface ResumeDataI {
    userId: string;
    resumeId: string;
    aboutMe: string;
    firstName: string;
    lastName: string;
    image?: string | File;
    jobTitleApplyFor: string;
    email: string;
    phone: string;
    address: string;
    linkedin: string;
    personalWebsite: string;
    github: string;
    education: EducationI[];
    workExperience: WorkExperienceI[];
    skills: SkillI[];
    courses: CourseI[];
    projects: ProjectI[];
  }
  


export interface PersonalInfoI {
    firstName: string;
    lastName: string;
    image?: string | File;
    jobTitleApplyFor: string;
    email: string;
    phone: string;
    address: string;
    linkedin: string;
    personalWebsite: string;
    github: string;
}
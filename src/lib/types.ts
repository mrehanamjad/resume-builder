// Interfaces

  
export interface EducationI {
    id?: number;
    qualification: string;
    institutionName: string;
    educationStartAndEndDate: string;
    educationDescription: string;
  }
  
export  interface WorkExperienceI {
    id?: number;
    jobTitle: string;
    companyName: string;
    jobStartAndEndDate: string;
    jobDescription: string;
  }
  
export  interface SkillI {
    id?: number;
    skillName: string;
    skillLevel: string;
  }
  
export  interface CourseI {
    id?: number;
    courseTitle: string;
    courseInstitutionName: string;
    courseStartAndEndDate: string;
    courseDescription: string;
  }
  
export  interface ProjectI {
    id?: number;
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




export interface userDataI {
    "$id":string;
    "$createdAt":string;
    "$updatedAt":string;
    "name":string;
    "registration":string;
    "status": boolean;
    "labels": string[]
    "passwordUpdate":string;
    "email":string;
    "phone":string;
    "emailVerification": boolean;
    "phoneVerification": boolean;
    "mfa": boolean;
    "prefs": any;
    "targets": [
        {
          [key: string]: any;
        }
    ],
    "accessedAt": string;
}
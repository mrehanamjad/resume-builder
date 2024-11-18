import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Interfaces
interface PersonalInfoI {
  firstName: string;
  lastName: string;
  photo?: string | File;
  jobTitleApplyFor: string;
  email: string;
  phone: string;
  address: string;
  linkedin: string;
  personalWebsite: string;
  github: string;
}

interface EducationI {
  qualification: string;
  institutionName: string;
  educationStartAndEndDate: string;
  educationDescription: string;
}

interface WorkExperienceI {
  jobTitle: string;
  companyName: string;
  jobStartAndEndDate: string;
  jobDescription: string;
}

interface SkillI {
  skillName: string;
  skillDescription: string;
}

interface CourseI {
  courseTitle: string;
  courseInstitutionName: string;
  courseStartAndEndDate: string;
  courseDescription: string;
}

interface ProjectI {
  projectTitle: string;
  technologyUsed: string;
  projectGithubLink: string;
  projectWebsiteLink: string;
  projectDescription: string;
}

interface ResumeDataI {
  personalInfo: PersonalInfoI;
  aboutMe: string;
  education: EducationI[];
  workExperience: WorkExperienceI[];
  skill: SkillI[];
  courses: CourseI[];
  projects: ProjectI[];
}

interface ResumeStateI {
  ResumeId: string;
  resumeData: ResumeDataI;
}

// Initial State
const initialState: ResumeStateI = {
  ResumeId: `resID-${Date.now()}`,
  resumeData: {
    personalInfo: {
      firstName: "",
      lastName: "",
      photo: "",
      jobTitleApplyFor: "",
      email: "",
      phone: "",
      address: "",
      linkedin: "",
      personalWebsite: "",
      github: "",
    },
    aboutMe: "",
    education: [],
    workExperience: [],
    skill: [],
    courses: [],
    projects: [],
  },
};

// Redux Slice
const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    setResumeId: (state, action: PayloadAction<string>) => {
      state.ResumeId = action.payload;
    },
    setResumeData: (state, action: PayloadAction<ResumeDataI>) => {
      state.resumeData = action.payload;
    },
    setPersonalInfo: (state, action: PayloadAction<PersonalInfoI>) => {
      state.resumeData.personalInfo = action.payload;
    },
    setAboutMe: (state, action: PayloadAction<string>) => {
      state.resumeData.aboutMe = action.payload;
    },

    setEducation: (state,action: PayloadAction<EducationI[]>)=>{
      state.resumeData.education = action.payload;
    },

    addEducation: (state, action: PayloadAction<EducationI>) => {
      state.resumeData.education.push(action.payload);
    },
    removeEducation: (state, action: PayloadAction<number>) => {
      state.resumeData.education.splice(action.payload, 1);
    },
    editEducation: (
      state,
      action: PayloadAction<{ index: number; education: EducationI }>
    ) => {
      state.resumeData.education[action.payload.index] =
        action.payload.education;
    },
  },
});

// Export Actions and Reducer
export const {
  setResumeId,
  setResumeData,
  setPersonalInfo,
  setAboutMe,
  setEducation,
  addEducation,
  removeEducation,
  editEducation,
} = resumeSlice.actions;

export default resumeSlice.reducer;

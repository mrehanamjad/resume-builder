import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Interfaces
interface PersonalInfoI {
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

interface EducationI {
  id?: number;
  qualification: string;
  institutionName: string;
  educationStartAndEndDate: string;
  educationDescription: string;
}

interface WorkExperienceI {
  id?: number;
  jobTitle: string;
  companyName: string;
  jobStartAndEndDate: string;
  jobDescription: string;
}

interface SkillI {
  id?: number;
  skillName: string;
  skillLevel: string;
}

interface CourseI {
  id?: number;
  courseTitle: string;
  courseInstitutionName: string;
  courseStartAndEndDate: string;
  courseDescription: string;
}

interface ProjectI {
  id?: number;
  projectTitle: string;
  technologyUsed: string;
  projectGithubLink: string;
  projectLink: string;
  projectDescription: string;
}

interface ResumeDataI {
  personalInfo: PersonalInfoI;
  aboutMe: string;
  education: EducationI[];
  workExperience: WorkExperienceI[];
  skills: SkillI[];
  courses: CourseI[];
  projects: ProjectI[];
}

interface ResumeStateI {
  ResumeId: string;
  resumeData: ResumeDataI;
}

// Load state from localStorage
const loadState = (): ResumeStateI | undefined => {
  try {
    const serializedState = localStorage.getItem("resumeState");
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (error) {
    console.error("Failed to load state from localStorage:", error);
    return undefined;
  }
};

// Save state to localStorage
const saveState = (state: ResumeStateI) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("resumeState", serializedState);
  } catch (error) {
    console.error("Failed to save state to localStorage:", error);
  }
};

// Initial State
const initialState: ResumeStateI = loadState() || {
  ResumeId: `resID-${Date.now()}`,
  resumeData: {
    personalInfo: {
      firstName: "",
      lastName: "",
      image: "",
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
    skills: [],
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
      saveState(state); 
    },
    setResumeData: (state, action: PayloadAction<ResumeDataI>) => {
      state.resumeData = action.payload;
      saveState(state); 
    },
    setPersonalInfo: (state, action: PayloadAction<PersonalInfoI>) => {
      state.resumeData.personalInfo = action.payload;
      saveState(state); 
    },
    setAboutMe: (state, action: PayloadAction<string>) => {
      state.resumeData.aboutMe = action.payload;
      saveState(state); 
    },
    setEducation: (state, action: PayloadAction<EducationI[]>) => {
      state.resumeData.education = action.payload;
      saveState(state); 
    },
    addEducation: (state, action: PayloadAction<EducationI>) => {
      state.resumeData.education.push(action.payload);
      saveState(state); 
    },
    removeEducation: (state, action: PayloadAction<number>) => {
      state.resumeData.education.splice(action.payload, 1);
      saveState(state); 
    },
    editEducation: (
      state,
      action: PayloadAction<{ index: number; education: EducationI }>
    ) => {
      state.resumeData.education[action.payload.index] =
        action.payload.education;
      saveState(state); 
    },
    setWorkExperience: (state, action: PayloadAction<WorkExperienceI[]>) => {
      state.resumeData.workExperience = action.payload;
      saveState(state); 
    },
    setCourses: (state, action: PayloadAction<CourseI[]>) => {
      state.resumeData.courses = action.payload;
      saveState(state); 
    },
    setProjects: (state, action: PayloadAction<ProjectI[]>) => {
      state.resumeData.projects = action.payload;
      saveState(state); 
    },
    setSkills: (state, action: PayloadAction<SkillI[]>) => {
      state.resumeData.skills = action.payload;
      saveState(state); 
    },
  },
});

export const {
  setResumeId,
  setResumeData,
  setPersonalInfo,
  setAboutMe,
  setEducation,
  addEducation,
  removeEducation,
  editEducation,
  setWorkExperience,
  setCourses,
  setProjects,
  setSkills,
} = resumeSlice.actions;

export default resumeSlice.reducer;

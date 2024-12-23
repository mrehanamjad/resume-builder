// import { ResumeDataI } from "@/lib/types";
// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// // Load state from localStorage
// const loadState = (): ResumeDataI | undefined => {
//   try {
//     const serializedState = localStorage.getItem("resumeState");
//     return serializedState ? JSON.parse(serializedState) : undefined;
//   } catch (error) {
//     console.error("Failed to load state from localStorage:", error);
//     return undefined;
//   }
// };

// // Save state to localStorage
// const saveState = (state: ResumeDataI) => {
//   try {
//     const serializedState = JSON.stringify(state);
//     localStorage.setItem("resumeState", serializedState);
//   } catch (error) {
//     console.error("Failed to save state to localStorage:", error);
//   }
// };

// // Initial State
// const initialState: ResumeDataI = loadState() || {
//   resumeId: `resID-${Date.now()}`,
//   userId:"",
//   firstName: "",
//   lastName: "",
//   imageId: "",
//   jobTitleApplyFor: "",
//   email: "",
//   phone: "",
//   address: "",
//   linkedin: "",
//   personalWebsite: "",
//   github: "",
//   aboutMe: "",
//   education: [],
//   workExperience: [],
//   skills: [],
//   courses: [],
//   projects: [],
// };

// // Redux Slice
// const resumeSlice = createSlice({
//   name: "resume",
//   initialState,
//   reducers: {
//     setResumeId: (state, action: PayloadAction<string>) => {
//       state. = action.payload;
//       saveState(state);
//     },
//     setResumeData: (state, action: PayloadAction<ResumeDataI>) => {
//       state.resumeData = action.payload;
//       saveState(state);
//     },
//     setPersonalInfo: (state, action: PayloadAction<PersonalInfoI>) => {
//       state.resumeData.personalInfo = action.payload;
//       saveState(state);
//     },
//     setAboutMe: (state, action: PayloadAction<string>) => {
//       state.resumeData.aboutMe = action.payload;
//       saveState(state);
//     },
//     setEducation: (state, action: PayloadAction<EducationI[]>) => {
//       state.resumeData.education = action.payload;
//       saveState(state);
//     },
//     addEducation: (state, action: PayloadAction<EducationI>) => {
//       state.resumeData.education.push(action.payload);
//       saveState(state);
//     },
//     removeEducation: (state, action: PayloadAction<number>) => {
//       state.resumeData.education.splice(action.payload, 1);
//       saveState(state);
//     },
//     editEducation: (
//       state,
//       action: PayloadAction<{ index: number; education: EducationI }>
//     ) => {
//       state.resumeData.education[action.payload.index] =
//         action.payload.education;
//       saveState(state);
//     },
//     setWorkExperience: (state, action: PayloadAction<WorkExperienceI[]>) => {
//       state.resumeData.workExperience = action.payload;
//       saveState(state);
//     },
//     setCourses: (state, action: PayloadAction<CourseI[]>) => {
//       state.resumeData.courses = action.payload;
//       saveState(state);
//     },
//     setProjects: (state, action: PayloadAction<ProjectI[]>) => {
//       state.resumeData.projects = action.payload;
//       saveState(state);
//     },
//     setSkills: (state, action: PayloadAction<SkillI[]>) => {
//       state.resumeData.skills = action.payload;
//       saveState(state);
//     },
//   },
// });

// export const {
//   setResumeId,
//   setResumeData,
//   setPersonalInfo,
//   setAboutMe,
//   setEducation,
//   addEducation,
//   removeEducation,
//   editEducation,
//   setWorkExperience,
//   setCourses,
//   setProjects,
//   setSkills,
// } = resumeSlice.actions;

// export default resumeSlice.reducer;








import { ResumeDataI, PersonalInfoI, EducationI, WorkExperienceI, CourseI, ProjectI, SkillI } from "@/lib/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Load state from localStorage
const loadState = (): ResumeDataI | undefined => {
  try {
    const serializedState = localStorage.getItem("resumeState");
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (error) {
    console.error("Failed to load state from localStorage:", error);
    return undefined;
  }
};

// Save state to localStorage
const saveState = (state: ResumeDataI) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("resumeState", serializedState);
  } catch (error) {
    console.error("Failed to save state to localStorage:", error);
  }
};

// Initial State
const initialState: ResumeDataI = loadState() || {
  resumeId: `resID-${Date.now()}`,
  userId: "",
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
  aboutMe: "",
  education: [],
  workExperience: [],
  skills: [],
  courses: [],
  projects: [],
};

// Redux Slice
const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    setResumeId: (state, action: PayloadAction<string>) => {
      state.resumeId = action.payload; // Fixed target property
      saveState(state);
    },
    setResumeData: (state, action: PayloadAction<ResumeDataI>) => {
      return action.payload; // Replace entire state
    },
    setPersonalInfo: (state, action: PayloadAction<PersonalInfoI>) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
      state.address = action.payload.address;
      state.linkedin = action.payload.linkedin;
      state.personalWebsite = action.payload.personalWebsite;
      state.github = action.payload.github;
      saveState(state);
    },
    setAboutMe: (state, action: PayloadAction<string>) => {
      state.aboutMe = action.payload;
      saveState(state);
    },
    setEducation: (state, action: PayloadAction<EducationI[]>) => {
      state.education = action.payload;
      saveState(state);
    },
    addEducation: (state, action: PayloadAction<EducationI>) => {
      state.education.push(action.payload);
      saveState(state);
    },
    removeEducation: (state, action: PayloadAction<number>) => {
      state.education.splice(action.payload, 1);
      saveState(state);
    },
    editEducation: (state, action: PayloadAction<{ index: number; education: EducationI }>) => {
      state.education[action.payload.index] = action.payload.education;
      saveState(state);
    },
    setWorkExperience: (state, action: PayloadAction<WorkExperienceI[]>) => {
      state.workExperience = action.payload;
      saveState(state);
    },
    setCourses: (state, action: PayloadAction<CourseI[]>) => {
      state.courses = action.payload;
      saveState(state);
    },
    setProjects: (state, action: PayloadAction<ProjectI[]>) => {
      state.projects = action.payload;
      saveState(state);
    },
    setSkills: (state, action: PayloadAction<SkillI[]>) => {
      state.skills = action.payload;
      saveState(state);
    },
  },
});

// Export actions and reducer
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

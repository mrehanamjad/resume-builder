import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice"
import resumeReducer from './recume/resumeSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: authReducer,
      resume: resumeReducer, // Add your resume slice here if you have one.  If not, you can remove this line.  Just remember to import your resume slice in resumeSlice.ts.  You can also add other slices here if you have them.  The name of the slice should match the name of the reducer in your slice file.  For example, if your resume slice file is named 'resumeSlice.ts', then your resume slice should be named 'resume'.
    },
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']


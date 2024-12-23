import { userDataI } from "@/lib/types";
import { createSlice } from "@reduxjs/toolkit";


interface initialStateI {
    status: boolean;
    userData: userDataI | null;
}

const initialState:initialStateI = {
    status: false,
    userData: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        }
    }
})

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
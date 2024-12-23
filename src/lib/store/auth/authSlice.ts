import { createSlice } from "@reduxjs/toolkit";

const initialState:{status:boolean;userData:any} = {
    status: true,
    userData:  {name: 'Rehan Amjad', email: 'rehan@mail.com'},
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
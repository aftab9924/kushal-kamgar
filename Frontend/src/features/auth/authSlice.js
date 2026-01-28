import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:JSON.parse(localStorage.getItem('user')) || null, // I am checking here user is logged or not
    token: localStorage.getItem('token') || null,
    isAuthenticated: !!localStorage.getItem('token'), // "!!" this convert a value ture/false
    loading: false,
    error:"",
};

export const authSlice = createSlice({
    name:"auth",
    initialState,

    reducers : {
        loginStart: (state) => {
            state.loading = true;
            state.error = "";
        },
        loginSuccess: (state,action) => {
           
            const {token,user} = action.payload;
    
            localStorage.setItem("token",token);
            localStorage.setItem("user", JSON.stringify(user));

            state.loading = false;
            state.isAuthenticated = true;
            state.token = token;
            state.user = user;
            state.error = "";
        },
        loginFailure: (state,action) => {
            state.loading = false;
            state.error = action.payload;
        },
        logOut: (state) => {
            localStorage.removeItem("token")
            localStorage.removeItem("user");
            state.user = null;
            state.token =  null;
            state.isAuthenticated = false;
            state.loading = false;
            state.error = "";
        },
    }
});

export const {loginStart, loginSuccess, loginFailure, logOut} = authSlice.actions;
export default authSlice.reducer;
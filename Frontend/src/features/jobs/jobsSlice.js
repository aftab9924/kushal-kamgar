import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    jobs:[],
    loading:false,
    error:"",
};

export const jobsSlice = createSlice({
    name:"jobs",
    initialState,
    reducers:{
        addJobStart: (state) => {
            state.loading = true;
            state.error="";
        },
        addJobSuccess:(state,action) => {
            state.loading=false;
            state.error="";
            state.jobs.unshift(action.payload);
        },
        fetchJobsSuccess: (state,action) => {
            state.loading = false;
            state.error = "";
            state.jobs = action.payload;
        },
        addJobFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
});

export const {addJobStart, addJobSuccess, fetchJobsSuccess, addJobFailure} = jobsSlice.actions;
export default jobsSlice.reducer;
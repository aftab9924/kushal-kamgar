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
        },
        acceptJobSucess: (state,action) => {
            const {jobId, providerName, providerPhone} = action.payload;

            const jobIndex = state.jobs.findIndex(j => j.id === jobId);

            if(jobIndex !== -1){
                state.jobs[jobIndex].status = "ACCEPTED";
                state.jobs[jobIndex].providerName = providerName;
                state.jobs[jobIndex].providerPhone = providerPhone;
            }
        },
    }
});

export const {addJobStart, addJobSuccess, fetchJobsSuccess, addJobFailure, acceptJobSucess} = jobsSlice.actions;
export default jobsSlice.reducer;
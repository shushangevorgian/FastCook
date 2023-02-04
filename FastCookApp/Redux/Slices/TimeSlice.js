import { createSlice } from "@reduxjs/toolkit";
import { GetTimes } from "./TimeAsyncThunk";

const initialState = {
    loading: true,
    successTime:false,
    error: ' ',
    time: [],
    id: [],
    dataTime: [],
    token: null,
}


const TimeSlice = createSlice({
   name: 'time' ,
   initialState,
   extraReducers:{
        [GetTimes.pending]: (state, action)=>{
            state.loading = true
            state.error = action.error

        },
        [GetTimes.fulfilled]: (state,action) =>{
            state.loading = false,
            state.successTime = true,
            state.time = action.payload,
            state.dataTime = action.payload
        },
        [GetTimes.rejected]:(state,action) =>{
            state.loading = false,
            state.successTime = false,
            state.error = action.error.message
        }

   }
})

export default TimeSlice.reducer
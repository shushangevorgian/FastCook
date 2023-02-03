import { createSlice } from "@reduxjs/toolkit";
import { GetIngridient } from "./GetIngridientsAsynckThunck";

const initialState = {
    loading: true,
    successCategory:false,
    error: ' ',
    getIngrigient: [],
    id: [],
    token: null,
}


const GetIngridientSlice = createSlice({
   name: 'getIngrigient' ,
   initialState,
   extraReducers:{
        [GetIngridient.pending]: (state, action)=>{
            state.loading = true
            state.error = action.error

        },
        [GetIngridient.fulfilled]: (state,action) =>{
            state.loading = false,
            state.successCategory = true,
            state.getIngrigient = action.payload
        },
        [GetIngridient.rejected]:(state,action) =>{
            state.loading = false,
            state.successTime = false,
            state.error = action.error.message
        }

   }
})

export default GetIngridientSlice.reducer
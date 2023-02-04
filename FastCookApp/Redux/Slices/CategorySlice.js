import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-test-renderer";
import { GetCategory } from "./CategoryAsyncThunck";

const initialState = {
    loading: true,
    successCategory:false,
    error: ' ',
    category: [],
    data: [],
    id: [],
    token: null,
}


const CategorySlice = createSlice({
   name: 'category' ,
   initialState,
   extraReducers:{
        [GetCategory.pending]: (state, action)=>{
            state.loading = true
            state.error = action.error

        },
        [GetCategory.fulfilled]: (state,action) =>{
            state.loading = false,
            state.successCategory = true,
            state.data = action.payload
            // state.category = action.payload.name
            // state.id = action.payload.id
        },
        [GetCategory.rejected]:(state,action) =>{
            state.loading = false,
            state.successTime = false,
            state.error = action.error.message
        }

   }
})

export default CategorySlice.reducer
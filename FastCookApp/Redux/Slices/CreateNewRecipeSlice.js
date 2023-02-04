import { createSlice } from "@reduxjs/toolkit";
import { CreateNewRecipe } from "./CreateNewRecipeAsyncThunck";

const initialState = {
    loading: true,
    successCreateRecipe:false,
    errorCreateRecipe: ' ',
    token: null,
}


const CraeteNewRecipeSlice = createSlice({
   name: 'createNewRecipe' ,
   initialState,
   extraReducers:{
        [CreateNewRecipe.pending]: (state, action)=>{
            state.loading = true
            state.error = action.error

        },
        [CreateNewRecipe.fulfilled]: (state,action) =>{
            state.loading = false,
            state.successCreateRecipe = true
           

        },
        [CreateNewRecipe.rejected]:(state,action) =>{
            state.loading = false,
            state.successCreateRecipe = false,
            state.error = action.error.message
        }

   }
})

export default CraeteNewRecipeSlice.reducer
import { createSlice } from "@reduxjs/toolkit";
import { CreateIngridient } from "./CreateIngidientAsynckThunck";

const initialState = {
    loading: true,
    success:false,
    error: ' ',
    ingridientCtreate: {},
  
    token: null,
}


const IngridientCreateSlice = createSlice({
   name: 'ingridientCtreate' ,
   initialState,
   extraReducers:{
        [CreateIngridient.pending]: (state, action)=>{
            state.loading = true
            state.error = action.error

        },
        [CreateIngridient.fulfilled]: (state,action) =>{
            state.loading = false,
            state.success = true,
            state.ingridientCtreate = action.payload
        },
        [CreateIngridient.rejected]:(state,action) =>{
            state.loading = false,
            state.success = false,
            state.error = action.error.message
        }

   }
})

export default IngridientCreateSlice.reducer
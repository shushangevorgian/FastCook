import { createSlice } from "@reduxjs/toolkit";
import { SignUpPage } from "./UserAstyncThunks";

const initialState = {
    loading: true,
    success:false,
    error: ' ',
    errorSignUpPage: [],
    token: null,
    
}

export const SignUpSlice  = createSlice({
    name: 'SignUp',
    initialState,

    extraReducers:{
         [SignUpPage.pending]: (state, action)=>{
            state.loading = true
            state.error = action.error
        },
        [SignUpPage.fulfilled]: (state, action)=>{
            state.loading = false
            //state.user = action.payload
            state.success = true
        },
        [SignUpPage.rejected]: (state, action) =>{
            state.loading = false,
            state.errorUsername = action.error.messages
            state.success = false
        },
    
    }
})
export default SignUpSlice.reducer
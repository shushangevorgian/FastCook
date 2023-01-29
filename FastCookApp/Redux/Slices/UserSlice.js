import { createSlice } from '@reduxjs/toolkit';
import { LoginPage, SignUpPage, CheckCodeVerify, ForgotPage } from './UserAstyncThunks';

const initialState = {
    user: {},
    loading: true,
    success:false,
    error: ' ',
    errorUsername: [],
    token: null,
    messages: []
}


export const UserSlice = createSlice({
    name: 'user',
    initialState,

    extraReducers:{
        [LoginPage.pending]:(state, action) =>{
            state.loading=true
            state.error = action.error
        },
       
        [LoginPage.fulfilled]:(state, action) =>{
            state.loading = false
            state.user = action.payload
            state.success = true

        },
        [LoginPage.rejected]: (state, action) =>{
            state.loading = false,
            state.error = action.error.message
            state.success = false
            sate.messages= action.error.messages
        },
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
        [CheckCodeVerify.pending]: (state, action) =>{
            state.loading=true,
            state.error = action.error
           
        },
        [CheckCodeVerify.fulfilled]: (state,action)=>{
            state.loading = false
            state.token = action.payload
            state.success = true
        },
        [CheckCodeVerify.rejected]: (state, action) => {
            state.loading = false
            state.error = action.error.message
            state.success = false
        },
      
        

    }
})

export default UserSlice.reducer;
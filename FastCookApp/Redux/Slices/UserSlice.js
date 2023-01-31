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
            state.messages= action.error.messages
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
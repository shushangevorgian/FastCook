import { createSlice } from '@reduxjs/toolkit';
import { LoginPage, SignUpPage } from './UserAstyncThunks';
const initialState = {
    user: [],
    loading: true
}


export const UserSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers:{
        [LoginPage.pending]:(state, action) =>{
            state.loading=true;
        },
        [LoginPage.fulfilled]:(state, action) =>{
            state.loading = false;
        },
        [SignUpPage.pending]: (state)=>{
            state.loading = true
        },
        [SignUpPage.fulfilled]: (state)=>{
            state.loading = false
        }

    }
})

export default UserSlice.reducer;
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { LoginRequest } from '../Links/LinkForLogin';
import { SetData, SetToken } from '../Links/AsyncStorage';
const initialState = {
    user: [],
    loading: true
}



export const LoginPage = createAsyncThunk('user', async function(data){
    try{
        const response = await LoginRequest({username: data.username, password: data.password})
        console.log(response.data.user);
        const userData = response?.data
        if(userData){
            SetToken(userData)
            SetData(userData) 
        }
    }
    catch(err){
        console.log(err);
    }

})



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

    }
})

export default UserSlice.reducer;
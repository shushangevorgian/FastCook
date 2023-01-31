import { createSlice } from '@reduxjs/toolkit';
import { CreateNewPassLogin } from './UserAstyncThunks';
const initialState = {
    loading: true,
    success:false,
    error: ' ',
    token: null,
    messages: [],
    password: ""
}
export const CreateNewPassForLogin = createSlice({
    name: 'CreatePass',
    initialState,
    extraReducers:{
    [CreateNewPassLogin.pending]:(state, action) => {
        state.loading = true
        state.error = action.error 
    },
    [CreateNewPassLogin.fulfilled]: (state, action) =>{
        state.loading = false
        //state.user = action.payload
        state.success = true
        state.password= action.payload
    },
    [CreateNewPassLogin.rejected]: (state, action) => {
        state.success = false,
        state.error = action.error.message
    }
    }
})
export default CreateNewPassForLogin.reducer;
import { createSlice } from '@reduxjs/toolkit';
import { ForgotPage } from './UserAstyncThunks';

const initialState = {
    forgotpassdata: {},
    loading: true,
    successForgot:false,
    error: ' ',

    token: null,
    messages: []
}
export const ForgotSlice = createSlice({
    name: 'forgotpassdata',
    initialState,
    extraReducers:{
    [ForgotPage.pending]:(state, action) => {
        state.loading = true
        state.error = action.error 
    },
    [ForgotPage.fulfilled]: (state, action) =>{
        state.loading = false
        //state.user = action.payload
        state.successForgot = true
    },
    [ForgotPage.rejected]: (state, action) => {
        state.successForgot = false,
        state.error = action.error.message
    }
    }
})

export default ForgotSlice.reducer;
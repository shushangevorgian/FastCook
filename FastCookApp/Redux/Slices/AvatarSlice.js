import { createSlice } from '@reduxjs/toolkit';
import { SetAvatar } from "./AvatarAsyncThunk";
const initialState = {
    image: '',
    loading: true,
    success:false,
    error: ' ',
    token: null,

}
export const AvatarSlice = createSlice({
    name: 'CreatePass',
    initialState,
    extraReducers:{
    [SetAvatar.pending]:(state, action) => {
        state.loading = true
        state.error = action.error 
    },
    [SetAvatar.fulfilled]: (state, action) =>{
        state.loading = false
        //state.user = action.payload
        state.success = true
        //state.image = action.payload.image.path
    },
    [SetAvatar.rejected]: (state, action) => {
        state.success = false,
        state.error = action.error.message
    }
    }
})
export default AvatarSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import { GetSearchResult } from "./SearchAsyncThunk";


const initialState = {
    getSearchResult:[],
    loading: true,
    success:false,
    error: ' ',
    errorSignUpPage: [],
    token: null,
    
}
const SearchSlice = createSlice({
    name: 'getSearchResult',
    initialState,

    extraReducers:{
         [GetSearchResult.pending]: (state, action)=>{
            state.loading = true
            state.error = action.error
        },
        [GetSearchResult.fulfilled]: (state, action)=>{
            state.loading = false
            state.getSearchResult = action.payload
            state.success = true
        },
        [GetSearchResult.rejected]: (state, action) =>{
            state.loading = false,
            state.errorUsername = action.error.messages
            state.success = false
        },
    
    }
})

export default SearchSlice.reducer
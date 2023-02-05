import { createSlice } from "@reduxjs/toolkit";
import { FilterSearch } from "./filterSearchAsynckTunck";
const initialState = {
    filterSearch:{},
    data: [],
    loading: true,
    success:false,
    error: ' ',
    token: null,
    messages: [],
    password: ""
}
export const filterSearchSlice = createSlice({
    name: 'filterSearch',
    initialState,
    extraReducers:{
    [FilterSearch.pending]:(state, action) => {
        state.loading = true
        state.error = action.error 
    },
    [FilterSearch.fulfilled]: (state, action) =>{
        state.loading = false
        state.filterSearch = action.payload
        //state.user = action.payload
        state.success = true
        //state.password= action.payload
    },
    [FilterSearch.rejected]: (state, action) => {
        state.success = false,
        state.error = action.error.message
    }
    }
})
export default filterSearchSlice.reducer;
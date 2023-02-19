import { createAsyncThunk } from "@reduxjs/toolkit";
import { SearchRequest } from "../Links/LinksForSearch";


export const GetSearchResult = createAsyncThunk('getSearchResult',async function(name){
    console.log("search value")
    try{
        const response = await SearchRequest(name)
        console.log("search result=========",response.data);

    }catch(error){
        Promise.reject(error.response)
    }
})
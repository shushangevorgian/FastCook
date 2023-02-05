import { createAsyncThunk } from "@reduxjs/toolkit";
import {filterSearchRequest} from "../Links/LinkForFilterSearch.js"

export const FilterSearch = createAsyncThunk('filterSearch', async function(data){
    console.log("dataaa", data)
    try{
        const response = await filterSearchRequest({category_id: data.searchCategoryId, ingredient_list: data.ingredientChoiceid, time_id: data.searchTimeId})
        console.log(response, "respppppp");
        return Promise.resolve('success');
    }
    catch(error){
        return Promise.reject(error.response)
    }
})
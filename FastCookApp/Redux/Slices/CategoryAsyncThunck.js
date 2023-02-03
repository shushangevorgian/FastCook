import { createAsyncThunk } from "@reduxjs/toolkit";
import { CategoryRequest } from "../Links/LinkForAddinRecipe";

export const GetCategory = createAsyncThunk('category', async function(){
    try{
        const response = await  CategoryRequest()
        // console.log(response,"ressss")
        console.log("resopnseeee=======",JSON.stringify(response.data))
        console.log(response.data[0].map((item) => item.name));
        return response.data[0].map((item) => item.name)
    }
    catch(error){
        Promise.reject(error.response)
    }
})
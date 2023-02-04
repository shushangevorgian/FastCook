import { createAsyncThunk } from "@reduxjs/toolkit";
import { GetIngridientListRequest } from "../Links/LinkForAddinRecipe";


export const GetIngridient = createAsyncThunk('getIngrigient', async function(){
    try{
        const response = await GetIngridientListRequest()
        // console.log("resopnseeee=======",JSON.stringify(response.data))
        // console.log(response.data[0].map((item) => item.name));
        // return response.data[0].map((item) => item.name)
        //         // console.log(response, "ressp");
        return response.data[0]
    }
    catch(error){
        return Promise.reject(error.response)
    }
})
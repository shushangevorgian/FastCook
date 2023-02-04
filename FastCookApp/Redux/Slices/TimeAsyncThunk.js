import { TimeRequest } from "../Links/LinkForAddinRecipe";
import { createAsyncThunk } from "@reduxjs/toolkit";

 export const GetTimes = createAsyncThunk('time', async function(){
    console.log("hello")
    try{
            const response = await TimeRequest()
        //     console.log("resopnseeee=======",JSON.stringify(response.data))
        //     console.log(response.data[0].map((item) => item.time));
        //     return response.data[0].map((item) => item.time)
        return response.data[0]
            
    }
    catch(error){
            Promise.reject(error.response)
    }
})
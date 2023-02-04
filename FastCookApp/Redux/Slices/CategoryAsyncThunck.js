import { createAsyncThunk } from "@reduxjs/toolkit";
import { CategoryRequest } from "../Links/LinkForAddinRecipe";

export const GetCategory = createAsyncThunk('category', async function(){
    try{
        const response = await  CategoryRequest()
        // console.log(response,"ressss")
        console.log("resopnseeee=======",JSON.stringify(response.data))
        // console.log(response.data[0].map((item) => item.name));
        // const name = response.data[0].map((item) => item.name && item.id)
        // const id = response.data[0].map((item) => item.id)
        // console.log(name, "idissssss")
        // return {name:name,  }
        console.log("final data", response.data[0])
        return response.data[0]
    }
    catch(error){
        Promise.reject(error.response)
    }
})
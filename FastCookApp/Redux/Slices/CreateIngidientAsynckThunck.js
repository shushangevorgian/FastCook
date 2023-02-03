import { createAsyncThunk } from "@reduxjs/toolkit";
import { IngridientCreateRequest } from "../Links/LinkForAddinRecipe";


export const CreateIngridient = createAsyncThunk('ingridientCtreate', async function(data){
    console.log("dataaaaaaa", data);
    try{
        const response = await IngridientCreateRequest({name: data.name, calories: data.calories})
        console.log(response.data,"respp");
    }
    catch(error){
        Promise.reject(error.response)
    }
})
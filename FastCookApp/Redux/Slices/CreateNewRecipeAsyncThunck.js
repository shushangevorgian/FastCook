import { createAsyncThunk } from "@reduxjs/toolkit";
import { CreateNewRecipeRequest } from "../Links/LinkForAddinRecipe";


export const CreateNewRecipe = createAsyncThunk("createNewRecipe", async function(data){
    console.log('image Chosed', data.image);
    const {mime, path} = data.image;
    try {
      const formData = new FormData();
      formData.append('name', data.categoryValue)
      formData.append('category_id', data.categoryid )
      formData.append('time_id', data.timeId)
      formData.append('ingredient_list[0]', data.ingridientId)
      formData.append('ingredient_list[1]', data.ingridientId)
      formData.append('description', data.description)
      formData.append('image', {
        uri: path,
        name: 'image.png',
        // fileName: 'image',
        type: mime,
      });
      console.log('form data ', formData);
      const response = await CreateNewRecipeRequest(formData);
      console.log('success', response);
      return Promise.resolve('success');
    }
    catch(error){
        return Promise.reject(error.response)
    }
})
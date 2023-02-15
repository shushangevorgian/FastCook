import { instanseLogin } from "./LinkForLogin";


export const GetUserRecipes = () => {
    return instanseLogin.get('/recipe?page=1&search=')
}


export const DeleteUserRecipeRequest = (id) =>{
    return instanseLogin.delete(`/recipe?id=${id}`)
}

export const UpdateUserRecipe = (id) =>{
    return instanseLogin.patch(`/recipe?id=${id}`)
}
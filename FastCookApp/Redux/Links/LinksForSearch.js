import { instanseLogin } from "./LinkForLogin";

export const SearchRequest = (name) => {
    return(
        instanseLogin.get(`/recipe?page=1&search=${name}`)
    )
}
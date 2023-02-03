import {instanseLogin} from './LinkForLogin';
export const TimeRequest = () =>{
    console.log("Request");
    return instanseLogin.get('/recipe/times?page=')
}

export const CategoryRequest = () =>{
    return instanseLogin.get('/recipe/categories?page=')
}

export const IngridientCreateRequest = (data) =>{
    return instanseLogin.post('/ingredient', data)
}

export const GetIngridientListRequest = () => {
    console.log("request ingridient");
    return instanseLogin.get('/recipe/ingredients?page=')
}
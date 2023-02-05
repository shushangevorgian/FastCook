import {instanseLogin} from './LinkForLogin';
export const filterSearchRequest = (data) =>{
    return instanseLogin.post('/recipe/filter', data)
}
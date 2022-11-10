import axios from "axios";
import { GetToken } from "./AsyncStorage";
export const instanseLogin = axios.create({
    baseURL: "",

})


export const LoginRequest = (data) =>{
        return instanseLogin.post('/user/login', data)
}

instanseLogin.interceptors.request.use(
    config => {
        const token = GetToken();
        console.log(token, 'rtr')
        if (token) {
            config.headers['Authorization'] = 'Bearer ' + token;
        }
        return config;
    },
    error => {
        Promise.reject(error)
    });


instanseLogin.interceptors.response.use(
    response => response,
    error => {
        const token = GetToken()
        if (token === null) {
            return undefined;
        }

        return Promise.reject(error);
    });
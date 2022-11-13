import { instanseLogin } from "./LinkForLogin";

export const SignUpRequest = (data) =>{
    return instanseLogin.post('/user/registration', data)
}
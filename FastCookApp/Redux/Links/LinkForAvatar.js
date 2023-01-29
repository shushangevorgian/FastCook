import { instanseLogin } from "./LinkForLogin";
export const AvatarRequest = (data) =>{
    instanseLogin.post('/user/avatar', data)
}

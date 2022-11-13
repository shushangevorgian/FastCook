import { instanseLogin } from "./LinkForLogin";

export const forgotPassRequest = (data) => {
    instanseLogin.post('/user/forgot_password', data)
}
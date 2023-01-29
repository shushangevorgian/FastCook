import { instanseLogin } from "./LinkForLogin";

// export const SignUpRequest = (data) =>{
//     return instanseLogin.post('/user/registration', data)
// }
export const SignUpRequest = (data) =>{
    return instanseLogin.post('/user/registration', data)
    
}

export const VaerifyCodRequest = (data)=>{
    console.log(data, "token");
    return(

     instanseLogin.post('/user/verify', data)
    )
}
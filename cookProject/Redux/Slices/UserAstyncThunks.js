
import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoginRequest } from '../Links/LinkForLogin';
import { SetToken,SetDataLogin, SetDataForgotPass, SetDataSignUp } from '../Links/AsyncStorage';
import { SignUpRequest } from '../Links/LinkForSignUp';
import { forgotPassRequest } from '../Links/LinkForForgotPassword';


export const LoginPage = createAsyncThunk('user', async function(data){
    try{
        const response = await LoginRequest({username: data.username, password: data.password})
        console.log(response.data.user);
        const userData = response?.data
        if(userData){
            SetToken(userData)
            SetDataLogin(userData) 
        }
    }
    catch(err){
        console.log(err);
    }

})


export const SignUpPage = createAsyncThunk('user', async function(data){
    try{
        const response = await SignUpRequest({username: data.username, name:data.name, email: data.email, phone: data.phone, password:data.password})
        const userData = response?.data
        if(userData){
            SetDataSignUp(userData) 
        }
    }
    catch(err){
        console.log(err);
    }
})


export const ForgotPage = createAsyncThunk('user', async function(data){
    try{
        const response = await forgotPassRequest({email: data.email})
        const userData = response?.data
        if(userData){
            SetDataForgotPass(userData) 
        }
    }
    catch(err){

        console.log(err)
    }
})
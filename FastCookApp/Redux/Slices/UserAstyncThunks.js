import {createAsyncThunk} from '@reduxjs/toolkit';
import {LoginRequest} from '../Links/LinkForLogin';
import {
  SetToken,
  SetDataLogin,
  SetDataForgotPass,
  SetDataSignUp,
  SetDataConfirmCode,
} from '../Links/AsyncStorage';
import {SignUpRequest, VaerifyCodRequest} from '../Links/LinkForSignUp';
import {
  createNewPassRequest,
  forgotConfirmRequest,
  forgotPassRequest,
} from '../Links/LinkForForgotPassword';

export const LoginPage = createAsyncThunk('user', async function (data) {
  console.log('login err');
  try {
    const response = await LoginRequest({
      username: data.username,
      password: data.password,
    });
    console.log(response.data.user);
    const userData = response?.data;
    if (userData) {
      SetToken(userData);
      SetDataLogin(userData);
    }
  } catch (error) {
    return Promise.reject(error.response.data);
  }
});

export const SignUpPage = createAsyncThunk('SignUp', async function (data) {
  console.log('SIGNNNNNN');
  try {
    const response = await SignUpRequest({
      username: data.username,
      name: data.name,
      email: data.email,
      phone: data.phone,
      password: data.password,
    });
    const userData = response?.data;
    if (userData) {
      SetDataSignUp(userData);
    }
  } catch (error) {
    // return Promise.reject(JSON.stringify(error.response.data.messages));
    return Promise.reject("error");
  
  }
});

export const CheckCodeVerify = createAsyncThunk('SignVerify', async function (data) {
  console.log('Verifyyy', data);
  try {
    const response = await VaerifyCodRequest({token: data.token});
    console.log('res', response.data);
  } catch (error) {
    return Promise.reject(error.response.data.message);
  }
});

export const ForgotPage = createAsyncThunk('forgot', async function (data) {
  try {
    const response = await forgotPassRequest({email: data.email});
    const userData = response?.data;
    if (userData) {
      SetDataForgotPass(userData);
    }
    return Promise.resolve(userData);
  } catch (error) {
    console.log(error);
    return Promise.reject(error.response.data.message);
  }
});

export const ConfirmForgotCode = createAsyncThunk(
  'forgotConfirm',
  async function (data) {
    console.log('confirm cod for passsword');
    try {
      const response = await forgotConfirmRequest({token: data.token});
      const userData = response?.data;
      if (userData) {
        SetDataConfirmCode(userData);
        console.log('res', response.data);
      }
      return Promise.resolve(userData);
    } catch (error) {
      return Promise.reject(error.response.data.message);
    }
  },
);
///////////////?????????????
export const CreateNewPassLogin = createAsyncThunk('createPass', async function (token, {data}) {
    console.log(data, 'createeee');
    try {
      const response = await createNewPassRequest( token, {password: data.password});
      return {
        data: {
            password: response.data.password
        }
    }
      
    } catch (error) {
      return Promise.reject(error.response.data.message);
    }
  },
);

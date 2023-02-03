import axios from 'axios';
import {GetToken} from './AsyncStorage';
export const instanseLogin = axios.create({
  baseURL: 'http://34.107.8.120',
  //baseURL: 'http://192.168.2.102:3022'
});

export const LoginRequest = data => {
  return instanseLogin.post('/user/login', data);
};

instanseLogin.interceptors.request.use(
  async config => {
    console.log(config, 'config');
    const token = await GetToken();
    console.log(token, 'rtr');
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token;
    }
    return config;
  },
  error => {
    Promise.reject(error);
  },
);

instanseLogin.interceptors.response.use(
  response => response,
  error => {
    // console.log(response, 'resp');
    console.log(error, 'error intercept');
    const token = GetToken();
    if (token === null) {
      return undefined;
    }

    return Promise.reject(error);
  },
);

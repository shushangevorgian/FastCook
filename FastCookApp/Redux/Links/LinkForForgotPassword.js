import {instanseLogin} from './LinkForLogin';

export const forgotPassRequest = data => {
  return instanseLogin.post('/user/forgot_password', data);
};
export const forgotConfirmRequest = data => {
  return instanseLogin.post('/user/verify_password', data);
};

export const createNewPassRequest = (token, data) => {
  console.log('passssssssssss', token);
  return instanseLogin.post(`/user/reset_password?token=${token}`, data);
};

import {instanseLogin} from './LinkForLogin';
export const AvatarRequest = data => {
  console.log(data, 'data');
  return instanseLogin.post('/user/avatar', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

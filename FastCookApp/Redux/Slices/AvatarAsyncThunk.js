import {createAsyncThunk} from '@reduxjs/toolkit';
import {AvatarRequest} from '../Links/LinkForAvatar';
export const SetAvatar = createAsyncThunk('avatar', async function (imagePath) {
  console.log('image Chosed', imagePath);
  const {mime, path} = imagePath;
  try {
    const formData = new FormData();
    formData.append('image', {
      uri: path,
      name: 'image.png',
      // fileName: 'image',
      type: mime,
    });
    console.log('form data ', formData);
    const response = await AvatarRequest(formData);
    console.log('success', response);
    return Promise.resolve('success');
  } catch (error) {
    console.log('error============', error);
    // return Promise.reject(error.response.data)
  }
});

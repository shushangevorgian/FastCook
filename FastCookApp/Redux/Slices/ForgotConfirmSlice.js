import {createSlice} from '@reduxjs/toolkit';
import {ConfirmForgotCode} from './UserAstyncThunks';

const initialState = {
  forgotpassdata: {},
  loading: true,
  successConfirm: false,
  error: ' ',

  token: null,
  messages: [],
};
export const ForgotConfirmSlice = createSlice({
  name: 'confirmPass',
  initialState,
  extraReducers: {
    [ConfirmForgotCode.pending]: (state, action) => {
      state.loading = true;
      state.error = action.error;
    },
    [ConfirmForgotCode.fulfilled]: (state, action) => {
      console.log('fulfilled');
      state.loading = false;
      //state.user = action.payload
      state.successConfirm = true;
    },
    [ConfirmForgotCode.rejected]: (state, action) => {
      (state.successConfirm = false), (state.error = action.error.message);
    },
  },
});

export default ForgotConfirmSlice.reducer;

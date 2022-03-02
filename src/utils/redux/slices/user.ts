import { createSlice } from '@reduxjs/toolkit';

import { IUserReducer } from '@interfaces/user';
import { signInAction, authAction } from '../actions/user';

const initialState: IUserReducer = {
  user: null,
  signInPending: false,
  signInFulfilled: false,
  signInRejected: '',
  authPending: false,
  authFulfilled: false,
  authRejected: '',
};

export const userSlice = createSlice({
  initialState,
  name: 'user',
  reducers: {},
  extraReducers: builder =>
    builder
      // SIGN IN
      .addCase(signInAction.pending, state => {
        state.signInPending = true;
        state.signInFulfilled = false;
        state.signInRejected = '';
      })
      .addCase(signInAction.fulfilled, (state, action) => {
        state.user = action.payload;

        state.signInPending = false;
        state.signInFulfilled = true;
        state.signInRejected = '';
      })
      .addCase(signInAction.rejected, (state, action) => {
        state.signInPending = false;
        state.signInFulfilled = false;
        state.signInRejected = action.error.message ?? '';
      })

      // AUTH
      .addCase(authAction.pending, state => {
        state.authPending = true;
        state.authFulfilled = false;
        state.authRejected = '';
      })
      .addCase(authAction.fulfilled, (state, action) => {
        state.user = action.payload;

        state.authPending = false;
        state.authFulfilled = true;
        state.authRejected = '';
      })
      .addCase(authAction.rejected, (state, action) => {
        state.authPending = false;
        state.authFulfilled = false;
        state.authRejected = action.error.message ?? '';
      })
      .addDefaultCase(state => state),
});

export default userSlice;

import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  register,
  logIn,
  logOut,
  refreshUser,
  updateUserInfo,
} from './operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: '',
      email: '',
      avatarUrl: '',
      phone: '',
      skype: '',
      birthday: '',
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    isLoading: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        console.log(action.payload);
        return {
          ...state,
          user: action.payload.user,
          token: action.payload.token,
          isLoggedIn: true,
        };
      })
      .addCase(logOut.fulfilled, state => {
        state.user = {
          name: '',
          email: '',
          avatarUrl: '',
          phone: '',
          skype: '',
          birthday: '',
        };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
        state.isLoading = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.isLoading = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
        state.isLoading = false;
      })
      .addCase(updateUserInfo.fulfilled, (state, action) => {
        state.user = action.payload;
      });
  },
});

const persistConfig = {
  key: 'auth',
  storage,
};

export const persistedAuthSlice = persistReducer(
  persistConfig,
  authSlice.reducer
);

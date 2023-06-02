import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  register,
  logIn,
  logOut,
  refreshUser,
  updateAvatar,
} from './operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: '', email: '', avatarUrl: '' },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.id = action.payload.id;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.id = action.payload.id;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: '', email: '', avatarUrl: '' };
        state.id = null;
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(updateAvatar.fulfilled, (state, action) => {
        state.user.avatarUrl = action.payload.avatarUrl;
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

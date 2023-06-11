import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  register,
  logIn,
  logOut,
  currentUser,
  updateUserInfo,
} from './operations';

const emptyUser = {
  name: '',
  email: '',
  avatarUrl: '',
  phone: '',
  skype: '',
  birthday: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: emptyUser,
    accessToken: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  reducers: {
    updateAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        return {
          ...state,
          user: action.payload.user,
          accessToken: action.payload.accessToken,
          isLoggedIn: true,
        };
      })
      .addCase(logOut.fulfilled, state => {
        // todo очистити стейт задач
        state.user = emptyUser;
        state.accessToken = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })
      .addCase(currentUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(currentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(currentUser.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(updateUserInfo.fulfilled, (state, action) => {
        state.user = action.payload.user;
      });
  },
});

export const { updateAccessToken } = authSlice.actions;

const persistConfig = {
  key: 'auth',
  whitelist: ['accessToken', 'user'],
  storage,
};

export const persistedAuthReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);

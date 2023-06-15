import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import { CleanHands } from '@mui/icons-material';
// const { REACT_APP_API_URL } = process.env;

export const instance = axios.create({
  baseURL: 'https://githack-goosetrack.onrender.com/api',
});

const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;

const setAuthHeader = accessToken => {
  if (accessToken) {
    return (instance.defaults.headers.common.Authorization = `Bearer ${accessToken}`);
  }
  return (instance.defaults.headers.common.Authorization = '');
};

instance.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      // Треба, щоб коли розлогінювались не намагались підʼєднатися знову
      if (originalRequest.url === '/users/logout') return Promise.reject(error);

      originalRequest._retry = true;
      const refreshToken = localStorage.getItem('refreshToken');
      try {
        const res = await instance.post('/users/refresh', { refreshToken });

        setAuthHeader(res.data.accessToken);
        localStorage.setItem('refreshToken', res.data.refreshToken);
        originalRequest.headers[
          'Authorization'
        ] = `Bearer ${res.data.accessToken}`;
        return instance(originalRequest);
      } catch (err) {
        return Promise.reject(err);
      }
    }
    return Promise.reject(error);
  }
);

export const register = createAsyncThunk(
  '/users/register',
  async ({ name, email, password }, thunkAPI) => {
    try {
      const res = await instance.post('/users/register', {
        name,
        email,
        password,
      });
      setAuthHeader(res.data.accessToken);
      localStorage.setItem('refreshToken', res.data.refreshToken);
      Notify.success(`Welcome!!!`);
      return res.data;
    } catch (error) {
      Notify.failure(`Bad request`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  '/users/login',
  async ({ email, password }, thunkAPI) => {
    try {
      const res = await instance.post('/users/login', {
        email,
        password,
      });
      setAuthHeader(res.data.accessToken);
      localStorage.setItem('refreshToken', res.data.refreshToken);
      Notify.success(`Welcome!!!`);
      return res.data;
    } catch (error) {
      Notify.failure(`Bad request`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('/users/logout', async (_, thunkAPI) => {
  try {
    const result = await instance.post('/users/logout');
    setAuthHeader();
    return result;
  } catch (error) {
    if (error.response.status === 401) {
      setAuthHeader();
      return;
    }
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const currentUser = createAsyncThunk(
  '/users/current',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.accessToken;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const res = await instance.get('/users/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUserInfo = createAsyncThunk(
  '/users/user',
  async ({ avatar, name, email, phone, skype, birthday }, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append('avatar', avatar);
      formData.append('name', name);
      formData.append('email', email);
      formData.append('phone', phone || '');
      formData.append('skype', skype || '');
      formData.append('birthday', dateRegex.test(birthday) ? birthday : '');

      const response = await instance.patch(`/users/user`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      Notify.success(`${response.data.user.name} profile was updated`);
      return response.data;
    } catch (e) {
      Notify.failure(`Something was wronge`);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const forgotPassword = createAsyncThunk(
  '/users/forgot',
  async (email, thunkAPI) => {
    try {
      const res = await instance.post('/users/forgot', {
        email,
      });
      Notify.success(`Success`);
      return res.data;
    } catch (error) {
      Notify.failure(`Bad request`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const resetPassword = createAsyncThunk(
  '/users/reset-password',
  async ({ accessToken, newpassword }, thunkAPI) => {
    try {
      const res = await instance.post('/users/reset-password', {
        accessToken,
        newpassword,
      });

      Notify.success(`Success`);
      return res.data;
    } catch (error) {
      Notify.failure(`Bad request`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

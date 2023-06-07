import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { createAsyncThunk } from '@reduxjs/toolkit';
const { REACT_APP_API_URL } = process.env;

const instance = axios.create({
  baseURL: REACT_APP_API_URL,
});

// axios.defaults.baseURL = 'https://githack-goosetrack.onrender.com/api';

const setAuthHeader = token => {
  if (token) {
    return (instance.defaults.headers.common.Authorization = `Bearer ${token}`);
  }
  return (instance.defaults.headers.common.Authorization = '');
};

// interceptors for request
// instance.interceptors.request.use(config => {
//   const accessToken = localStorage.getItem('accessToken');
//   config.headers.common.Authorization = `Bearer ${accessToken}`;
//   return config;
// });

instance.interceptors.response.use(
  response => response,
  async error => {
    try {
      if (error.response.status === 401) {
        const refreshToken = localStorage.getItem('refreshToken');
        const { data } = await instance.post('/users/refresh', {
          refreshToken,
        });
        setAuthHeader(data.accessToken);
        localStorage.setItem('refreshToken', data.refreshToken);

        return instance(error.config);
      }
    } catch (err) {
      return Promise.reject(err);
    }

    return Promise.reject(error);
  }
);

const clearAuthHeader = () => {
  instance.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  '/users/register',
  async ({ name, email, password }, thunkAPI) => {
    try {
      const res = await instance.post('/users/register', {
        name,
        email,
        password,
      });
      setAuthHeader(res.data.token);
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
      const { data: res } = await instance.post('/users/login', {
        email,
        password,
      });
      setAuthHeader(res.accessToken);
      localStorage.setItem('refresh', res.refreshToken);
      Notify.success(`Welcome!!!`);
      console.log(res.data.email);
      return res.data;
    } catch (error) {
      Notify.failure(`Bad request`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('/users/logout', async (_, thunkAPI) => {
  try {
    await instance.post('/users/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  '/users/current',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

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
  async ({ avatarUrl, name, email, phone, skype, birthday }, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append('avatar', avatarUrl);
      formData.append('name', name);
      formData.append('email', email);
      formData.append('phone', phone);
      formData.append('skype', skype);
      formData.append('birthday', birthday);

      for (var pair of formData.entries()) {
        console.log(pair[0] + ', ' + pair[1]);
      }
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;

      if (persistedToken === null) {
        return thunkAPI.rejectWithValue('Unable to fetch user');
      }
      setAuthHeader(persistedToken);

      const response = await instance.patch(`/users/user/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

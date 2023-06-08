import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { createAsyncThunk } from '@reduxjs/toolkit';
// const { REACT_APP_API_URL } = process.env;

export const instance = axios.create({
  baseURL: 'https://githack-goosetrack.onrender.com/api',
});

const setAuthHeader = token => {
  if (token) {
    return (instance.defaults.headers.common.Authorization = `Bearer ${token}`);
  }
  return (instance.defaults.headers.common.Authorization = '');
};

instance.interceptors.response.use(
  response => response,
  async error => {
    try {
      if (error.response.status === 401) {
        const refreshToken = localStorage.getItem('refreshToken');
        console.log(refreshToken);
        const res = await instance.post('/users/refresh', {
          refreshToken,
        });
        setAuthHeader(res.data.accessToken);
        localStorage.setItem('refreshToken', res.data.refreshToken);

        return instance(error.config);
      }
    } catch (error) {
      return Promise.reject(error);
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
      localStorage.setItem('refreshToken', res.data.accessToken);
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
      localStorage.setItem('refreshToken', res.data.accessToken);
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
    await instance.post('/users/logout');
    setAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const currentUser = createAsyncThunk(
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
  async ({ avatar, name, email, phone, skype, birthday }, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append('avatar', avatar);
      formData.append('name', name);
      formData.append('email', email);
      formData.append('phone', phone);
      formData.append('skype', skype);
      formData.append('birthday', birthday);

      for (var pair of formData.entries()) {
        console.log(pair[0] + ', ' + pair[1]);
      }

      const response = await instance.patch(`/users/user/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      Notify.success(`User information was updated`);
      return response.data;
    } catch (e) {
      Notify.failure(`Something was wronge`);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

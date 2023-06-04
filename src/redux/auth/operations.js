import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://githack-goosetrack.onrender.com/api';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  '/users/register',
  async ({ name, email, password }, thunkAPI) => {
    try {
      const res = await axios.post('/users/register', {
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
      const res = await axios.post('/users/login', { email, password });
      setAuthHeader(res.data.token);
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
    await axios.post('/users/logout');
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
      const res = await axios.get('/users/current');
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

      const response = await axios.patch(`/users/user/`, formData, {
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

// export const updateAvatar = createAsyncThunk(
//   '/users/avatars',
//   async (id, { avatarUrl }, thunkAPI) => {
//     try {
//       const formData = new FormData();
//       formData.append('avatar', id, { avatarUrl });
//       const res = await axios.patch('/users/avatars', formData);
//       Notify.success(`Avatar updated successfully!`);
//       return res.data;
//     } catch (error) {
//       Notify.failure(`Failed to update avatar`);
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

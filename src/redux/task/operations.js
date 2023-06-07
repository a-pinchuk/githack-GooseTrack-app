import { instance } from 'redux/auth/operations';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAllTasks = createAsyncThunk(
  'tasks/fetchAllTasks',
  async (_, thunkAPI) => {
    try {
      const response = await instance.get('/tasks');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchTaskById = createAsyncThunk(
  'tasks/fetchTaskById',
  async (id, thunkAPI) => {
    try {
      const response = await instance.get(`/tasks/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addTask = createAsyncThunk(
  'tasks/addTask',
  async ({ title, date, start, end, priority, category }, thunkAPI) => {
    try {
      const response = await instance.post('/tasks', {
        title,
        date,
        start,
        end,
        priority,
        category,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async (id, thunkAPI) => {
    try {
      const response = await instance.delete(`/tasks/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateTask = createAsyncThunk(
  'tasks/updateTask',
  async ({ id, title, date, start, end, priority, category }, thunkAPI) => {
    console.log({ id, title, date, start, end, priority, category });
    try {
      const response = await instance.put(`/tasks/${id}`, {
        title,
        date,
        start,
        end,
        priority,
        category,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const changeTaskCategory = createAsyncThunk(
  'tasks/changeTaskCategory',
  async ({ id, category }, thunkAPI) => {
    try {
      const response = await instance.patch(`/tasks/${id}/category`, {
        category,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAllTasks = createAsyncThunk(
  'tasks/fetchAllTasks',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/tasks');

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
      const response = await axios.get(`/tasks/${id}`);
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
      const response = await axios.post('/tasks', {
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
      const response = await axios.delete(`/tasks/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateTask = createAsyncThunk(
  'tasks/updateTask',
  async ({ id, title, date, start, end, priority, category }, thunkAPI) => {
    try {
      const response = await axios.put(`/tasks/${id}`, {
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
      const response = await axios.patch(`/tasks/${id}/category`, {
        category,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

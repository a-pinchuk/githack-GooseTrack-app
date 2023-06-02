import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTasks = createAsyncThunk(
  'tasks/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/tasks');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addTasks = createAsyncThunk(
  'tasks/addTasks',
  async ({ title, start, end, priority, category }, thunkAPI) => {
    try {
      const response = await axios.post('/tasks', {
        title,
        start,
        end,
        priority,
        category,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteTasks = createAsyncThunk(
  'tasks/deleteTasks',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/tasks/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateTasks = createAsyncThunk(
  'tasks/updateTasks',
  async ({ id, title, start, end, priority, category }, thunkAPI) => {
    try {
      const response = await axios.patch(`/tasks/${id}`, {
        title,
        start,
        end,
        priority,
        category,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

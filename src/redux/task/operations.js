import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTasks = createAsyncThunk(
  'tasks/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/tasks');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchTasksById = createAsyncThunk(
  'tasks/fetchTasksById',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/tasks/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
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
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTasks = createAsyncThunk(
  'tasks/deleteTasks',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/tasks/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateTasks = createAsyncThunk(
  'tasks/updateTasks',
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
export const changeTasksCategory = createAsyncThunk(
  'tasks/changeTasksCategory',
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

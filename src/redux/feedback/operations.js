import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchFeedbacks = createAsyncThunk(
  'feedbacks/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/feedbacks');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addFeedback = createAsyncThunk(
  'feedbacks/addFeedback',
  async ({ rating, description, name, avatarUrl }, thunkAPI) => {
    try {
      const response = await axios.post('/feedbacks', {
        rating,
        description,
        name,
        avatarUrl,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteFeedback = createAsyncThunk(
  'feedbacks/deleteFeedbacks',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/feedbacks/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateFeedback = createAsyncThunk(
  'feedbacks/updateFeedbacks',
  async ({ id, rating, description, name, avatarUrl }, thunkAPI) => {
    try {
      const response = await axios.patch(`/feedbacks/${id}`, {
        rating,
        description,
        name,
        avatarUrl,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAllReviews = createAsyncThunk(
  'reviews/fetchALLReviews',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/reviews');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchReviewById = createAsyncThunk(
  'reviews/fetchReviewById',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/reviews/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addReview = createAsyncThunk(
  'reviews/addReview',
  async ({ rating, comment }, thunkAPI) => {
    try {
      const response = await axios.post('/reviews', {
        rating,
        comment,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteReview = createAsyncThunk(
  'reviews/deleteReview',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/reviews/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateReview = createAsyncThunk(
  'reviews/updateReviews',
  async ({ id, rating, comment }, thunkAPI) => {
    try {
      const response = await axios.put(`/reviews/${id}`, {
        rating,
        comment,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

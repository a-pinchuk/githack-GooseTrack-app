import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAllReviews = createAsyncThunk(
  'reviews/fetchAllReviews',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/reviews');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchUserReviews = createAsyncThunk(
  'reviews/fetchUserReviews',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/reviews/my-reviews');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchUserReviewById = createAsyncThunk(
  'reviews/fetchUserReviewById',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/reviews/my-reviews/${id}`);
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
      const response = await axios.post('/reviews/my-reviews', {
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
      const response = await axios.delete(`/reviews/my-reviews/${id}`);
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
      const response = await axios.put(`/reviews/my-reviews/${id}`, {
        rating,
        comment,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

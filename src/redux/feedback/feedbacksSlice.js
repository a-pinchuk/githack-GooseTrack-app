import { createSlice } from '@reduxjs/toolkit';
import { logOut } from 'redux/auth/operations';
import {
  fetchFeedbacks,
  addFeedback,
  deleteFeedback,
  updateFeedback,
} from './operations.js';

const pending = state => {
  state.isLoading = true;
};

const rejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const feedbacksSlice = createSlice({
  name: 'feedbacks',
  initialState: {
    feedbacks: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchFeedbacks.pending, pending)
      .addCase(addFeedback.pending, pending)
      .addCase(deleteFeedback.pending, pending)
      .addCase(updateFeedback.pending, pending)
      .addCase(fetchFeedbacks.rejected, rejected)
      .addCase(addFeedback.rejected, rejected)
      .addCase(deleteFeedback.rejected, rejected)
      .addCase(updateFeedback.rejected, rejected)
      .addCase(fetchFeedbacks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.feedbacks = action.payload;
      })
      .addCase(addFeedback.fulfilled, (state, action) => {
        state.isLoading = false;
        state.feedbacks.push(action.payload);
      })
      .addCase(deleteFeedback.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.feedbacks.id === action.payload.id;
        state.feedbacks.splice(index, 1);
      })
      .addCase(updateFeedback.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.feedbacks.id === action.payload.id;
        state.feedbacks[index] = action.payload;
      })
      .addCase(logOut.fulfilled, state => {
        state.feedbacks = [];
        state.error = null;
        state.isLoading = false;
      });
  },
});

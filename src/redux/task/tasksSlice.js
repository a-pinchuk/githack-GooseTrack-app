import { createSlice } from '@reduxjs/toolkit';
import { logOut } from '../auth/operations';
import {
  fetchTasks,
  fetchTasksById,
  addTasks,
  deleteTasks,
  updateTasks,
  changeTasksCategory,
} from './operations.js';

const pending = state => {
  state.isLoading = true;
};

const rejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchTasks.pending, pending)
      .addCase(fetchTasksById.pending, pending)
      .addCase(addTasks.pending, pending)
      .addCase(deleteTasks.pending, pending)
      .addCase(updateTasks.pending, pending)
      .addCase(changeTasksCategory.pending, pending)
      .addCase(fetchTasks.rejected, rejected)
      .addCase(fetchTasksById.rejected, rejected)
      .addCase(addTasks.rejected, rejected)
      .addCase(deleteTasks.rejected, rejected)
      .addCase(updateTasks.rejected, rejected)
      .addCase(changeTasksCategory.rejected, rejected)
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.tasks = action.payload;
      })
      .addCase(fetchTasksById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.tasks = action.payload;
      })
      .addCase(addTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.tasks.data.push(action.payload);
      })
      .addCase(deleteTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.tasks.id === action.payload.id;
        state.tasks.data.splice(index, 1);
      })
      .addCase(updateTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.tasks.id === action.payload.id;
        state.tasks[index] = action.payload;
      })
      .addCase(logOut.fulfilled, state => {
        state.tasks = [];
        state.error = null;
        state.isLoading = false;
      })
      .addCase(changeTasksCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.tasks.id === action.payload.id;
        state.tasks[index] = action.payload;
      });
  },
});

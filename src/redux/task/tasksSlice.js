import { createSlice } from '@reduxjs/toolkit';
import { logOut } from '../auth/operations';
import {
  fetchAllTasks,
  fetchTaskById,
  addTask,
  deleteTask,
  updateTask,
  changeTaskCategory,
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
      .addCase(fetchAllTasks.pending, pending)
      .addCase(fetchTaskById.pending, pending)
      .addCase(addTask.pending, pending)
      .addCase(deleteTask.pending, pending)
      .addCase(updateTask.pending, pending)
      .addCase(changeTaskCategory.pending, pending)
      .addCase(fetchAllTasks.rejected, rejected)
      .addCase(fetchTaskById.rejected, rejected)
      .addCase(addTask.rejected, rejected)
      .addCase(deleteTask.rejected, rejected)
      .addCase(updateTask.rejected, rejected)
      .addCase(changeTaskCategory.rejected, rejected)
      .addCase(fetchAllTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.tasks = action.payload.data;
      })
      .addCase(fetchTaskById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.tasks = action.payload;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.tasks.data.push(action.payload);
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.tasks.id === action.payload.id;
        state.tasks.data.splice(index, 1);
      })
      .addCase(updateTask.fulfilled, (state, action) => {
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
      .addCase(changeTaskCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.tasks.id === action.payload.id;
        state.tasks[index] = action.payload;
      });
  },
});

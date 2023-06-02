import { createSlice } from '@reduxjs/toolkit';
import { logOut } from 'redux/auth/operations';
import { fetchTasks, addTask, deleteTask, updateTask } from './operations.js';

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
      .addCase(addTask.pending, pending)
      .addCase(deleteTask.pending, pending)
      .addCase(updateTask.pending, pending)
      .addCase(fetchTasks.rejected, rejected)
      .addCase(addTask.rejected, rejected)
      .addCase(deleteTask.rejected, rejected)
      .addCase(updateTask.rejected, rejected)
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.tasks = action.payload;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.tasks.push(action.payload);
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.tasks.findIndex(
          task => task.id === action.payload.id
        );
        state.tasks.splice(index, 1);
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.tasks.findIndex(
          task => task.id === action.payload.id
        );
        state.tasks[index] = action.payload;
      })
      .addCase(logOut.fulfilled, state => {
        state.tasks = [];
        state.error = null;
        state.isLoading = false;
      });
  },
});

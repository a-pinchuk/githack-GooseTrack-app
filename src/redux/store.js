import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import { persistedAuthSlice } from '../redux/auth/authSlice';
import { persistedDateSlice } from './date/dateSlice';
import { tasksSlice } from './task/tasksSlice';
import { feedbacksSlice } from './feedback/feedbacksSlice';

export const store = configureStore({
  reducer: {
    auth: persistedAuthSlice,
    date: persistedDateSlice,
    tasks: tasksSlice.reducer,
    feedbacks: feedbacksSlice.reducer,
  },

  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);

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
import { tasksSlice } from './task/tasksSlice';
import { reviewsSlice } from './reviews/reviewsSlice';

export const store = configureStore({
  reducer: {
    auth: persistedAuthSlice,
    tasks: tasksSlice.reducer,
    reviews: reviewsSlice.reducer,
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

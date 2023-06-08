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
import { persistedAuthReducer } from '../redux/auth/authSlice';
import { tasksSlice } from './task/tasksSlice';
import { reviewsSlice } from './reviews/reviewsSlice';
import { sidebarReducer } from './sidebar/sidebarSlice';

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    tasks: tasksSlice.reducer,
    reviews: reviewsSlice.reducer,
    sidebar: sidebarReducer,
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

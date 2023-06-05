import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const dateSlice = createSlice({
  name: 'date',
  initialState: {
    currentDate: new Date().toISOString(),
  },
  reducers: {
    setCurrentDate: (state, action) => {
      state.currentDate = action.payload;
    },
    setPreviousDate: state => {
      const currentDate = new Date(state.currentDate);
      currentDate.setDate(currentDate.getDate() - 1);
      state.currentDate = currentDate.toISOString();
    },
    setNextDate: state => {
      const currentDate = new Date(state.currentDate);
      currentDate.setDate(currentDate.getDate() + 1);
      state.currentDate = currentDate.toISOString();
    },
  },
});
export const { setCurrentDate, setPreviousDate, setNextDate } =
  dateSlice.actions;

const persistConfig = {
  key: 'date',
  storage,
};

export const persistedDateSlice = persistReducer(
  persistConfig,
  dateSlice.reducer
);

import { configureStore } from '@reduxjs/toolkit';
import placeSlice from './features/placeSlice';
import counterSlice from './features/counterSlice';

export const store = configureStore({
  reducer: {
    placeSlice,
    counterSlice,
  },
});

import { configureStore } from '@reduxjs/toolkit';
import placeSlice from './features/placeSlice';

export const store = configureStore({
  reducer: {
    placeSlice,
  },
});

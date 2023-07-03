import { configureStore } from '@reduxjs/toolkit';
import placeSlice from './features/placeSlice';
import { cityDatatSlice } from './features/cityDataSlice';

export const store = configureStore({
  reducer: {
    placeSlice,
    cityDatatSlice,
  },
});

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cityData: [{}],
};

export const cityDatatSlice = createSlice({
  name: 'cityData',
  initialState,
  reducers: {
    addData: (state, actions) => {
      state.cityData = actions.payload.city;
    },
  },
});

export const { addData } = cityDatatSlice.actions;
export default cityDatatSlice.reducer;

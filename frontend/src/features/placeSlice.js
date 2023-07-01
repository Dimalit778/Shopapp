import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  place: '',
};

const placeSlice = createSlice({
  name: 'place',
  initialState,
  reducers: {
    customPlace: (state, actions) => {
      state.place = actions.payload.placeName;
    },
  },
});
export const { customPlace } = placeSlice.actions;
export default placeSlice.reducer;

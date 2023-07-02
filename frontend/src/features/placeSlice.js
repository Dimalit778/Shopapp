import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  place: '',
};

const placeSlice = createSlice({
  name: 'place',
  initialState,
  reducers: {
    newSearch: (state, actions) => {
      state.place = actions.payload.placeName;
    },
  },
});
export const { newSearch } = placeSlice.actions;
export default placeSlice.reducer;

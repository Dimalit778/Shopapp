import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  counter: 5,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    add1: (state, actions) => {
      state.counter++;
    },
    resetCounter: (state, actions) => {
      state.counter = 0;
    },
  },
});
export const { add1, resetCounter } = counterSlice.actions;
export default counterSlice.reducer;

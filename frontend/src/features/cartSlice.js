import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload.item];
    },
  },
});

export const { addToCart } = cartSlice.actions;

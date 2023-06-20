import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  date: [],
  options: {
    adult: 0,
    children: 0,
    room: 0,
  },
};

// const hotelSlice = createSlice({
//   name: 'hotels',
//   initialState,
//   reducers: {
//     search : (state)=>{
//      name : state.name,
//      date : state.date,
//     },
   
//   },
// });

export default hotelSlice.reducer;
clearSearch : state = initialState,
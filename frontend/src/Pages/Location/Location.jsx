import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add1, resetCounter } from '../../features/counterSlice';

const Location = () => {
  const dispath = useDispatch();

  const place = useSelector((state) => state.placeSlice.place);

  return (
    <div>
      <h1>this ur location</h1>
      <h2>{place}</h2>
    </div>
  );
};

export default Location;

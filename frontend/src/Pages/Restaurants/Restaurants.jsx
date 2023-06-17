import React, { useEffect, useState } from 'react';
import { getPlacesData } from '../../DataApi/Restaurats';

const Restaurants = () => {
  const [place, setPlaces] = useState([]);

  useEffect(() => {
    getPlacesData().then((data) => {
      console.log(data);
      setPlaces(data);
    });
  }, []);
  return (
    <div>
      <h1>res</h1>
    </div>
  );
};

export default Restaurants;

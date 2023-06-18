import React, { useEffect, useState } from 'react';
import { getPlacesData } from '../../DataApi/Restaurats';
import Map from '../../components/Map/Map';

const Restaurants = () => {
  const [place, setPlaces] = useState([]);

  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    // console.log(coordinates);
    // console.log(bounds);
    getPlacesData().then((data) => {
      setPlaces(data);
    });
  }, [coordinates, bounds]);
  return (
    <>
      {/* <SearchForm /> */}
      <div className="d-flex justify-content-center">
        <div>
          <h1>Restaurant</h1>
        </div>
      </div>
      <div className=" d-flex justify-content-center">
        <Map
          setCoordinates={setCoordinates}
          setBounds={setBounds}
          coordinates={coordinates}
        />
      </div>
    </>
  );
};

export default Restaurants;

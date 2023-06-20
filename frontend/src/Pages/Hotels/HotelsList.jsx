import React, { useContext, useEffect, useState } from 'react';
import { SearchContext } from '../../context/searchContext';
import { getLocationsData } from '../../DataApi/Locations';
import { Helmet } from 'react-helmet-async';
import LoadingBox from '../../hooks/LoadingBox';
import MessageBox from '../../hooks/MessageBox';
import { Link } from 'react-router-dom';
import Rating from '../../hooks/Rating';

const HotelsList = () => {
  const { city, dates, options } = useContext(SearchContext);
  const [locations, setLocations] = useState('');

  useEffect(() => {
    getLocationsData(city).then((data) => {
      setLocations(data);
    });
  }, [city]);
  console.log(locations);

  return (
    <div className="Card-container">
      <Helmet>
        <title>Hotels</title>
      </Helmet>
      <ul className="watchCard  d-flex flex-wrap gap-5  ">
        {locations.map((location) => (
          <li
            className="card card-body justify-content-between"
            key={locations.result_object.location_id}
          >
            <p>location = {locations.result_object.location_id}</p>
            <p>name = {locations.result_object.name}</p>
            <div className="d-flex justify-content-between ">
              <button className="btn-read">Read more</button>
              <button className="btn-cart">Add to cart</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HotelsList;

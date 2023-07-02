import React, { useEffect, useState } from 'react';
import './location.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  faBed,
  faCarSide,
  faPlaneDeparture,
  faUtensils,
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { getCityData } from '../../DataApi/Locations';

const Location = () => {
  const Navigate = useNavigate();
  const dispath = useDispatch();
  const place = useSelector((state) => state.placeSlice.place);
  const [locationData, setLocationData] = useState([]);
  const [cityData, setCityData] = useState('[]');

  useEffect(() => {
    if (!place) Navigate('/');
    getCityData(place).then((data) => {
      setCityData(data);
    });

    console.log(cityData);
    // setLocationData(cityName.data[0].name);
  }, []);

  return (
    <div className="container">
      <div className="row text-center">
        <h1>Welcome to {place}</h1>
        <div className="icons ">
          <button>
            <FontAwesomeIcon icon={faBed} className="icon" />
          </button>
          <button>
            <FontAwesomeIcon icon={faPlaneDeparture} className="icon" />
          </button>
          <button>
            <FontAwesomeIcon icon={faCarSide} className="icon" />
          </button>
          <button>
            <FontAwesomeIcon icon={faUtensils} className="icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Location;

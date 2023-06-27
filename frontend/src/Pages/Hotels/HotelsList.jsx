import React, { useContext, useEffect, useState } from 'react';
import { SearchContext } from '../../context/searchContext';

import { Helmet } from 'react-helmet-async';

import { Link } from 'react-router-dom';
import HotelCard from './HotelCard';
import { getCityId } from '../../components/BookingApi/SearchCity';

const HotelsList = () => {
  const { city, dates, options } = useContext(SearchContext);
  const [cityData, setCityData] = useState([]);
  const [loading, setLoading] = useState(false); // const { startDate, endDate } = dates;
  console.log(city);
  // const { adult, children, room } = options;

  // const [location, setLocation] = useState('');
  // const [checkin, setCheckin] = useState('');
  // const [numOfAdults, setNumOfAdults] = useState('');
  // const [numOfChildren, setNumOfChildren] = useState('');
  // const [numOfNights, setNumOfNights] = useState();
  // const [numOfRooms, setNumOfRooms] = useState();
  // const [hotelDestails, setHotelDetails] = useState({});

  useEffect(() => {
    setLoading(true);
    getCityId(city).then((data) => {
      setCityData(data);
      setInterval(() => {
        setLoading(false);
      }, 1000);
    });
  }, [city]);
  console.log(cityData);
  return (
    <>
      <div className="Card-container">
        <Helmet>
          <title>Hotels</title>
        </Helmet>
        <h1>hotel</h1>
        {/* <HotelCard /> */}
      </div>
    </>
  );
};

export default HotelsList;

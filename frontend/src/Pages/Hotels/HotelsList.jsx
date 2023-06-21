import React, { useContext, useEffect, useState } from 'react';
import { SearchContext } from '../../context/searchContext';

import { Helmet } from 'react-helmet-async';
import LoadingBox from '../../hooks/LoadingBox';
import MessageBox from '../../hooks/MessageBox';
import { Link } from 'react-router-dom';
import Rating from '../../hooks/Rating';
import {
  getCheckInDay,
  getLocationId,
  getNumOfAdults,
  getNumOfChildren,
  getNumOfNights,
  getNumOfRooms,
} from '../../hooks/HotelDetails';
import { getLocationsData } from '../../DataApi/Locations';
import { getHotels } from '../../DataApi/Hotels';

const HotelsList = () => {
  const { city, dates, options } = useContext(SearchContext);
  const { startDate, endDate } = dates[0];

  const { adult, children, room } = options;

  const [location, setLocation] = useState('');
  const [checkin, setCheckin] = useState('');
  const [numOfAdults, setNumOfAdults] = useState('');
  const [numOfChildren, setNumOfChildren] = useState('');
  const [numOfNights, setNumOfNights] = useState();
  const [numOfRooms, setNumOfRooms] = useState();
  const [hotelDestails, setHotelDetails] = useState({});

  useEffect(() => {
    getLocationsData(city).then((data) => {
      setLocation(data[0].result_object.location_id);
      const check = getCheckInDay(startDate);
      setCheckin(check);
      setNumOfAdults(getNumOfAdults(adult));
      setNumOfChildren(getNumOfChildren(children));
      setNumOfNights(getNumOfNights(dates));
      setNumOfRooms(getNumOfRooms(room));
    });
  }, [city, startDate, adult, children, dates, room]);

  if (location) {
    const hotel = getHotels(
      location,
      checkin,
      numOfAdults,
      numOfChildren,
      numOfRooms
    );
    setHotelDetails(hotel);
  }
  console.log(hotelDestails);

  // console.log(hotelDestails);
  // console.log(location);
  // console.log(checkin);
  // console.log(numOfAdults);
  // console.log(numOfChildren);
  // console.log(numOfNights);
  // console.log(numOfRooms);
  return (
    <>
      <div className="Card-container">
        <Helmet>
          <title>Hotels</title>
          {location}
          {numOfAdults}
          {/* <p>location</p> */}
          {/* <p>{checkin}</p>
          <p>{numOfAdults}</p>
          <p>{numOfChildren}</p>
          <p>{numOfNights}</p>
          <p>{numOfRooms}</p> */}
        </Helmet>
      </div>
    </>
  );
};

export default HotelsList;

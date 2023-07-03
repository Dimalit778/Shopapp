import React, { useEffect, useState } from 'react';

const HotelCard = ({ loactionId, checkInDay, adult, child, nights, room }) => {
  const [hotel, setHotel] = useState([]);
  console.log('id');
  console.log(loactionId);

  useEffect(() => {
    // getHotels(loactionId, checkInDay, adult, child, nights, room).then(
    //   (data) => {
    //     setHotel(data);
    //   }
    // );
  }, []);
  //   console.log(hotel);

  return (
    <div className="card ">
      <h1>card hotel</h1>
      <p>{loactionId}</p>
      <p>{checkInDay}</p>
      <p>{adult}</p>
      <p>{child}</p>
      <p>{nights}</p>
      <p>{room}</p>
    </div>
  );
};

export default HotelCard;

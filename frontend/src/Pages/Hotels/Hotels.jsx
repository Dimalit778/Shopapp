import React, { useContext, useEffect, useState } from 'react';
import { getLocationsData } from '../../DataApi/Locations';
import { SearchContext } from '../../context/searchContext';
import HotelCard from './HotelCard';
import {
  getCheckInDay,
  getNumOfAdults,
  getNumOfChildren,
  getNumOfNights,
  getNumOfRooms,
} from '../../hooks/HotelDetails';

const Hotels = () => {
  const [openDate, setOpenDate] = useState(false);
  // const [dates, setDates] = useState([
  //   {
  //     startDate: new Date(),
  //     endDate: new Date(),
  //     key: 'selection',
  //   },
  // ]);

  // !! OPTIONS STATE // */
  // const [openOptions, setOpenOptions] = useState(false);
  // const [options, setOptions] = useState({
  //   adult: 1,
  //   children: 0,
  //   room: 1,
  // });

  const Navigate = useNavigate();
  const { user } = useContext(AuthContext);
  // const handleOption = (name, operation) => {
  //   setOptions((prev) => {
  //     return {
  //       ...prev,
  //       [name]: operation === 'i' ? options[name] + 1 : options[name] - 1,
  //     };
  //   });
  // };
  return <div className="hotels w-100 h-100"></div>;
};

export default Hotels;

// {mainData?.length > 0 ? (
//   <>
//     {mainData?.map((data, i) => (
//       <HotelCard
//         key={i}
//         locationId={data?.result_object?.location_id}
//         checkInDay={checkin}
//         adult={numOfAdults}
//         child={numOfChildren}
//         nights={numOfNights}
//         room={numOfRooms}
//       />
//     ))}
//   </>
// ) : (
//   <>
//     <div>
//       <h1>not found</h1>
//     </div>
//   </>
// )}

// const { city, dates, options } = useContext(SearchContext);
//   const [mainData, setMainData] = useState([]);
//   const [isLoading, setIsLodaing] = useState(false);

//   const { startDate, endDate } = dates[0];

//   const { adult, children, room } = options;

//   const [location, setLocation] = useState('');
//   const [checkin, setCheckin] = useState('');
//   const [numOfAdults, setNumOfAdults] = useState('');
//   const [numOfChildren, setNumOfChildren] = useState('');
//   const [numOfNights, setNumOfNights] = useState();
//   const [numOfRooms, setNumOfRooms] = useState();
//   const [hotelDestails, setHotelDetails] = useState({});

//   useEffect(() => {
//     setIsLodaing(true);
//     getLocationsData(city).then((data) => {
//       setMainData(data);
//       setInterval(() => {
//         setIsLodaing(false);
//       }, 1000);
//       setCheckin(getCheckInDay(startDate));
//       setNumOfAdults(getNumOfAdults(adult));
//       setNumOfChildren(getNumOfChildren(children));
//       setNumOfNights(getNumOfNights(dates));
//       setNumOfRooms(getNumOfRooms(room));
//     });
//   }, []);

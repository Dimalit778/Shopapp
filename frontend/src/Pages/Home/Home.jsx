import React, { useEffect, useState } from 'react';
import './home.css';
import { newSearch } from '../../features/placeSlice';
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
import { useDispatch, useSelector } from 'react-redux';
import { getLocation } from '../../TripadvisorApi/Locations';
import { addData } from '../../features/cityDataSlice';

// import { DateRange } from 'react-date-range';

// import { format } from 'date-fns';

// !! -----> HOME PAGE <------ // */
const Home = () => {
  const [city, setCity] = useState('');

  const place = useSelector((state) => state.placeSlice.place);
  const cityId = useSelector((state) => state.cityDataSlice.cityData);
  const dispath = useDispatch();
  const Navigate = useNavigate();

  const handleSearch = () => {
    // Navigate('/location');
    getLocation(city).then((data) => {
      dispath(addData(data));
    });
  };

  // useEffect(() => {}, [city]);
  // console.log(cityDetails);

  return (
    <div className="homePage text-center p-2 ">
      <h1 className="animate-charcter"> TRAVEL</h1>

      <div className="container text-center pt-5">
        <h2>Find Youre Dream Location</h2>
        <div className="row flex-column search gap-3 pt-3">
          <div className="icons">
            <FontAwesomeIcon icon={faBed} className="icon" />
            <FontAwesomeIcon icon={faPlaneDeparture} className="icon" />
            <FontAwesomeIcon icon={faCarSide} className="icon" />
            <FontAwesomeIcon icon={faUtensils} className="icon" />
          </div>

          <div className="text-center ">
            <input
              type="text"
              placeholder="Where are you going?"
              value={city}
              className="input text-center col-sm-4 col-lg-3 "
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="searchItem">
            <button className="searchBtn " onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="earth mx-auto"></div>
    </div>
  );
};

export default Home;

// // {
// //   /* // !! SEARCH DATE // */
// // }
// // <div className="searchItem">
// //   <FontAwesomeIcon icon={faCalendarDays} className="icon" />
// //   <span
// //     onClick={() => setOpenDate(!openDate)}
// //     className="searchText"
// //   >{`${format(dates[0].startDate, 'MM/dd/yyyy')} to ${format(
// //     dates[0].endDate,
// //     'MM/dd/yyyy'
// //   )}`}</span>
// //   {openDate && (
// //     <DateRange
// //       editableDateInputs={true}
// //       onChange={(item) => setDates([item.selection])}
// //       moveRangeOnFirstSelection={false}
// //       ranges={dates}
// //       className="date"
// //       minDate={new Date()}
// //     />
// //   )}
// // </div>;
// // {
// /* // !! SEARCH OPTIONS // */
// // }
// // <div className="searchItem">
// //   <FontAwesomeIcon icon={faPerson} className="icon" />
// //   <span
// //     onClick={() => setOpenOptions(!openOptions)}
// //     className="searchText"
// //   >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
// //   {openOptions && (
// //     <div className="options">
// //       <div className="optionItem">
// //         <span className="optionText">Adult</span>
// //         <div className="optionCounter">
// //           <button
// //             disabled={options.adult <= 1}
// //             className="optionCounterButton"
// //             onClick={() => handleOption('adult', 'd')}
// //           >
// //             -
// //           </button>
// //           <span className="optionCounterNumber">
// //             {options.adult}
// //           </span>
// //           <button
// //             className="optionCounterButton"
// //             onClick={() => handleOption('adult', 'i')}
// //           >
// //             +
// //           </button>
// //         </div>
// //       </div>
// //       <div className="optionItem">
// //         <span className="optionText">Children</span>
// //         <div className="optionCounter">
// //           <button
// //             disabled={options.children <= 0}
// //             className="optionCounterButton"
// //             onClick={() => handleOption('children', 'd')}
// //           >
// //             -
// //           </button>
// //           <span className="optionCounterNumber">
// //             {options.children}
// //           </span>
// //           <button
// //             className="optionCounterButton"
// //             onClick={() => handleOption('children', 'i')}
// //           >
// //             +
// //           </button>
// //         </div>
// //       </div>
// //       <div className="optionItem">
// //         <span className="optionText">Room</span>
// //         <div className="optionCounter">
// //           <button
// //             disabled={options.room <= 1}
// //             className="optionCounterButton"
// //             onClick={() => handleOption('room', 'd')}
// //           >
// //             -
// //           </button>
// //           <span className="optionCounterNumber">
// //             {options.room}
// //           </span>
// //           <button
// //             className="optionCounterButton"
// //             onClick={() => handleOption('room', 'i')}
// //           >
// //             +
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   )}
// // </div>

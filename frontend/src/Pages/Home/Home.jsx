import React, { useContext, useEffect, useState } from 'react';
import './home.css';
import cityImg from '../../assets/city.jpg';
import mountImg from '../../assets/mountain.jpg';
import planeImg from '../../assets/windowplane.jpg';
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DateRange } from 'react-date-range';
import { useNavigate } from 'react-router-dom';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';
import { SearchContext } from '../../context/searchContext';
import { AuthContext } from '../../context/AuthContext';
import { getCityId } from '../../components/BookingApi/SearchCity';

// !! -----> HOME PAGE <------ // */
const Home = () => {
  const [city, setCity] = useState('');
  const [openDate, setOpenDate] = useState(false);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  // !! OPTIONS STATE // */
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const Navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === 'i' ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const { dispatch } = useContext(SearchContext);
  const handleSearch = () => {
    dispatch({ type: 'NEW_SEARCH', paylod: { city, dates, options } });

    Navigate('/hotels', { state: { city, dates, options } });
  };

  return (
    <div className="homePage ">
      <div className="container text-center">
        <h2>Find Youre Dream Location</h2>
        <div className="row ">
          <div className="col-sm-1 col-md-4 col">input</div>
          <div className="col-sm-1 col-md-4  col ">Bouutn</div>
          <div className="col-sm-1 col-md-2 col">Bouutn</div>
          <div className="col-sm-1 col-md-2 col">Bouutn</div>
        </div>
      </div>
      <div class="container">
        <div class="row col-12">
          <div class="col-sm-8 col-md-6 col-lg-12  col">col-sm-8</div>
          <div class="col-sm-4 col-md-6 col-lg-12 col">col-sm-4</div>
        </div>
      </div>
    </div>
  );
};

export default Home;

// // <div className="search col-12">
// // {/* // !! SEARCH DATE // */}
// // <div className="searchItem col-sm-12">
// //   <FontAwesomeIcon icon={faBed} className="icon" />
// //   {/* <Autocomplete> */}
// //   <input
// //     type="text"
// //     placeholder="Where are you going?"
// //     className="searchInput"
// //     onChange={(e) => setCity(e.target.value)}
// //   />
// //   {/* </Autocomplete> */}
// // </div>

// // {/* // !! SEARCH BUTTON // */}
// // <div className="searchItem col-sm-12">
// //   <button className="searchBtn" onClick={handleSearch}>
// //     Search
// //   </button>
// // </div>
// // </div>

// {
//   /* <div className="home d-flex justify-content-center ">
// <div className="container d-flex justify-content-center align-items-center">
//   <h1 className="title">Find You're Dream Vacation </h1>

// </div>
// </div> */
// }

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

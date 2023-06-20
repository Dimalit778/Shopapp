import React, { useContext, useEffect, useState } from 'react';
import './home.css';
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
import { getLocationsData } from '../../DataApi/Locations';

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
    <div className="homePage min-vh-100">
      <div className="home d-flex justify-content-center ">
        <div className="container d-flex justify-content-center align-items-center">
          <h1 className="title">Find You're Dream Vacation </h1>

          <div className="search">
            {/* // !! SEARCH DATE // */}
            <div className="searchItem">
              <FontAwesomeIcon icon={faBed} className="icon" />
              {/* <Autocomplete> */}
              <input
                type="text"
                placeholder="Where are you going?"
                className="searchInput"
                onChange={(e) => setCity(e.target.value)}
              />
              {/* </Autocomplete> */}
            </div>
            {/* // !! SEARCH DATE // */}
            <div className="searchItem">
              <FontAwesomeIcon icon={faCalendarDays} className="icon" />
              <span
                onClick={() => setOpenDate(!openDate)}
                className="searchText"
              >{`${format(dates[0].startDate, 'MM/dd/yyyy')} to ${format(
                dates[0].endDate,
                'MM/dd/yyyy'
              )}`}</span>
              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDates([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={dates}
                  className="date"
                  minDate={new Date()}
                />
              )}
            </div>
            {/* // !! SEARCH OPTIONS // */}
            <div className="searchItem">
              <FontAwesomeIcon icon={faPerson} className="icon" />
              <span
                onClick={() => setOpenOptions(!openOptions)}
                className="searchText"
              >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
              {openOptions && (
                <div className="options">
                  <div className="optionItem">
                    <span className="optionText">Adult</span>
                    <div className="optionCounter">
                      <button
                        disabled={options.adult <= 1}
                        className="optionCounterButton"
                        onClick={() => handleOption('adult', 'd')}
                      >
                        -
                      </button>
                      <span className="optionCounterNumber">
                        {options.adult}
                      </span>
                      <button
                        className="optionCounterButton"
                        onClick={() => handleOption('adult', 'i')}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="optionItem">
                    <span className="optionText">Children</span>
                    <div className="optionCounter">
                      <button
                        disabled={options.children <= 0}
                        className="optionCounterButton"
                        onClick={() => handleOption('children', 'd')}
                      >
                        -
                      </button>
                      <span className="optionCounterNumber">
                        {options.children}
                      </span>
                      <button
                        className="optionCounterButton"
                        onClick={() => handleOption('children', 'i')}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="optionItem">
                    <span className="optionText">Room</span>
                    <div className="optionCounter">
                      <button
                        disabled={options.room <= 1}
                        className="optionCounterButton"
                        onClick={() => handleOption('room', 'd')}
                      >
                        -
                      </button>
                      <span className="optionCounterNumber">
                        {options.room}
                      </span>
                      <button
                        className="optionCounterButton"
                        onClick={() => handleOption('room', 'i')}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* // !! SEARCH BUTTON // */}
            <div className="searchItem">
              <button className="searchBtn" onClick={handleSearch}>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className=" d-flex justify-content-center"></div>
    </div>
  );
};

export default Home;

import React, { useContext } from 'react';
import './home.css';
import Map from '../../components/Map/Map';
import SearchForm from '../../components/search/SearchForm';

const Home = () => {
  return (
    <>
      <SearchForm />
      <div className="d-flex justify-content-center">
        <div>
          <h1>Home</h1>
        </div>
      </div>
      <div className=" d-flex justify-content-center">
        <Map />
      </div>
    </>
  );
};

export default Home;

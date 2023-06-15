import React, { useEffect, useReducer, useState } from 'react';
import './home.css';
import axios from 'axios';
import Navside from '../../components/navside/Navside';

const options = {
  method: 'GET',
  url: 'https://asos2.p.rapidapi.com/products/v2/list',
  params: {
    store: 'US',
    offset: '0',
    categoryId: '4209',
    limit: '48',
    country: 'US',
    sort: 'freshness',
    currency: 'USD',
    sizeSchema: 'US',
    lang: 'en-US',
  },
  headers: {
    'X-RapidAPI-Key': '13f9c247d6msh3922c0e5dad4425p1829c5jsnadc41a352f80',
    'X-RapidAPI-Host': 'asos2.p.rapidapi.com',
  },
};

const Home = () => {
  useEffect(() => {
    axios
      .request(options)
      .then(function (respone) {
        console.log(respone.data.products);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="container-fluid min-vh-100">
      <div className="row ">
        <div className="col-md-3 ">
          <Navside />
        </div>
        <div className="col-md-9"></div>
      </div>
    </div>
  );
};

export default Home;

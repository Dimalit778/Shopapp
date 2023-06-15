import React, { useEffect } from 'react';
import axios from 'axios';

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

const Contact = () => {
  useEffect(() => {
    axios
      .request(options)
      .then(function (respone) {
        console.log(respone.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return <div className="">Contact</div>;
};

export default Contact;

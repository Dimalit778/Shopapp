import { useEffect, useReducer } from 'react';
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://asos2.p.rapidapi.com/products/v3/detail',
  params: {
    id: '202963669',
    lang: 'en-US',
    store: 'US',
    sizeSchema: 'US',
    currency: 'USD',
  },
  headers: {
    'X-RapidAPI-Key': '13f9c247d6msh3922c0e5dad4425p1829c5jsnadc41a352f80',
    'X-RapidAPI-Host': 'asos2.p.rapidapi.com',
  },
};
const About = () => {
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

  return (
    <div className="">
      <h1>aboutttt</h1>
    </div>
  );
};

export default About;

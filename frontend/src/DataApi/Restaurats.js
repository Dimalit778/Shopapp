import axios from 'axios';
const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng';

const options = {
  params: {
    latitude: '12.91285',
    longitude: '100.87808',
  },
  headers: {
    'X-RapidAPI-Key': '13f9c247d6msh3922c0e5dad4425p1829c5jsnadc41a352f80',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
  },
};
export const getPlacesData = async () => {
  try {
    const {
      data: { data },
    } = await axios(URL, options);
    return data;
  } catch (err) {
    console.log();
  }
};

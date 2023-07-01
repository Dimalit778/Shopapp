import axios from 'axios';
const URL = 'https://travel-advisor.p.rapidapi.com/locations/search';
export const getLocationsData = async (locationId) => {
  try {
    const {
      data: { data },
    } = await axios(URL, {
      params: {
        query: locationId,
      },
      headers: {
        'X-RapidAPI-Key': '13f9c247d6msh3922c0e5dad4425p1829c5jsnadc41a352f80',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
      },
    });

    return data;
  } catch (err) {
    console.log(err);
  }
};

import axios from 'axios';

const URL = 'https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchLocation';

export const getHotels = async (location) => {
  try {
    const {
      data: { data },
    } = await axios(URL, {
      params: {
        query: location,
      },
      headers: {
        'X-RapidAPI-Key': '13f9c247d6msh3922c0e5dad4425p1829c5jsnadc41a352f80',
        'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com',
      },
    });

    return data;
  } catch (err) {
    console.log(err);
  }
};

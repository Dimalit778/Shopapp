import axios from 'axios';
const URL = 'https://booking-com.p.rapidapi.com/v1/hotels/locations';

export const getCityId = async (city) => {
  try {
    const data = await axios(URL, {
      params: {
        name: city,
        locale: 'en-gb',
      },
      headers: {
        'X-RapidAPI-Key': '13f9c247d6msh3922c0e5dad4425p1829c5jsnadc41a352f80',
        'X-RapidAPI-Host': 'booking-com.p.rapidapi.com',
      },
    });

    return data;
  } catch (err) {
    console.log(err);
  }
};

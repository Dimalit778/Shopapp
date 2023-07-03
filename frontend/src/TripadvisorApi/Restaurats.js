import axios from 'axios';
const URL =
  'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

export const getPlacesData = async (sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios(URL, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        'X-RapidAPI-Key': '13f9c247d6msh3922c0e5dad4425p1829c5jsnadc41a352f80',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
      },
    });

    return data;
  } catch (err) {
    console.log();
  }
};

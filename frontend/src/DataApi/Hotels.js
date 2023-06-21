import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/hotels/get-details';

export const getHotels = async (
  locationId,
  checkinDate,
  numOfAdults,
  numOfChildren,
  numOfNights,
  numOfRooms
) => {
  try {
    const {
      data: { data },
    } = await axios(URL, {
      params: {
        location_id: locationId,
        checkin: checkinDate,
        adults: numOfAdults,
        child_rm_ages: numOfChildren,
        currency: 'USD',
        nights: numOfNights,
        rooms: numOfRooms,
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

import { getLocationsData } from '../DataApi/Locations';

// !! ====== GET LOCATION ID ====== //
export const getLocationId = (city) => {
  getLocationsData(city).then((data) => {
    const loactionId = data[0].result_object.location_id;

    return loactionId;
  });
};

// !! ====== GET CHECK IN DAY ====== //
export const getCheckInDay = (date) => {
  const event = new Date(date);
  const newDate = JSON.stringify(event);
  const checkIn = newDate.slice(1, 11);
  return checkIn;
};

// !! ====== GET NUM OF ADULTS ====== //
export const getNumOfAdults = (adult) => {
  const numOfAdults = adult;
  return numOfAdults;
};

// !! ====== GET NUM OF CHILDREN ====== //
export const getNumOfChildren = (children) => {
  const numOfChildren = children;
  return numOfChildren;
};

// !! ====== GET DAYS FROM THE DATES ====== //
export const getNumOfNights = (dates) => {
  const { startDate, endDate } = dates[0];
  const days = Math.floor(
    (Date.parse(endDate) - Date.parse(startDate)) / 86400000
  );
  return days;
};
// !! ====== GET NUM OF ROOMS ====== //
export const getNumOfRooms = (room) => {
  const numOfRooms = room;
  return numOfRooms;
};

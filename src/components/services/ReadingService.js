import axios from "axios";

// Create services for other components in this way.

const getReadingByIdService = (readingId) => {
  console.log(`getReadingIdService`);
  return axios.get(`/reading/getReadingbyId/${readingId}`);
};
const getAllReadingService = () => {
  console.log(`getReadingByIdService`);
  return axios.get(`/reading/getAllReading`);
};

export { getReadingByIdService, getAllReadingService };

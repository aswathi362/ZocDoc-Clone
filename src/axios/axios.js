import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getVisitReasons = () => {
  return axiosInstance.get('visitReasons');
};

export const getDoctorCities = () => {
  return axiosInstance.get('doctorCities');
};

export const getSpecialitySuggestions = () => {
  return axiosInstance.get('specialitySuggestions');
};

export default axiosInstance;
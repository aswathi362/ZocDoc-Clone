import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://c3f7-202-83-25-24.ngrok-free.app/',
  headers: {
    'Content-Type': 'application/json',
    'ngrok-skip-browser-warning':'true'
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

export const getInsuranceSuggestions = () => {
  return axiosInstance.get('insuranceSuggestions');
};

export const getBrowseSpecialities = () => {
  return axiosInstance.get('browseSpecialities');
};

export default axiosInstance;
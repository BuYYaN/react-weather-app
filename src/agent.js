const { default: axios } = require("axios");

const API_URL_ROOT =
  "https://react-weather-app-server.herokuapp.com/api/weather";

axios.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);

const request = {
  get: (url) => axios.get(`${API_URL_ROOT}${url}`),
};

const Weather = {
  get: (lon, lat) =>
    request.get(
      `/info?lat=${lat}&lon=${lon}&apiKey=${process.env.REACT_APP_WEATHER_API_KEY}`
    ),
  history: (limit) => request.get(`/history?limit=${limit}`),
};

export default Weather;

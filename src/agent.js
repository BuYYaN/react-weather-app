const { default: axios } = require("axios");

axios.defaults.baseURL =
  "https://react-weather-app-server.herokuapp.com/api/weather";

const setApiKey = (config) => {
  config.params.apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  return config;
};

axios.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);

axios.interceptors.request.use(
  (config) => setApiKey(config),
  (error) => Promise.reject(error)
);

const Weather = {
  get: (coords) => axios.get("/info", { params: { ...coords } }),
  history: (limit) => axios.get("/history", { params: { limit } }),
};

export default Weather;

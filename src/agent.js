const { default: axios } = require("axios");

const API_URL_ROOT = "http://localhost:4000/api/weather";

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
      `/info?lat=${lat}&lon=${lon}&apiKey=2782634eed1c90284914691197d5acc4`
    ),
  history: (limit) => request.get(`/history?limit=${limit}`),
};

export default Weather;

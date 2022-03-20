const { default: axios } = require("axios");
require("./axios/axios");

const Weather = {
  get: (coords) => axios.get("/info", { params: { ...coords } }),
  history: (limit) => axios.get("/history", { params: { limit } }),
};

export default Weather;

const { default: axios } = require("axios");
const {
  handleRequest,
  handleResponse,
  handleError,
} = require("./interceptors");

const API_URL = "https://react-weather-app-server.herokuapp.com/api/weather";

axios.defaults.baseURL = API_URL;

axios.interceptors.request.use(handleRequest, handleError);
axios.interceptors.response.use(handleResponse, handleError);

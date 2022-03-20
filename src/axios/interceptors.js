const handleRequest = (config) => {
  config.params.apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  return config;
};

const handleResponse = (response) => response.data;

const handleError = (error) => Promise.reject(error);

export { handleRequest, handleResponse, handleError };

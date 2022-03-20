import { CLEAR_WEATHER_DATA, MAP_CLICKED, MAP_LOADED } from "../actionTypes";

const initialState = {
  coords: null,
  weatherData: null,
};

const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case MAP_LOADED:
      return {
        ...state,
        coords: action.payload,
      };
    case MAP_CLICKED:
      return {
        ...state,
        coords: {
          lat: action.payload.data.lat - 0 || action.payload.lat,
          lng: action.payload.data.lon - 0 || action.payload.lng,
        },
        weatherData: action.payload.data || state.weatherData,
      };
    case CLEAR_WEATHER_DATA:
      return {
        ...state,
        weatherData: null,
      };
    default:
      return state;
  }
};

export default mapReducer;
